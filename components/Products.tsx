import Link from "next/link";

const products = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Торговое оборудование",
    description:
      "Полный спектр оборудования для автоматизации торговли: от онлайн-касс до принтеров чеков и весов.",
    tags: ["Онлайн-кассы", "Весы", "Принтеры чеков", "Штрих-коды"],
    href: "/product/torgovoe-oborudovanie",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Программные продукты",
    description:
      "ПО от ведущих разработчиков для автоматизации управленческого, бухгалтерского и складского учёта.",
    tags: ["1С:Бухгалтерия", "1С:Розница", "1С:УНФ"],
    href: "/product/programmnye-produkty",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Онлайн-кассы",
    description:
      "Фискальные регистраторы и кассовые аппараты под 54-ФЗ. Подключение, настройка и гарантийное обслуживание.",
    tags: ["Эвотор", "АТОЛ", "Денежные ящики"],
    href: "/product/onlayn-kassy",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-navy-2">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5">
          Каталог
        </p>
        <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-5">
          Продукты и оборудование
        </h2>
        <p className="text-[17px] text-[#8B9EB7] leading-relaxed max-w-[600px] mb-14">
          В нашем каталоге вы найдёте всё необходимое для автоматизации бизнеса
          — от торгового оборудования до программных решений.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  icon,
  title,
  description,
  tags,
  href,
}: (typeof products)[0]) {
  return (
    <Link
      href={href}
      className="
        group relative block bg-white/4 border border-white/7
        rounded-2xl p-8 overflow-hidden
        hover:bg-white/7 hover:border-brand-blue/35 hover:-translate-y-1
        transition-all duration-200 no-underline
      "
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Arrow */}
      <div className="absolute top-7 right-7 text-[#4D6280] group-hover:text-brand-blue-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M3 13L13 3M13 3H6M13 3v7" />
        </svg>
      </div>

      {/* Icon */}
      <div className="w-[52px] h-[52px] rounded-xl bg-brand-blue/10 border border-brand-blue/35 flex items-center justify-center mb-5 text-brand-blue-light">
        {icon}
      </div>

      <h3 className="font-display text-base font-semibold mb-3 leading-snug text-[#EEF2FF]">
        {title}
      </h3>
      <p className="text-sm text-[#8B9EB7] leading-[1.55] mb-5">{description}</p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/35 text-brand-blue-light font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
