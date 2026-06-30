import { Eye, Target } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const missions = [
  "Mempererat silaturahmi antar alumni lintas angkatan.",
  "Membangun jaringan profesional alumni.",
  "Mendukung pengembangan SMA IT Al Irsyad.",
  "Melaksanakan kegiatan sosial kemasyarakatan."
];

export default function VisionMission() {
  return (
    <Reveal>
    <section className="bg-slate-50">
      <div className="container mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-6 flex items-center gap-3">
            <Eye className="text-red-900" />
            <h3 className="text-2xl font-bold text-red-900">
              Visi
            </h3>
          </div>
          <p className="leading-8 text-gray-600">
            Menjadi organisasi alumni yang profesional,
            inovatif, dan berdaya guna dalam membangun
            almamater serta memberikan manfaat bagi bangsa.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-6 flex items-center gap-3">
            <Target className="text-red-900" />
            <h3 className="text-2xl font-bold text-red-900">
              Misi
            </h3>
          </div>
          <ul className="space-y-4">
            {missions.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-gray-600"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-red-900" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </Reveal>
  );
}