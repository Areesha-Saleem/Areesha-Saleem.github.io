import type { Achievement, Certification, EducationItem } from "../types";

export const certifications: Certification[] = [
  { issuer: "Google Cloud", name: "Introduction to Large Language Models", date: "Aug 2025" },
  { issuer: "HP Foundation", name: "AI for Business Professionals", date: "Aug 2025" },
  { issuer: "HP Foundation", name: "Data Science & Analytics", date: "Aug 2025" },
  { issuer: "Forage", name: "British Airways Data Science Simulation", date: "Aug 2025" },
  { issuer: "Forage", name: "Commonwealth Bank Data Science Simulation", date: "Aug 2025" },
  { issuer: "Microsoft", name: "Azure Data Fundamentals — DP-900", date: "In Progress" },
];

export const education: EducationItem[] = [
  {
    year: "2024 – 2028",
    institution: "University of Management and Technology",
    degree: "BSc Computer Science",
    detail: "CGPA: 3.63 / 4.0",
  },
  {
    year: "2022 – 2024",
    institution: "Lahore College of Arts and Sciences (LACAS)",
    degree: "A-Levels (CAIEs)",
    detail: "Computer Science · Physics · Law · Global Perspectives & Research",
  },
  {
    year: "2019 – 2022",
    institution: "American Lyceum International School",
    degree: "O-Levels (CAIEs)",
    detail: "5 A's & 3 B's",
  },
];

export const achievements: Achievement[] = [
  { icon: "◉", text: "TEDx Management Head — leading the team behind the event" },
  { icon: "★", text: "Best Intern — Digifloat LLC & LACAS Art Coach Program" },
  { icon: "✎", text: 'Research Paper Author — "Will AI Surpass Human Intelligence?"' },
  { icon: "❏", text: "EVOKE Magazine Editor — designed and managed editorial content" },
  { icon: "♪", text: "Voice-over Artist — Lyceum Education App" },
  { icon: "◎", text: "LACAS MUN Socials Team · NSBP Qualifier · Debating Competitor" },
  {
    icon: "✧",
    text: "Toyota Dream Car Contest Winner · IKLC 2× Key to Success · Unique Aerobics Championship 2015",
  },
];
