'use client'

import Link from 'next/link'
import { useState } from 'react'

const slides = [
	{
		number: '25+',
		label: 'лет опыта на рынке ИТ',
		desc: 'Компания основана в 1996 году и за это время реализовала тысячи проектов по всему Дагестану.',
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth={1.6}
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-7 h-7'
			>
				<circle cx='12' cy='12' r='10' />
				<polyline points='12 6 12 12 16 14' />
			</svg>
		),
	},
	{
		number: '14 000+',
		label: 'успешных проектов по автоматизации',
		desc: 'Каждый проект — индивидуальный подход. От небольшого магазина до сети ресторанов.',
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth={1.6}
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-7 h-7'
			>
				<polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
			</svg>
		),
	},
	{
		number: '15 мин',
		label: 'среднее время решения задачи',
		desc: 'Сервисное обслуживание работает как конвейер — точно, быстро и везде одинаково.',
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth={1.6}
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-7 h-7'
			>
				<path d='M13 2L3 14h9l-1 8 10-12h-9l1-8z' />
			</svg>
		),
	},
	{
		number: '1,8 млн ₽',
		label: 'в год экономят наши клиенты',
		desc: 'Грамотно внедрённые ИТ-решения сокращают ручной труд и исключают дорогостоящие ошибки учёта.',
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth={1.6}
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-7 h-7'
			>
				<line x1='12' y1='1' x2='12' y2='23' />
				<path d='M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6' />
			</svg>
		),
	},
]

export default function Hero() {
	const [active, setActive] = useState(0)

	const prev = () => setActive(i => (i === 0 ? slides.length - 1 : i - 1))
	const next = () => setActive(i => (i === slides.length - 1 ? 0 : i + 1))

	const slide = slides[active]

	return (
		<section className='relative min-h-screen pt-17 flex flex-col justify-center overflow-hidden'>
			{/* Background glow */}
			<div
				className='absolute inset-0 pointer-events-none'
				style={{
					background:
						'radial-gradient(ellipse 70% 60% at 70% 40%, rgba(29,111,232,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 15% 70%, rgba(0,210,255,0.06) 0%, transparent 55%)',
				}}
			/>
			{/* Grid pattern */}
			<div className='absolute inset-0 pointer-events-none bg-hero-grid' />

			<div className='max-w-300 mx-auto px-8 md:px-12 w-full'>
				<div className='grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 xl:gap-20 items-center py-20'>
					{/* Left */}
					<div>
						<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/35 text-brand-blue-light text-[13px] font-medium mb-7'>
							<span className='w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse' />
							Официальный представитель 1С в Махачкале
						</div>

						<h1 className='font-display text-[clamp(36px,4vw,58px)] font-bold leading-[1.12] tracking-tight mb-6'>
							Умные решения
							<br />
							для{' '}
							<span className='text-brand-blue-light'>умных</span>
							<br />
							компаний
						</h1>

						<p className='text-[18px] text-[#8B9EB7] leading-relaxed max-w-[520px] mb-10'>
							Подберём и поставим торговое оборудование,
							онлайн-кассы и программные продукты от ведущих
							разработчиков. Бесплатная консультация — в любое
							время.
						</p>

						<div className='flex flex-wrap gap-4'>
							<Link
								href='#contacts'
								className='inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 no-underline'
							>
								Бесплатная консультация
							</Link>
							<Link
								href='#products'
								className='inline-flex items-center px-8 py-3.5 rounded-xl bg-transparent text-[#EEF2FF] text-base font-semibold border border-white/13 hover:border-brand-blue/35 hover:text-brand-blue-light transition-all duration-200 no-underline'
							>
								Каталог продуктов
							</Link>
						</div>
					</div>

					{/* Slider */}
					<div className='flex flex-col gap-4'>
						{/* Slide card */}
						<div className='relative bg-white/4 border border-white/13 rounded-2xl p-8 backdrop-blur-md overflow-hidden h-100 flex flex-col justify-between'>
							{/* Subtle glow behind number */}
							<div
								className='absolute -top-8 -right-8 w-40 h-40 rounded-full pointer-events-none'
								style={{
									background:
										'radial-gradient(circle, rgba(29,111,232,0.18) 0%, transparent 70%)',
								}}
							/>

							<div>
								{/* Icon */}
								<div className='w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/35 flex items-center justify-center text-brand-blue-light mb-6'>
									{slide.icon}
								</div>

								{/* Number */}
								<div className='font-display text-[52px] font-bold text-brand-blue-light leading-none mb-2'>
									{slide.number}
								</div>

								{/* Label */}
								<div className='text-[15px] font-semibold text-[#EEF2FF] mb-3'>
									{slide.label}
								</div>

								{/* Description */}
								<p className='text-[14px] text-[#8B9EB7] leading-relaxed'>
									{slide.desc}
								</p>
							</div>
						</div>

						{/* Controls */}
						<div className='flex items-center justify-between'>
							{/* Dots */}
							<div className='flex items-center gap-2'>
								{slides.map((_, i) => (
									<button
										key={i}
										onClick={() => setActive(i)}
										aria-label={`Слайд ${i + 1}`}
										className={`rounded-full transition-all duration-300 ${
											i === active
												? 'w-6 h-2 bg-brand-blue-light'
												: 'w-2 h-2 bg-white/20 hover:bg-white/40'
										}`}
									/>
								))}
							</div>

							{/* Prev / Next */}
							<div className='flex items-center gap-2'>
								<button
									onClick={prev}
									aria-label='Предыдущий слайд'
									className='w-10 h-10 rounded-xl flex items-center justify-center border border-white/13 text-[#8B9EB7] hover:border-brand-blue/35 hover:text-brand-blue-light hover:bg-brand-blue/10 transition-all duration-200'
								>
									<svg
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
										stroke='currentColor'
										strokeWidth={1.8}
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path d='M10 3L5 8l5 5' />
									</svg>
								</button>
								<button
									onClick={next}
									aria-label='Следующий слайд'
									className='w-10 h-10 rounded-xl flex items-center justify-center border border-white/13 text-[#8B9EB7] hover:border-brand-blue/35 hover:text-brand-blue-light hover:bg-brand-blue/10 transition-all duration-200'
								>
									<svg
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
										stroke='currentColor'
										strokeWidth={1.8}
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path d='M6 3l5 5-5 5' />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
