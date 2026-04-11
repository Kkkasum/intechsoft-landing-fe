export default function Review() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5 text-center">
          Отзывы клиентов
        </p>
        <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-12 text-center">
          Нам доверяют бизнесы
        </h2>

        <div className="bg-navy-2 border border-white/13 rounded-2xl p-10 md:p-14 max-w-[800px] mx-auto text-center">
          {/* Stars */}
          <div className="flex gap-1 justify-center mb-7">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="w-[18px] h-[18px] fill-amber-400 text-amber-400"
                viewBox="0 0 24 24"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>

          <blockquote className="text-lg md:text-xl text-[#EEF2FF] leading-relaxed italic mb-8">
            «У меня небольшой магазин бьюти-товаров, и мне понадобилось
            оборудование. Обратилась в Интех-Софт — мне посоветовали терминал
            Эвотор. Оказалось очень выгодно и удобно. Всё объяснили, настроили
            и сразу помогли разобраться. Рекомендую!»
          </blockquote>

          <p className="font-semibold text-[15px] text-[#EEF2FF]">
            Клиентка магазина бьюти-товаров
          </p>
          <p className="text-sm text-[#8B9EB7] mt-1">Махачкала</p>
        </div>
      </div>
    </section>
  );
}
