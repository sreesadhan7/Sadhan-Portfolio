"""
Knowledge Base Generator for Sree Sadhan's Portfolio Chatbot
Run once to generate embeddings: python scripts/generate_kb.py
Requires: GOOGLE_API_KEY environment variable
"""

import json
import os
import time
from datetime import datetime

import google.generativeai as genai

GOOGLE_API_KEY = os.environ.get("GOOGLE_API_KEY", "")
EMBEDDING_MODEL = "models/text-embedding-004"
OUTPUT_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "knowledge-base.json")

if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY environment variable not set. Run: set GOOGLE_API_KEY=your_key (Windows) or export GOOGLE_API_KEY=your_key (Mac/Linux)")

genai.configure(api_key=GOOGLE_API_KEY)

# ---------------------------------------------------------------------------
# Knowledge chunks — edit here to update the chatbot's knowledge
# ---------------------------------------------------------------------------
CHUNKS = [
    # ── PERSONAL ────────────────────────────────────────────────────────────
    {
        "id": "personal_overview",
        "category": "personal",
        "title": "About Sree Sadhan",
        "text": (
            "Sree Sadhan (full name: Sai Sree Sadhan Polimera) is a passionate Software Engineer "
            "with expertise in Full-Stack Development, AI/ML, Data Engineering, and Cloud Technologies. "
            "He holds a Master of Science in Computer Science from the University of Florida (GPA 3.81/4.0) "
            "and a Bachelor of Technology in Computer Science from Amrita Vishwa Vidyapeetham (GPA 3.8/4.0). "
            "He has 4+ years of professional experience spanning healthcare, financial services, analytics, and research domains. "
            "Sree transforms complex challenges into scalable, production-grade solutions. "
            "He is driven by a constant curiosity to learn and apply the latest advancements in technology. "
            "Outside work, he enjoys exploring new technologies, contributing to open-source projects, and watching anime (especially One Piece). "
            "He has also served as Vice President of IGSA and Lasya, a graduate dance club at UF, demonstrating leadership beyond technical roles."
        )
    },
    {
        "id": "personal_contact",
        "category": "personal",
        "title": "Contact and Availability",
        "text": (
            "Sree Sadhan is actively seeking new opportunities. "
            "He is open to full-time roles, contract work, and collaborations — remote, hybrid, or on-site. "
            "Email: sreesadhan.polimera11@gmail.com | Phone: +1 (352) 756-0268. "
            "LinkedIn: linkedin.com/in/sree-sadhan | GitHub: github.com/sreesadhan7. "
            "He responds promptly and is currently based in the United States."
        )
    },
    {
        "id": "personal_motivation",
        "category": "personal",
        "title": "Why New Role and Career Goals",
        "text": (
            "Sree is looking for a new role because he is eager to take on more long-term challenges and responsibilities "
            "that will allow him to have a meaningful impact. In his current and previous roles he has gained strong technical skills, "
            "but he is now at a stage where he wants to contribute to larger, more impactful projects and work with a team that shares "
            "a similar vision for innovation. He is particularly excited about roles that offer opportunities for growth, where he can "
            "continue to learn, develop leadership skills, and drive positive outcomes for the company. "
            "His goal is to join an organization where he can make a long-lasting impact — not only in terms of technology "
            "but also by contributing to the overall growth and vision of the company. "
            "Sree strongly resonates with the approach of taking time to understand the 'why' before shaping up the 'how.' "
            "This philosophy aligns with his focus on deeply understanding customer requirements and business needs before diving into solutions."
        )
    },

    # ── EDUCATION ───────────────────────────────────────────────────────────
    {
        "id": "education_ms_uf",
        "category": "education",
        "title": "Master of Science – University of Florida",
        "text": (
            "Sree earned his Master of Science in Computer Science from the University of Florida, Gainesville, FL (GPA 3.81/4.0), "
            "graduating in May 2025. "
            "Key coursework: Data Structures & Algorithms, Machine Learning, Cloud Computing, "
            "Object-Oriented Programming (OOPs), Artificial Intelligence, System Design, "
            "Full-Stack Development, Natural Language Processing, and Data Engineering. "
            "During this time he also worked as a Graduate Research Assistant and a Teaching Assistant, "
            "building hands-on experience in AI/ML pipelines and mentoring students."
        )
    },
    {
        "id": "education_btech",
        "category": "education",
        "title": "Bachelor of Technology – Amrita Vishwa Vidyapeetham",
        "text": (
            "Sree completed his Bachelor of Technology in Computer Science at Amrita Vishwa Vidyapeetham, Coimbatore, India (GPA 3.8/4.0), "
            "graduating in July 2021. "
            "Key coursework: Data Structures & Algorithms, Machine Learning, Cloud Computing, "
            "Object-Oriented Programming, System Design, Software Development Life Cycle, "
            "Full-Stack Development, Data Science & Analysis, Computer Networks, Compiler Design, "
            "Operating Systems, Computer Architecture, and Software Engineering."
        )
    },

    # ── WORK EXPERIENCE ─────────────────────────────────────────────────────
    {
        "id": "exp_parse_software",
        "category": "experience",
        "title": "Parse Software – Full Stack Software Engineer (Current)",
        "text": (
            "At Parse Software Development (Lincoln, NE, USA), Sree works as a Full Stack Software Engineer. "
            "He engineered a HIPAA-compliant service data platform — called FFS (Family Foundation Services) — "
            "using React, TypeScript, Java (Spring Boot), and PostgreSQL. "
            "He achieved sub-2ms 95th-percentile REST API response times across high-frequency client workflows. "
            "He architected scalable AWS infrastructure (ALB, EKS, IAM, S3) using Terraform and Docker, "
            "establishing zero-downtime deployments and reducing environment provisioning time by 80%. "
            "He fortified CI/CD pipelines via GitHub (automating JUnit and JMeter tests), "
            "sustaining 99.8% production uptime and accelerating release cycles by 60%. "
            "He implemented OAuth2, session-based RBAC with audit trails, reducing manual reconciliation effort by 30%. "
            "The team was very small (Sree and a senior engineer), so he wore many hats — "
            "pushing for early customer feedback loops, delivering a usable staging experience 1.5 months ahead of the 4.5-month plan, "
            "and maintaining stakeholder trust through predictable, transparent delivery."
        )
    },
    {
        "id": "exp_uf_research",
        "category": "experience",
        "title": "University of Florida – Graduate Research Assistant",
        "text": (
            "At the University of Florida (Gainesville, FL), Sree served as a Graduate Research Assistant "
            "on AI/ML and NLP workflows for a sensitive-data redaction project. "
            "He developed modular microservices using React (Next.js), TypeScript, and Java (Spring MVC), "
            "decreasing user-facing page load times by 40% while serving 500+ concurrent users. "
            "He scaled real-time backend operations with Python on GCP and GitHub CI/CD pipelines, "
            "sustaining 500+ requests/min with 98% uptime. "
            "He orchestrated Kafka-driven ETL pipelines and AI/ML + NLP workflows using Python, LangChain, Hugging Face, "
            "LLMs, and SQL databases, improving automated redaction accuracy by 30%."
        )
    },
    {
        "id": "exp_arrow_north",
        "category": "experience",
        "title": "Arrow North Design – Software Engineer Intern",
        "text": (
            "At Arrow North Design (Raleigh, NC, USA), Sree worked as a Software Engineer Intern. "
            "He spearheaded full-stack development with TypeScript, React (Next.js), and GraphQL, "
            "elevating frontend performance by 30% for real-time data flows across distributed microservices. "
            "He architected cloud-native microservices using Python (Flask) with RESTful APIs on Azure, "
            "reducing API latency by 40%. "
            "He automated release pipelines with CI/CD (GitHub) and Docker, cutting deployment failures by 75% "
            "and accelerating frontend load times by 25%. "
            "He learned Next.js and TypeScript from scratch to deliver within sprint deadlines, "
            "implemented Firebase Authentication for secure user login, "
            "and proposed a single-dashboard approach with lazy loading instead of multiple dashboards "
            "— a decision that improved performance and was appreciated by the client."
        )
    },
    {
        "id": "exp_tcs",
        "category": "experience",
        "title": "TCS (Tata Consultancy Services) – Software Engineer",
        "text": (
            "At TCS (Bangalore, India), Sree worked as a Software Engineer from April 2021 to August 2023. "
            "He delivered mission-critical workflows using Java (Spring Boot), Node.js, and Python, "
            "generating RESTful APIs that reduced trade confirmation response times by 45%. "
            "He overhauled front-office UI/UX with React, AngularJS, and JavaScript "
            "while optimizing MySQL queries, dropping production incidents by 30% across 10+ AWS-hosted trading systems. "
            "He streamlined software release quality using TDD and JUnit automation, yielding 87% reduction in post-release defects. "
            "He led 3+ cross-functional Agile (Scrum) teams via Jira and Confluence, raising stakeholder satisfaction to 90%. "
            "At TCS, he also designed and led technical knowledge-sharing and training sessions "
            "covering SQL, Python (NumPy, Pandas), HIPAA compliance, and testing methodologies — "
            "receiving a company appreciation award for these efforts. "
            "He worked on the healthcare domain, ensuring data security and integrity for pharmaceutical clients."
        )
    },

    # ── PROJECTS ────────────────────────────────────────────────────────────
    {
        "id": "project_redactor_ai",
        "category": "project",
        "title": "Redactor AI – Real-time Document Redaction Platform",
        "text": (
            "Redactor AI is a real-time document redaction platform powered by LLMs and Transformer models. "
            "It processes sensitive documents using ETL pipelines and projects redaction patterns through interactive dashboards. "
            "Tech stack: Python, React, JavaScript, SQL, LLMs, Transformer Models, Snowflake, Streamlit, Tableau, GitHub CI/CD. "
            "Key outcomes: 55% faster release cycles via GitHub CI/CD, 40% reduction in manual processing, "
            "85% improvement in review accuracy. GitHub: github.com/sreesadhan7"
        )
    },
    {
        "id": "project_agentic_ai",
        "category": "project",
        "title": "Agentic AI Systems – Automated AI Solutions",
        "text": (
            "A collection of automated AI-powered solutions built using MindStudio Platform, n8n, RAG, LLMs, and AI Agents. "
            "Designed to solve real-world problems and streamline everyday tasks using advanced prompt engineering. "
            "Key outcomes: 45% reduction in manual tasks, 60% increase in task efficiency, scalable production-ready solutions. "
            "GitHub: github.com/sreesadhan7/AI-Agents-Portfolio"
        )
    },
    {
        "id": "project_cat_fact_tracker",
        "category": "project",
        "title": "Cat Fact Tracker – Full Stack App",
        "text": (
            "Cat Fact Tracker is a full-stack application that fetches, displays, and manages interesting cat facts. "
            "Frontend: Next.js + TypeScript. Backend: Python FastAPI. Database: SQL. "
            "Features: 98% API uptime, 500+ requests per minute handling, real-time data delivery. "
            "GitHub: github.com/sreesadhan7/cat-fact-tracker"
        )
    },
    {
        "id": "project_nlp_redaction",
        "category": "project",
        "title": "Personal Data Censoring & Unredactor – NLP Projects",
        "text": (
            "Two NLP projects built during Sree's Master's program: "
            "1) Personal Data Censoring: A Python-based redaction system that automates identification and censoring of sensitive info "
            "using a global dictionary and spaCy pipeline. 96% accuracy in redacting and restoring data. "
            "2) The Unredactor: Automates recovery of redacted names using contextual pattern learning with NLP and spaCy. "
            "Both projects used en_core_web_md model combined with TF-IDF vectorization for entity recognition. "
            "GitHub: github.com/sreesadhan7/Personal-Data-Censoring | github.com/sreesadhan7/The_Unredactor"
        )
    },
    {
        "id": "project_data_engineering",
        "category": "project",
        "title": "Data Engineering Pipeline – PDF to SQL Automation",
        "text": (
            "A Python-based data engineering pipeline that automates extraction of data from police incident PDF reports "
            "and stores it in a SQL database. Uses urllib3 for document retrieval and pypdf for text extraction. "
            "Implemented CI/CD with GitHub Actions for automated validation. "
            "Achieved 90%+ extraction success rate (vs. 60-70% with conventional ML methods). "
            "Also includes clustering analysis and interactive visualizations using Flask and scikit-learn. "
            "GitHub: github.com/sreesadhan7/Data-Clustering-Analysis-and-Visualization-Pipeline"
        )
    },
    {
        "id": "project_solana",
        "category": "project",
        "title": "Solana Crypto Transaction Dashboard",
        "text": (
            "A professional-grade Solana portfolio dashboard allowing users to connect wallets "
            "and view balances, tokens, and transaction history. "
            "Built with Solana, React, Next.js, Web3, and TypeScript. "
            "Features wallet connection, token and transaction history, and full mobile responsiveness. "
            "GitHub: github.com/sreesadhan7/Solana-Crypto-Transaction-dashboard"
        )
    },
    {
        "id": "project_email_system",
        "category": "project",
        "title": "Email System Sender",
        "text": (
            "An email system sender built using AngularJS, Node.js, MySQL, and REST API. "
            "Users enter their name and email; data is stored in MySQL and a confirmation email is sent via Nodemailer + Mailtrap. "
            "Built as an internship assignment demonstrating research-driven decision making "
            "(chose Mailtrap sandbox over live SMTP to avoid resource waste and spam risk). "
            "GitHub: github.com/sreesadhan7/Email-System-Sender"
        )
    },
    {
        "id": "project_airline_faq",
        "category": "project",
        "title": "Other Projects – Airline FAQ, Guide Me, Elective Management",
        "text": (
            "Additional projects: "
            "Airline FAQ — an FAQ system for airlines using EJS, AWS RDS, and Lambda (serverless architecture). "
            "Guide Me — a guide allocation project built to DBMS course requirements using EJS and web-based interface. "
            "Elective Management System — online elective management built with Vue.js, NuxtJS, and Firestore. "
            "Global Warming Deep Dive — in-depth data analysis with Python, React, database, and visualization components. "
            "GitHub: github.com/sreesadhan7"
        )
    },

    # ── SKILLS ──────────────────────────────────────────────────────────────
    {
        "id": "skills_frontend",
        "category": "skills",
        "title": "Frontend Skills",
        "text": (
            "Sree's frontend skills include: React.js, Next.js, Angular.js, Vue.js (NuxtJS), "
            "JavaScript, TypeScript, HTML5, Tailwind CSS, Three.js, D3.js, GraphQL. "
            "He has production experience building responsive, accessible, high-performance UIs "
            "with SSR, CSR, lazy loading, and optimized rendering."
        )
    },
    {
        "id": "skills_backend",
        "category": "skills",
        "title": "Backend Skills",
        "text": (
            "Sree's backend skills include: Python, Java (Spring Boot, Spring MVC), C/C++, "
            "Node.js, Golang, Django, Flask, Express.js, GraphQL, REST APIs. "
            "He has built HIPAA-compliant platforms, microservices, ETL pipelines, and high-throughput APIs "
            "achieving sub-2ms response times at scale."
        )
    },
    {
        "id": "skills_cloud_devops",
        "category": "skills",
        "title": "Cloud and DevOps Skills",
        "text": (
            "Sree's cloud and DevOps skills include: AWS (ALB, EKS, IAM, S3, RDS, EC2, Lambda), "
            "Azure, GCP, Docker, Kubernetes, Terraform (IaC), Git, GitHub, CI/CD pipelines, "
            "Vercel, Firebase, Kafka, Spark, Linux/Unix, HP ALM. "
            "He has architected zero-downtime deployments, automated GitHub Actions pipelines, "
            "and managed regulated production systems."
        )
    },
    {
        "id": "skills_ai_ml",
        "category": "skills",
        "title": "AI, ML and Data Skills",
        "text": (
            "Sree's AI/ML and data skills include: LLMs, RAG (Retrieval-Augmented Generation), LangChain, "
            "Hugging Face Transformers, spaCy, TF-IDF, NLP, Pandas, NumPy, scikit-learn, TensorFlow, PyTorch, "
            "Tableau, Power BI, SQL, NoSQL, MongoDB, PostgreSQL, MySQL, Snowflake, JSON. "
            "He has built real-time AI/ML pipelines, automated redaction systems with 96% accuracy, "
            "Kafka-driven ETL workflows, and LLM-powered agentic systems."
        )
    },
    {
        "id": "skills_databases",
        "category": "skills",
        "title": "Databases and Storage",
        "text": (
            "Sree works with: PostgreSQL, MySQL, MongoDB, Snowflake, Netezza, NoSQL (Azure Cosmos, DynamoDB), "
            "SQL (complex queries, joins, optimization), Firebase Firestore, JSON-based storage. "
            "He has optimized SQL queries for data reporting pipelines and implemented audit/retention controls."
        )
    },
    {
        "id": "skills_leadership",
        "category": "skills",
        "title": "Leadership and Soft Skills",
        "text": (
            "Leadership and soft skills: Project Management, Cross-functional Leadership, Team Collaboration, "
            "Individual Contributor, Strategic Planning, Conflict Resolution, Mentoring & Coaching, "
            "Time Management, Decision Making, Open Communication, Agile (Scrum), Jira, Confluence. "
            "Sree led 3+ Agile teams at TCS, trained colleagues in SQL/Python/testing at TCS, "
            "and served as VP for IGSA and Lasya at UF."
        )
    },

    # ── BEHAVIORAL STORIES ──────────────────────────────────────────────────
    {
        "id": "behavioral_above_beyond_parse",
        "category": "behavioral",
        "title": "Above and Beyond / Delivering Early – Parse FFS",
        "text": (
            "Situation: At Parse Software, Sree built FFS (Family Foundation Services) — a services management portal. "
            "The team was tiny (Sree + one senior engineer) and the timeline was aggressive (4.5 months). "
            "Task: Get something stable into users' hands early and reduce manual work. "
            "Action: Sree pushed for early customer feedback loops — scheduling short demos as soon as a working slice existed "
            "instead of waiting for a perfect release. He confirmed the 'why' with stakeholders before each feature. "
            "He took ownership of unfamiliar areas (Spring Boot + security + data mapping), paired with his manager, "
            "kept PRs small, and ensured PDF document upload/retrieval and reporting exports worked reliably. "
            "Result: Delivered a usable staging experience in ~3 months vs. the planned 4.5 months. "
            "Biggest win was trust — stakeholders saw predictable progress, users saw feedback land quickly. "
            "Tradeoff: Prioritized core end-to-end workflow over nice-to-have polish first."
        )
    },
    {
        "id": "behavioral_earn_trust_parse",
        "category": "behavioral",
        "title": "Earn Trust / Assisting a Colleague – Parse FFS",
        "text": (
            "Situation: At Parse, the FFS project team was just Sree and a senior manager. "
            "Midway through, the manager had to take sudden personal leave and owned a critical UI page on the demo path. "
            "Task: Prevent the timeline from slipping without losing stakeholder confidence. "
            "Action: Sree quickly assessed what existed, got a brief handoff from his manager before he went offline, "
            "took ownership of the remaining work (API wiring, UI states, RBAC patterns), kept PRs small for later review, "
            "and communicated proactively — telling the manager exactly what he was taking on and de-scoping temporarily if needed. "
            "Result: Hit the milestone without waiting for the colleague's return. The page shipped in time, no downstream bug wave. "
            "Lesson: 'In small teams, continuity planning matters — small PRs, clear ownership, and lightweight documentation reduce risk.'"
        )
    },
    {
        "id": "behavioral_learn_fast_terraform",
        "category": "behavioral",
        "title": "Learn Something Fast – Terraform and AWS at Parse",
        "text": (
            "Situation: At Parse, Sree had to deploy FFS to staging/production on AWS with repeatable infrastructure. "
            "He was new to Terraform and how it connects end-to-end with ECS, ALB, RDS, Secrets Manager, and CloudWatch. "
            "Task: Ramp up fast and contribute to a production-grade deployment without slowing the team. "
            "Action: He traced the request path (DNS/HTTPS → ALB → ECS → containers → DB + S3) to understand why each resource exists. "
            "He parameterized Terraform modules so staging and production used the same module with different values. "
            "He wired CI/CD so GitHub Actions built Docker images, pushed to ECR, then forced new ECS deployments. "
            "Result: Reliable staging and production deployments with the same Terraform module and a predictable pipeline. "
            "Tradeoff: Focused on depth vs. speed — learned only what was necessary first, went deeper later."
        )
    },
    {
        "id": "behavioral_difficult_customer_parse",
        "category": "behavioral",
        "title": "Difficult Customer / Customer First – Parse FFS",
        "text": (
            "Situation: During FFS demos, a stakeholder pushed hard to add several changes immediately "
            "(extra fields, calendar schedule views) to make the tool feel complete before rollout. "
            "Task: Protect timeline and system stability while making the stakeholder feel heard. "
            "Action: Sree asked clarifying questions to separate must-have from nice-to-have ('What breaks if we don't add it this week?'). "
            "He proposed a tradeoff-based plan: keep the milestone focused on the core end-to-end workflow, "
            "schedule requested additions into the next iteration. He committed fully to the highest-impact change that unblocked users. "
            "Result: Avoided scope creep that would have delayed the release. Shipped on schedule. "
            "Stakeholder trust improved because delivery became predictable and focused."
        )
    },
    {
        "id": "behavioral_tcs_knowledge_sharing",
        "category": "behavioral",
        "title": "Took Responsibility Outside Role – TCS Knowledge Sharing",
        "text": (
            "Situation: At TCS, Sree noticed colleagues (especially new joiners) lacked familiarity with SQL, "
            "Python (NumPy/Pandas), and HIPAA compliance needed for healthcare data testing. "
            "Task: Bridge the knowledge gap to raise team performance and maintain data integrity standards. "
            "Action: He designed and led technical and non-technical training sessions — SQL queries for data validation, "
            "Python for data preprocessing, HIPAA compliance, formal/informal testing methodologies. "
            "He created comprehensive training slides and documentation that are still used to train new hires. "
            "Result: Increased team performance, positive feedback from colleagues, and received a company appreciation award. "
            "Tradeoff: Put in extra hours to prepare materials; the time investment paid off through team-wide efficiency gains."
        )
    },
    {
        "id": "behavioral_tcs_root_cause",
        "category": "behavioral",
        "title": "Root Cause Analysis – Tableau Data Mismatch at TCS",
        "text": (
            "Situation: While leading 3 parallel testing projects at TCS, Sree noticed a data mismatch: "
            "the database had 13 symptoms but the UI Tableau report only showed 12, causing an incorrect graph. "
            "Task: Find the root cause and fix it before deployment to prevent misleading business decisions. "
            "Action: He compared Tableau visualizations to the source database, ran SQL queries to fetch record counts, "
            "identified a missing filter in the test validation logic, coordinated with the dev team to fix the filtering logic, "
            "and instituted a checklist-based validation approach so critical filters are always verified. "
            "Result: Resolved the data mismatch before deployment. Client was highly appreciative. "
            "Defect was identified before it reached production, preventing financial and business risks."
        )
    },
    {
        "id": "behavioral_tcs_conflict",
        "category": "behavioral",
        "title": "Conflict with Manager / Different Perspective – TCS",
        "text": (
            "Situation: At TCS, Sree identified a critical data mismatch in Tableau Excel reports but his lead classified it as low priority. "
            "Task: Convince the team to reprioritize without creating conflict. "
            "Action: Rather than pushing back emotionally, Sree gathered objective evidence: "
            "compared Tableau visualizations to the source DB, found incident categories missing (incorrect totals), "
            "reviewed CloudWatch logs. In the next sync, he acknowledged the lead's concern about UI bugs "
            "but walked through the business impact of the data error and proposed a compromise: "
            "continue UI testing while assigning one resource to fix the data issue in parallel. "
            "Result: Manager agreed to reclassify as high priority. Issue was resolved before release. "
            "From that point on, data mismatches were treated with the same urgency as UI bugs."
        )
    },
    {
        "id": "behavioral_tcs_deadline",
        "category": "behavioral",
        "title": "Missed Deadline / Teammate Issue – TCS",
        "text": (
            "Situation: At TCS, Sree led 9 people across 3 parallel projects. A new team member (non-CS background) "
            "was assigned a critical Power Query validation task. Despite a walkthrough, the member couldn't complete it. "
            "Task: Protect delivery timeline and client trust when the deadline was at risk. "
            "Action: Sree escalated to his lead, reassigned the high-priority task to himself, "
            "gave the new member simpler UI testing scripts, took personal blame for inadequate onboarding, "
            "and proactively reached out to the client explaining the situation and requesting a 3-day extension. "
            "Result: Completed validation 1 day ahead of the extended deadline. App deployed successfully. "
            "Gave honest feedback to the new teammate post-sprint as support, not blame. "
            "Implemented structured onboarding checklists and daily stand-ups to prevent future delays."
        )
    },
    {
        "id": "behavioral_uf_unknown_domain",
        "category": "behavioral",
        "title": "Problem with Less Info / Unknown Domain – UF TA Role",
        "text": (
            "Situation: At UF, Sree was a Teaching Assistant for a Public Planning Works course in the Civil Engineering Department, "
            "guiding students to incorporate ML into civil engineering research — a domain he was unfamiliar with. "
            "Task: Mentor students effectively while bridging his own knowledge gap. "
            "Action: Proactively communicated with the professor to understand expectations, "
            "reviewed published civil engineering papers, scheduled one-on-one sessions with students, "
            "and encouraged real-world case studies with quantitative analysis (TP, FP, accuracy, precision). "
            "Result: Students improved technical quality of papers. Received positive monthly reviews. "
            "Increased student engagement in Data/ML applications in civil engineering. "
            "Lesson: Adapting to the student's domain makes mentorship far more effective than just applying generic technical knowledge."
        )
    },
    {
        "id": "behavioral_uf_multitasking",
        "category": "behavioral",
        "title": "Prioritize Multiple Tasks – UF Data Engineering Project",
        "text": (
            "Situation: In his third semester at UF, Sree balanced a major Data Engineering project (automating PDF extraction) "
            "simultaneously with TA mentorship sessions and a course assignment — all with tight deadlines in a 5-day window. "
            "Action: He listed every task, estimated time, and allocated deep-focus slots (early mornings/evenings) for the project. "
            "TA sessions were pre-blocked. He used timeboxing (90-min focus, 15-min break) and built CI triggers "
            "so GitHub Actions auto-ran validation scripts on every push. He reached out proactively to shift one TA session by a day. "
            "Result: Completed all three tasks on time. Data extraction model improved from 70% to 93% accuracy "
            "by switching NLP models (en_core_web_sm → en_core_web_lg). "
            "Lesson: Prioritization is about evaluating impact, not just deadlines. Smart automation saves hours later."
        )
    },
    {
        "id": "behavioral_uf_de_deadline",
        "category": "behavioral",
        "title": "Might Miss Deadline / Pivot Under Pressure – UF Data Engineering",
        "text": (
            "Situation: With 2 days left before a deadline, Sree's conventional ML-based PDF extraction was only 60–70% accurate "
            "(threshold was 90%). "
            "Action: Instead of continuing the same path, he quickly researched alternatives, discovered urllib3 + pypdf "
            "for efficient document retrieval, wrote a Python script handling edge cases (missing values, improperly formatted PDFs), "
            "and implemented GitHub Actions CI for automated testing on every push. "
            "Result: 90%+ success rate vs. most students staying under 80%. "
            "Demonstrated the ability to recognize roadblocks early, pivot quickly, and deliver quality under pressure."
        )
    },
    {
        "id": "behavioral_arrow_north_new_tech",
        "category": "behavioral",
        "title": "Deep Expertise / Learning New Tech – Arrow North (Next.js + TypeScript)",
        "text": (
            "Situation: At Arrow North Design, Sree was assigned to build responsive frontend UI using Next.js and TypeScript — "
            "technologies new to him — within a one-week sprint. "
            "Action: He dedicated extra hours to official docs and online courses. Noticed similarities with React. "
            "Validated learning through small POCs (e.g., a campaign questionnaire system with dynamic async/await question flow). "
            "Sought guidance from experienced colleagues on component architecture. "
            "Result: Successfully delivered a fully responsive UI within the sprint deadline without quality compromise. "
            "Gained expertise enabling contributions beyond UI design. "
            "Tradeoff: Focused on only the parts needed for the sprint — routing, component structuring, async behavior — "
            "and deferred advanced features (custom hooks, API routes) to future sprints."
        )
    },
    {
        "id": "behavioral_arrow_north_auth",
        "category": "behavioral",
        "title": "Difficult Decision / Tight Deadline – Arrow North Authentication",
        "text": (
            "Situation: At Arrow North, Sree needed to implement a secure user authentication system for an MVP in 3 days "
            "with no clear precedent in the team. Options: custom JWT auth or Firebase Authentication. "
            "Action: Consulted the CTO and analyzed documentation for both options. "
            "A custom system offered full control but risked SQL injection, token management issues, and slow MVP delivery. "
            "He used simple analogies to bridge the technical gap with non-technical stakeholders "
            "(comparing Firebase to a 'plug-and-play security lock'). "
            "He recommended and implemented Firebase Authentication. "
            "Result: Authentication was live within the MVP. Client was impressed. Decision saved significant dev time. "
            "Tradeoff: Speed vs. control. Firebase offered rapid integration and built-in compliance, "
            "allowing the team to focus on core development."
        )
    },
    {
        "id": "behavioral_arrow_north_not_enough_info",
        "category": "behavioral",
        "title": "Not Enough Info / Customer Feedback – Arrow North Dashboard Design",
        "text": (
            "Situation: At Arrow North, the advertising client provided only high-level requirements — "
            "'easy to use, efficient, capable of displaying real-time data' — with no specific UI/UX direction. "
            "Action: Sree deep-dived into competitor research to fill the gap. "
            "He asked targeted questions: 'How do you want data visualized — graphs, heat maps, or tables?' "
            "'Dashboard-focused or single-page overview?' "
            "When the client proposed multiple dashboards, he recommended a single-page dashboard with lazy loading instead, "
            "explaining performance and maintenance tradeoffs. Stayed connected with the CTO throughout. "
            "Result: Stakeholders were impressed with the iterative feedback-driven approach. "
            "Faster approval of UI components and reduced unnecessary redesigns. "
            "Client appreciated the single-dashboard decision for performance and unified UX."
        )
    },

    # ── LEADERSHIP ──────────────────────────────────────────────────────────
    {
        "id": "leadership_vp_igsa_lasya",
        "category": "leadership",
        "title": "Leadership – VP of IGSA and Lasya Dance Club at UF",
        "text": (
            "Beyond his technical work, Sree served as Vice President for IGSA (Indian Graduate Student Association) "
            "and Lasya, a graduate dance club at the University of Florida. "
            "In these roles he fostered teamwork, organized events, and demonstrated leadership and collaboration skills "
            "beyond the technical domain. "
            "This reflects his belief in developing both professionally and personally, "
            "and his ability to balance leadership responsibilities alongside demanding academic and work commitments."
        )
    },
    {
        "id": "leadership_hci_productivitypal",
        "category": "leadership",
        "title": "User Research and HCI – ProductivityPal App",
        "text": (
            "As part of his HCI (Human-Computer Interaction) course at UF, Sree worked on ProductivityPal — "
            "a to-do list app with a relaxation exercises module. "
            "He gathered 50+ feedback surveys from diverse users (tech students, professionals, older adults) — "
            "far exceeding the 20-per-group requirement. "
            "Based on feedback, he implemented break reminders, relaxation windows, larger buttons, and simplified onboarding. "
            "He obtained IRB (Institutional Review Board) approval for ethical user testing. "
            "Result: Feedback-driven design recognized by the professor as a model for user-centered design. "
            "Several UF Innovate companies expressed interest in developing a full version of the app. "
            "Stack: React Native (chosen over Flutter for JavaScript familiarity and Firebase integration)."
        )
    },
]


# ---------------------------------------------------------------------------
# Embedding generation
# ---------------------------------------------------------------------------

def embed_text(text: str) -> list[float]:
    result = genai.embed_content(
        model=EMBEDDING_MODEL,
        content=text,
        task_type="retrieval_document"
    )
    return result["embedding"]


def main():
    print(f"Generating embeddings for {len(CHUNKS)} chunks...")
    print(f"Output: {OUTPUT_PATH}\n")

    enriched = []
    for i, chunk in enumerate(CHUNKS):
        print(f"  [{i+1}/{len(CHUNKS)}] {chunk['id']} ...", end=" ", flush=True)
        embedding = embed_text(chunk["text"])
        enriched.append({**chunk, "embedding": embedding})
        print("done")
        # Respect free-tier rate limits (60 requests/min)
        if i < len(CHUNKS) - 1:
            time.sleep(1.1)

    output = {
        "metadata": {
            "generated_at": datetime.utcnow().isoformat() + "Z",
            "embedding_model": EMBEDDING_MODEL,
            "num_chunks": len(enriched),
        },
        "chunks": enriched,
    }

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, separators=(",", ":"))

    print(f"\nKnowledge base saved to {OUTPUT_PATH}")
    print("Done! Deploy to Vercel and set GOOGLE_API_KEY in environment variables.")


if __name__ == "__main__":
    main()
