export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
  details?: string[];
}
