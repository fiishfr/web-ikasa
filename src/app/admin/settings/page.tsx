import SettingsHeader from "@/components/admin/settings/SettingsHeader";
import BrandIdentityCard from "@/components/admin/settings/BrandIdentityCard";
import ContactInfoCard from "@/components/admin/settings/ContactInfoCard";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-8 py-10">

        <SettingsHeader />

        <div className="mt-8 max-w-4xl space-y-8">

          <BrandIdentityCard />

          <ContactInfoCard />

        </div>

      </div>
    </main>
  );
}