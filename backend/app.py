# backend/app.py
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import pickle

# Load model + vectorizer at startup
with open("toxic_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

app = FastAPI(title="Toxic Comment Detection API")

# ✅ Allow frontend dev server to call the API (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "*",  # you can tighten this later for production
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CommentInput(BaseModel):
    text: str

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/")
def root():
    return {"message": "Toxic Comment Detection API. Use POST /predict"}

@app.post("/predict")
def predict(input: CommentInput):
    text = (input.text or "").strip()
    if not text:
        return {"prediction": 0, "detail": "empty text"}
    X = vectorizer.transform([text])
    pred = model.predict(X)[0]
    return {"prediction": int(pred)}
