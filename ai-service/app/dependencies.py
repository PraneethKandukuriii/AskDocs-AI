from fastapi import Header, HTTPException

from app.config import INTERNAL_API_KEY


def verify_internal_request(x_internal_api_key: str = Header(default=None)):
    """
    Every route in this service is meant to be called only by our own
    Express server, never directly by a browser or an outside client.
    Express must send the X-Internal-Api-Key header with a value matching
    INTERNAL_API_KEY; anything else is rejected before it reaches the
    route's actual logic.
    """
    if not x_internal_api_key or x_internal_api_key != INTERNAL_API_KEY:
        raise HTTPException(status_code=401, detail="Unauthorized")