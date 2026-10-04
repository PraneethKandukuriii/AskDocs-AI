from fastapi import APIRouter, UploadFile, File

from app.services.pdf_service import process_pdf


router = APIRouter()



@router.post("/")
async def upload_document(
    file: UploadFile = File(...)
):

    content = await file.read()


    result = process_pdf(
        content,
        file.filename
    )


    return {
        "success": True,
        "message": "Document processed",
        "data": result
    }