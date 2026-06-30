"use client";

import BrandIdentityCard from "./BrandIdentityCard";
import ContactInfoCard from "./ContactInfoCard";

export default function SettingsForm() {
  return (
    <form className="mt-8 max-w-4xl space-y-8">

      <BrandIdentityCard />

      <ContactInfoCard />

    </form>
  );
}