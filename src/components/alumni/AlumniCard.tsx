import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";
import { Alumni } from "@/types/alumni";

type Props = {
  alumni: Alumni;
};

export default function AlumniCard({ alumni }: Props) {
  return (
    <div className="group rounded-3xl border bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-blue-100">

        <Image
          src={alumni.image}
          alt={alumni.name}
          fill
          className="object-cover transition group-hover:scale-105"
        />

      </div>

      <h3 className="mt-5 text-center text-xl font-semibold">
        {alumni.name}
      </h3>

      <p className="mt-1 text-center text-xs font-semibold uppercase tracking-widest text-red-900">
        Angkatan {alumni.year}
      </p>

      <hr className="my-5" />

      <div className="space-y-3 text-sm text-gray-600">

        <div className="flex gap-2">
          <GraduationCap size={16} />
          {alumni.university}
        </div>

        <div className="flex gap-2">
          <Briefcase size={16} />
          {alumni.job}
        </div>

        <div className="flex gap-2">
          <MapPin size={16} />
          {alumni.city}
        </div>

      </div>

      <Link href={`/alumni/${alumni.id}`}>
      <button className="mt-6 w-full rounded-xl border border-red-900 py-2 font-medium text-red-900 transition hover:bg-red-900 hover:text-white">
        Lihat Profil
      </button>
      </Link>

    </div>
  );
}