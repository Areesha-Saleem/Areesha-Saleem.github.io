export type ProjectCategory = "Marketing & SEO Tools" | "AI Automation" | "AI & ML" | "Software";

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  /**
   * Where the "Visit" button redirects to.
   * Leave as "" and the card shows a "Link coming soon" state.
   */
  url: string;
  /** Optional small label on the card, e.g. "Live" */
  badge?: string;
  /** Highlighted with a shinier border on the grid */
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  /** Free text shown as the date line, e.g. "Aug 2026 – Present" */
  period: string;
  /** Optional duration chip, e.g. "1 yr 3 mos" */
  duration?: string;
  current?: boolean;
  bullets: string[];
  badge?: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  isNew?: boolean;
  items: string[];
}

export interface Certification {
  issuer: string;
  name: string;
  date: string;
}

export interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  detail: string;
}

export interface Achievement {
  icon: string;
  text: string;
}
