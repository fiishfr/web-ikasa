"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { Copy } from "lucide-react";

export default function ShareButtons() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);

    alert("Link berhasil disalin");
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      <button className="flex h-12 items-center justify-center rounded-xl border hover:bg-[#1877F2] hover:text-white transition">
        <FaFacebookF size={18} />
      </button>

      <button className="flex h-12 items-center justify-center rounded-xl border hover:bg-black hover:text-white transition">
        <FaXTwitter size={18} />
      </button>

      <button className="flex h-12 items-center justify-center rounded-xl border hover:bg-[#0A66C2] hover:text-white transition">
        <FaLinkedinIn size={18} />
      </button>

      <button className="flex h-12 items-center justify-center rounded-xl border hover:bg-red-900 hover:text-white transition">
        <Copy size={18} />
      </button>
    </div>
  );
}
