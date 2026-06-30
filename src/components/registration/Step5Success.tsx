"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RegisterSuccess() {
  const router = useRouter();

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-0">

      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-12 shadow-lg">

        {/* Icon */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 scale-125 rounded-full bg-red-200 opacity-40" />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-red-100 ring-4 ring-white">

              <Check
                size={42}
                className="text-red-900"
              />

            </div>

          </div>

        </div>

        {/* Title */}

        <h1 className="mt-10 text-center font-poppins text-3xl font-semibold text-slate-900">
          Pendaftaran Berhasil
          <br />
          Dikirim!
        </h1>

        <p className="mt-4 text-center text-slate-600">
          Terima kasih telah mendaftar sebagai Alumni IKASA.
          Data Anda akan kami verifikasi terlebih dahulu sebelum
          ditampilkan pada direktori alumni.
        </p>

        {/* Button */}

        <div className="mt-10 border-t pt-8">

          <button
            onClick={() => router.push("/")}
            className="w-full rounded-xl bg-red-900 py-4 font-medium text-white transition hover:bg-red-800"
          >
            Kembali ke Beranda
          </button>

        </div>

      </div>

    </section>
  );
}