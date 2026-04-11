const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Оперативная доставка",
    text: "Доставляем и выгружаем товар в срок. Дополнительные бонусы при заказе с сайта.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91A16 16 0 0016 16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0124 17z" />
      </svg>
    ),
    title: "Бесплатная консультация",
    text: "Задайте любой вопрос — наши специалисты подберут оптимальное решение для вашего бизнеса.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Команда профессионалов",
    text: "Сертифицированные специалисты с многолетним опытом реализации проектов любой сложности.",
  },
];

const metrics = [
  { label: "Опыт работы", value: "25 лет" },
  { label: "Проектов автоматизировано", value: ">14 000" },
  { label: "Среднее время решения задачи", value: "15 мин" },
  { label: "Экономия клиентов в год", value: "1,8 млн ₽" },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-24 bg-navy-2">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5">
              Почему мы
            </p>
            <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-5">
              Работаем как конвейер — точно, быстро, везде одинаково
            </h2>
            <p className="text-base text-[#8B9EB7] leading-relaxed mb-12">
              Основаны в 1996 году. Полный спектр услуг по автоматизации
              бизнес-процессов, учёту и управлению.
            </p>

            <div className="flex flex-col gap-9">
              {features.map((f) => (
                <div key={f.title} className="flex gap-5">
                  <div className="w-11 h-11 rounded-[10px] bg-brand-blue/10 border border-brand-blue/35 flex items-center justify-center flex-shrink-0 text-brand-blue-light">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-[#EEF2FF] mb-1.5">
                      {f.title}
                    </h3>
                    <p className="text-sm text-[#8B9EB7] leading-[1.55]">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: metrics */}
          <div className="bg-white/4 border border-white/13 rounded-2xl p-10">
            <h3 className="font-display text-[22px] font-bold leading-snug mb-8">
              Результаты,
              <br />
              которые говорят сами
            </h3>
            <div className="flex flex-col">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`flex justify-between items-baseline py-4 ${
                    i < metrics.length - 1 ? "border-b border-white/7" : ""
                  }`}
                >
                  <span className="text-sm text-[#8B9EB7]">{m.label}</span>
                  <span className="font-display text-xl font-bold text-brand-blue-light">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
