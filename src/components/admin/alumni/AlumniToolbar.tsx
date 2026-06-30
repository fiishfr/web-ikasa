"use client";

import { Search, Filter, RotateCcw, ChevronDown } from "lucide-react";

export default function AlumniToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-white/50 bg-white/70 p-4 shadow-sm backdrop-blur-md lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500"
        />

        <input
          type="text"
          placeholder="Cari nama, email, atau institusi..."
          className="w-full rounded-xl border border-stone-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-900 focus:ring-2 focus:ring-red-900/10"
        />
      </div>

      {/* Filter */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <select className="appearance-none rounded-xl border border-stone-300 bg-white py-3 pl-10 pr-10 text-sm outline-none transition focus:border-red-900">
            <option>Semua Angkatan</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>

          <Filter
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500"
          />

          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500"
          />
        </div>

        <div className="relative">
          <select className="appearance-none rounded-xl border border-stone-300 bg-white py-3 pl-10 pr-10 text-sm outline-none transition focus:border-red-900">
            <option>Semua Status</option>
            <option>Active</option>
            <option>Pending</option>
          </select>

          <Filter
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500"
          />

          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500"
          />
        </div>
      </div>
    </div>
  );
}