import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { MenuCategory } from "@/components/menu-category";
import { menuCategories } from "@/lib/menu-data";
import { Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "Menu",
};

export default function MenuPage() {
  return (
    <div className="flex flex-1 flex-col bg-[color-mix(in_oklab,white_40%,var(--color-parchment))]">
      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center justify-center gap-2 editorial-eyebrow text-[color-mix(in_oklab,var(--color-forest)_78%,var(--color-parchment))]">
            <Utensils
              className="size-3.5 shrink-0 text-[color-mix(in_oklab,var(--color-brass)_75%,var(--color-forest))]"
              strokeWidth={2}
              aria-hidden
            />
            Menu
          </p>
          <h1 className="mt-5 font-heading text-[clamp(1.85rem,5vw,3.1rem)] leading-[1.1] tracking-[-0.02em] text-[var(--color-forest)] text-balance sm:text-4xl md:text-5xl">
            From the grill and the oven
          </h1>
          <div className="hairline-brass mx-auto mt-6" aria-hidden />
          <p className="mt-6 text-base leading-[1.7] text-[color-mix(in_oklab,var(--color-ink)_84%,var(--color-parchment))] sm:text-lg">
            This is the short list of what we cook when the dining room fills up,
            the fryers get honest, and someone at the bar orders one more round
            than they meant to.{" "}
            <span className="font-semibold text-[var(--color-forest)]">
              Local Favorites
            </span>{" "}
            are the plates people learn to ask for by heart.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:mt-14 sm:gap-8 lg:grid-cols-2 xl:gap-10">
          {menuCategories.map((category) => (
            <MenuCategory key={category.title} category={category} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
