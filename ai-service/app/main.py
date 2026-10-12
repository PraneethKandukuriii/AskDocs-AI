from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from app.routes import upload, chat
from app.dependencies import verify_internal_request


app = FastAPI(
    title="AskDocs AI Service",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # replace with your deployed frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(
    upload.router,
    prefix="/api/upload",
    tags=["Upload"],
    dependencies=[Depends(verify_internal_request)],
)


app.include_router(
    chat.router,
    prefix="/api/chat",
    tags=["Chat"],
    dependencies=[Depends(verify_internal_request)],
)


@app.get("/")
def home():
    return {
        "message": "AskDocs AI Python Service Running"
    }