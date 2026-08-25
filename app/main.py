import os
import requests
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("MINIMAX_API_KEY")

url = "https://api.minimax.io/v1/text/chatcompletion_v2"

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

data = {
    "model": "MiniMax-M3",
    "messages": [
        {
            "role": "user",
            "content": "Say hello to Morteza in one short sentence"
        }
    ]
}

response = requests.post(
    url,
    headers=headers,
    json=data,
    timeout=60
)

print(response.status_code)
print(response.json())