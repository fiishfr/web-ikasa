import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <Reveal>
    <section className="relative">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Kegiatan alumni IKASA"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/50" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto flex min-h-165 max-w-7xl items-center justify-center px-6">
          <div className="max-w-3xl text-center mb-20" >
            <h1 className="font-heading text-5xl font-bold tracking-tight text-white leading-none md:text-6xl lg:text-7xl">
              IKASA
            </h1>

            <h2 className="mt-2 font-heading text-xl font-semibold text-white leading-none md:text-2xl">
              Ikatan Alumni SMA IT Al Irsyad Purwokerto
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-base leading-6 text-slate-200 md:text-lg">
              Menjalin silaturahmi, menguatkan kontribusi,
              dan membangun masa depan bersama alumni
              SMA IT Al Irsyad Purwokerto.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/daftar-alumni"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-lg
                  bg-red-900
                  px-8
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:bg-red-800
                "
              >
                Daftar Alumni
              </Link>

              <Link
                href="/alumni"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white
                  px-8
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:bg-white/10
                "
              >
                Direktori Alumni
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}