import AlumniHeader from "@/components/admin/alumni/AlumniHeader";
import AlumniToolbar from "@/components/admin/alumni/AlumniToolbar";
import AlumniTable from "@/components/admin/alumni/AlumniTable";
import Pagination from "@/components/admin/alumni/Pagination";

export default function AlumniPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Background Blur */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-300/20 blur-3xl" />

      <section className="relative z-10 flex h-full w-full flex-col gap-8 p-6 md:p-8 xl:p-10">
        <AlumniHeader />

        <AlumniToolbar />

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <AlumniTable />
        </div>

        <Pagination />
      </section>
    </main>
  );
}