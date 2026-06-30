"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import UploadBanner from "./UploadBanner";
import HighlightsInput from "./HighlightsInput";

const eventSchema = z.object({
  nama_kegiatan: z.string().min(3, "Nama kegiatan wajib diisi"),
  kategori: z.string().min(1, "Kategori wajib dipilih"),

  tanggal: z.string(),

  waktu: z.string(),

  tempat: z.string().min(3),

  alamat: z.string().min(3),

  tentang: z.string().min(10),

  status: z.enum(["draft", "published"]),
});

type EventFormValues = z.infer<typeof eventSchema>;

interface Props {
  defaultValues?: Partial<EventFormValues>;
  onSubmit: (data: EventFormValues) => Promise<void>;
}

export default function EventForm({ defaultValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),

    defaultValues: {
      nama_kegiatan: "",
      kategori: "",
      tanggal: "",
      waktu: "",
      tempat: "",
      alamat: "",
      tentang: "",
      status: "draft",
      ...defaultValues,
    },
  });

  const [banner, setBanner] = useState<File | null>(null);

  const [highlights, setHighlights] = useState<string[]>([]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-xl bg-white p-8 shadow"
    >
      <div>
        <label className="mb-2 block font-semibold">Nama Kegiatan</label>

        <input
          {...register("nama_kegiatan")}
          className="w-full rounded-lg border p-3"
        />

        <p className="text-sm text-red-500">{errors.nama_kegiatan?.message}</p>
      </div>

      <div>
        <label className="mb-2 block font-semibold">Kategori</label>

        <select
          {...register("kategori")}
          className="w-full rounded-lg border p-3"
        >
          <option value="">Pilih</option>

          <option value="Seminar">Seminar</option>

          <option value="Workshop">Workshop</option>

          <option value="Pelatihan">Pelatihan</option>

          <option value="Olahraga">Olahraga</option>

          <option value="Reuni">Reuni</option>
        </select>

        <p className="text-sm text-red-500">{errors.kategori?.message}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label>Tanggal</label>

          <input
            type="date"
            {...register("tanggal")}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>
      </div>

      <div>
        <label>Waktu</label>

        <input
          placeholder="08.00 - 16.00 WIB"
          {...register("waktu")}
          className="mt-2 w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label>Tempat</label>

        <input
          {...register("tempat")}
          className="mt-2 w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label>Alamat</label>

        <textarea
          rows={3}
          {...register("alamat")}
          className="mt-2 w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label>Tentang Kegiatan</label>

        <textarea
          rows={6}
          {...register("tentang")}
          className="mt-2 w-full rounded-lg border p-3"
        />
      </div>

      <UploadBanner onFileChange={setBanner} />

      <div>
        <label>Status</label>

        <select
          {...register("status")}
          className="mt-2 w-full rounded-lg border p-3"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      <div className="flex justify-end gap-3">
        <button type="button" className="rounded-lg border px-6 py-3">
          Batal
        </button>

        <button
          disabled={isSubmitting}
          className="rounded-lg bg-red-600 px-6 py-3 text-white"
        >
          {isSubmitting ? "Menyimpan..." : "Simpan Event"}
        </button>
      </div>
    </form>
  );
}
