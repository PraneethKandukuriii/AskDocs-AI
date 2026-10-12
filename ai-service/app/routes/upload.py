from fastapi import APIRouter, File, Form, HTTPException, UploadFile

from app.services.pdf_service import process_pdf
from app.services.vector_service import delete_document_chunks


router = APIRouter()



@router.post("/")
async def upload_document(
    file: UploadFile = File(...),
    userId: str = Form(...),
    conversationId: str = Form(...),
    documentId: str = Form(...),
):
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Only PDF files are supported")

    try:
        result = process_pdf(
            await file.read(), file.filename, userId, conversationId, documentId
        )
    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error)) from error


    return {
        "success": True,
        "message": "Document processed",
        "data": result
    }


@router.delete("/{document_id}")
def delete_document(document_id: str):
    delete_document_chunks(document_id)
    return {"success": True}
