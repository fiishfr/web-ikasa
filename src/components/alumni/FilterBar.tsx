import cityOptions from "@/data/cities";
import universityOptions from "@/data/universities";

export default function FilterBar() {
  return (
    <div className="mt-10 rounded-2xl border bg-slate-200 p-5">
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Filter
        </span>

        {/* Angkatan */}
        <div className="relative">
          <select className="appearance-none rounded-xl border bg-white py-3 pl-4 pr-10">
            <option>Semua Angkatan</option>
          </select>

          <svg
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Kampus */}
        <div className="relative">
          <select className="appearance-none rounded-xl border bg-white py-3 pl-4 pr-10">
            <option>Semua Kampus</option>
          </select>

          <svg
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Domisili */}
        <div className="relative">
          <select className="appearance-none rounded-xl border bg-white py-3 pl-4 pr-10">
            <option>Semua Domisili</option>
          </select>

          <svg
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <button className="ml-auto text-sm font-semibold uppercase text-red-900">
          Reset
        </button>
      </div>
    </div>
  );
}