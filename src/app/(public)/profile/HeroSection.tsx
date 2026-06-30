import { Reveal } from "@/components/ui/reveal";

export default function HeroSection() {
  return (
    <Reveal>
    <section className="relative overflow-hidden border-b bg-white">
      <div className="absolute inset-0 bg-linear-to-br from-red-50 via-white to-white" />
      <div className="relative container mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-red-900">
            Tentang IKASA
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Membangun ikatan persaudaraan yang kuat,
            meneruskan warisan kebaikan,
            serta memberdayakan alumni untuk memberikan
            dampak positif bagi almamater dan masyarakat.
          </p>
        </div>
      </div>
    </section>
    </Reveal>
  );
}