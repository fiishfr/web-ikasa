import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const activities = [
  {
    title: "SCAFO (Silaturahmi Akbar Alumni)",
    description:
      "Ajang pertemuan akbar tahunan seluruh angkatan untuk bernostalgia, memperluas jaringan, dan merumuskan program kerja strategis IKASA ke depan.",
    image: "/images/scafo.jpg",
    slug: "scafo",
  },
  {
    title: "IKASA Soccer League",
    description:
      "Kompetisi sepak bola persahabatan antar angkatan yang bertujuan menjaga kesehatan fisik dan sportivitas sambil mempererat keakraban sesama alumni.",
    image: "/images/soccer-league.jpg",
    slug: "ikasa-soccer-league",
  },
];

export function Activities() {
  return (
    <Reveal>
    <section className="pt-28 pb-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-slate-200 px-8 py-12 lg:px-12">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-bold text-slate-900">
              Program & Kegiatan Utama
            </h2>

            <p className="mt-3 font-semibold text-slate-700">
              Berbagai inisiatif untuk mempererat hubungan,
              mengembangkan potensi, dan memberikan manfaat
              bagi seluruh alumni IKASA.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {activities.map((activity) => (
              <article
                key={activity.slug}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  border
                  border-slate-200
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-semibold text-slate-900">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {activity.description}
                  </p>

                  <Link
                    href={`/kegiatan/${activity.slug}`}
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-red-900
                      transition-all
                      group-hover:gap-3
                    "
                  >
                    Lihat Detail

                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}