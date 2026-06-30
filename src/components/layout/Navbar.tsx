"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    label: "Beranda",
    href: "/",
    exact: true,
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    label: "Alumni",
    href: "/alumni",
  },
  {
    label: "Kegiatan",
    href: "/kegiatan",
  },
  {
    label: "Berita",
    href: "/berita",
  },
  {
    label: "Galeri",
    href: "/galeri",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className={`
    sticky top-0 z-50
    border-b border-slate-200/80
    bg-white/85
    backdrop-blur-xl
    transition-all
    duration-300
  `}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-2 lg:px-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="IKASA"
            width={46}
            height={46}
            priority
            className="transition-transform duration-300 group-hover:scale-105"
          />

          <div className="leading-0">
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-red-900">
              IKASA
            </h1>

            <p className="font-heading text-xs font-semibold text-slate-500">
              Ikatan Alumni SMA IT Al Irsyad
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-2 lg:flex">
          {menus.map((menu) => {
            const active =
              menu.href === "/"
                ? pathname === menu.href
                : pathname.startsWith(menu.href);

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`
                  relative
                  rounded-lg
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-red-50 text-red-900"
                      : "text-slate-700 hover:bg-slate-100 hover:text-red-900"
                  }
                `}
              >
                {menu.label}

                {active && (
                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-0.5
                      w-6
                      -translate-x-1/2
                      rounded-full
                      bg-red-900
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/pendaftaran"
          className="
            rounded-lg
            bg-red-900
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-red-900/20
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-red-800
            hover:shadow-xl
          "
        >
          Daftar Alumni
        </Link>
      </div>
    </header>
  );
}
