import chromadb

from app.config import VECTOR_PATH
from app.services.embedding_service import create_embeddings


client = chromadb.PersistentClient(
    path=VECTOR_PATH
)


collection = client.get_or_create_collection(
    name="documents"
)


def store_chunks(chunks, filename):

    embeddings = create_embeddings(chunks)

    ids = [
        f"{filename}-{i}"
        for i in range(len(chunks))
    ]

    collection.add(
        ids=ids,
        documents=chunks,
        embeddings=embeddings
    )


def search_chunks(query):

    embedding = create_embeddings(
        [query]
    )[0]


    result = collection.query(
        query_embeddings=[
            embedding
        ],
        n_results=3
    )


    return result["documents"][0]