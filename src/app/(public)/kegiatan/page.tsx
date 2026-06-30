"use client";

import { useMemo, useState } from "react";

import Hero from "@/components/kegiatan/Hero";
import SearchFilter from "@/components/kegiatan/SearchFilter";
import EventGrid from "@/components/kegiatan/EventGrid";
import Pagination from "@/components/kegiatan/Pagination";
import { events } from "@/data/events";
import { Reveal } from "@/components/ui/reveal";

export default function KegiatanPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Newest");

  const ITEMS_PER_PAGE = 6;

  const filteredEvents = useMemo(() => {
    const keyword = search.toLowerCase();

    let data = events.filter((event) => {
      const matchSearch =
        event.title.toLowerCase().includes(keyword) ||
        event.description.toLowerCase().includes(keyword) ||
        event.location.toLowerCase().includes(keyword) ||
        event.category.toLowerCase().includes(keyword);

      const matchCategory = category === "All" || event.category === category;

      return matchSearch && matchCategory;
    });

    data.sort((a, b) => {
      if (sortBy === "Newest") {
        return b.id - a.id;
      }

      if (sortBy === "Oldest") {
        return a.id - b.id;
      }

      if (sortBy === "A-Z") {
        return a.title.localeCompare(b.title);
      }

      if (sortBy === "Z-A") {
        return b.title.localeCompare(a.title);
      }

      return 0;
    });

    return data;
  }, [search, category, sortBy]);

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);

  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <main className="bg-slate-50 pb-20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Hero />

        <SearchFilter
          search={search}
          setSearch={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
          category={category}
          setCategory={(value) => {
            setCategory(value);
            setCurrentPage(1);
          }}
          sortBy={sortBy}
          setSortBy={(value) => {
            setSortBy(value);
            setCurrentPage(1);
          }}
        />

        <Reveal>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-xl border border-slate-300 bg-white mt-6 px-4 py-3 text-sm"
        >
          <option>Newest</option>
          <option>Oldest</option>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
        </Reveal>

        {paginatedEvents.length > 0 ? (
          <EventGrid events={paginatedEvents} />
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <h3 className="text-xl font-semibold text-slate-700">
              Tidak ada kegiatan ditemukan
            </h3>

            <p className="mt-2 text-slate-500">
              Coba gunakan kata kunci lain atau ubah kategori.
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </main>
  );
}
