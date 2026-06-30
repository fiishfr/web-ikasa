import { Filter, Upload } from "lucide-react";

export default function GalleryHeader() {
  return (
    <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      <div>
        <h1 className="text-3xl font-semibold text-slate-900">
          Manajemen Galeri
        </h1>

        <p className="mt-2 max-w-2xl text-slate-600">
          Kelola foto-foto kegiatan IKASA. Anda dapat mengunggah,
          menghapus, serta mengelompokkan foto berdasarkan kategori.
        </p>
      </div>

      <div className="flex gap-3">

        <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-red-900 transition hover:bg-slate-100">
          <Filter size={18} />
          Filter
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-red-900 px-5 py-3 text-white transition hover:bg-red-800">
          <Upload size={18} />
          Upload Foto
        </button>

      </div>
    </section>
  );
}