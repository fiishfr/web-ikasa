import EventHeader from "@/components/admin/events/EventHeader";
import EventStats from "@/components/admin/events/EventStats";
import EventToolbar from "@/components/admin/events/EventToolbar";
import EventGrid from "@/components/admin/events/EventGrid";
import EventPagination from "@/components/admin/events/EventPagination";

export default function EventPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-8 px-8 py-8 lg:px-10">
        <EventHeader />
        <EventStats />
        <EventToolbar />
        <EventGrid />
        <EventPagination />
      </div>
    </main>
  );
}