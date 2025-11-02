// Tipos para o CMS (Sanity)
export interface BlogPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
      url: string;
    };
    alt?: string;
  };
  body: any; // Portable Text do Sanity
  author?: {
    name: string;
    image?: string;
  };
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon?: string;
  link?: string;
  order?: number;
}

export interface Testimonial {
  _id: string;
  name: string;
  location?: string;
  role?: string;
  image?: {
    asset: {
      _ref: string;
      url: string;
    };
    alt?: string;
  };
  testimonial: string;
  rating?: number;
}

export interface Ebook {
  _id: string;
  title: string;
  description: string;
  cover: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  file: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  order?: number;
}

