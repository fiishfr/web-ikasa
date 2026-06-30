import Image from "next/image";
import { Alumni } from "@/types/alumni";
import { Reveal } from "../ui/reveal";

type Props = {
  alumni: Alumni;
};

export default function Hero({ alumni }: Props) {
  return (
    <Reveal>
    <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-red-900 via-red-800 to-red-700" />

      <div className="relative px-10 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* Avatar */}
          <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-xl">
            <Image
              src={alumni.image}
              alt={alumni.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Profile */}
          <div className="text-center md:text-left">
            <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              IKASA Alumni
            </span>

            <h1 className="mt-4 text-4xl font-bold text-white">
              {alumni.name}
            </h1>

            <p className="mt-2 text-lg text-red-100">
              Angkatan tahun {alumni.year}
            </p>

            <p className="mt-1 text-red-200">
              {alumni.job}
            </p>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}