import Image from "next/image";
import { Reveal } from "../ui/reveal";

export default function Hero() {
  return (
    <Reveal>
    <section className="relative overflow-hidden rounded-3xl">

      <Image
        src="/images/events/banner.jpg"
        alt="Kegiatan"
        width={1600}
        height={500}
        className="h-80 w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-red-900/90 via-red-900/60 to-transparent" />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-2xl px-14">

          <h1 className="text-5xl font-bold text-white">
            Kegiatan Alumni
          </h1>

          <p className="mt-4 text-lg leading-8 text-white/90">
            Ikuti berbagai acara menarik, perluas jaringan,
            dan bangun kenangan bersama keluarga besar IKASA.
          </p>

        </div>

      </div>

    </section>
    </Reveal>
  );
}