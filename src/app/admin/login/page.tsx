import BackgroundDecoration from "@/components/admin/login/BackgroundDecoration";
import LoginCard from "@/components/admin/login/LoginCard";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6">
      <BackgroundDecoration />
      <LoginCard />
    </main>
  );
}