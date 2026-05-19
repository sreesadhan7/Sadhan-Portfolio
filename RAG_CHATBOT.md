# RAG Chatbot – Technical Deep Dive

A portfolio chatbot powered by Retrieval-Augmented Generation (RAG) using Google Gemini. It lets recruiters and collaborators ask natural-language questions about Sree Sadhan's background, experience, and projects — and get accurate, context-grounded answers.

---

## How It Works (Architecture Overview)

```
User Question
      │
      ▼
[Embed query]  ─── gemini-embedding-001 ───► query vector
      │
      ▼
[Cosine similarity search]
      │  compare against pre-computed chunk embeddings
      ▼
[Top-K chunks retrieved]  (K = 5)
      │
      ▼
[Prompt assembly]  system prompt + context + question
      │
      ▼
[Generate answer]  ─── gemini-3.1-flash-lite ───► response
      │
      ▼
[Clean & return]  strip markdown, strip em dashes
      │
      ▼
[React UI renders]  formatted text, bullet handling, email linkification
```

The chatbot **never hallucinate-guesses** — if the retrieved context doesn't cover the question, it redirects to Sree's email directly.

---

## Project Structure

```
├── src/
│   ├── app/
│   │   └── api/
│   │       └── chat/
│   │           └── route.ts          # Next.js API route — embedding, retrieval, generation
│   └── components/
│       └── Chatbot.tsx               # React floating chat widget
│
├── scripts/
│   └── generate_kb.py                # Offline script: embeds knowledge chunks → knowledge-base.json
│
└── public/
    └── knowledge-base.json           # Pre-computed embeddings served statically
```

---

## Backend: `/api/chat/route.ts`

### Models Used

| Purpose | Model |
|---|---|
| Embedding | `gemini-embedding-001` |
| Text generation | `gemini-3.1-flash-lite` (overridable via `GEMINI_MODEL` env var) |

### Request Flow

1. Validates the incoming message (non-empty, max 1000 chars).
2. Calls `ai.models.embedContent` with `taskType: RETRIEVAL_QUERY` to embed the user's question.
3. Loads `public/knowledge-base.json` (cached in module scope after first read — no re-reads on subsequent requests).
4. Runs cosine similarity against all pre-computed chunk embeddings in-process (no vector DB needed at this scale).
5. Selects top-5 chunks sorted by similarity score.
6. Assembles a prompt: system prompt + retrieved context + user question.
7. Calls `ai.models.generateContent` and strips markdown artifacts (`**`, `—`, `–`) before returning.

### Cosine Similarity (in-process)

```typescript
function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, magA = 0, magB = 0
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    magA += a[i] * a[i]
    magB += b[i] * b[i]
  }
  const denom = Math.sqrt(magA) * Math.sqrt(magB)
  return denom === 0 ? 0 : dot / denom
}
```

No external vector database — at ~30 chunks the linear scan is fast enough and avoids operational overhead.

### Knowledge Base Caching

```typescript
let cachedChunks: Chunk[] | null = null

function loadKnowledgeBase(): Chunk[] {
  if (cachedChunks) return cachedChunks
  // reads from disk only once per cold start
  const kbPath = join(process.cwd(), 'public', 'knowledge-base.json')
  cachedChunks = JSON.parse(readFileSync(kbPath, 'utf-8')).chunks ?? []
  return cachedChunks!
}
```

### System Prompt Design

The system prompt enforces:
- Plain-text output (no markdown, no em dashes)
- Warm, human tone (not an AI report style)
- Bullet format with `•` character only
- Concise answers (2–3 paragraphs or a short list)
- Hard guardrails: only answers about Sree's professional background; redirects everything else to his email

---

## Knowledge Base: `scripts/generate_kb.py`

### Purpose

Generates pre-computed embeddings offline and writes them to `public/knowledge-base.json`. Run once before deployment; no need to re-run unless knowledge chunks change.

### Knowledge Chunks

The knowledge base is organized into **7 categories** covering **30+ hand-authored chunks**:

| Category | Examples |
|---|---|
| `personal` | Overview, contact info, career motivation |
| `education` | MS at UF (GPA 3.81), BTech at Amrita |
| `experience` | Parse Software, UF Research, Arrow North, TCS |
| `project` | Redactor AI, Agentic AI, Cat Fact Tracker, NLP projects, Solana dashboard |
| `skills` | Frontend, backend, cloud/DevOps, AI/ML, databases, leadership |
| `behavioral` | STAR-format stories for common interview scenarios |
| `leadership` | VP of IGSA & Lasya, HCI ProductivityPal |

Behavioral chunks are particularly valuable — they provide STAR-formatted stories (Situation, Task, Action, Result) that the chatbot can surface when recruiters ask things like "Tell me about a time you handled a difficult stakeholder."

### Embedding Config

```python
client.models.embed_content(
    model="gemini-embedding-001",
    contents=text,
    config=types.EmbedContentConfig(task_type="RETRIEVAL_DOCUMENT"),
)
```

`RETRIEVAL_DOCUMENT` task type optimizes the embeddings for asymmetric search (short query → long document), giving better retrieval accuracy than generic embeddings.

### Rate Limiting

The script sleeps 1.1 seconds between requests to stay within Google's free-tier limit of 60 requests/minute.

### Output Format

```json
{
  "metadata": {
    "generated_at": "2025-...",
    "embedding_model": "gemini-embedding-001",
    "num_chunks": 31
  },
  "chunks": [
    {
      "id": "personal_overview",
      "category": "personal",
      "title": "About Sree Sadhan",
      "text": "...",
      "embedding": [0.012, -0.034, ...]
    }
  ]
}
```

---

## Frontend: `Chatbot.tsx`

A floating chat widget built with React, Framer Motion, and Lucide icons.

### Key Features

- **Floating trigger button** with an unread badge (shown until first open)
- **Suggested questions** displayed after the greeting — disappear once the user sends their first message
- **TypingDots animation** shown while waiting for the API response
- **FormattedText renderer** — handles `•` bullet lines, blank lines, email addresses (auto-linked as `mailto:` anchors), and long responses with a "See more / See less" toggle (collapses beyond 7 lines)
- **Auto-scroll** to the latest message after each update
- **Input validation** — disabled while loading, max 1000 characters, Enter key submits
- **Error fallback** — if the API fails entirely, shows a message with Sree's email

### Suggested Questions

```typescript
const suggested = [
  "What is Sree's experience?",
  "Tell me about his projects",
  "What are his key skills?",
]
```

Clicking a suggestion pre-fills the input, letting the user review or edit before sending.

### Chat Window Dimensions

- Width: 360px (constrained to `calc(100vw - 2rem)` on small screens)
- Height: 520px (constrained to `calc(100vh - 5rem)`)
- Fixed position: bottom-right, above other UI

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GOOGLE_API_KEY` | Yes (production) | Google Gemini API key — chatbot degrades gracefully if absent |
| `GEMINI_MODEL` | No | Override the generation model (default: `gemini-3.1-flash-lite`) |

If `GOOGLE_API_KEY` is not set, the API returns a friendly message directing users to contact Sree directly — no hard failure.

---

## Setup & Regenerating the Knowledge Base

### 1. Install Python dependency

```bash
pip install google-genai>=1.0.0
```

### 2. Set your API key

```bash
# Windows
set GOOGLE_API_KEY=your_google_api_key

# Mac/Linux
export GOOGLE_API_KEY=your_google_api_key
```

### 3. Run the embedding script

```bash
python scripts/generate_kb.py
```

This rewrites `public/knowledge-base.json` with fresh embeddings. Commit the updated file — Vercel serves it statically.

### 4. Deploy

Set `GOOGLE_API_KEY` in your Vercel project's Environment Variables. The Next.js API route reads it at runtime.

---

## Design Decisions

**Why RAG instead of fine-tuning?**
Fine-tuning is expensive and requires retraining whenever content changes. RAG lets us update knowledge by editing text chunks and re-running the embedding script — zero model training required.

**Why no vector database (Pinecone, Weaviate, etc.)?**
At ~30 chunks, a linear cosine-similarity scan in-process is faster and simpler than adding an external service with its own latency, auth, and cost. If the knowledge base grows to thousands of chunks, switching to a vector DB is straightforward.

**Why Gemini instead of OpenAI?**
Gemini's free tier is generous for a portfolio project, `gemini-embedding-001` is purpose-built for retrieval, and the same SDK handles both embedding and generation — one dependency, one API key.

**Why pre-compute embeddings offline?**
Embedding 30+ chunks at query time would add ~300ms per request. Pre-computing once and serving the JSON statically keeps latency low and eliminates per-request embedding costs for the knowledge base side.

**Why plain-text output (no markdown)?**
The chat UI renders plain text with its own formatting logic. Letting the LLM emit markdown and then stripping it post-hoc is fragile. The system prompt simply prohibits markdown and enforces the `•` bullet convention, which the `FormattedText` component handles natively.
