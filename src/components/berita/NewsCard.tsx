import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

interface Props {
  news: any;
}

export default function NewsCard({
  news,
}: Props) {
  return (
    <Link
      href={`/berita/${news.slug}`}
      className="
        group
        overflow-hidden
        rounded-[28px]
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div className="relative aspect-16/10 overflow-hidden">

        <Image
          src={news.thumbnail}
          alt={news.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      <div className="p-7">

        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-900">
          {news.category.name}
        </span>

        <h3 className="mt-5 line-clamp-2 font-jakarta text-2xl font-bold transition group-hover:text-red-900">
          {news.title}
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-neutral-600">
          {news.excerpt}
        </p>

        <div className="mt-7 flex items-center justify-between">

          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <CalendarDays size={16} />
            {news.createdAt}
          </div>

          <ArrowRight
            size={20}
            className="transition group-hover:translate-x-2"
          />

        </div>

      </div>

    </Link>
  );
}