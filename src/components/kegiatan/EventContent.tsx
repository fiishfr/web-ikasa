type Props = {
  event: {
    description: string[];
    highlights: string[];
  };
};

export default function EventContent({ event }: Props) {
  return (
    <div className="space-y-8">

      <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="font-jakarta text-3xl font-bold text-red-900">
          Tentang Kegiatan
        </h2>

        <div className="mt-8 space-y-6 text-[17px] leading-8 text-slate-600">

          {event.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

        </div>

      </article>

      {/* Informasi Penting */}

      <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="font-jakarta text-3xl font-bold text-red-900">
          Informasi Penting
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">

          {event.highlights.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-red-100 bg-red-50 p-5"
            >

              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-red-900 text-sm font-bold text-white">

                ✓

              </div>

              <p className="leading-7 text-slate-700">

                {item}

              </p>

            </div>

          ))}

        </div>

      </article>

    </div>
  );
}