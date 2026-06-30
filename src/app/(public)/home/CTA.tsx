"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

export function CTA() {
  return (
    <Reveal>
    <section className="pt-12 pb-18">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            overflow-hidden
            rounded-3xl
            bg-slate-200
            shadow-md
            px-8
            py-16
            text-center
            text-slate-700
            lg:px-16
          "
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-4xl font-bold text-slate-900">
              Mari Bergabung Bersama IKASA
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Jadilah bagian dari jaringan alumni SMA IT Al Irsyad Purwokerto
              yang saling mendukung, berbagi inspirasi, dan memberikan
              kontribusi nyata bagi almamater serta masyarakat.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div
                animate={{
                  rotate: [0, -2, 2, -2, 2, 0],
                  x: [0, -2, 2, -2, 2, 0],
                }}
                transition={{
                  duration: 0.45,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut"
                }}
              >
                <Link
                    href="/daftar-alumni"
                    className="
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    animated-attention
                    rounded-lg
                    bg-red-900
                    px-8
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-red-800
                    "
                >
                    Daftar Alumni
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}
