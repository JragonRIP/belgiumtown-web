import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { Clock, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Visit",
};

export default function VisitPage() {
  return (
    <div className="flex flex-1 flex-col bg-[var(--color-parchment)]">
      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--color-forest)_14%,transparent)] bg-[var(--color-forest)] text-[var(--color-cream)] shadow-[var(--shadow-lift)] sm:rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative space-y-7 p-6 sm:space-y-8 sm:p-8 md:p-10 lg:p-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                aria-hidden
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 0% 0%, rgba(248,244,236,0.25), transparent 50%)",
                }}
              />
              <div className="relative">
                <p className="editorial-eyebrow text-[color-mix(in_oklab,var(--color-cream)_58%,var(--color-forest))]">
                  Visit
                </p>
                <h1 className="mt-4 font-heading text-[clamp(1.85rem,4vw,2.65rem)] leading-tight tracking-[-0.02em] text-white text-balance sm:text-4xl">
                  Hours & location
                </h1>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[color-mix(in_oklab,var(--color-cream)_78%,var(--color-forest))] sm:text-base">
                  Pull in, let your eyes adjust to the timber light, and give the
                  night a fair shot at becoming a story.
                </p>
              </div>

              <ul className="relative space-y-5 sm:space-y-6">
                <li className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[color-mix(in_oklab,var(--color-brass)_35%,transparent)] bg-[color-mix(in_oklab,white_06%,transparent)]">
                    <MapPin
                      className="size-5 text-[color-mix(in_oklab,var(--color-cream)_88%,white)]"
                      aria-hidden
                    />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--color-brass)_85%,var(--color-cream))]">
                      Address
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[color-mix(in_oklab,var(--color-cream)_94%,white)] sm:text-base">
                      W4346 Belgiumtown Rd
                      <br />
                      Stephenson, MI
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[color-mix(in_oklab,var(--color-brass)_35%,transparent)] bg-[color-mix(in_oklab,white_06%,transparent)]">
                    <Clock
                      className="size-5 text-[color-mix(in_oklab,var(--color-cream)_88%,white)]"
                      aria-hidden
                    />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--color-brass)_85%,var(--color-cream))]">
                      Hours
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[color-mix(in_oklab,var(--color-cream)_94%,white)] sm:text-base">
                      Tuesday to Saturday,{" "}
                      <span className="whitespace-nowrap">4:00 PM to 9:00 PM</span>
                    </p>
                    <p className="mt-2 text-sm text-[color-mix(in_oklab,var(--color-cream)_72%,var(--color-forest))]">
                      Closed Sunday and Monday
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[color-mix(in_oklab,var(--color-brass)_35%,transparent)] bg-[color-mix(in_oklab,white_06%,transparent)]">
                    <Phone
                      className="size-5 text-[color-mix(in_oklab,var(--color-cream)_88%,white)]"
                      aria-hidden
                    />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--color-brass)_85%,var(--color-cream))]">
                      Phone
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[color-mix(in_oklab,var(--color-cream)_94%,white)] sm:text-base">
                      Call the bar for takeout questions, party sizes, or daily
                      specials. We will get you sorted.
                    </p>
                    <a
                      href="tel:+19067532752"
                      className="mt-3 inline-flex text-base font-semibold tracking-wide text-[color-mix(in_oklab,var(--color-cream)_98%,white)] underline decoration-[color-mix(in_oklab,var(--color-brass)_55%,transparent)] decoration-1 underline-offset-4 transition hover:text-white hover:decoration-[color-mix(in_oklab,var(--color-brass)_85%,white)]"
                    >
                      (906) 753-2752
                    </a>
                  </div>
                </li>
              </ul>

              <a
                href="https://maps.google.com/?q=W4346+Belgiumtown+Rd+Stephenson+MI"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--color-brass)_45%,white)] bg-[color-mix(in_oklab,white_08%,transparent)] px-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-[background-color,border-color,transform] duration-300 hover:bg-[color-mix(in_oklab,white_12%,transparent)] active:scale-[0.99] sm:w-fit"
              >
                Open in Maps
              </a>
            </div>

            <div className="relative min-h-[240px] bg-[color-mix(in_oklab,var(--color-forest-deep)_92%,black)] sm:min-h-[280px] lg:min-h-0">
              <div
                className="absolute inset-0 opacity-50"
                aria-hidden
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 25% 25%, rgba(157,125,74,0.28), transparent 50%), radial-gradient(circle at 85% 80%, rgba(248,244,236,0.06), transparent 45%)",
                }}
              />
              <div className="relative flex h-full min-h-[240px] flex-col justify-between p-6 sm:min-h-[280px] sm:p-8 md:p-10 lg:min-h-0 lg:p-12">
                <p className="max-w-md font-heading text-xl italic leading-snug text-[color-mix(in_oklab,var(--color-cream)_96%,white)] sm:text-2xl">
                  If you leave hungry, we did not do our job. If you leave quiet,
                  you probably met someone worth listening to.
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[color-mix(in_oklab,var(--color-cream)_48%,var(--color-forest))]">
                  Belgiumtown Bar & Restaurant
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
