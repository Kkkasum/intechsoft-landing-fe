const services = [
  {
    num: "01",
    name: "Сопровождение 1С (ИТС)",
    desc: "Обновления, консультации, удалённая и выездная поддержка специалистов по 1С.",
  },
  {
    num: "02",
    name: "Внедрение Битрикс 24",
    desc: "Настройка CRM, задач, воронок продаж и интеграция с корпоративными системами.",
  },
  {
    num: "03",
    name: "Подключение торгового оборудования",
    desc: "Подбор, поставка, подключение и настройка оборудования под ваши задачи.",
  },
  {
    num: "04",
    name: "ФГИС Меркурий",
    desc: "Электронная ветеринарная сертификация — настройка и интеграция с учётными системами.",
  },
  {
    num: "05",
    name: "Абонентское сопровождение",
    desc: "Полное ИТ-обслуживание компании: поддержка, обновления, консультации по фиксированной ставке.",
  },
  {
    num: "06",
    name: "Тех. обслуживание магазинов",
    desc: "Обслуживание кассовых зон, POS-систем и торгового оборудования.",
  },
  {
    num: "07",
    name: "Маркировка товаров",
    desc: "Подключение к системе «Честный Знак», настройка оборудования и ПО для маркировки.",
  },
  {
    num: "08",
    name: "Автоматизация ресторанов и кафе",
    desc: "Комплексная автоматизация HoReCa: кухня, кассы, меню, учёт — всё под ключ.",
  },
  {
    num: "09",
    name: "1С-UMI / Интернет-магазин",
    desc: "Создание и интеграция интернет-магазина с товароучётными системами 1С.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-navy">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5">
          Услуги
        </p>
        <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-5">
          Что мы делаем
        </h2>
        <p className="text-[17px] text-[#8B9EB7] leading-relaxed max-w-[600px] mb-14">
          Специализируемся на сложных процессах и точечных решениях — от
          внедрения 1С до полной автоматизации ресторанов.
        </p>

        {/* Grid table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/7 border border-white/7 rounded-2xl overflow-hidden">
          {services.map((s) => (
            <div
              key={s.num}
              className="p-8 bg-navy hover:bg-navy-2 transition-colors duration-200 cursor-default"
            >
              <p className="font-display text-[11px] font-semibold text-[#4D6280] tracking-[0.08em] mb-4">
                {s.num}
              </p>
              <h3 className="text-[15px] font-semibold text-[#EEF2FF] leading-snug mb-2.5">
                {s.name}
              </h3>
              <p className="text-[13px] text-[#8B9EB7] leading-[1.55]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
