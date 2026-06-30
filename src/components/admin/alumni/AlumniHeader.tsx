import { Plus } from "lucide-react";

export default function AlumniHeader() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h1 className="font-poppins text-3xl font-semibold text-gray-900">
          Manajemen Alumni
        </h1>

        <p className="mt-2 max-w-2xl text-base leading-7 text-stone-600">
          Kelola data alumni, verifikasi pendaftaran baru, dan perbarui status
          keanggotaan dalam jaringan portal IKASA.
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-red-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-900/20 transition hover:bg-red-800">
        <Plus size={18} />
        Daftar Alumni Baru
      </button>
    </div>
  );
}