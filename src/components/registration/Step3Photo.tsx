"use client";

import { useRef } from "react";
import { Upload } from "lucide-react";
import FormCard from "./FormCard";
import FormButton from "./FormButton";
import ProgressBar from "./ProgressBar";
import { RegistrationForm } from "@/types/registration";
import { convertToWebP } from "@/lib/image";

interface Props {
  data: RegistrationForm;
  setData: React.Dispatch<React.SetStateAction<RegistrationForm>>;
  next: () => void;
  back: () => void;
}

export default function Step3Photo({
  data,
  setData,
  next,
  back,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file?: File) {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("File harus berupa gambar.");
      return;
    }

    const webp = await convertToWebP(file);

    setData((prev) => ({
      ...prev,
      photo: webp,
    }));
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-poppins text-5xl font-bold">
          Pendaftaran Alumni
        </h1>

        <p className="mt-5 text-lg text-slate-600">
          Bergabunglah dengan jaringan alumni IKASA.
        </p>
      </div>

      <div className="mt-12">
        <FormCard>
          <ProgressBar currentStep={3} />

          <div className="mt-12 text-center">
            <h2 className="font-poppins text-2xl font-semibold">
              Foto Profil
            </h2>

            <p className="mt-2 text-slate-500">
              Upload foto profil terbaik Anda.
            </p>
          </div>

          <div
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFile(e.dataTransfer.files[0]);
            }}
            className="mt-10 cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 transition hover:border-red-900 hover:bg-red-50"
          >
            <input
              ref={inputRef}
              hidden
              type="file"
              accept="image/*"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />

            {data.photo ? (
              <div className="flex flex-col items-center">
                <img
                  src={URL.createObjectURL(data.photo)}
                  alt="preview"
                  className="h-48 w-48 rounded-full object-cover shadow-lg"
                />

                <h3 className="mt-6 font-semibold">
                  {data.photo.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {(data.photo.size / 1024).toFixed(0)} KB
                </p>

                <p className="mt-4 text-sm text-red-900">
                  Klik untuk mengganti foto
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-red-100 p-6">
                  <Upload className="h-10 w-10 text-red-900" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  Tarik & Lepas Foto
                </h3>

                <p className="mt-2 text-center text-slate-500">
                  atau klik untuk memilih file
                </p>

                <div className="mt-5 rounded-full bg-red-100 px-4 py-2 text-sm text-red-900">
                  Otomatis dikonversi ke WebP
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 flex justify-between border-t pt-8">
            <FormButton
              variant="secondary"
              onClick={back}
            >
              Kembali
            </FormButton>

            <FormButton
              onClick={next}
            >
              Simpan & Lanjut
            </FormButton>
          </div>
        </FormCard>
      </div>
    </section>
  );
}