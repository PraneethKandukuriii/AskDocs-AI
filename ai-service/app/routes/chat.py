from fastapi import APIRouter

from pydantic import BaseModel

from app.services.llm_service import ask_question



router = APIRouter()



class ChatRequest(BaseModel):
    question:str



@router.post("/")
def chat(
    request:ChatRequest
):

    answer = ask_question(
        request.question
    )


    return {
        "answer":answer
    }