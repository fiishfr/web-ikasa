import Hero from "./AlumniProfileHero";
import AboutCard from "./AboutCard";
import OrganizationTimeline from "./OrganizationTimeline";
import InformationCard from "./InformationCard";
import HighlightsCard from "./HighlightsCard";
import { Alumni } from "@/types/alumni";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  alumni: Alumni;
};

export default function AlumniProfile({ alumni }: Props) {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-4 pb-12">
      <div>
        <Link
          href="/alumni"
          className="
      inline-flex
      items-center
      gap-2
      rounded-xl
      border
      border-slate-200
      bg-white
      px-4
      py-3
      text-sm
      font-medium
      text-slate-700
      shadow-sm
      transition-all
      duration-300
      hover:-translate-x-1
      hover:border-red-200
      hover:bg-red-50
      hover:text-red-900
    "
        >
          <ArrowLeft size={18} />
          Kembali ke Direktori Alumni
        </Link>
      </div>

      <div className="mt-4">
      <Hero alumni={alumni} />
      </div>

      <section className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <AboutCard alumni={alumni} />
          <OrganizationTimeline alumni={alumni} />
        </div>

        <aside className="space-y-8">
          <InformationCard alumni={alumni} />
          <HighlightsCard alumni={alumni} />
        </aside>
      </section>
    </main>
  );
}
