import { getNews } from "@/lib/news";

import HeroNews from "@/components/berita/Hero";
import NewsGrid from "@/components/berita/NewsGrid";

export const metadata = {
  title: "Berita | IKASA",
  description: "Berita terbaru IKASA",
};

export default async function NewsPage() {
  const news = await getNews();

  if (news.length === 0) {
    return (
      <main className="mx-auto max-w-7xl py-20 text-center">
        <h1 className="text-3xl font-bold">
          Belum ada berita
        </h1>
      </main>
    );
  }

  const hero = news[0];

  return (
    <main className="bg-slate-50">
      <HeroNews news={hero} />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <NewsGrid news={news.slice(1)} />
      </section>
    </main>
  );
}