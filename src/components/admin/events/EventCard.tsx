import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  MoreVertical,
} from "lucide-react";
import { EventItem } from "./data";

interface Props {
  event: EventItem;
}

export default function EventCard({ event }: Props) {
  const upcoming = event.status === "upcoming";

  return (
    <div className="group overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Cover */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${
            upcoming
              ? "bg-white/90 text-red-900"
              : "bg-white text-slate-600 border border-slate-300"
          }`}
        >
          {upcoming ? "Upcoming" : "Past Event"}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-xl font-semibold text-slate-900">
            {event.title}
          </h3>

          <button className="rounded-lg p-2 transition hover:bg-slate-100">
            <MoreVertical size={18} />
          </button>
        </div>

        <span className="inline-block rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-slate-600">
          {event.slug}
        </span>

        <div className="space-y-3">
          <div className="flex items-start gap-3 text-sm text-slate-600">
            <CalendarDays size={17} className="mt-0.5" />
            <span>{event.date}</span>
          </div>

          <div className="flex items-start gap-3 text-sm text-slate-600">
            <MapPin size={17} className="mt-0.5" />
            <span>{event.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-5">
          {upcoming ? (
            <>
              <div className="flex -space-x-3">
                <div className="h-9 w-9 rounded-full border-2 border-white bg-red-300"></div>

                <div className="h-9 w-9 rounded-full border-2 border-white bg-blue-300"></div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-[10px] font-bold">
                  +{event.attendees}
                </div>
              </div>

              <button className="font-medium text-red-900 transition hover:text-red-700">
                Manage
              </button>
            </>
          ) : (
            <>
              <span className="text-sm text-slate-500">Ended</span>

              <button className="font-medium text-slate-700 transition hover:text-red-900">
                View Report
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}