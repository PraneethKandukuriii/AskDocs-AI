from sentence_transformers import SentenceTransformer

model = None


def get_model():
    global model

    if model is None:
        model = SentenceTransformer(
            "all-MiniLM-L6-v2"
        )

    return model


def create_embeddings(texts):

    embeddings = get_model().encode(
        texts,
        normalize_embeddings=True
    )

    return embeddings.tolist()