import Image from "next/image";
import { Eye, Pencil, Check } from "lucide-react";
import StatusBadge from "./StatusBadge";

interface Alumni {
  id: number;
  name: string;
  email: string;
  year: number;
  university: string;
  major: string;
  status: "active" | "pending";
  avatar: string;
}

interface Props {
  alumni: Alumni;
}

export default function AlumniRow({ alumni }: Props) {
  return (
    <tr className="border-b border-stone-100 hover:bg-slate-50 transition">
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          {alumni.avatar ? (
            <Image
              src={alumni.avatar}
              alt={alumni.name}
              width={40}
              height={40}
              className="rounded-full border object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-sky-900">
              {alumni.name.charAt(0)}
            </div>
          )}

          <div>
            <h3 className="font-medium text-gray-900">{alumni.name}</h3>
            <p className="text-sm text-stone-500">{alumni.email}</p>
          </div>
        </div>
      </td>

      <td className="px-6 py-5">{alumni.year}</td>

      <td className="px-6 py-5">
        <div className="font-medium">{alumni.university}</div>
        <div className="text-sm text-stone-500">{alumni.major}</div>
      </td>

      <td className="px-6 py-5">
        <StatusBadge status={alumni.status} />
      </td>

      <td className="px-6 py-5">
        <div className="flex justify-end gap-2">
          {alumni.status === "pending" && (
            <button className="rounded-lg bg-rose-100 p-2 text-red-900 hover:bg-rose-200">
              <Check size={16} />
            </button>
          )}

          <button className="rounded-lg p-2 hover:bg-slate-100">
            <Eye size={16} />
          </button>

          <button className="rounded-lg p-2 hover:bg-slate-100">
            <Pencil size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}