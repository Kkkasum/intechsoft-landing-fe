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
				<path d='M12 2L2 7l10 5 10-5-10-5z' />
				<path d='M2 17l10 5 10-5' />
				<path d='M2 12l10 5 10-5' />
			</svg>
		),
		title: 'Доступ к официальным ресурсам и сервисам',
		desc: 'Пользуйтесь всеми официальными сервисами 1С: ИТС-портал, системой «1С:Контрагент», справочниками и нормативной базой.',
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
				<polyline points='23 4 23 10 17 10' />
				<path d='M20.49 15a9 9 0 1 1-2.12-9.36L23 10' />
			</svg>
		),
		title: 'Регулярные обновления конфигураций',
		desc: 'Ваша программа всегда соответствует действующему законодательству. Обновления выходят своевременно и устанавливаются оперативно.',
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
		title: 'Профессиональная поддержка',
		desc: 'Наши специалисты решат любой вопрос: от настройки программы до сложных методологических консультаций.',
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
				<path d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.55 3.1a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.72a16 16 0 006.37 6.37l.88-.88a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z' />
			</svg>
		),
		title: 'Консультационная линия',
		desc: 'Звоните с любым вопросом по работе в 1С — линия консультаций доступна в рабочие часы и готова помочь быстро.',
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
				<polyline points='12 6 12 12 16 14' />
			</svg>
		),
		title: 'Квалифицированная помощь',
		desc: 'Опытные специалисты с сертификатами 1С готовы помочь вам в решении нестандартных задач и нештатных ситуаций.',
	},
]

export default function Benefits() {
	return (
		<section className='py-24 bg-navy-2'>
			<div className='max-w-300 mx-auto px-8 md:px-12'>
				<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5'>
					Ключевые преимущества
				</p>
				<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-4'>
					Почему без 1С: КП (ИТС) не обойтись?
				</h2>
				<p className='text-[17px] text-[#8B9EB7] leading-relaxed max-w-145 mb-14'>
					Договор ИТС — это не просто обновления. Это комплексное
					сопровождение вашей учётной системы на каждом этапе работы.
				</p>

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
	)
}
