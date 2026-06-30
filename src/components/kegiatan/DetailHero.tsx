import Image from "next/image";
import { CalendarDays } from "lucide-react";

type Props = {
  event: any;
};

export default function DetailHero({ event }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10">

      <div className="relative overflow-hidden rounded-3xl">

        <Image
          src={event.image}
          alt={event.title}
          width={1400}
          height={700}
          className="h-130 w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-12">

          <span className="inline-flex rounded-full bg-red-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            {event.category}
          </span>

          <h1 className="mt-5 max-w-3xl font-jakarta text-5xl font-bold leading-tight text-white">
            {event.title}
          </h1>

          <div className="mt-3 flex items-center gap-3 text-lg text-white/90">

            <CalendarDays size={20} />

            <span>
              {event.date}
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}