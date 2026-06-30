"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Reveal } from "../ui/reveal";

type Props = {
  currentPage: number;

  totalPages: number;

  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <Reveal>
    <div className="mt-14 flex justify-center">

      <div className="flex items-center gap-2 rounded-full border bg-white p-2 shadow-sm">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-slate-100 disabled:opacity-40"
        >
          <ChevronLeft size={18} />
        </button>

        {Array.from({
          length: totalPages,
        }).map((_, index) => (
          <button
            key={index}
            onClick={() =>
              onPageChange(index + 1)
            }
            className={`h-10 w-10 rounded-full text-sm font-semibold transition ${
              currentPage === index + 1
                ? "bg-red-900 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            onPageChange(currentPage + 1)
          }
          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-slate-100 disabled:opacity-40"
        >
          <ChevronRight size={18} />
        </button>

      </div>

    </div>
    </Reveal>
  );
}