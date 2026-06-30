import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function EventPagination() {
  return (
    <div className="flex items-center justify-center gap-2 pt-2">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-400 transition hover:border-red-900 hover:text-red-900 disabled:cursor-not-allowed disabled:opacity-50"
        disabled
      >
        <ChevronLeft size={18} />
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900 text-sm font-medium text-white shadow transition hover:bg-red-800">
        1
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-sm font-medium text-slate-600 transition hover:border-red-900 hover:text-red-900">
        2
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-sm font-medium text-slate-600 transition hover:border-red-900 hover:text-red-900">
        3
      </button>

      <span className="px-2 text-slate-500">...</span>

      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-red-900 hover:text-red-900">
        <ChevronRight size={18} />
      </button>
    </div>
  );
}