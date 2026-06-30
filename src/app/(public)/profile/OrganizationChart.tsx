import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const chairman = {
  name: "Ahmad Fauzi",
  position: "Ketua Umum",
  image: "/images/chairman.jpg",
};

const board = [
  {
    name: "Siti Nurhaliza",
    position: "Sekretaris Jenderal",
    image: "/images/secretary.jpg",
  },
  {
    name: "Budi Santoso",
    position: "Bendahara",
    image: "/images/treasurer.jpg",
  },
];

export default function OrganizationChart() {
  return (
    <Reveal>
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-900 md:text-4xl">
            Struktur Organisasi
          </h2>

          <p className="mt-3 text-gray-600">
            Kepengurusan IKASA Periode Berjalan
          </p>
        </div>

        {/* Ketua */}
        <div className="mt-14 flex justify-center">
          <OrganizationCard
            {...chairman}
            large
          />
        </div>

        {/* Garis Penghubung */}
        <div className="flex justify-center">
          <div className="h-10 w-px bg-red-200" />
        </div>

        {/* Sekretaris & Bendahara */}
        <div className="grid gap-8 md:grid-cols-2 lg:max-w-2xl lg:mx-auto">
          {board.map((member) => (
            <OrganizationCard
              key={member.position}
              {...member}
            />
          ))}
        </div>

      </div>
    </section>
    </Reveal>
  );
}

type CardProps = {
  image: string;
  name: string;
  position: string;
  large?: boolean;
};

function OrganizationCard({
  image,
  name,
  position,
  large = false,
}: CardProps) {
  return (
    <div
      className={`group rounded-3xl border border-gray-200 bg-slate-50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        large ? "w-72" : "w-full"
      }`}
    >
      <div
        className={`relative mx-auto overflow-hidden rounded-full ring-4 ring-blue-100 ${
          large ? "h-28 w-28" : "h-24 w-24"
        }`}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <h3
        className={`mt-5 font-semibold text-gray-900 ${
          large ? "text-2xl" : "text-lg"
        }`}
      >
        {name}
      </h3>

      <p
        className={`mt-2 font-semibold uppercase tracking-[0.2em] ${
          large ? "text-red-900" : "text-gray-600"
        } text-xs`}
      >
        {position}
      </p>
    </div>
  );
}