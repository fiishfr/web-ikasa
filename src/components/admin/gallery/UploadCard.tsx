import { ImagePlus } from "lucide-react";

export default function UploadCard() {
  return (
    <button className="flex h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white transition hover:border-red-800 hover:bg-red-50">

      <div className="mb-5 rounded-full bg-blue-100 p-5">
        <ImagePlus className="text-red-900" size={32} />
      </div>

      <h3 className="text-xl font-semibold">
        Tarik & Lepas Foto
      </h3>

      <p className="mt-3 text-center text-sm text-slate-500">
        atau klik untuk memilih foto
        <br />
        Maksimal 10MB / foto
      </p>

    </button>
  );
}