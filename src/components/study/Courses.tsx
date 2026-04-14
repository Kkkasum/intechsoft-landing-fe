const courses = [
	{
		tag: 'Бухгалтерия',
		title: '1С:Бухгалтерия 8',
		level: 'Начинающий — Опытный',
		duration: '32 часа',
		format: 'Очно / Онлайн',
		desc: 'Полный курс работы в 1С:Бухгалтерия 8: ввод операций, учёт НДС, начисление заработной платы, формирование и сдача регламентированной отчётности в ФНС и СФР.',
		topics: [
			'Настройка учётной политики',
			'Банк, касса, авансовые отчёты',
			'Учёт ОС и НМА',
			'Расчёт зарплаты и НДФЛ',
			'НДС: счета-фактуры, книги покупок/продаж',
			'Закрытие месяца и балансовые отчёты',
			'Сдача отчётности через 1С',
		],
	},
	{
		tag: 'Торговля',
		title: '1С:Управление торговлей 11',
		level: 'Начинающий — Средний',
		duration: '24 часа',
		format: 'Очно / Онлайн',
		desc: 'Курс для менеджеров, логистов и руководителей торговых компаний. Управление закупками, продажами, складом и взаиморасчётами с контрагентами.',
		topics: [
			'Настройка номенклатуры и складов',
			'Заказы поставщикам и покупателям',
			'Ценообразование и скидки',
			'Инвентаризация и перемещения',
			'Взаиморасчёты и задолженности',
			'Аналитические отчёты по продажам',
		],
	},
	{
		tag: 'Розница',
		title: '1С:Розница 8',
		level: 'Начинающий',
		duration: '16 часов',
		format: 'Очно / Онлайн',
		desc: 'Для кассиров, администраторов магазинов и директоров розничных точек. Работа с кассой, возвраты, маркировка, онлайн-кассы по 54-ФЗ.',
		topics: [
			'Рабочее место кассира',
			'Приём товара и инвентаризация',
			'Работа с онлайн-кассой и ФД',
			'Возвраты и обмены',
			'Маркировка товаров «Честный Знак»',
			'Отчёты по выручке и смене',
		],
	},
	{
		tag: 'Малый бизнес',
		title: '1С:УНФ — Управление нашей фирмой',
		level: 'Начинающий — Средний',
		duration: '20 часов',
		format: 'Очно / Онлайн',
		desc: 'Комплексный курс для предпринимателей и сотрудников малого бизнеса. Управленческий учёт, CRM, производство и расчёт зарплаты в одном продукте.',
		topics: [
			'Настройка под вид деятельности',
			'Продажи и CRM',
			'Закупки и склад',
			'Финансы и план-фактный анализ',
			'Производство (базовый уровень)',
			'Расчёт зарплаты',
		],
	},
	{
		tag: 'Зарплата и HR',
		title: '1С:Зарплата и управление персоналом',
		level: 'Средний',
		duration: '24 часа',
		format: 'Очно / Онлайн',
		desc: 'Для HR-специалистов и расчётчиков зарплаты. Кадровый учёт, расчёт всех видов начислений, удержаний, отпусков и больничных. Отчётность в СФР.',
		topics: [
			'Кадровое делопроизводство',
			'Штатное расписание',
			'Расчёт окладов, надбавок, премий',
			'Отпуска, больничные, командировки',
			'НДФЛ и страховые взносы',
			'Отчётность: ЕФС-1, РСВ, 6-НДФЛ',
		],
	},
	{
		tag: 'Для руководителей',
		title: '1С для руководителя',
		level: 'Любой',
		duration: '8 часов',
		format: 'Очно / Онлайн',
		desc: 'Экспресс-курс для директоров и собственников. Как читать управленческие отчёты в 1С, контролировать показатели бизнеса и принимать решения на основе данных.',
		topics: [
			'Ключевые отчёты: P&L, ДДС, баланс',
			'Контроль дебиторской задолженности',
			'АВС-анализ товаров и клиентов',
			'Воронка продаж и выполнение плана',
			'Права доступа и безопасность данных',
		],
	},
]

export default function Courses() {
	return (
		<section id='courses' className='py-24 bg-navy-2'>
			<div className='max-w-300 mx-auto px-8 md:px-12'>
				<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5'>
					Программы обучения
				</p>
				<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-5'>
					Что мы преподаём
				</h2>
				<p className='text-[17px] text-[#8B9EB7] leading-relaxed max-w-145 mb-14'>
					Каждый курс построен на реальных рабочих кейсах — никакой
					лишней теории, только то, что нужно в работе.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
					{courses.map(c => (
						<div
							key={c.title}
							className='group bg-white/4 border border-white/7 rounded-2xl p-7 hover:bg-white/7 hover:border-brand-blue/35 transition-all duration-200 flex flex-col'
						>
							{/* Header */}
							<div className='flex items-start justify-between mb-5'>
								<span className='text-xs font-semibold px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/35 text-brand-blue-light'>
									{c.tag}
								</span>
							</div>

							<h3 className='font-display text-[15px] font-semibold text-[#EEF2FF] leading-snug mb-3'>
								{c.title}
							</h3>
							<p className='text-[13px] text-[#8B9EB7] leading-relaxed mb-5 flex-1'>
								{c.desc}
							</p>

							{/* Topics */}
							<ul className='flex flex-col gap-2 mb-6'>
								{c.topics.map(t => (
									<li
										key={t}
										className='flex items-start gap-2 text-[13px] text-[#8B9EB7]'
									>
										<span className='mt-1 w-1.5 h-1.5 rounded-full bg-brand-blue-light shrink-0' />
										{t}
									</li>
								))}
							</ul>

							{/* Meta */}
							<div className='flex flex-wrap gap-2 pt-5 border-t border-white/7'>
								{[c.duration, c.format, c.level].map(m => (
									<span
										key={m}
										className='text-[12px] px-2.5 py-1 rounded-lg bg-white/4 border border-white/7 text-[#8B9EB7]'
									>
										{m}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
