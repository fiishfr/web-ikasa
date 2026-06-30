import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "SCAFO (Silaturahmi Akbar Alumni)",
    description:
      "Ajang pertemuan akbar tahunan seluruh angkatan untuk bernostalgia, memperluas jaringan, dan merumuskan program kerja strategis IKASA ke depan.",
    image: "/images/scafo-1.jpg",
  },
  {
    title: "IKASA Soccer League",
    description:
      "Kompetisi sepak bola persahabatan antar angkatan yang bertujuan menjaga kesehatan fisik dan sportivitas sambil mempererat keakraban sesama alumni.",
    image: "/images/ikasa.jpg",
  },
];

export default function Programs() {
  return (
    <section className="bg-[#F8F9FB] py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Program & Kegiatan Utama
          </h2>

          <p className="mt-3 text-slate-500">
            Berbagai inisiatif untuk mempererat hubungan dan memberikan manfaat.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.title}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-72">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                  {program.title}
                </h3>

                <p className="mb-5 text-slate-600 leading-7">
                  {program.description}
                </p>

                <Link
                  href="/kegiatan"
                  className="font-semibold text-red-800 hover:text-red-900"
                >
                  Lihat Detail →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}