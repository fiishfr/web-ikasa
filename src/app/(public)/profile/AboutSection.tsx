import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
export default function AboutSection() {
  return (
    <Reveal>
    <section className="container mx-auto max-w-7xl px-6 py-15">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-red-900">
            Tentang Kami
          </h2>
          <div className="mt-8 space-y-6 text-gray-600 leading-8">
            <p>
              IKASA merupakan wadah resmi seluruh alumni SMA IT
              Al Irsyad Al Islamiyyah Purwokerto yang dibangun
              atas dasar ukhuwah, profesionalisme, dan kontribusi
              nyata terhadap almamater.
            </p>
            <p>
              Kami menjadi jembatan kolaborasi antara alumni,
              sekolah, dan masyarakat sehingga setiap alumni
              mampu memberikan manfaat sesuai bidangnya.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/hero.jpg"
            alt="IKASA"
            width={700}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
    </Reveal>
  );
}