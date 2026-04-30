"use client";

import { motion } from "framer-motion";
import { Utensils } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/vibe", label: "The Vibe" },
  { href: "/menu", label: "Menu" },
  { href: "/visit", label: "Visit" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-[color-mix(in_oklab,var(--color-forest)_10%,transparent)] bg-[color-mix(in_oklab,var(--color-cream)_94%,white)]/92 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-cream)_86%,white)]/86"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklab,var(--color-brass)_35%,transparent)] to-transparent opacity-70" />
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-3.5 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 font-heading text-lg tracking-tight text-[var(--color-forest)] sm:text-[1.15rem]"
        >
          <span className="flex size-9 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--color-forest)_12%,transparent)] bg-[color-mix(in_oklab,var(--color-cream)_70%,white)] shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 group-hover:shadow-[var(--shadow-lift)]">
            <Utensils
              className="size-[1.05em] text-[color-mix(in_oklab,var(--color-forest)_88%,var(--color-brass))] transition-transform duration-300 group-hover:rotate-[-10deg]"
              aria-hidden
            />
          </span>
          <span className="leading-[1.15]">
            Belgiumtown
            <span className="hidden font-sans text-[0.58em] font-medium uppercase tracking-[0.18em] text-[color-mix(in_oklab,var(--color-wood-dark)_48%,var(--color-cream))] sm:block">
              Bar & Restaurant
            </span>
          </span>
        </Link>
        <nav aria-label="Primary" className="w-full min-w-0 sm:w-auto">
          <ul className="flex snap-x snap-mandatory gap-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:justify-end sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href} className="shrink-0 snap-start">
                  <Link
                    href={item.href}
                    className={`relative inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-[color,background-color] duration-300 sm:min-h-0 sm:min-w-0 sm:py-2 ${
                      active
                        ? "text-[var(--color-forest)]"
                        : "text-[color-mix(in_oklab,var(--color-ink)_58%,var(--color-cream))] hover:text-[var(--color-forest)]"
                    }`}
                  >
                    {active ? (
                      <span
                        className="absolute inset-x-1 inset-y-1 -z-10 rounded-full bg-[color-mix(in_oklab,var(--color-forest)_9%,transparent)] ring-1 ring-[color-mix(in_oklab,var(--color-brass)_22%,transparent)]"
                        aria-hidden
                      />
                    ) : null}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
