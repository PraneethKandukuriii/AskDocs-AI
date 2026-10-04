from io import BytesIO

from pypdf import PdfReader
from pypdf.errors import PdfReadError

from app.utils.text_splitter import split_text

from app.services.vector_service import store_chunks



def process_pdf(
        file,
        filename,
        user_id,
        conversation_id,
        document_id,
):
    try:
        reader = PdfReader(BytesIO(file))
    except PdfReadError as error:
        raise ValueError("The uploaded file is not a readable PDF") from error


    # Chunk page-by-page (instead of joining all pages into one string first)
    # so every chunk can be tagged with the page number it actually came
    # from. That page number is what lets answers cite "page 2" instead of
    # just the filename.
    chunks = []
    page_numbers = []

    for page_number, page in enumerate(reader.pages, start=1):
        page_text = page.extract_text() or ""

        for chunk in split_text(page_text):
            if chunk.strip():
                chunks.append(chunk)
                page_numbers.append(page_number)

    if not chunks:
        raise ValueError("No readable text was found in this PDF")


    store_chunks(
        chunks,
        page_numbers,
        filename,
        user_id,
        conversation_id,
        document_id,
    )


    return {
        "filename":filename,
        "chunks":len(chunks)
    }