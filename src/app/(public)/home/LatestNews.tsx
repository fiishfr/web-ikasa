import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const news = [
  {
    id: 1,
    title: "SCAFO 2025 Berhasil Mengumpulkan Lebih dari 500 Alumni",
    excerpt:
      "Silaturahmi Akbar Alumni tahun ini menjadi momentum penting untuk memperkuat kolaborasi lintas angkatan.",
    image: "/images/scafo-1.jpg",
    date: "12 Januari 2025",
    slug: "scafo-2025",
  },
  {
    id: 2,
    title: "IKASA Soccer League Resmi Dibuka",
    excerpt:
      "Kompetisi tahunan antar angkatan kembali digelar dengan antusiasme tinggi.",
    image: "/images/ikasa.jpg",
    date: "5 Januari 2025",
    slug: "soccer-league",
  },
  {
    id: 3,
    title: "Program Mentoring Alumni Dimulai",
    excerpt:
      "Alumni senior akan mendampingi siswa dan alumni muda dalam pengembangan karier.",
    image: "/images/news/mentoring.jpg",
    date: "28 Desember 2024",
    slug: "mentoring-alumni",
  },
];

export function LatestNews() {
  const featured = news[0];
  const others = news.slice(1);

  return (
    <Reveal>
    <section className="pt-28 pb-0">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-heading text-4xl font-bold text-slate-900">
            Berita Terbaru
          </h2>

          <p className="mt-3 font-semibold text-slate-600">
            Informasi dan perkembangan terbaru dari IKASA.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Featured */}
          <article
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              shadow-md
              transition
              hover:shadow-xl
              lg:col-span-2
            "
          >
            <div className="relative h-95 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            <div className="p-8">
              <p className="text-sm text-slate-500">
                {featured.date}
              </p>

              <h3 className="mt-3 font-heading text-3xl font-semibold text-slate-900">
                {featured.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {featured.excerpt}
              </p>

              <Link
                href={`/berita/${featured.slug}`}
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-red-900
                "
              >
                Baca Selengkapnya
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Side News */}
          <div className="flex flex-col gap-8">
            {others.map((item) => (
              <article
                key={item.id}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-md
                  transition
                  hover:shadow-lg
                "
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <div className="p-5">
                  <p className="text-xs text-slate-500">
                    {item.date}
                  </p>

                  <h3 className="mt-2 font-heading text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.excerpt}
                  </p>

                  <Link
                    href={`/berita/${item.slug}`}
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-red-900
                    "
                  >
                    Baca
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/berita"
            className="
              inline-flex
              h-12
              items-center
              justify-center
              rounded-lg
              border
              border-red-900
              px-6
              text-sm
              font-medium
              text-red-900
              transition
              hover:bg-red-900
              hover:text-white
            "
          >
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
    </Reveal>
  );
}