"use client";

import { Check } from "lucide-react";
import clsx from "clsx";

const steps = [
  "Data Diri",
  "Pendidikan",
  "Foto Profil",
  "Review",
];

interface Props {
  currentStep: number;
}

export default function ProgressBar({
  currentStep,
}: Props) {
  return (
    <div className="relative mb-12">

      {/* Line */}

      <div className="absolute left-0 right-0 top-5 h-0.5 bg-slate-200" />

      <div
        className="absolute left-0 top-5 h-0.5 bg-red-900 transition-all duration-300"
        style={{
          width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
        }}
      />

      <div className="relative flex justify-between">

        {steps.map((step, index) => {

          const number = index + 1;

          const completed = number < currentStep;

          const active = number === currentStep;

          return (

            <div
              key={step}
              className="flex flex-col items-center bg-white px-2"
            >

              {/* Circle */}

              <div
                className={clsx(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-all",
                  completed &&
                    "bg-red-900 text-white shadow",
                  active &&
                    "border-[3px] border-red-900 bg-white text-red-900",
                  !completed &&
                    !active &&
                    "bg-slate-200 text-slate-500"
                )}
              >

                {completed ? (

                  <Check size={18} />

                ) : (

                  <span className="font-poppins text-lg font-semibold">
                    {number}
                  </span>

                )}

              </div>

              {/* Label */}

              <span
                className={clsx(
                  "mt-3 text-xs font-semibold uppercase tracking-wider",
                  completed && "text-red-900",
                  active && "font-bold text-red-900",
                  !completed &&
                    !active &&
                    "text-slate-500"
                )}
              >
                {step}
              </span>

            </div>

          );
        })}

      </div>

    </div>
  );
}