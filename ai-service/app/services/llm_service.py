from langchain_groq import ChatGroq

from app.config import GROQ_API_KEY
from app.services.vector_service import search_chunks

llm = ChatGroq(
    model="llama-3.1-8b-instant",
    api_key=GROQ_API_KEY,
    temperature=0.2
)


def ask_question(question):

    context = search_chunks(question)

    prompt = f"""
You are AskDocs AI.

Answer the question using only the given context.

Context:
{context}

Question:
{question}
"""

    response = llm.invoke(prompt)

    return response.content