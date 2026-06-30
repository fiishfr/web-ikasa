import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function EventToolbar() {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            pl-11
            pr-4
            py-3
            focus:border-red-900
            focus:ring-4
            focus:ring-red-100
            outline-none
            transition
            "
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <button className="rounded-full bg-red-900 px-5 py-2 text-xs font-semibold text-white transition hover:bg-red-800">
            All Events
          </button>

          <button className="rounded-full border border-slate-300 bg-slate-50 px-5 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100">
            Upcoming
          </button>

          <button className="rounded-full border border-slate-300 bg-slate-50 px-5 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100">
            Past
          </button>

          <button className="flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100">
            <SlidersHorizontal size={15} />
            More Filters
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
