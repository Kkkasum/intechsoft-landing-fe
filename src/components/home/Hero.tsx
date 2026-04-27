'use client'

import itsImage from '@/src/assets/main/its.jpeg'
import storeImage from '@/src/assets/main/store.jpeg'
import studyImage from '@/src/assets/main/study.jpeg'
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon'
import LeftArrowIcon from '@/src/components/ui/icons/LeftArrowIcon'
import RightArrowIcon from '@/src/components/ui/icons/RightArrowIcon'
import { ROUTE_ITS, ROUTE_STORE, ROUTE_STUDY } from '@/src/routes'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const slides = [
	{
		title: 'ИТС',
		label: 'Сопровождение 1С',
		image: itsImage,
		to: ROUTE_ITS,
	},
	{
		title: 'Розница',
		label: 'Автоматизация магазина',
		image: storeImage,
		to: ROUTE_STORE,
	},
	{
		title: 'Курсы',
		label: 'Профессиональной подготовки по 1С',
		image: studyImage,
		to: ROUTE_STUDY,
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
							Официальный представитель 1С
						</div>

						<h1 className='font-display text-[clamp(36px,4vw,58px)] font-bold leading-[1.12] tracking-tight mb-6'>
							Умные решения
							<br />
							для{' '}
							<span className='text-brand-blue-light'>умных</span>
							<br />
							компаний
						</h1>

						<p className='text-[18px] text-[#8B9EB7] leading-relaxed max-w-130 mb-10'>
							С Нами вам доступен полноценный комплекс IT-услуг:
							от бесплатной консультации до установки, настройки,
							обучения и постоянного сопровождения.
							<br />
							Работаем так, чтобы вам не пришлось ни о чём
							беспокоиться.
						</p>

						<div className='flex flex-wrap gap-4'>
							<Link
								href='#cta'
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
						<Link
							href={slide.to}
							className='group relative rounded-2xl overflow-hidden h-100 flex flex-col justify-end cursor-pointer border border-white/10 hover:border-brand-blue/40 transition-colors duration-300'
						>
							{/* Full-bleed image */}
							<Image
								key={slide.title}
								src={slide.image}
								alt={slide.title}
								fill
								className='object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]'
								priority
							/>

							{/* Gradient overlay — bottom fade for text legibility */}
							<div
								className='absolute inset-0 pointer-events-none'
								style={{
									background:
										'linear-gradient(to top, rgba(5,12,30,0.85) 0%, rgba(5,12,30,0.35) 45%, transparent 75%)',
								}}
							/>

							{/* Top subtle vignette */}
							<div
								className='absolute inset-0 pointer-events-none'
								style={{
									background:
										'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(29,111,232,0.08) 0%, transparent 60%)',
								}}
							/>

							{/* Text content */}
							<div className='relative z-10 p-7'>
								<div className='font-display text-[52px] font-bold text-white leading-none mb-1 tracking-tight'>
									{slide.title}
								</div>
								<div className='text-[14px] font-medium text-[#93B4D8] uppercase tracking-widest'>
									{slide.label}
								</div>
							</div>

							{/* Arrow */}
							<div className='absolute bottom-6 right-6 z-10 text-white/30 group-hover:text-brand-blue-light transition-colors duration-200'>
								<ArrowIcon />
							</div>
						</Link>

						{/* Controls */}
						<div className='flex items-center justify-between'>
							{/* Dots */}
							<div className='flex items-center gap-2'>
								{slides.map((_, i) => (
									<button
										key={i}
										onClick={() => setActive(i)}
										aria-label={`Слайд ${i + 1}`}
										className={`rounded-full transition-all duration-300 cursor-pointer ${
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
									className='w-10 h-10 rounded-xl flex items-center justify-center border border-white/13 text-[#8B9EB7] hover:border-brand-blue/35 hover:text-brand-blue-light hover:bg-brand-blue/10 transition-all duration-200 cursor-pointer'
								>
									<LeftArrowIcon />
								</button>
								<button
									onClick={next}
									aria-label='Следующий слайд'
									className='w-10 h-10 rounded-xl flex items-center justify-center border border-white/13 text-[#8B9EB7] hover:border-brand-blue/35 hover:text-brand-blue-light hover:bg-brand-blue/10 transition-all duration-200 cursor-pointer'
								>
									<RightArrowIcon />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
