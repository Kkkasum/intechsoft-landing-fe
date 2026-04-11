import Link from "next/link";

const stats = [
  { number: "25+", label: "лет опыта на рынке ИТ" },
  { number: "14к+", label: "успешных проектов по автоматизации" },
  { number: "15 мин", label: "среднее время решения любой задачи" },
  { number: "1,8 млн", label: "рублей в год экономят наши клиенты" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[68px] flex flex-col justify-center overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(29,111,232,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 15% 70%, rgba(0,210,255,0.06) 0%, transparent 55%)",
        }}
      />
      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none bg-hero-grid" />

      <div className="max-w-[1200px] mx-auto px-8 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 xl:gap-20 items-center py-20">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/35 text-brand-blue-light text-[13px] font-medium mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
              Официальный представитель 1С в Махачкале
            </div>

            <h1 className="font-display text-[clamp(36px,4vw,58px)] font-bold leading-[1.12] tracking-tight mb-6">
              Умные решения
              <br />
              для{" "}
              <span className="text-brand-blue-light">умных</span>
              <br />
              компаний
            </h1>

            <p className="text-[18px] text-[#8B9EB7] leading-relaxed max-w-[520px] mb-10">
              Подберём и поставим торговое оборудование, онлайн-кассы и
              программные продукты от ведущих разработчиков. Бесплатная
              консультация — в любое время.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contacts"
                className="inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 no-underline"
              >
                Бесплатная консультация
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center px-8 py-3.5 rounded-xl bg-transparent text-[#EEF2FF] text-base font-semibold border border-white/13 hover:border-brand-blue/35 hover:text-brand-blue-light transition-all duration-200 no-underline"
              >
                Каталог продуктов
              </Link>
            </div>
          </div>

          {/* Stats card */}
          <div className="bg-white/4 border border-white/13 rounded-2xl p-0.5 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-0.5">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`p-6 bg-navy-2 ${
                    i === 0
                      ? "rounded-tl-[14px]"
                      : i === 1
                      ? "rounded-tr-[14px]"
                      : i === 2
                      ? "rounded-bl-[14px]"
                      : "rounded-br-[14px]"
                  }`}
                >
                  <div className="font-display text-[28px] font-bold text-brand-blue-light leading-none mb-2">
                    {s.number}
                  </div>
                  <div className="text-[13px] text-[#8B9EB7] leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
