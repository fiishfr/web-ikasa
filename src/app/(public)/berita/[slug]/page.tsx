import ReadingProgress from "@/components/berita/ReadingProgress";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import Hero from "@/components/berita/Hero";
import NewsContent from "@/components/berita/NewsContent";
import NewsSidebar from "@/components/berita/NewsSidebar";
import RelatedNews from "@/components/berita/RelatedNews";

import {
  getNewsBySlug,
  getRelatedNews,
} from "@/lib/news";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const news = await getNewsBySlug(slug);

  if (!news) {
    return {
      title: "Berita Tidak Ditemukan | IKASA",
    };
  }

  return {
    title: `${news.title} | IKASA`,
    description: news.excerpt,

    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: [
        {
          url: news.thumbnail,
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const news = await getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  const relatedNews = await getRelatedNews(news.id);

  return (
    <>
      <ReadingProgress />

      <Hero news={news} />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <NewsContent news={news} />
          </div>

          <aside>
            <NewsSidebar news={news} />
          </aside>
        </div>
      </section>

      <RelatedNews news={relatedNews} />
    </>
  );
}