"use client";

import { Event } from "@/types/event";
import EventCard from "./EventCard";

type Props = {
  events: Event[];
};

export default function EventGrid({
  events,
}: Props) {

  if (events.length === 0) {
    return (
      <div className="py-24 text-center">

        <h2 className="text-2xl font-semibold text-slate-700">
          Kegiatan tidak ditemukan
        </h2>

        <p className="mt-2 text-slate-500">
          Coba gunakan kata kunci lain.
        </p>

      </div>
    );
  }

  return (
    <div
      className="
        mt-10
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}