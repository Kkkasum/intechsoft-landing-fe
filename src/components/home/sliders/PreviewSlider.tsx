'use client'

import equipmentImage from '@/src/assets/main/equipment.jpg'
import itsImage from '@/src/assets/main/its.jpeg'
import storeImage from '@/src/assets/main/store.jpeg'
import studyImage from '@/src/assets/main/study.jpeg'
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon'
import LeftArrowIcon from '@/src/components/ui/icons/LeftArrowIcon'
import RightArrowIcon from '@/src/components/ui/icons/RightArrowIcon'
import {
	ROUTE_CATALOG_EQUIPMENT,
	ROUTE_ITS,
	ROUTE_STORE,
	ROUTE_STUDY,
} from '@/src/routes'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

const slides = [
	{
		title: 'ИТС',
		titlePosition: 'bottom',
		label: 'Сопровождение 1С',
		image: itsImage,
		to: ROUTE_ITS,
	},
	{
		title: 'Розница',
		titlePosition: 'top',
		label: 'Автоматизация магазина',
		image: storeImage,
		to: ROUTE_STORE,
	},
	{
		title: 'Курсы',
		titlePosition: 'top',
		label: 'Профессиональной подготовки по 1С',
		image: studyImage,
		to: ROUTE_STUDY,
	},
	{
		title: 'Торговое',
		titlePosition: 'top',
		label: 'оборудование',
		image: equipmentImage,
		to: ROUTE_CATALOG_EQUIPMENT,
	},
]

export const PreviewSlider: FC = () => {
	const [active, setActive] = useState(0)

	const prev = () => setActive(i => (i === 0 ? slides.length - 1 : i - 1))
	const next = () => setActive(i => (i === slides.length - 1 ? 0 : i + 1))

	const slide = slides[active]

	return (
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
				<div
					className={`absolute z-10 p-7 ${slide.titlePosition === 'top' ? 'top-0' : 'bottom-0'}`}
				>
					<div className='font-display text-[52px] font-bold text-white leading-none mb-1 tracking-tight'>
						{slide.title}
					</div>
					<div className='text-[14px] font-medium text-brand-blue-light uppercase tracking-widest'>
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
	)
}
