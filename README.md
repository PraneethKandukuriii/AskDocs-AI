# AskDocs AI

### Your documents. Your questions. AI-powered answers.

**AskDocs AI** is an AI-powered document assistant that turns static PDFs into an interactive knowledge base.

Upload a document, ask a question, and let the system retrieve the most relevant information before generating a contextual answer.

<p align="center">

<a href="https://askdocsai.vercel.app">
  <img src="https://img.shields.io/badge/Live%20Demo-AskDocs%20AI-black?style=for-the-badge" alt="Live Demo"/>
</a>
<a href="https://github.com/PraneethKandukuriii/AskDocs-AI">
  <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub"/>
</a>

</p>

---

## 🌐 Live Demo

### **[→ Try AskDocs AI](https://askdocsai.vercel.app)**

Upload a PDF → ask anything → get answers grounded in your document.

---

## 💡 Why AskDocs AI?

Reading through a 100-page document just to find one piece of information shouldn't be painful.

AskDocs AI lets you interact with your documents naturally.

Instead of:

> **Search → Scroll → Read → Search again**

You can simply ask:

> **"What are the main conclusions of this document?"**

or

> **"Explain this section in simple terms."**

or

> **"What are the key points from chapter 3?"**

The system retrieves relevant information from your document and uses it as context for the AI response.

---

## ✨ Features

| Feature                      | Description                                           |
| ---------------------------- | ----------------------------------------------------- |
| 📄 **PDF Upload**            | Upload documents and make them searchable             |
| 💬 **AI Chat**               | Ask natural-language questions about your documents   |
| 🧠 **RAG Pipeline**          | Retrieve relevant context before generating responses |
| 🔎 **Semantic Search**       | Find information based on meaning, not just keywords  |
| 🔐 **Authentication**        | Secure user authentication with JWT                   |
| 🗂️ **Document Management**  | Store and manage uploaded documents                   |
| ⚡ **AI Microservice**        | Dedicated Python service for AI workloads             |
| 🎨 **Modern UI**             | Clean, responsive interface built with React          |
| 🚀 **Scalable Architecture** | Frontend, backend, and AI layers are separated        |

---

# 🧠 How It Works

AskDocs AI follows a **Retrieval-Augmented Generation (RAG)** architecture.

```text
                    ┌───────────────┐
                    │   PDF Upload  │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ Text Extractor│
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │    Chunking   │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │   Embeddings  │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ Vector Store  │
                    └───────┬───────┘
                            │
                    User asks a question
                            │
                            ↓
                    ┌───────────────┐
                    │   Retrieval   │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │Relevant Context│
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │      LLM      │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ AI Response   │
                    └───────────────┘
```

### In simple terms

**Document → Understand → Retrieve → Generate → Answer**

The model doesn't have to rely only on its general knowledge. Relevant information is retrieved from the uploaded document and passed into the generation step.

---

# 🏗️ Architecture

AskDocs AI is built as a modular full-stack system.

```text
                         ┌──────────────────────┐
                         │      User / Web      │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   React Frontend     │
                         │   Vite + Tailwind    │
                         │                      │
                         │   Vercel             │
                         └──────────┬───────────┘
                                    │
                              REST API
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │    Node.js API       │
                         │      Express         │
                         │                      │
                         │ Authentication       │
                         │ Documents            │
                         │ API orchestration    │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   MongoDB Database   │
                         │                      │
                         │ Users                │
                         │ Documents            │
                         └──────────────────────┘

                                    │
                                    │ AI Requests
                                    ▼

                         ┌──────────────────────┐
                         │    Python AI Service │
                         │        FastAPI       │
                         │                      │
                         │ PDF Processing       │
                         │ Embeddings            │
                         │ Vector Search         │
                         │ LLM Integration       │
                         └──────────────────────┘
```

---

# 🛠️ Tech Stack

### Frontend

* **React**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **Axios**
* **Framer Motion**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT**
* **bcrypt**
* **Multer**
* **Express Validator**

### AI / RAG

* **Python**
* **FastAPI**
* **LangChain**
* **PyPDF**
* **ChromaDB**
* **Sentence Transformers**
* **Google Generative AI**
* **Groq**

### Deployment

* **Vercel**
* **Docker**
* Cloud-hosted backend services

---

# 📁 Project Structure

```text
AskDocs-AI/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── routes/
│   │
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── validators/
│   │
│   └── package.json
│
└── ai-service/             # Python AI microservice
    ├── app/
    │   ├── routes/
    │   └── services/
    │
    ├── Dockerfile
    └── requirements.txt
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/PraneethKandukuriii/AskDocs-AI.git

cd AskDocs-AI
```

---

## 2. Start the backend

```bash
cd server

npm install

npm run dev
```

The backend runs locally on:

```text
http://localhost:5001
```

---

## 3. Start the frontend

Open another terminal:

```bash
cd client

npm install

npm run dev
```

Vite will provide the local development URL.

---

## 4. Start the AI service

```bash
cd ai-service

python -m venv .venv
```

### macOS / Linux

```bash
source .venv/bin/activate
```

### Windows

```powershell
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start FastAPI:

```bash
uvicorn app.main:app --reload
```

The AI service will run on:

```text
http://localhost:8000
```

---

# 🔐 Environment Variables

Create the required `.env` files for each service.

### Backend

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AI_SERVICE_URL=http://localhost:8000
```

### AI Service

```env
GOOGLE_API_KEY=your_google_api_key
GROQ_API_KEY=your_groq_api_key
```

> Never commit API keys, database credentials, JWT secrets, or other sensitive configuration to Git.

---

# 🔌 API Structure

### Backend

```text
/api/auth
/api/documents
```

### AI Service

```text
/api/upload
/api/chat
```

The backend handles application-level concerns while the AI service handles document intelligence and generation.

---

# 🐳 Docker

The AI service can also be containerized.

```bash
cd ai-service

docker build -t askdocs-ai-service .

docker run -p 8000:8000 askdocs-ai-service
```

---

# 🔒 Security Considerations

AskDocs AI follows a few important security practices:

* JWT-based authentication
* Password hashing with bcrypt
* Environment-based secrets
* Request validation
* File upload handling
* CORS configuration
* Separation of AI and application services

For production deployments, CORS origins and other security settings should be restricted to trusted domains.

---

# 🎯 What I Learned Building This

This project was built to go beyond simply calling an LLM API.

The main engineering challenges involved:

* Designing a multi-service architecture
* Connecting React, Node.js, and Python services
* Processing unstructured PDF data
* Building a practical RAG pipeline
* Working with embeddings and vector search
* Managing authentication and document ownership
* Handling communication between backend and AI services
* Designing a clean user experience around AI

The goal was to understand **how an AI-powered product is actually assembled end-to-end**, rather than treating the LLM as a black box.

---

# 🔮 Future Improvements

Some ideas planned for future iterations:

* 📚 Multiple document collections
* 🔗 Source citations in AI responses
* 📊 Document analytics
* 🧾 Support for additional file formats
* ⚡ Streaming AI responses
* 🧠 Improved retrieval and reranking
* 👥 Document sharing
* ☁️ Cloud object storage
* 📱 Improved mobile experience

---

# 👨‍💻 Built By

### Praneeth Kandukuri

Full-Stack Developer exploring **AI Engineering, RAG systems, and intelligent applications.**

<p align="left">
<a href="https://github.com/PraneethKandukuriii">
<img src="https://img.shields.io/badge/GitHub-PraneethKandukuriii-black?style=for-the-badge&logo=github"/>
</a>
</p>

---

<div align="center">

### If you found this project interesting, consider giving it a ⭐

**AskDocs AI — Turn documents into conversations.**

</div>
