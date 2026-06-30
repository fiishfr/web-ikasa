import { Plus } from "lucide-react";
import Link from "next/link";
export default function EventHeader() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">
          Event Management
        </h1>

        <p className="mt-2 max-w-2xl text-slate-600">
          Manage upcoming events, past activities, registrations, and event
          reports for IKASA alumni.
        </p>
      </div>

      <Link
        href="/admin/kegiatan/tambah"
        className="inline-flex items-top gap-2 rounded-xl bg-red-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-800"
      >
        + Create Event
      </Link>
    </div>
  );
}
