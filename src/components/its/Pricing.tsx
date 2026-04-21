const rules = [
	{
		num: '01',
		title: 'Тариф зависит от вашей системы',
		desc: 'Выбор тарифа зависит от параметров вашей учётной системы и числа используемых конфигураций.',
	},
	{
		num: '02',
		title: 'Длиннее срок — ниже цена',
		desc: 'Чем длительнее срок договора, тем ниже ежемесячная стоимость обслуживания.',
	},
	{
		num: '03',
		title: 'Скидка за непрерывность — 20%',
		desc: 'Непрерывное продление договора обеспечивает скидку 20% на обслуживание.',
	},
	{
		num: '04',
		title: 'Перерыв аннулирует непрерывность',
		desc: 'Перерыв в сопровождении более одного месяца аннулирует непрерывность договора и право на скидку.',
	},
]

export default function Pricing() {
	return (
		<section id='pricing' className='py-24 bg-navy'>
			<div className='max-w-300 mx-auto px-8 md:px-12'>
				<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5'>
					Стоимость
				</p>
				<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-4'>
					Сколько стоит договор 1С: КП (ИТС)?
				</h2>
				<p className='text-[17px] text-[#8B9EB7] leading-relaxed max-w-145 mb-3'>
					Стоимость договора 1С: ИТС зависит от выбранного вами
					тарифа.
				</p>

				{/* Important notice */}
				<div className='flex items-start gap-3 bg-brand-blue/8 border border-brand-blue/25 rounded-xl px-5 py-4 mb-14 max-w-2xl'>
					<svg
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth={1.8}
						strokeLinecap='round'
						strokeLinejoin='round'
						className='w-5 h-5 text-brand-blue-light shrink-0 mt-0.5'
					>
						<circle cx='12' cy='12' r='10' />
						<line x1='12' y1='8' x2='12' y2='12' />
						<line x1='12' y1='16' x2='12.01' y2='16' />
					</svg>
					<p className='text-[14px] text-[#8B9EB7] leading-relaxed'>
						<span className='text-[#EEF2FF] font-semibold'>
							Важно:
						</span>{' '}
						точную стоимость можно узнать только после уточнения
						параметров вашей системы. Свяжитесь с нами — рассчитаем
						индивидуально.
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/7 border border-white/7 rounded-2xl overflow-hidden mb-10'>
					{rules.map(r => (
						<div
							key={r.num}
							className='p-8 bg-navy hover:bg-navy-2 transition-colors duration-200'
						>
							<div className='font-display text-[11px] font-semibold text-[#4D6280] tracking-[0.08em] mb-4'>
								{r.num}
							</div>
							<h3 className='text-[15px] font-semibold text-[#EEF2FF] mb-2.5'>
								{r.title}
							</h3>
							<p className='text-[13px] text-[#8B9EB7] leading-relaxed'>
								{r.desc}
							</p>
						</div>
					))}
				</div>

				{/* Discount highlight */}
				<div className='relative overflow-hidden rounded-2xl p-8 bg-white/4 border border-white/7'>
					<div
						className='absolute inset-0 pointer-events-none'
						style={{
							background:
								'radial-gradient(ellipse 70% 80% at 90% 50%, rgba(29,111,232,0.12) 0%, transparent 60%)',
						}}
					/>
					<div className='relative flex flex-col md:flex-row md:items-center gap-6 justify-between'>
						<div>
							<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-2'>
								Выгодное предложение
							</p>
							<h3 className='font-display text-[22px] font-bold text-[#EEF2FF] mb-2'>
								Скидка 20% за непрерывность
							</h3>
							<p className='text-[14px] text-[#8B9EB7] max-w-md'>
								Продлевайте договор без перерывов — и экономьте
								20% каждый месяц. Выгода растёт вместе с вашим
								сроком сотрудничества.
							</p>
						</div>
						<div className='shrink-0'>
							<div className='text-center bg-brand-blue/15 border border-brand-blue/35 rounded-2xl px-8 py-5'>
								<div className='font-display text-[48px] font-bold text-brand-blue-light leading-none mb-1'>
									−20%
								</div>
								<div className='text-[13px] text-[#8B9EB7]'>
									за непрерывный договор
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
