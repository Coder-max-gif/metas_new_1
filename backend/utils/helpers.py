import secrets
import string
from datetime import datetime

def generate_license_key() -> str:
    chars = string.ascii_uppercase + string.digits
    part1 = ''.join(secrets.choice(chars) for _ in range(4))
    part2 = ''.join(secrets.choice(chars) for _ in range(4))
    return f"METAS-{part1}-{part2}"

def generate_reset_token() -> str:
    return secrets.token_urlsafe(32)

def utc_now() -> datetime:
    return datetime.utcnow()