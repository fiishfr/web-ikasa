"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  href: string;
  icon: React.ElementType;
}

export default function SidebarItem({
  title,
  href,
  icon: Icon,
}: Props) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 rounded-lg px-4 py-3 transition-all
      ${
        active
          ? "border-l-4 border-red-900 bg-blue-100 font-semibold text-sky-900"
          : "text-gray-600 hover:bg-blue-100"
      }`}
    >
      <Icon size={18} />

      <span>{title}</span>
    </Link>
  );
}