import { Hero } from "@/app/(public)/home/Hero";
import { Stats } from "@/app/(public)/home/Stats";
import { About } from "@/app/(public)/home/About";
import { Activities } from "@/app/(public)/home/Acitvities";
import { LatestNews } from "@/app/(public)/home/LatestNews";
import { CTA } from "@/app/(public)/home/CTA";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Activities />
      <LatestNews />
      <CTA />
    </>
  );
}
