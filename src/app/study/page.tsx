import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Курсы 1С в Махачкале — Интех-Софт',
	description:
		'Очные и дистанционные курсы по 1С в Махачкале. Обучение бухгалтеров, менеджеров и руководителей. Сертификат по окончании. Группы и индивидуальные занятия.',
}

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

const formats = [
	{
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth={1.6}
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-6 h-6'
			>
				<path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
				<circle cx='9' cy='7' r='4' />
				<path d='M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' />
			</svg>
		),
		title: 'Групповые занятия',
		desc: 'Группы до 8 человек. Оптимально для корпоративного обучения сотрудников.',
	},
	{
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth={1.6}
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-6 h-6'
			>
				<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
				<circle cx='12' cy='7' r='4' />
			</svg>
		),
		title: 'Индивидуальное обучение',
		desc: 'Программа под вашу должность и задачи. Удобный график, быстрый результат.',
	},
	{
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth={1.6}
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-6 h-6'
			>
				<rect x='2' y='3' width='20' height='14' rx='2' />
				<path d='M8 21h8M12 17v4' />
			</svg>
		),
		title: 'Онлайн-формат',
		desc: 'Занятия через Zoom или TeamViewer прямо на вашем компьютере — из любой точки.',
	},
	{
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth={1.6}
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-6 h-6'
			>
				<path d='M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' />
				<polyline points='9 22 9 12 15 12 15 22' />
			</svg>
		),
		title: 'Выезд к заказчику',
		desc: 'Преподаватель приедет в ваш офис и обучит команду на вашей базе данных.',
	},
]

const steps = [
	{
		num: '01',
		title: 'Оставьте заявку',
		desc: 'Позвоните или напишите нам — обсудим цели обучения и выберем подходящий курс.',
	},
	{
		num: '02',
		title: 'Составим программу',
		desc: 'Адаптируем содержание под вашу специфику: ваша отрасль, ваши задачи.',
	},
	{
		num: '03',
		title: 'Проведём обучение',
		desc: 'Занятия в удобное время — очно в нашем офисе, у вас или онлайн.',
	},
	{
		num: '04',
		title: 'Выдадим сертификат',
		desc: 'По окончании курса выдаём документ, подтверждающий прохождение обучения.',
	},
]

export default function ObuchenieePage() {
	return (
		<main>
			<Navbar />

			{/* Hero */}
			<section className='relative pt-[68px] overflow-hidden bg-navy'>
				<div
					className='absolute inset-0 pointer-events-none'
					style={{
						background:
							'radial-gradient(ellipse 60% 70% at 80% 30%, rgba(29,111,232,0.11) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(0,210,255,0.05) 0%, transparent 55%)',
					}}
				/>
				<div className='absolute inset-0 pointer-events-none bg-hero-grid' />

				<div className='max-w-[1200px] mx-auto px-8 md:px-12 relative py-24 md:py-32'>
					<Link
						href='/'
						className='inline-flex items-center gap-2 text-[#8B9EB7] text-sm hover:text-brand-blue-light transition-colors no-underline mb-8'
					>
						<svg
							width='14'
							height='14'
							viewBox='0 0 16 16'
							fill='none'
							stroke='currentColor'
							strokeWidth={1.8}
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M10 3L5 8l5 5' />
						</svg>
						На главную
					</Link>

					<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-4'>
						Образование
					</p>
					<h1 className='font-display text-[clamp(36px,4.5vw,62px)] font-bold leading-[1.1] tracking-tight mb-6 max-w-[700px]'>
						Курсы 1С
						<br />в Махачкале
					</h1>
					<p className='text-[18px] text-[#8B9EB7] leading-relaxed max-w-[560px] mb-10'>
						Практическое обучение для бухгалтеров, менеджеров,
						кассиров и руководителей. Очно, онлайн и с выездом к
						заказчику. Сертификат по окончании.
					</p>

					<div className='flex flex-wrap gap-4'>
						<a
							href='mailto:info@intechsoft.ru'
							className='inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 no-underline'
						>
							Записаться на курс
						</a>
						<a
							href='#courses'
							className='inline-flex items-center px-8 py-3.5 rounded-xl bg-transparent text-[#EEF2FF] text-base font-semibold border border-white/13 hover:border-brand-blue/35 hover:text-brand-blue-light transition-all duration-200 no-underline'
						>
							Смотреть программы
						</a>
					</div>

					{/* Quick stats */}
					<div className='grid grid-cols-2 md:grid-cols-4 gap-px mt-16 bg-white/7 border border-white/7 rounded-2xl overflow-hidden'>
						{[
							{ val: '6', label: 'курсов по 1С' },
							{ val: '8–32', label: 'часа продолжительность' },
							{ val: '25+', label: 'лет преподаём' },
							{
								val: '100%',
								label: 'практика на реальных задачах',
							},
						].map(s => (
							<div key={s.label} className='px-6 py-5 bg-navy'>
								<div className='font-display text-2xl font-bold text-brand-blue-light mb-1'>
									{s.val}
								</div>
								<div className='text-[13px] text-[#8B9EB7] leading-snug'>
									{s.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Courses */}
			<section id='courses' className='py-24 bg-navy-2'>
				<div className='max-w-[1200px] mx-auto px-8 md:px-12'>
					<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5'>
						Программы обучения
					</p>
					<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-5'>
						Что мы преподаём
					</h2>
					<p className='text-[17px] text-[#8B9EB7] leading-relaxed max-w-[580px] mb-14'>
						Каждый курс построен на реальных рабочих кейсах —
						никакой лишней теории, только то, что нужно в работе.
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
											<span className='mt-1 w-1.5 h-1.5 rounded-full bg-brand-blue-light flex-shrink-0' />
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

			{/* Formats */}
			<section className='py-24 bg-navy'>
				<div className='max-w-[1200px] mx-auto px-8 md:px-12'>
					<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5'>
						Форматы
					</p>
					<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-14'>
						Удобный формат для любой ситуации
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
						{formats.map(f => (
							<div
								key={f.title}
								className='bg-white/4 border border-white/7 rounded-2xl p-6 hover:bg-white/7 hover:border-brand-blue/35 transition-all duration-200'
							>
								<div className='w-11 h-11 rounded-xl bg-brand-blue/10 border border-brand-blue/35 flex items-center justify-center text-brand-blue-light mb-5'>
									{f.icon}
								</div>
								<h3 className='font-semibold text-[15px] text-[#EEF2FF] mb-2'>
									{f.title}
								</h3>
								<p className='text-[13px] text-[#8B9EB7] leading-relaxed'>
									{f.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How it works */}
			<section className='py-24 bg-navy-2'>
				<div className='max-w-[1200px] mx-auto px-8 md:px-12'>
					<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5'>
						Как это работает
					</p>
					<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-14'>
						4 шага до результата
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/7 border border-white/7 rounded-2xl overflow-hidden'>
						{steps.map(s => (
							<div
								key={s.num}
								className='p-8 bg-navy-2 hover:bg-navy-3 transition-colors duration-200'
							>
								<div className='font-display text-[11px] font-semibold text-[#4D6280] tracking-[0.08em] mb-4'>
									{s.num}
								</div>
								<h3 className='text-[15px] font-semibold text-[#EEF2FF] mb-2.5'>
									{s.title}
								</h3>
								<p className='text-[13px] text-[#8B9EB7] leading-relaxed'>
									{s.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className='relative py-24 overflow-hidden bg-navy'>
				<div
					className='absolute inset-0 pointer-events-none'
					style={{
						background:
							'linear-gradient(135deg, rgba(29,111,232,0.18) 0%, rgba(0,210,255,0.07) 100%)',
					}}
				/>
				<div className='max-w-[1200px] mx-auto px-8 md:px-12 relative text-center'>
					<h2 className='font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-tight tracking-tight mb-4'>
						Готовы начать обучение?
					</h2>
					<p className='text-lg text-[#8B9EB7] mb-10 max-w-[480px] mx-auto'>
						Оставьте заявку — подберём курс, согласуем даты и формат
					</p>
					<div className='flex flex-wrap gap-4 justify-center'>
						<a
							href='mailto:info@intechsoft.ru'
							className='inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 no-underline'
						>
							Записаться
						</a>
						<a
							href='tel:+78722000000'
							className='inline-flex items-center px-8 py-3.5 rounded-xl bg-transparent text-[#EEF2FF] text-base font-semibold border border-white/13 hover:border-brand-blue/35 hover:text-brand-blue-light transition-all duration-200 no-underline'
						>
							Позвонить
						</a>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	)
}
