# AskDocs AI service

Set `GROQ_API_KEY` in `.env`, install `requirements.txt`, then start with:

```sh
uvicorn app.main:app --reload --port 8000
```

The Express API is the intended caller. It provides the authenticated user, conversation, and document identifiers used to isolate vector search results.
