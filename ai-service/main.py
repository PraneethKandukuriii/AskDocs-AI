from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AskDocs AI Service Running 🚀"}