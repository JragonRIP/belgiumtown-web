import type { MenuCategoryData } from "@/lib/menu-data";

type MenuCategoryProps = {
  category: MenuCategoryData;
};

export function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <div className="group/card relative overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--color-forest)_10%,transparent)] bg-[color-mix(in_oklab,var(--color-cream)_88%,white)] p-6 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--color-brass)_28%,transparent)] hover:shadow-[var(--shadow-lift)] sm:p-7 md:p-8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(157,125,74,0.07),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        aria-hidden
      />
      <header className="relative border-b border-[color-mix(in_oklab,var(--color-wood-dark)_10%,transparent)] pb-5">
        <h3 className="font-heading text-2xl tracking-[-0.02em] text-[var(--color-forest)] sm:text-3xl">
          {category.title}
        </h3>
        {category.subtitle ? (
          <p className="mt-2 text-sm font-medium leading-relaxed text-[color-mix(in_oklab,var(--color-ink)_68%,var(--color-cream))]">
            {category.subtitle}
          </p>
        ) : null}
      </header>
      <ul className="relative mt-6 flex flex-col gap-5">
        {category.items.map((item) => (
          <li
            key={item.name}
            className="border-b border-[color-mix(in_oklab,var(--color-forest)_6%,transparent)] pb-5 last:border-0 last:pb-0"
          >
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                  <span className="text-[1.05rem] font-semibold tracking-tight text-[var(--color-wood-dark)]">
                    {item.name}
                  </span>
                  {item.localFavorite ? (
                    <span className="local-favorite-pill inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em]">
                      <span className="relative z-10">Local Favorites</span>
                    </span>
                  ) : null}
                </div>
                {item.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_oklab,var(--color-ink)_76%,white)]">
                    {item.description}
                  </p>
                ) : null}
              </div>
              <span className="shrink-0 tabular-nums text-lg font-semibold tracking-tight text-[var(--color-forest)] sm:pt-0.5 sm:text-right">
                {item.price}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
