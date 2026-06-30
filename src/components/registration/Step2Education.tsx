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
  back: () => void;
}

const organizations = [
  "OSIS",
  "MPK",
  "Pramuka",
  "PMR",
  "Paskibra",
  "Rohis",
  "KIR",
  "English Club",
  "Basket",
  "Futsal",
];

export default function Step2Education({
  data,
  setData,
  next,
  back,
}: Props) {
  const toggleOrganization = (org: string) => {
    if (data.organizations.includes(org)) {
      setData((prevData) => ({
        ...prevData,
        organizations: prevData.organizations.filter((o) => o !== org),
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        organizations: [...prevData.organizations, org],
      }));
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-poppins text-5xl font-bold text-slate-900">
          Pendaftaran Alumni
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Bergabunglah dengan jaringan alumni IKASA untuk terhubung kembali dan
          berbagi inspirasi.
        </p>
      </div>

      <div className="mt-12">
        <FormCard>
          <ProgressBar currentStep={2} />

          <div className="mt-12">
            <h2 className="font-poppins text-2xl font-semibold text-slate-900">
              Data Pendukung
            </h2>

            <p className="mt-2 text-slate-500">
              Lengkapi riwayat pendidikan, pekerjaan, dan organisasi Anda.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <FormInput
              label="Universitas / Perguruan Tinggi"
              placeholder="Contoh : Universitas Indonesia"
              value={data.university}
              onChange={(v) =>
                setData((prev) => ({
                  ...prev,
                  university: v,
                }))
              }
            />

            <FormInput
              label="Program Studi / Jurusan"
              placeholder="Contoh : Teknik Informatika"
              value={data.major}
              onChange={(v) =>
                setData((prev) => ({
                  ...prev,
                  major: v,
                }))
              }
            />

            <FormInput
              label="Pekerjaan"
              placeholder="Contoh : Web Developer"
              value={data.job}
              onChange={(v) =>
                setData((prev) => ({
                  ...prev,
                  job: v,
                }))
              }
            />

            <div>
              <label className="mb-3 block text-sm font-medium text-slate-700">
                Organisasi di SMA
              </label>

              <div className="flex flex-wrap gap-3">
                {organizations.map((org) => {
                  const active = data.organizations.includes(org);

                  return (
                    <button
                      key={org}
                      type="button"
                      onClick={() => toggleOrganization(org)}
                      className={`rounded-xl border px-4 py-2 text-sm transition ${
                        active
                          ? "border-red-900 bg-red-900 text-white"
                          : "border-slate-300 bg-white hover:border-red-900"
                      }`}
                    >
                      {org}
                    </button>
                  );
                })}
              </div>

              <p className="mt-3 text-sm text-slate-500">
                Anda dapat memilih lebih dari satu organisasi.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-between border-t pt-8">
            <FormButton variant="secondary" onClick={back}>
              Kembali
            </FormButton>

            <FormButton onClick={next}>
              Simpan & Lanjut
            </FormButton>
          </div>
        </FormCard>
      </div>
    </section>
  );
}