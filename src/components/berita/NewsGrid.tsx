"use client";

import { useMemo, useState } from "react";

import NewsCard from "./NewsCard";
import CategoryFilter from "./CategoryFilter";
import Pagination from "./Pagination";

interface Props {
  news: any[];
}

const PER_PAGE = 6;

export default function NewsGrid({ news }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [page, setPage] = useState(1);

  const categories = [
    ...new Set(news.map((n) => n.category.name)),
  ];

  const filtered = useMemo(() => {
    return news.filter((item) => {
      const matchSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "Semua" ||
        item.category.name === category;

      return matchSearch && matchCategory;
    });
  }, [news, search, category]);

  const totalPages = Math.ceil(
    filtered.length / PER_PAGE
  );

  const paginated = filtered.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  return (
    <>
      {/* Search */}

      <input
        placeholder="Cari berita..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="mb-8 w-full rounded-2xl border bg-white px-6 py-4 outline-none focus:border-red-900"
      />

      {/* Category */}

      <CategoryFilter
        categories={categories}
        active={category}
        onChange={(value) => {
          setCategory(value);
          setPage(1);
        }}
      />

      {/* Grid */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {paginated.map((item) => (
          <NewsCard
            key={item.id}
            news={item}
          />
        ))}

      </div>

      {/* Empty */}

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <h2 className="text-2xl font-bold">
            Berita tidak ditemukan
          </h2>

          <p className="mt-3 text-neutral-500">
            Coba gunakan kata kunci lain.
          </p>
        </div>
      )}

      {/* Pagination */}

      <Pagination
        current={page}
        total={totalPages}
        onChange={setPage}
      />
    </>
  );
}