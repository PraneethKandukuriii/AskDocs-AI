import os
from dotenv import load_dotenv

load_dotenv()


# Gemini API
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")


# Shared secret that only the Express server should know; used to verify
# that requests to this service actually came from Express, not from
# anyone who can reach this service's URL directly.
INTERNAL_API_KEY = os.getenv("INTERNAL_API_KEY")


# ChromaDB storage
VECTOR_PATH = "./vector_db"


if not GEMINI_API_KEY:
    raise ValueError(
        "GEMINI_API_KEY is missing in .env"
    )

if not INTERNAL_API_KEY:
    raise ValueError(
        "INTERNAL_API_KEY is missing in .env"
    )