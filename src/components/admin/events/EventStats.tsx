import {
  CalendarDays,
  Users,
  Clock3,
} from "lucide-react";

const stats = [
  {
    title: "TOTAL EVENTS",
    value: "142",
    icon: CalendarDays,
    bg: "bg-red-100",
    color: "text-red-900",
  },
];

export default function EventStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center gap-5">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${item.bg}`}
              >
                <Icon className={`h-6 w-6 ${item.color}`} />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-1 text-3xl font-semibold text-slate-900">
                  {item.value}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}