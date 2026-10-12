from langchain_google_genai import ChatGoogleGenerativeAI

from app.config import GEMINI_API_KEY
from app.services.vector_service import search_chunks

llm = ChatGoogleGenerativeAI(
    model="gemini-3.1-flash-lite",
    google_api_key=GEMINI_API_KEY,
    temperature=0.2
)


def _extract_text(content):
    """
    ChatGroq always returns response.content as a plain string.
    ChatGoogleGenerativeAI (Gemini) can instead return a list of content
    blocks, e.g. [{"type": "text", "text": "...", "extras": {...}}].
    Downstream code (and MongoDB's String schema field) expects a plain
    string, so normalize both shapes here.
    """
    if isinstance(content, str):
        return content

    if isinstance(content, list):
        parts = []
        for block in content:
            if isinstance(block, str):
                parts.append(block)
            elif isinstance(block, dict) and isinstance(block.get("text"), str):
                parts.append(block["text"])
        return "".join(parts)

    return str(content)


def ask_question(question, user_id, conversation_id):

    chunks = search_chunks(question, user_id, conversation_id)

    if not chunks:
        return {
            "answer": "Upload a PDF to this conversation before asking questions about it.",
            "sources": [],
        }

    # Tag each chunk with a numbered [Source N] marker and build a
    # deduplicated list of the underlying (filename, page) pairs, so the
    # model can cite "[Source 2]" inline and the frontend can turn that into
    # a real "filename.pdf, page 3" reference instead of just a number.
    sources = []
    source_index_by_key = {}
    context_blocks = []

    for chunk in chunks:
        key = (chunk["filename"], chunk["page"])
        if key not in source_index_by_key:
            source_index_by_key[key] = len(sources) + 1
            sources.append({"filename": chunk["filename"], "page": chunk["page"]})

        source_number = source_index_by_key[key]
        context_blocks.append(
            f"[Source {source_number} — {chunk['filename']}, page {chunk['page']}]\n{chunk['text']}"
        )

    context_text = "\n\n".join(context_blocks)

    if len(sources) > 1:
        citation_instruction = """Each context block is labeled with a source number, like
[Source 1]. After any sentence or claim that relies on a specific source,
cite it inline in the same [Source N] format. If information from multiple
sources supports one sentence, cite all of them, e.g. [Source 1][Source 2]."""
    else:
        # Only one source overall — repeating "[Source 1]" after every
        # sentence adds no distinguishing information, so keep the answer
        # as clean prose. The single citation is still shown separately
        # alongside the answer.
        citation_instruction = "Do not add any inline citation markers; just answer normally."

    prompt = f"""
You are AskDocs AI.

Answer the question using only the given context. {citation_instruction}

Context:
{context_text}

Question:
{question}
"""

    response = llm.invoke(prompt)

    return {
        "answer": _extract_text(response.content),
        "sources": sources,
    }