import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "The Vibe",
};

export default function VibePage() {
  return (
    <div className="flex flex-1 flex-col bg-[color-mix(in_oklab,var(--color-parchment)_55%,var(--color-cream))]">
      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="editorial-eyebrow text-[color-mix(in_oklab,var(--color-forest)_78%,var(--color-parchment))]">
            The Vibe
          </p>
          <h1 className="mt-4 font-heading text-[clamp(1.85rem,5.2vw,3.25rem)] leading-[1.12] tracking-[-0.02em] text-[var(--color-forest)] text-balance sm:text-4xl md:text-5xl">
            Supper club soul, Upper Peninsula heart
          </h1>
          <p className="mt-7 text-base leading-[1.75] text-[color-mix(in_oklab,var(--color-ink)_88%,var(--color-parchment))] sm:text-lg">
            Belgiumtown is where{" "}
            <strong className="font-semibold text-[var(--color-wood-dark)]">
              Super Yooper
            </strong>{" "}
            warmth meets a tucked away roadhouse feel. Timbers, laughter, and
            recipes that taste like Friday night after a long week outdoors.
          </p>
        </div>

        <figure className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--color-forest)_12%,transparent)] bg-[var(--color-forest)] px-6 py-10 text-center shadow-[var(--shadow-lift)] sm:mt-16 sm:rounded-3xl sm:px-10 sm:py-12 md:px-14 md:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(248,244,236,0.35), transparent 45%), radial-gradient(circle at 85% 70%, rgba(157,125,74,0.2), transparent 40%)",
            }}
          />
          <blockquote className="relative font-heading text-xl italic leading-snug text-[color-mix(in_oklab,var(--color-cream)_97%,white)] sm:text-2xl md:text-3xl">
            We still set the table like company is always one chair away from
            walking through the door.
          </blockquote>
          <figcaption className="relative mt-6 text-[10px] font-semibold uppercase tracking-[0.26em] text-[color-mix(in_oklab,var(--color-cream)_52%,var(--color-forest))]">
            The Belgiumtown promise
          </figcaption>
        </figure>

        <div className="mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:mt-16 sm:gap-7 md:grid-cols-3 md:gap-8">
          <article className="group rounded-2xl border border-[color-mix(in_oklab,var(--color-forest)_10%,transparent)] bg-[color-mix(in_oklab,white_72%,var(--color-cream))] p-6 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--color-brass)_22%,transparent)] hover:shadow-[var(--shadow-lift)] sm:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--color-brass)_90%,var(--color-forest))]">
              Room one
            </p>
            <h2 className="mt-3 font-heading text-xl tracking-tight text-[var(--color-forest)] sm:text-2xl">
              Lodge & lore
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--color-ink)_82%,white)] sm:text-[0.95rem]">
              Wander the dining room and you will share space with our taxidermy
              collection: musk ox, mountain goat, and northern mounts that nod to
              the landscape just beyond the door.
            </p>
          </article>
          <article className="group rounded-2xl border border-[color-mix(in_oklab,var(--color-forest)_10%,transparent)] bg-[color-mix(in_oklab,white_72%,var(--color-cream))] p-6 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--color-brass)_22%,transparent)] hover:shadow-[var(--shadow-lift)] sm:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--color-brass)_90%,var(--color-forest))]">
              Room two
            </p>
            <h2 className="mt-3 font-heading text-xl tracking-tight text-[var(--color-forest)] sm:text-2xl">
              Paper & pens
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--color-ink)_82%,white)] sm:text-[0.95rem]">
              Tables wear paper coverings on purpose. Doodle while you wait,
              sketch the ridgeline, leave a note for the next crew. It is casual,
              humble, and entirely ours.
            </p>
          </article>
          <article className="group rounded-2xl border border-[color-mix(in_oklab,var(--color-forest)_10%,transparent)] bg-[color-mix(in_oklab,white_72%,var(--color-cream))] p-6 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--color-brass)_22%,transparent)] hover:shadow-[var(--shadow-lift)] sm:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--color-brass)_90%,var(--color-forest))]">
              Outside in
            </p>
            <h2 className="mt-3 font-heading text-xl tracking-tight text-[var(--color-forest)] sm:text-2xl">
              Tudor roadside gem
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--color-ink)_82%,white)] sm:text-[0.95rem]">
              Our barn style exterior pairs crisp whitework with deep timbers and
              fieldstone: a roadside sight worth slowing down for, then staying
              for supper.
            </p>
          </article>
        </div>
      </AnimatedSection>
    </div>
  );
}
