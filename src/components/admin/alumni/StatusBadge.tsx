interface Props {
  status: "active" | "pending";
}

export default function StatusBadge({ status }: Props) {
  if (status === "active") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase text-sky-900">
        <span className="h-2 w-2 rounded-full bg-sky-900"></span>
        Active
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs font-bold uppercase text-red-900">
      <span className="h-2 w-2 rounded-full bg-red-900"></span>
      Pending
    </span>
  );
}