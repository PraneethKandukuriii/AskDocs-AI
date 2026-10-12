from fastapi import APIRouter

from pydantic import BaseModel

from app.services.llm_service import ask_question



router = APIRouter()



class ChatRequest(BaseModel):
    question:str
    userId: str
    conversationId: str



@router.post("/")
def chat(
    request:ChatRequest
):
    result = ask_question(
        request.question,
        request.userId,
        request.conversationId,
    )


    return {
        "answer": result["answer"],
        "sources": result["sources"],
    }