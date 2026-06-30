import Sidebar from "@/components/admin/layout/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
  <Sidebar />
  <div className="ml-64 flex min-h-screen flex-1 flex-col">
    <main className="flex-1">
      {children}
    </main>
  </div>
</div>
  );
}