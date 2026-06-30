import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

interface NewsItem {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
  createdAt: string;
  excerpt: string;
  category: {
    name: string;
    slug: string;
  };
}

interface RelatedNewsProps {
  news: NewsItem[];
}

export default function RelatedNews({
  news,
}: RelatedNewsProps) {
  if (news.length === 0) return null;

  return (
    <section className="mt-20">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="font-jakarta text-3xl font-bold text-neutral-900">
            Berita Lainnya
          </h2>

          <p className="mt-2 text-neutral-500">
            Temukan berita terbaru lainnya dari IKASA.
          </p>

        </div>

        <Link
          href="/berita"
          className="
            hidden
            items-center
            gap-2
            font-medium
            text-red-900
            transition
            hover:gap-3
            lg:flex
          "
        >
          Lihat Semua

          <ArrowRight size={18} />
        </Link>

      </div>

      {/* Card */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {news.map((item) => (

          <Link
            key={item.id}
            href={`/berita/${item.slug}`}
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-neutral-200
              bg-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >

            {/* Image */}

            <div className="relative aspect-video overflow-hidden">

              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

            </div>

            {/* Content */}

            <div className="p-6">

              <h3
                className="
                  mt-4
                  line-clamp-2
                  font-jakarta
                  text-xl
                  font-bold
                  transition
                  group-hover:text-red-900
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  line-clamp-3
                  text-sm
                  leading-7
                  text-neutral-600
                "
              >
                {item.excerpt}
              </p>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-neutral-500
                "
              >
                <CalendarDays size={16} />

                {item.createdAt}
              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* Mobile Button */}

      <div className="mt-8 lg:hidden">

        <Link
          href="/berita"
          className="
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-red-900
            px-5
            py-3
            font-medium
            text-white
          "
        >
          Lihat Semua

          <ArrowRight size={18} />
        </Link>

      </div>

    </section>
  );
}