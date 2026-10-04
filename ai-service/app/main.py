from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import upload, chat


app = FastAPI(
    title="AskDocs AI Service",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later replace with your Vercel URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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