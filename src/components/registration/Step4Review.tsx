"use client";

import Image from "next/image";
import { ArrowLeft, User, GraduationCap, Camera } from "lucide-react";
import { useRouter } from "next/navigation";
import FormCard from "./FormCard";
import FormButton from "./FormButton";
import ProgressBar from "./ProgressBar";
import { RegistrationForm } from "@/types/registration"; // 👈 Impor tipe data pendaftaran

// 1. TAMBAHKAN INTERFACE PROPS AGAR SINKRON DENGAN WIZARD INDUK
interface Props {
  data: RegistrationForm;
  next: () => void;
  back: () => void;
}

// 2. UBAH NAMA KOMPONEN MENJADI Step4Review & TERIMA PROPS-NYA
export default function Step4Review({ data, next, back }: Props) {
  const router = useRouter();

  // Fungsi submit form asli dipindahkan ke sini
  async function handleSubmit() {
    try {
      // Jalankan proses kirim data Anda di sini (misal fetch ke API menggunakan 'data')
      // await submitForm(data); 
      
      router.push("/pendaftaran/success"); // Sesuaikan url success Anda (pendaftaran/success)
      next(); // Pindah ke Step 5 (Success UI) jika dibutuhkan
    } catch (error) {
      console.error("Gagal mendaftar:", error);
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-poppins text-5xl font-bold text-slate-900">
          Pendaftaran Alumni
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Lengkapi profil Anda untuk bergabung dengan jaringan IKASA.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-200">
          <FormCard>
            <ProgressBar currentStep={4} />

            <div className="mt-12">
              <h2 className="font-poppins text-2xl font-semibold text-slate-900">
                Review Data Pendaftaran
              </h2>

              <p className="mt-2 text-slate-500">
                Pastikan semua data yang Anda masukkan sudah benar sebelum
                mengirimkan pendaftaran.
              </p>
            </div>

            {/* 3. UBAH SEMUA 'formData' MENJADI 'data' SESUAI DENGAN STATE WIZARD */}
            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-5 flex items-center gap-2 border-b border-slate-200 pb-3">
                <User size={18} className="text-red-900" />

                <h3 className="text-sm font-bold uppercase tracking-wider text-red-900">
                  Data Pribadi
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <ReviewItem label="Nama Lengkap" value={data.fullName} />

                <ReviewItem label="Email" value={data.email} />

                <ReviewItem
                  label="Instagram"
                  value={data.instagram ? `@${data.instagram}` : "-"}
                />

                <ReviewItem label="Domisili" value={data.city} />

                <ReviewItem
                  label="Tahun Lulus SMA"
                  value={data.graduationYear}
                />
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-5 flex items-center gap-2 border-b border-slate-200 pb-3">
                <GraduationCap size={18} className="text-red-900" />

                <h3 className="text-sm font-bold uppercase tracking-wider text-red-900">
                  Data Pendukung
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <ReviewItem label="Universitas" value={data.university} />

                <ReviewItem label="Program Studi" value={data.major} />

                <ReviewItem label="Pekerjaan" value={data.job} />

                <ReviewItem
                  label="Organisasi"
                  value={data.organizations?.join(", ")}
                />
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-5 flex items-center gap-2 border-b border-slate-200 pb-4">
                <Camera size={18} className="text-red-900" />

                <h3 className="text-sm font-bold uppercase tracking-wider text-red-900">
                  Preview Foto
                </h3>
              </div>

              <div className="flex flex-col gap-6 md:flex-row">
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  {/* Generate local URL jika object File foto ada */}
                  {data.photo ? (
                    <Image
                      src={URL.createObjectURL(data.photo)}
                      alt="Preview"
                      width={124}
                      height={124}
                      className="h-32 w-32 object-cover"
                    />
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center text-sm text-slate-400">
                      Belum ada foto
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-sm leading-6 text-slate-600">
                    Ini adalah foto profil yang akan ditampilkan pada direktori
                    alumni IKASA. Pastikan wajah terlihat jelas dan rapi.
                  </p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    File
                  </p>

                  <p className="mt-1 font-medium text-slate-900">
                    {data.photo?.name || "-"}
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-8">
              {/* 4. UBAH router.back() MENJADI PROPS back KARENA INI MULTI-STEP */}
              <FormButton variant="secondary" onClick={back}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali
              </FormButton>

              <FormButton onClick={handleSubmit}>Kirim Pendaftaran</FormButton>
            </div>
          </FormCard>
        </div>
      </div>
    </section>
  );
}

function ReviewItem({ label, value }: { label: string; value?: string }) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="text-base font-medium leading-6 text-slate-900 wrap-break-word">
        {value || "-"}
      </p>
    </div>
  );
}
