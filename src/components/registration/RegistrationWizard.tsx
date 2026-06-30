"use client";

import { useState } from "react";

import Step1Personal from "./Step1Personal";
import Step2Education from "./Step2Education";
import Step3Photo from "./Step3Photo";
import Step4Review from "./Step4Review";
import Step5Success from "./Step5Success";

import { RegistrationForm } from "@/types/registration";

export default function RegistrationWizard() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState<RegistrationForm>({
    fullName: "",
    instagram: "",
    graduationYear: "",
    email: "",
    city: "",

    university: "",
    major: "",
    job: "",
    organizations: [],

    photo: null,
  });

  const next = () => setStep((s) => s + 1);

  const back = () => setStep((s) => s - 1);

  switch (step) {
    case 1:
      return <Step1Personal data={form} setData={setForm} next={next} />;

    case 2:
      return (
        <Step2Education data={form} setData={setForm} next={next} back={back} />
      );

    case 3:
      return (
        <Step3Photo data={form} setData={setForm} next={next} back={back} />
      );

    case 4:
      return <Step4Review data={form} back={back} next={next} />;
  }
}
