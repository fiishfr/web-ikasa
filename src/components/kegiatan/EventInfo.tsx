import {
  CalendarDays,
  Clock3,
  MapPin,
  Share2,
  Download,
} from "lucide-react";

type Props = {
  event: {
    date: string;
    time: string;
    location: string;
    map: string;
  };
};

export default function EventInfo({ event }: Props) {
  return (
    <div className="sticky top-28 space-y-6">

      {/* Informasi */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h3 className="font-jakarta text-2xl font-bold text-slate-900">
          Informasi Kegiatan
        </h3>

        <div className="mt-8 space-y-7">

          <div className="flex gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
              <CalendarDays className="text-red-900" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Tanggal
              </p>

              <h4 className="font-semibold text-slate-900">
                {event.date}
              </h4>

            </div>

          </div>

          <div className="flex gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
              <Clock3 className="text-red-900" />
            </div>

            <div>

              <p className="text-sm text-slate-500">
                Waktu
              </p>

              <h4 className="font-semibold text-slate-900">
                {event.time}
              </h4>

            </div>

          </div>

          <div className="flex gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
              <MapPin className="text-red-900" />
            </div>

            <div>

              <p className="text-sm text-slate-500">
                Lokasi
              </p>

              <h4 className="font-semibold leading-7 text-slate-900">
                {event.location}
              </h4>

            </div>

          </div>

        </div>

      </div>

      {/* Google Maps */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="h-72 w-full border-0"
          loading="lazy"
        />

      </div>

      {/* Action */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        <button className="w-full rounded-xl bg-red-900 py-4 font-semibold text-white transition hover:bg-red-800">

          Daftar Sekarang

        </button>

        <button className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 py-4 font-medium text-slate-700 transition hover:bg-slate-100">

          <Download size={18} />

          Download Brosur

        </button>

        <button className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 py-4 font-medium text-slate-700 transition hover:bg-slate-100">

          <Share2 size={18} />

          Bagikan Kegiatan

        </button>

      </div>

    </div>
  );
}