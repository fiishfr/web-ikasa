import { ChevronDown } from "lucide-react";

export default function GalleryToolbar() {
  return (
    <section className="flex flex-col gap-5 border-b pb-4 lg:flex-row lg:items-center lg:justify-between">

      <div className="flex flex-wrap gap-6">

        <button className="border-b-2 border-red-900 pb-2 font-semibold text-red-900">
          Semua Foto
        </button>

        <button className="pb-2 text-slate-600">
          SCAFO
        </button>

        <button className="pb-2 text-slate-600">
          Soccer League
        </button>

      </div>

      <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2">
        Terbaru
        <ChevronDown size={18} />
      </button>

    </section>
  );
}