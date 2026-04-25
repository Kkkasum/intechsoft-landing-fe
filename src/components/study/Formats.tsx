import MonitorIcon from '@/src/components/ui/icons/MonitorIcon'

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
				<path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
				<circle cx='9' cy='7' r='4' />
				<path d='M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' />
			</svg>
		),
		title: 'Групповые занятия',
		desc: 'Группы до 3-4 человек. Оптимально для корпоративного обучения сотрудников.',
	},
	{
		icon: <MonitorIcon />,
		title: 'Онлайн-формат',
		desc: 'Занятия через Битрикс прямо на вашем компьютере — из любой точки.',
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

export default function Formats() {
	return (
		<>
			<section className='py-24 bg-navy'>
				<div className='max-w-300 mx-auto px-8 md:px-12'>
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

			<section className='py-24 bg-navy-2'>
				<div className='max-w-300 mx-auto px-8 md:px-12'>
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
		</>
	)
}
