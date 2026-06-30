import {
  Users,
  Clock3,
  CalendarDays,
  Image,
} from "lucide-react";

export const stats = [
  {
    title: "TOTAL ALUMNI",
    value: "1,248",
    color: "bg-red-100",
    iconColor: "text-red-900",
    icon: Users,
  },
  {
    title: "PENDING ALUMNI",
    value: "24",
    color: "bg-blue-100",
    iconColor: "text-sky-900",
    icon: Clock3,
  },
  {
    title: "TOTAL PROGRAMS",
    value: "56",
    color: "bg-blue-100",
    iconColor: "text-slate-900",
    icon: CalendarDays,
  },
  {
    title: "TOTAL PHOTOS",
    value: "892",
    color: "bg-indigo-100",
    iconColor: "text-indigo-900",
    icon: Image,
  },
];

export const alumniData = [
  {
    id: 1,
    name: "Siti Rahmawati",
    year: 2018,
    university: "Universitas Indonesia",
    status: "Pending",
  },
  {
    id: 2,
    name: "Budi Santoso",
    year: 2015,
    university: "Institut Teknologi Bandung",
    status: "Active",
  },
  {
    id: 3,
    name: "Anita Wijaya",
    year: 2020,
    university: "Universitas Gadjah Mada",
    status: "Pending",
  },
];