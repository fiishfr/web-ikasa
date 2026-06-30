import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

type Props = {
  event: {
    slug: string;
    title: string;
    image: string;
    category: string;
    date: string;
  };
};

export default function EventCard({ event }: Props) {
  return (
    <Link
      href={`/kegiatan/${event.slug}`}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute left-5 top-5 rounded-full bg-red-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
          {event.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays size={16} />

          {event.date}
        </div>

        <h3 className="mt-4 line-clamp-2 font-jakarta text-2xl font-bold leading-snug text-slate-900 transition group-hover:text-red-900">
          {event.title}
        </h3>

        <div className="mt-8 flex items-center gap-2 font-semibold text-red-900">
          Lihat Detail
          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
