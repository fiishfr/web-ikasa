export interface News {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  thumbnail: string | null;
  author: string | null;
  category_id: string | null;
  published: boolean;
  created_at: string;

  category: {
    id: string;
    name: string;
    slug: string;
  } | null;
}