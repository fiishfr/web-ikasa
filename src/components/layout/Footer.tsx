import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaGlobe, FaRegEnvelope } from "react-icons/fa6";

const Tautan = [
  { label: "Website Sekolah", href: "https://www.smaitalirsyadpwt.sch.id/" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -top-40
            -right-32
            h-96
            w-96
            rounded-full
            bg-red-900/10
            blur-3xl
          "
        />
        <div
          className="
            absolute
            bottom-0
            left-0
            h-80
            w-80
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[2.3fr_1fr_1fr_1.4fr]">
          {/* Logo */}
          <div className="pr-10">
            <Image src="/logo/logo.png" alt="IKASA" width={64} height={64} />

            <h3 className="mt-5 font-heading text-3xl font-bold text-slate-100">IKASA</h3>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              Ikatan Alumni SMA IT Al Irsyad Al Islamiyyah Purwokerto.
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-300">
              <FaGlobe size={16} />
              <span>ikasa.or.id</span>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Tautan
            </h4>

            <ul className="space-y-2">
              {Tautan.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Kontak
            </h4>

            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <FaRegEnvelope size={16} />
                info@ikasa.or.id
              </li>

              <li className="flex items-center gap-2">
                <FaWhatsapp size={16} />
                +62 812-3456-7890
              </li>

              <li className="flex items-center gap-2">
                <FaInstagram size={16} />
                @ikasa.official
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Bergabung
            </h4>

            <p className="text-sm leading-7 text-slate-300">
              Sudah menjadi alumni SMA IT Al Irsyad Purwokerto? Daftarkan diri
              Anda dan terhubung dengan ribuan alumni lainnya.
            </p>

            <Link
              href="/daftar-alumni"
              className="
                mt-6
                inline-flex
                items-center
                rounded-lg
                bg-red-900
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition-all
                hover:bg-red-800
                hover:shadow-lg
              "
            >
              Daftar Alumni
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-700 pt-6 text-sm text-slate-400 md:flex-row">
          <p>© 2026 IKASA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
