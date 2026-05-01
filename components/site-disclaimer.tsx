"use client";

import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";

export function SiteDisclaimer() {
  const pathname = usePathname();
  const titleId = useId();
  const [dismissedForPath, setDismissedForPath] = useState<string | null>(null);
  const open = dismissedForPath !== pathname;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Dismiss disclaimer"
        className="absolute inset-0 bg-[color-mix(in_oklab,var(--color-forest-deep)_72%,black)]/55 backdrop-blur-[2px]"
        onClick={() => setDismissedForPath(pathname)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[1] w-full max-w-lg rounded-2xl border border-[color-mix(in_oklab,var(--color-brass)_35%,transparent)] bg-[color-mix(in_oklab,var(--color-cream)_92%,white)] p-6 shadow-[var(--shadow-lift)] sm:p-8"
      >
        <p
          id={titleId}
          className="font-heading text-xl tracking-tight text-[var(--color-forest)] sm:text-2xl"
        >
          Independent preview
        </p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-[color-mix(in_oklab,var(--color-ink)_88%,var(--color-cream))]">
          This site is not affiliated with Belgiumtown Bar &amp; Restaurant and
          is not an official restaurant website. It is a personal design and
          development mockup created to showcase my work.
        </p>
        <button
          type="button"
          onClick={() => setDismissedForPath(pathname)}
          className="mt-6 w-full rounded-full bg-[var(--color-forest)] px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-cream)] shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:shadow-[var(--shadow-lift)] active:scale-[0.99]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
