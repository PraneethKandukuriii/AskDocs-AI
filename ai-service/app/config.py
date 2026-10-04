import os
from dotenv import load_dotenv

load_dotenv()


# Groq API
GROQ_API_KEY = os.getenv("GROQ_API_KEY")


# ChromaDB storage
VECTOR_PATH = "./vector_db"


if not GROQ_API_KEY:
    raise ValueError(
        "GROQ_API_KEY is missing in .env"
    )