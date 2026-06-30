import {
  Mail,
  GraduationCap,
  Briefcase,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa6";

import { Alumni } from "@/types/alumni";
import { Reveal } from "../ui/reveal";

type Props = {
  alumni: Alumni;
};

export default function InformationCard({
  alumni,
}: Props) {
  const info = [
    {
      icon: Mail,
      title: "Email",
      value: alumni.email,
    },
    {
      icon: FaInstagram,
      title: "Instagram",
      value: alumni.instagram,
    },
    {
      icon: FaWhatsapp,
      title: "Whatsapp",
      value: alumni.whatsapp,
    },
    {
      icon: FaGlobe,
      title: "Website",
      value: alumni.website,
    },
    {
      icon: GraduationCap,
      title: "University",
      value: alumni.university,
    },
    {
      icon: Briefcase,
      title: "Job",
      value: alumni.job,
    },
    {
      icon: MapPin,
      title: "Domicile",
      value: alumni.city,
    },
  ];

  return (
    <Reveal>
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-2xl font-semibold text-gray-900">
        Information
      </h2>

      <div className="space-y-6">

        {info.map((item) => {

          if (!item.value) return null;

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-start gap-4 border-b border-gray-100 pb-5 last:border-none last:pb-0"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">

                <Icon className="h-5 w-5 text-red-900" />

              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {item.title}
                </p>

                <p className="mt-1 break-all text-gray-900">
                  {item.value}
                </p>

              </div>

            </div>
          );
        })}
      </div>

    </section>
    </Reveal>
  );
}