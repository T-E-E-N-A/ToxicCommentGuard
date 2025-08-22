# ToxicCommentGuard: Advanced Toxic Comment Detection
## Objectives:
- Toxic Comment Detection: Automatically classify whether a comment is toxic or non-toxic using supervised machine learning models.
- Comment Categorization: Identify sub-types of toxicity such as insult, obscene, identity hate, threat, etc.

## Project Description:
    ToxicCommentGuard is a machine learning-powered web application designed to detect and analyze toxic language in user-generated comments. The project aims to create a safer and more respectful digital environment by identifying offensive content and providing insights into toxic behavior patterns. Built using Python, the platform leverages Natural Language Processing (NLP) techniques to classify them.

## 1) Backend (Python)

```bash
cd backend
python -m venv venv
Windows: venv\Scripts\activate
# macOS/Linux:
# source venv/bin/activate

pip install -r requirements.txt
uvicorn app:app --reload
```
- Check: http://127.0.0.1:8000/health should return `{"status":"ok"}`
- Swagger docs: http://127.0.0.1:8000/docs
- Click on Post/predict then try it out and can chcek model

## 2) Frontend (Vite + React + Tailwind v4)

```bash
cd frontend
npm install
npm run dev
```
- Open the URL Vite prints (usually http://127.0.0.1:5173).
