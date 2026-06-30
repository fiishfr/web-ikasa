import { FolderOpen, Trophy } from "lucide-react";

interface Props {
  title: string;
  total: string;
  description: string;
  color: "red" | "blue";
}

export default function CategoryCards({
  title,
  total,
  description,
  color,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-white p-6">

      <div
        className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${
          color === "red"
            ? "bg-red-100"
            : "bg-blue-100"
        }`}
      />

      <div className="relative">

        <div className="mb-8 flex items-center justify-between">

          <div className="rounded-lg bg-blue-100 p-3">
            {color === "red" ? (
              <FolderOpen className="text-red-900" />
            ) : (
              <Trophy className="text-sky-900" />
            )}
          </div>

          <span className="rounded bg-blue-100 px-3 py-1 text-xs font-semibold">
            {total}
          </span>

        </div>

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {description}
        </p>

      </div>
    </div>
  );
}