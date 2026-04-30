"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const easeLux = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[min(78svh,680px)] flex-col justify-end overflow-hidden bg-[var(--color-parchment)] md:min-h-[min(86svh,800px)] lg:min-h-[min(88svh,820px)]">
      {/* Photo on the right: strip is 2× the column width, shifted right so the right half of the photo is clipped; overflow hidden keeps only the left half visible */}
      <div
        className="absolute inset-0 md:inset-y-0 md:left-auto md:right-0 md:h-full md:w-[min(58vw,52rem)]"
        aria-hidden
      >
        <div className="relative h-full min-h-[48svh] w-full overflow-hidden md:min-h-0">
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: easeLux }}
            className="absolute inset-y-0 left-0 h-full w-[200%] origin-left"
          >
            <div className="relative h-full w-full translate-x-[min(10vw,4.5rem)] sm:translate-x-[min(12vw,5rem)] md:translate-x-[min(11vw,5.5rem)]">
              <Image
                src="/hero-exterior.png"
                alt="Historic photograph of Belgiumtown Bar and Restaurant, Tudor timber and stone facade"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover object-left"
              />
            </div>
          </motion.div>

          {/* Fade photo into plain parchment toward the copy (left on desktop, top-left on mobile) */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(100%,28rem)] bg-[linear-gradient(to_right,var(--color-parchment)_0%,color-mix(in_oklab,var(--color-parchment)_88%,transparent)_42%,color-mix(in_oklab,var(--color-parchment)_35%,transparent)_68%,transparent_100%)] sm:w-[min(100%,32rem)] md:w-[min(100%,22rem)] lg:w-[min(100%,26rem)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[42%] bg-gradient-to-t from-[var(--color-parchment)] via-[color-mix(in_oklab,var(--color-parchment)_55%,transparent)] to-transparent md:hidden"
            aria-hidden
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-11 pt-28 sm:px-6 sm:pb-14 sm:pt-32 md:pb-16 md:pt-28 lg:px-8">
        <div className="max-w-xl md:mr-auto md:max-w-lg lg:max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: easeLux }}
            className="editorial-eyebrow mb-4 text-[color-mix(in_oklab,var(--color-forest)_68%,var(--color-parchment))]"
          >
            Supper, spirits, slow evenings
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeLux }}
            className="font-heading text-[clamp(2rem,6.5vw,4.25rem)] leading-[1.06] tracking-[-0.02em] text-[var(--color-forest)] text-balance md:text-5xl lg:text-6xl"
          >
            Belgiumtown
            <span className="mt-2 block font-heading text-[0.38em] font-normal tracking-[0.14em] text-[color-mix(in_oklab,var(--color-ink)_58%,var(--color-forest))] sm:text-[0.36em]">
              Bar & Restaurant
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.75, delay: 0.22, ease: easeLux }}
            className="hairline-brass mt-7 origin-left sm:mt-8"
            aria-hidden
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: easeLux }}
            className="mt-6 font-heading text-lg italic leading-snug text-[color-mix(in_oklab,var(--color-ink)_88%,var(--color-parchment))] sm:mt-7 sm:text-xl md:text-2xl"
          >
            When the dining room warms up, manners stay easy and standards stay
            quietly stubborn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38, ease: easeLux }}
            className="mt-9 flex w-full max-w-md flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }}>
              <Link
                href="/menu"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--color-forest)] px-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-cream)] shadow-[var(--shadow-lift)] transition-[box-shadow,background-color,transform] duration-300 hover:bg-[color-mix(in_oklab,var(--color-forest)_88%,black)] sm:w-auto"
              >
                View Menu
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }}>
              <Link
                href="/visit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--color-forest)_22%,transparent)] bg-white/70 px-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-forest)] shadow-[var(--shadow-soft)] transition-[background-color,border-color,transform] duration-300 hover:border-[color-mix(in_oklab,var(--color-brass)_45%,var(--color-forest))] hover:bg-white sm:w-auto"
              >
                Hours & Location
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <p className="relative z-10 px-4 pb-4 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-[color-mix(in_oklab,var(--color-ink)_42%,var(--color-parchment))] sm:px-6 sm:text-[11px]">
        Family archive, restored with care
      </p>
    </section>
  );
}
