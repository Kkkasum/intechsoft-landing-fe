import MonitorIcon from '@/src/components/ui/icons/MonitorIcon'

const benefits = [
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
				<path d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7h11' />
				<circle cx='9' cy='21' r='1' />
				<circle cx='20' cy='21' r='1' />
			</svg>
		),
		title: 'Контроль продаж в реальном времени',
		desc: 'Всегда знаете, что продаётся, сколько осталось и какова выручка — по каждой точке и в целом.',
	},
	{
		icon: <MonitorIcon />,
		title: 'Ускорение работы персонала',
		desc: 'Кассиры, кладовщики и менеджеры работают быстрее и допускают меньше ошибок.',
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
				<polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
			</svg>
		),
		title: 'Прозрачная аналитика',
		desc: 'Видите, что продаётся, когда и почему. АВС-анализ, воронка, отчёты по выручке и марже.',
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
				<circle cx='12' cy='12' r='10' />
				<path d='M12 8v4l3 3' />
			</svg>
		),
		title: 'Интеграции без разрывов',
		desc: 'Онлайн-кассы, сайты, маркетплейсы, ЭДО и маркировка — всё работает как единая система.',
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
				<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
			</svg>
		),
		title: 'Снижение потерь',
		desc: 'Меньше пересортицы, недостач и «ручного хаоса». Система фиксирует каждое движение товара.',
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
				<path d='M18 20V10M12 20V4M6 20v-6' />
			</svg>
		),
		title: 'Масштабируемость',
		desc: 'Открываете новую точку или расширяете ассортимент — система растёт вместе с бизнесом.',
	},
]

const steps = [
	{
		num: '01',
		title: 'Анализ бизнеса',
		desc: 'Разбираемся в процессах вашего магазина: что считаете, где болит, какое оборудование используете.',
	},
	{
		num: '02',
		title: 'Подбор решения',
		desc: 'Предлагаем подходящий продукт и состав работ — под ваш формат, масштаб и бюджет.',
	},
	{
		num: '03',
		title: 'Внедрение и настройка',
		desc: 'Устанавливаем, настраиваем, загружаем товары и обучаем персонал работе в системе.',
	},
	{
		num: '04',
		title: 'Поддержка и развитие',
		desc: 'Остаёмся рядом: обновления, консультации, доработки по мере роста бизнеса.',
	},
]

export default function Benefits() {
	return (
		<>
			<section className='py-24 bg-navy'>
				<div className='max-w-300 mx-auto px-8 md:px-12'>
					<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5'>
						Результат
					</p>
					<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-14'>
						Что вы получите с автоматизацией
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
						{benefits.map(b => (
							<div
								key={b.title}
								className='bg-white/4 border border-white/7 rounded-2xl p-6 hover:bg-white/7 hover:border-brand-blue/35 transition-all duration-200'
							>
								<div className='w-11 h-11 rounded-xl bg-brand-blue/10 border border-brand-blue/35 flex items-center justify-center text-brand-blue-light mb-5'>
									{b.icon}
								</div>
								<h3 className='font-semibold text-[15px] text-[#EEF2FF] mb-2'>
									{b.title}
								</h3>
								<p className='text-[13px] text-[#8B9EB7] leading-relaxed'>
									{b.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='py-24 bg-navy-2'>
				<div className='max-w-300 mx-auto px-8 md:px-12'>
					<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5'>
						Как это работает
					</p>
					<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-14'>
						4 шага до автоматизации
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
		</>
	)
}
