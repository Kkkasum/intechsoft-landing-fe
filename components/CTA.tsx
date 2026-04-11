import Link from "next/link";

export default function CTA() {
  return (
    <section id="contacts" className="relative py-24 overflow-hidden bg-navy">
      {/* Glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(29,111,232,0.20) 0%, rgba(0,210,255,0.08) 100%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-8 md:px-12 relative text-center">
        <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-tight tracking-tight mb-4">
          Готовы автоматизировать
          <br />
          ваш бизнес?
        </h2>
        <p className="text-lg text-[#8B9EB7] mb-10">
          Закажите бесплатную консультацию или соберите заказ прямо на сайте
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:info@intechsoft.ru"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            Написать на почту
          </a>
          <Link
            href="#products"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-transparent text-[#EEF2FF] text-base font-semibold border border-white/13 hover:border-brand-blue/35 hover:text-brand-blue-light transition-all duration-200 no-underline"
          >
            Собрать заказ онлайн
          </Link>
        </div>
      </div>
    </section>
  );
}
