from fastapi import FastAPI

from app.routes import upload, chat


app = FastAPI(
    title="AskDocs AI Service",
    version="1.0.0"
)


app.include_router(
    upload.router,
    prefix="/api/upload",
    tags=["Upload"]
)


app.include_router(
    chat.router,
    prefix="/api/chat",
    tags=["Chat"]
)


@app.get("/")
def home():
    return {
        "message": "AskDocs AI Python Service Running"
    }