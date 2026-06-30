import HeroSection from "@/app/(public)/profile/HeroSection";
import AboutSection from "@/app/(public)/profile/AboutSection";
import VisionMission from "@/app/(public)/profile/VisionMission";
import OrganizationChart from "@/app/(public)/profile/OrganizationChart";

export default function ProfilePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VisionMission />
      <OrganizationChart />
    </>
  );
}