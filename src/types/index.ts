export interface PostSection {
  type: "intro" | "section" | "conclusion" | "cta";
  heading?: string;
  content: string;
}

export interface PostFAQ {
  question: string;
  answer: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  sections?: PostSection[];
  faq?: PostFAQ[];
  date: string;
  tags: string[];
  image: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  reto: string;
  solucion: string;
  resultado: string;
  resultadoImage: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
