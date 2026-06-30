import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-stone-200 bg-blue-50 px-6 py-4 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-stone-600">
        Menampilkan <span className="font-semibold text-gray-900">1</span>{" "}
        hingga <span className="font-semibold text-gray-900">3</span> dari{" "}
        <span className="font-semibold text-gray-900">124</span> alumni
      </p>

      <div className="flex items-center gap-2">
        <button
          disabled
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-300 text-stone-400 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={16} />
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-900 font-medium text-white">
          1
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 hover:bg-white">
          2
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 hover:bg-white">
          3
        </button>

        <span className="px-2 text-gray-500">...</span>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-300 hover:bg-white">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}