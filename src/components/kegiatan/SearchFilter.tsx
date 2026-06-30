"use client";

import { Search } from "lucide-react";
import { Reveal } from "../ui/reveal";

type Props = {
  search: string;

  setSearch: (value: string) => void;

  category: string;

  setCategory: (value: string) => void;

  sortBy: string;

  setSortBy: (value: string) => void;
};

const categories = ["All", "Seminar", "Sports", "Social"];

export default function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
}: Props) {
  return (
    <Reveal>
    <div className="mt-10 rounded-3xl border bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari kegiatan..."
            className="w-full rounded-xl border bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-red-900"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                category === item
                  ? "bg-red-900 text-white"
                  : "bg-blue-50 hover:bg-red-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
    </Reveal>
  );
}
