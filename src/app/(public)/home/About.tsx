import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <Reveal>
    <section className="pt-28 pb-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="font-heading text-4xl font-semibold text-slate-900">
              Tentang IKASA
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Ikatan Alumni SMA IT Al Irsyad Purwokerto (IKASA)
              adalah wadah resmi bagi seluruh lulusan untuk
              menjaga tali silaturahmi, berbagi inspirasi,
              dan berkontribusi bagi almamater serta masyarakat.
              Kami berkomitmen membangun jaringan profesional
              yang kuat dan saling mendukung di berbagai bidang.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Melalui berbagai program dan kegiatan,
              IKASA berupaya menjadi jembatan penghubung
              antar angkatan, memfasilitasi pengembangan diri,
              dan memberikan dampak positif yang nyata.
              Bergabunglah bersama kami untuk melanjutkan
              semangat persaudaraan dan keunggulan.
            </p>

            <div className="mt-8">
              <Link
                href="/profile"
                className="
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-red-900
                  px-6
                  text-sm
                  font-medium
                  text-red-900
                  transition-colors
                  hover:bg-red-900
                  hover:text-white
                "
              >
                Selengkapnya
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/hero.jpg"
                alt="Tentang IKASA"
                width={600}
                height={400}
                className="h-95 w-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div
              className="
                absolute
                -bottom-5
                -right-5
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-white
                shadow-xl
              "
            >
              <span className="text-3xl text-red-900">
                🎓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}