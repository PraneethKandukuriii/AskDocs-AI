from io import BytesIO

from pypdf import PdfReader

from app.utils.text_splitter import split_text

from app.services.vector_service import store_chunks



def process_pdf(
        file,
        filename
):

    reader = PdfReader(
        BytesIO(file)
    )


    text=""


    for page in reader.pages:
        text += page.extract_text() or ""


    chunks = split_text(text)


    store_chunks(
        chunks,
        filename
    )


    return {
        "filename":filename,
        "chunks":len(chunks)
    }