"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import AlumniGrid from "./AlumniGrid";
import Pagination from "./Pagination";
import { Reveal } from "../ui/reveal";
import { alumni } from "@/data/data";

export default function AlumniDirectory() {
  const ITEMS_PER_PAGE = 9;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(alumni.length / ITEMS_PER_PAGE);

  const currentItems = alumni.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const [searchTerm, setSearchTerm] = useState("");

  const filteredAlumni = alumni.filter((item) =>
    item.name

      .toLowerCase()

      .includes(searchTerm.toLowerCase()),
  );

  return (
    <Reveal>
      <section className="bg-white py-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-red-900">
                Direktori Alumni
              </h1>

              <p className="mt-3 max-w-2xl text-gray-600">
                Temukan dan terhubung dengan jaringan alumni IKASA di seluruh
                dunia.
              </p>
            </div>

            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={(value) => {
                setSearchTerm(value);
                setCurrentPage(1);
              }}
            />
          </div>

          <FilterBar />

          <AlumniGrid alumni={filteredAlumni} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </Reveal>
  );
}
