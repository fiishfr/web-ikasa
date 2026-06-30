"use client";

import Image from "next/image";

import SidebarItem from "./SidebarItem";
import { menuItems } from "./menu";

export default function Sidebar() {
  return (
    <aside className="fixed h-screen w-64 flex-colS border-r border-stone-300 bg-blue-50">

      {/* Logo */}

      <div className="px-6 py-8">

        <div className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="IKASA"
            width={50}
            height={50}
          />

          <div>

            <h2 className="text-xl font-black text-red-900">
              IKASA Admin
            </h2>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
              Portal Management
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 space-y-1 px-2">

        {menuItems.map((item) => (
          <SidebarItem
            key={item.href}
            {...item}
          />
        ))}

      </nav>

    </aside>
  );
}