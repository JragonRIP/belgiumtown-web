import Link from "next/link";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/vibe", label: "The Vibe" },
  { href: "/menu", label: "Menu" },
  { href: "/visit", label: "Visit" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[color-mix(in_oklab,var(--color-forest)_10%,transparent)] bg-[color-mix(in_oklab,var(--color-cream)_55%,var(--color-parchment))] py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 text-center sm:text-left lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="mx-auto max-w-md space-y-2 sm:mx-0 lg:max-w-sm">
            <Link
              href="/"
              className="inline-block font-heading text-lg text-[var(--color-forest)] transition-opacity hover:opacity-80 sm:text-xl"
            >
              Belgiumtown Bar & Restaurant
            </Link>
            <p className="text-sm leading-relaxed text-[color-mix(in_oklab,var(--color-ink)_72%,var(--color-parchment))]">
              A room that still believes in the long table, the second pour, and
              the story that wanders in with the cold air.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-col items-center gap-3 sm:items-start lg:shrink-0"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color-mix(in_oklab,var(--color-forest)_52%,var(--color-cream))]">
              Pages
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start sm:gap-x-0">
              {footerNav.map((item, i) => (
                <li key={item.href} className="flex items-center">
                  {i > 0 ? (
                    <span
                      className="mx-3 hidden h-3 w-px shrink-0 bg-[color-mix(in_oklab,var(--color-brass)_35%,transparent)] sm:inline-block"
                      aria-hidden
                    />
                  ) : null}
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-[color-mix(in_oklab,var(--color-ink)_78%,var(--color-parchment))] transition-colors hover:text-[var(--color-forest)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 space-y-2 text-sm text-[color-mix(in_oklab,var(--color-ink)_62%,var(--color-parchment))]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color-mix(in_oklab,var(--color-forest)_52%,var(--color-cream))]">
              Contact
            </p>
            <p className="font-medium tracking-wide text-[var(--color-forest)]">
              W4346 Belgiumtown Rd
            </p>
            <p>Stephenson, MI</p>
            <a
              href="tel:+19067532752"
              className="inline-block pt-0.5 text-base font-semibold text-[var(--color-forest)] underline decoration-[color-mix(in_oklab,var(--color-brass)_45%,transparent)] decoration-1 underline-offset-4 transition hover:decoration-[color-mix(in_oklab,var(--color-brass)_90%,var(--color-forest))]"
            >
              (906) 753-2752
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-[color-mix(in_oklab,var(--color-brass)_40%,transparent)] to-transparent opacity-80 sm:max-w-none" />
        <p className="mt-6 text-center text-[10px] font-semibold uppercase tracking-[0.26em] text-[color-mix(in_oklab,var(--color-forest)_45%,var(--color-cream))]">
          Hospitality, unhurried
        </p>
      </div>
    </footer>
  );
}
