export interface BoardMember {
  name: string;
  role: string;
  quote?: string;
  fullSpeech?: string;
  image?: string;
}

export interface Trail {
  slug: string;
  name: string;
  type: "walking" | "hiking";
  distance: string;
  difficulty: "سهل" | "متوسط" | "صعب";
  description: string;
  details?: string;
  gatheringPoint?: string;
  gatheringTime?: string;
  image?: string;
  location?: { lat: number; lng: number };
}

export interface NewsArticle {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  image?: string;
}

export interface Event {
  slug: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  image?: string;
  participants?: number;
  volunteers?: number;
}

export interface Program {
  slug: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants?: { men: number; women?: number };
  details?: string;
  image?: string;
}

export interface Partner {
  name: string;
  description?: string;
  logo?: string;
  website?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface ContactInfo {
  phone: string;
  nationalNumber: string;
  email: string;
  address: string;
  workHours: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
}
