import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Image,
  Settings,
} from "lucide-react";

export const menuItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Alumni",
    href: "/admin/alumni",
    icon: Users,
  },
  {
    title: "Kegiatan",
    href: "/admin/kegiatan",
    icon: CalendarDays,
  },
  {
    title: "Galeri",
    href: "/admin/gallery",
    icon: Image,
  },
  {
    title: "Pengaturan",
    href: "/admin/settings",
    icon: Settings,
  },
];