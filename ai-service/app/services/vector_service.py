import chromadb

from app.config import VECTOR_PATH
from app.services.embedding_service import create_embeddings


client = chromadb.PersistentClient(
    path=VECTOR_PATH
)


collection = client.get_or_create_collection(
    name="documents"
)


def store_chunks(chunks, page_numbers, filename, user_id, conversation_id, document_id):

    embeddings = create_embeddings(chunks)

    ids = [
        f"{document_id}-{i}"
        for i in range(len(chunks))
    ]

    metadata = [
        {
            "userId": user_id,
            "conversationId": conversation_id,
            "documentId": document_id,
            "filename": filename,
            "page": page_numbers[i],
        }
        for i in range(len(chunks))
    ]

    collection.upsert(
        ids=ids,
        documents=chunks,
        embeddings=embeddings,
        metadatas=metadata,
    )


def delete_document_chunks(document_id):
    collection.delete(where={"documentId": document_id})


def search_chunks(query, user_id, conversation_id):

    where = {
        "$and": [
            {"userId": user_id},
            {"conversationId": conversation_id},
        ]
    }
    matching_chunks = collection.get(where=where, include=[])["ids"]
    if not matching_chunks:
        return []

    embedding = create_embeddings(
        [query]
    )[0]


    result = collection.query(
        query_embeddings=[
            embedding
        ],
        n_results=min(8, len(matching_chunks)),
        where=where,
        include=["documents", "metadatas"],
    )


    documents = result["documents"][0] or []
    metadatas = result["metadatas"][0] or []

    return [
        {
            "text": documents[i],
            "filename": metadatas[i].get("filename"),
            "page": metadatas[i].get("page"),
        }
        for i in range(len(documents))
    ]