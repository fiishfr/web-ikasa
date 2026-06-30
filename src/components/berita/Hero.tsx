import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

interface HeroNewsProps {
  news: any;
}

export default function HeroNews({
  news,
}: HeroNewsProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-14">

      <div className="mb-10 text-center">

        <span className="font-semibold uppercase tracking-[0.3em] text-red-900">
          Berita
        </span>

        <h1 className="mt-4 font-jakarta text-5xl font-bold">
          Berita IKASA
        </h1>

        <p className="mt-4 text-neutral-600">
          Update terbaru mengenai kegiatan,
          organisasi, alumni, dan berbagai
          informasi IKASA.
        </p>

      </div>

      <Link
        href={`/berita/${news.slug}`}
        className="
        group
        grid
        overflow-hidden
        rounded-[32px]
        bg-white
        shadow-lg
        transition
        hover:-translate-y-1
        lg:grid-cols-2
      "
      >
        <div className="relative h-80 lg:h-full">

          <Image
            src={news.thumbnail}
            alt={news.title}
            fill
            priority
            className="object-cover transition duration-500 group-hover:scale-105"
          />

        </div>

        <div className="flex flex-col justify-center p-10">

          <span className="mb-5 inline-flex w-fit rounded-full bg-red-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-900">
            {news.category?.name ?? "Tanpa Kategori"}
          </span>

          <h2 className="font-jakarta text-4xl font-bold leading-tight transition group-hover:text-red-900">
            {news.title}
          </h2>

          <p className="mt-6 line-clamp-4 leading-8 text-neutral-600">
            {news.excerpt}
          </p>

          <div className="mt-8 flex items-center justify-between">

            <div className="flex items-center gap-2 text-neutral-500">
              <CalendarDays size={18} />

              {news.createdAt}
            </div>

            <span className="flex items-center gap-2 font-semibold text-red-900">
              Baca Selengkapnya

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-2"
              />
            </span>

          </div>

        </div>

      </Link>

    </section>
  );
}