import type { Project } from "../types";

/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS
 *  Every project has a `url` field — that's where the "Visit"
 *  button redirects. Paste the link between the quotes.
 *  Leave it as "" to show a "Link coming soon" state.
 * ─────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  // ── NEW: marketing & SEO intelligence tools ──────────────────
  {
    id: "adscope",
    title: "AdScope",
    description:
      "Ad-spy platform that pulls ads from Meta, TikTok, LinkedIn and Google — then collects every data point and analyzes it, so you can see what creatives, hooks and offers are actually winning.",
    stack: ["Meta Ads", "TikTok Ads", "LinkedIn Ads", "Google Ads", "Data Analysis", "TypeScript"],
    category: "Marketing & SEO Tools",
    url: "", // ← paste AdScope link here
    badge: "New",
    featured: true,
  },
  {
    id: "serpsummary",
    title: "SERPSummary",
    description:
      "Search-results intelligence tool that turns a SERP into a clear, summarized breakdown you can act on — live at serpsummary.com.",
    stack: ["SERP Analysis", "SEO", "LLMs", "TypeScript"],
    category: "Marketing & SEO Tools",
    url: "https://serpsummary.com",
    badge: "Live",
    featured: true,
  },
  {
    id: "shelfwise",
    title: "ShelfWise",
    description:
      "Marketing tool built to help brands understand and improve how their products show up and perform — turning market data into clear next steps.",
    stack: ["Marketing", "Analytics", "AI", "TypeScript"],
    category: "Marketing & SEO Tools",
    url: "", // ← paste ShelfWise link here
    badge: "New",
    featured: true,
  },
  {
    id: "robots-analyzer",
    title: "Robots.txt Analyzer",
    description:
      "Fetches and parses any site's robots.txt, flags crawl rules, blocked paths and sitemap declarations, and highlights SEO and crawlability issues.",
    stack: ["Technical SEO", "Parsing", "TypeScript"],
    category: "Marketing & SEO Tools",
    url: "", // ← paste Robots.txt Analyzer link here
    badge: "New",
  },
  {
    id: "llms-analyzer",
    title: "llms.txt Analyzer",
    description:
      "Checks whether a website publishes an llms.txt file, validates its structure, and shows how well the site is prepared for AI crawlers and answer engines.",
    stack: ["llms.txt", "AI Search", "Technical SEO", "TypeScript"],
    category: "Marketing & SEO Tools",
    url: "", // ← paste llms.txt Analyzer link here
    badge: "New",
  },
  {
    id: "subdomain-analyzer",
    title: "Subdomain Analyzer",
    description:
      "Discovers and maps a domain's subdomains, then analyzes them so you can see a site's real footprint, structure and attack/SEO surface at a glance.",
    stack: ["DNS", "Recon", "Web Scraping", "TypeScript"],
    category: "Marketing & SEO Tools",
    url: "", // ← paste Subdomain Analyzer link here
    badge: "New",
  },
  {
    id: "techstack-analyzer",
    title: "TechStack Analyzer",
    description:
      "Detects the technologies behind any website — frameworks, CMS, analytics, hosting and marketing tools — and presents the full stack in a clean report.",
    stack: ["Fingerprinting", "Web Scraping", "Analytics", "TypeScript"],
    category: "Marketing & SEO Tools",
    url: "", // ← paste TechStack Analyzer link here
    badge: "New",
  },

  // ── AI automation ────────────────────────────────────────────
  {
    id: "email-summarizer",
    title: "Automated Email Summarization & Notification System",
    description:
      "Unified pipeline combining Gmail, Outlook, and Titan Mail with AI-powered summarization, categorization, priority tagging, and Discord digest notifications.",
    stack: ["n8n", "OpenAI API", "Gmail API", "Microsoft Graph", "Discord Webhooks"],
    category: "AI Automation",
    url: "",
  },
  {
    id: "voice-agent",
    title: "Voice Agent System",
    description:
      "Production-grade AI voice agent handling inbound/outbound calls via Twilio and WhatsApp Business API. Integrates ElevenLabs for realistic voice, Flowise for RAG-powered conversation logic, and n8n for end-to-end orchestration — 24/7 automated customer interaction.",
    stack: ["Twilio", "WABA", "ElevenLabs", "Flowise", "n8n"],
    category: "AI Automation",
    url: "",
  },
  {
    id: "lead-followup",
    title: "AI Lead Follow-Up Agent",
    description:
      "Automated lead nurturing agent on n8n. Tracks lead status from CRM triggers, sends personalised follow-ups via email and WhatsApp, tailors tone with AI, and escalates hot leads to human reps.",
    stack: ["n8n", "OpenAI API", "CRM Integration", "WhatsApp API", "Gmail API"],
    category: "AI Automation",
    url: "",
  },
  {
    id: "proposal-generator",
    title: "AI Customer Proposal Generator",
    description:
      "Proposal automation powered by n8n and LLMs. Ingests client requirements from forms or emails, generates structured branded proposals with dynamic pricing, exports to PDF/DOCX, and sends them — cutting turnaround from hours to minutes.",
    stack: ["n8n", "OpenAI API", "LLM Integration", "PDF Generation", "REST APIs"],
    category: "AI Automation",
    url: "",
  },
  {
    id: "content-poster",
    title: "AI-Automated Content Posting App",
    description:
      "AI-powered content automation that generates, schedules, and publishes across platforms using LLM integration and n8n workflows.",
    stack: ["n8n", "LLM Integration", "OpenAI API"],
    category: "AI Automation",
    url: "",
  },
  {
    id: "job-scraper",
    title: "Automated Job Data Scraper",
    description:
      "Parameterized Indeed scraping pipeline with anti-bot bypass, automated pagination, and JSON/CSV export to Google Drive and databases.",
    stack: ["n8n", "ZenRows API", "JavaScript", "HTTP APIs"],
    category: "AI Automation",
    url: "",
  },

  // ── AI & ML ──────────────────────────────────────────────────
  {
    id: "ocr",
    title: "Multilingual OCR on National Documents",
    description:
      "Deep learning pipeline extracting data from Pakistani national documents — CNICs, stamp papers, and NOCs. YOLOv8 for region detection, PaddleOCR and Qaari OCR for Urdu/Arabic/English, with PIL preprocessing for skewed, low-res scans.",
    stack: ["PaddleOCR", "Qaari OCR", "YOLOv8", "PIL", "Deep Learning", "Python"],
    category: "AI & ML",
    url: "",
  },
  {
    id: "xray",
    title: "Chest X-Ray AI Diagnostic Tool",
    description:
      "CNN-based tool for automated pneumonia detection from chest X-rays, with preprocessing, augmentation, and evaluation pipelines.",
    stack: ["PyTorch", "CNNs", "Python"],
    category: "AI & ML",
    url: "",
  },
  {
    id: "movie-rec",
    title: "Movie Recommendation System",
    description:
      "Content-based filtering with TF-IDF vectorization and cosine similarity on TMDb/IMDb datasets.",
    stack: ["Python", "Pandas", "Scikit-learn", "NLP"],
    category: "AI & ML",
    url: "",
  },

  // ── Software ─────────────────────────────────────────────────
  {
    id: "erp",
    title: "ERP System Backend",
    description:
      "Fully functional ERP backend handling inventory, user management, and reporting with RESTful APIs, robust authentication, and enterprise-grade data validation.",
    stack: ["Python", "REST APIs", "SQL"],
    category: "Software",
    url: "",
  },
  {
    id: "memo",
    title: "Memo System — UI & Backend",
    description:
      "Complete memo management app with a responsive Vite frontend and Node/Express backend. Full CRUD, user auth, and document templating.",
    stack: ["Python", "Vite", "Express.js"],
    category: "Software",
    url: "",
  },
  {
    id: "voting",
    title: "Online Voting System",
    description:
      "Console-based CNIC-authenticated voting system demonstrating OOP principles with persistent file storage.",
    stack: ["C++", "OOP", "File Handling"],
    category: "Software",
    url: "",
  },
];

export const projectFilters = [
  "All",
  "Marketing & SEO Tools",
  "AI Automation",
  "AI & ML",
  "Software",
] as const;
