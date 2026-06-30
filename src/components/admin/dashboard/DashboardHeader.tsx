import { Bell } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-stone-300 bg-slate-50/80 px-10 py-6 backdrop-blur-md">

      <div>
        <h1 className="text-3xl font-semibold text-gray-900">
          Welcome Admin
        </h1>

        <p className="mt-1 text-gray-600">
          Here is the latest overview of the IKASA portal.
        </p>
      </div>

      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 transition hover:bg-blue-200">
        <Bell className="h-5 w-5 text-gray-700" />
      </button>
    </header>
  );
}