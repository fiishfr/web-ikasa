import EventCard from "./EventCard";

export default function RelatedEvents() {
  const events = [
    {
      slug: "seminar-ai",
      title: "Seminar Artificial Intelligence Alumni IKASA",
      category: "Seminar",
      image: "/images/events/event1.jpg",
      date: "12 Juli 2025",
    },
    {
      slug: "reuni-akbar",
      title: "Reuni Akbar IKASA 2025",
      category: "Reuni",
      image: "/images/events/event2.jpg",
      date: "3 Agustus 2025",
    },
    {
      slug: "charity-run",
      title: "Charity Run & Bakti Sosial",
      category: "Sosial",
      image: "/images/events/event3.jpg",
      date: "18 September 2025",
    },
  ];

  return (
    <section className="bg-slate-50 pb-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex items-end justify-between">

          <div>

            <span className="font-semibold uppercase tracking-widest text-red-900">
              Kegiatan Lainnya
            </span>

            <h2 className="mt-3 font-jakarta text-4xl font-bold text-slate-900">
              Mungkin Anda Juga Tertarik
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Jelajahi berbagai kegiatan IKASA lainnya yang akan datang
              maupun dokumentasi kegiatan yang telah berlangsung.
            </p>

          </div>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {events.map((item) => (
            <EventCard
              key={item.slug}
              event={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}