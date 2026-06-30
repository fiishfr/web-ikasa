export type Organization = {
  name: string;
  role: string;
  year: string;
  description: string;
};

export type Alumni = {
  id: number;

  name: string;

  year: number;

  image: string;

  about: string;

  email: string;

  instagram: string;

  whatsapp?: string;

  website?: string;

  university: string;

  company: string;

  job: string;

  city: string;

  organizations: Organization[];

  highlights: string[];
};

