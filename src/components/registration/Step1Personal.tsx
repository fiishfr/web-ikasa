"use client";

import FormCard from "./FormCard";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import ProgressBar from "./ProgressBar";
import { RegistrationForm } from "@/types/registration";

interface Props {
  data: RegistrationForm;
  setData: React.Dispatch<React.SetStateAction<RegistrationForm>>;
  next: () => void;
}

export default function Step1Personal({
  data,
  setData,
  next,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">

      {/* Header */}

      <div className="mx-auto max-w-3xl text-center">

        <h1 className="font-poppins text-5xl font-bold text-slate-900">
          Pendaftaran Alumni
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Bergabunglah dengan jaringan alumni IKASA untuk terhubung kembali
          dan berbagi inspirasi.
        </p>

      </div>

      <div className="mt-12">

        <FormCard>

          <ProgressBar currentStep={1} />

          <div className="mt-12">

            <h2 className="font-poppins text-2xl font-semibold text-slate-900">
              Informasi Pribadi
            </h2>

            <p className="mt-2 text-slate-500">
              Silakan lengkapi data diri Anda dengan benar.
            </p>

          </div>

          <div className="mt-10 space-y-6">

            <FormInput
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap Anda"
              value={data.fullName}
              onChange={(v) =>
                setData((prev) => ({
                  ...prev,
                  fullName: v,
                }))
              }
            />

            {/* Instagram */}

            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Username Instagram
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  @
                </span>

                <input
                  value={data.instagram}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      instagram: e.target.value,
                    }))
                  }
                  placeholder="username"
                  className="h-12 w-full rounded-xl border border-slate-300 bg-slate-50 pl-9 pr-4 outline-none transition focus:border-red-900 focus:bg-white"
                />

              </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <FormInput
                label="Tahun Lulus SMA"
                placeholder="Contoh : 2017"
                value={data.graduationYear}
                onChange={(v) =>
                  setData((prev) => ({
                    ...prev,
                    graduationYear: v,
                  }))
                }
              />

              <FormInput
                label="Alamat Email"
                type="email"
                placeholder="nama@email.com"
                value={data.email}
                onChange={(v) =>
                  setData((prev) => ({
                    ...prev,
                    email: v,
                  }))
                }
              />

            </div>

            <FormInput
              label="Kota Domisili Saat Ini"
              placeholder="Contoh : Jakarta"
              value={data.city}
              onChange={(v) =>
                setData((prev) => ({
                  ...prev,
                  city: v,
                }))
              }
            />

          </div>

          <div className="mt-12 flex items-center justify-end gap-4 border-t pt-8">

            <FormButton variant="secondary">

              Simpan Draft

            </FormButton>

            <FormButton onClick={next}>

              Lanjut ke Pendidikan

            </FormButton>

          </div>

        </FormCard>

      </div>

    </section>
  );
}