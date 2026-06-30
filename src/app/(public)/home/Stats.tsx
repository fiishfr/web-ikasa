import { Reveal } from "@/components/ui/reveal";

export function Stats() {
  const stats = [
    {
      label: "Alumni Terdaftar",
      value: "2145+",
    },
    {
      label: "Angkatan",
      value: "16",
    },
    {
      label: "Kegiatan",
      value: "23",
    },
  ];

  return (
    <Reveal>
    <section className="relative z-20 -mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                rounded-3xl
                border
                border-white/20
                bg-white/80
                px-2
                py-14
                text-center
                backdrop-blur-md
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              <h3 className="text-5xl font-bold text-red-900">
                {item.value}
              </h3>

              <p className="mt-3 text-3xs font-medium text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}