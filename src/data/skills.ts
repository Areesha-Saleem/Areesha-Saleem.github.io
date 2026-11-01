import type { SkillGroup } from "../types";

// Groups flagged `isNew` get a little "NEW" sparkle badge.
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "‹/›",
    items: ["TypeScript", "Python", "JavaScript", "C++", "SQL", "T-SQL", "MySQL"],
  },
  {
    title: "AI & Machine Learning",
    icon: "✦",
    items: [
      "OpenAI API",
      "LLMs",
      "Prompt Engineering",
      "LLM Workflows",
      "PyTorch",
      "Scikit-learn",
      "CNNs",
      "NLP / TF-IDF",
    ],
  },
  {
    title: "Automation",
    icon: "❖",
    items: [
      "n8n",
      "REST APIs",
      "Webhooks",
      "ZenRows API",
      "Gmail API",
      "Microsoft Graph",
      "Discord Webhooks",
    ],
  },
  {
    title: "Marketing & SEO Intelligence",
    icon: "◎",
    isNew: true,
    items: [
      "Ad Intelligence",
      "SERP Analysis",
      "Technical SEO",
      "robots.txt & llms.txt",
      "Subdomain Discovery",
      "Tech-Stack Detection",
      "Web Scraping",
    ],
  },
  {
    title: "Frontend & Web",
    icon: "◈",
    isNew: true,
    items: ["TypeScript", "React", "Vite", "Framer Motion", "HTML / CSS"],
  },
  {
    title: "Backend & Tools",
    icon: "⌘",
    items: ["Express.js", "Node.js", "Streamlit", "Jupyter", "SSMS", "VS Code"],
  },
  {
    title: "Data & Analytics",
    icon: "▦",
    items: ["Pandas", "NumPy", "PySpark", "Power BI", "DAX", "Data Warehousing"],
  },
  {
    title: "Cloud & DevOps",
    icon: "◍",
    items: ["Azure (DP-900)", "Databricks", "Git", "GitHub", "GitHub Actions"],
  },
  {
    title: "Leadership",
    icon: "♛",
    isNew: true,
    items: ["Event Management", "Team Leadership", "Stakeholder Coordination", "Public Speaking"],
  },
];

/** Scrolling marquee strip under the hero */
export const marqueeItems: string[] = [
  "TypeScript",
  "React",
  "Python",
  "n8n",
  "OpenAI API",
  "LLM Workflows",
  "Web Scraping",
  "SEO Analysis",
  "Ad Intelligence",
  "PyTorch",
  "Azure",
  "Power BI",
];
