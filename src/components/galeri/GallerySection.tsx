"use client";
import { useState } from "react";
import GalleryCard from "./GalleryCard";
import GalleryFilter from "./GalleryFilter";
import { galleryData } from "@/data/gallery";

export default function GallerySection() {
  const [visible, setVisible] = useState(6);

  return (
    <section className="mx-auto max-w-7xl px-6 py-11">
      <div className="max-w-3xl">
        <h2 className="font-jakarta text-5xl font-bold text-slate-900">
          Galeri Kegiatan
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Momen-momen berharga dari berbagai kegiatan dan reuni IKASA. Kenangan
          yang menghubungkan kita bersama.
        </p>
      </div>

      <div className="mt-10">
        <GalleryFilter />
      </div>

      <div className="mt-14 columns-1 gap-6 md:columns-2 xl:columns-3">
        {galleryData.slice(0, visible).map((item) => (
          <div key={item.id} className="mb-6 break-inside-avoid">
            <GalleryCard item={item} />
          </div>
        ))}
      </div>

      {visible < galleryData.length && (
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => setVisible((prev) => prev + 6)}
            className="rounded-xl border-2 border-red-900 px-10 py-4 font-semibold text-red-900 transition hover:bg-red-900 hover:text-white"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </section>
  );
}
