import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
  iconColor,
}: Props) {
  return (
    <div className="rounded-2xl bg-slate-50 p-6 shadow-sm">

      <div className="flex items-center gap-4">

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
        >
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>

        <div>

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            {title}
          </p>

          <h2 className="mt-1 text-2xl font-semibold text-gray-900">
            {value}
          </h2>

        </div>

      </div>

    </div>
  );
}