'use client'

import alterMedImage from '@/src/assets/clients/alter-med.jpg'
import amirkhanovClinicImage from '@/src/assets/clients/amirkhanov-clinic.jpg'
import astradentImage from '@/src/assets/clients/astradent.jpg'
import kadescentrImage from '@/src/assets/clients/kadescentr.jpg'
import medCollegeImage from '@/src/assets/clients/med-college.jpg'
import sportLeaderImage from '@/src/assets/clients/sport-leader.jpg'
import surupackImage from '@/src/assets/clients/surupack.jpg'
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon'
import LeftArrowIcon from '@/src/components/ui/icons/LeftArrowIcon'
import RightArrowIcon from '@/src/components/ui/icons/RightArrowIcon'
import { ROUTE_CASES } from '@/src/routes'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

const slides = [
	[
		{
			icon: (
				<Image
					src={surupackImage}
					alt='SURUPACK'
					width={200}
					height={120}
				/>
			),
		},
		{
			icon: (
				<Image
					src={medCollegeImage}
					alt='Медицинский колледж им. Башларова'
					width={200}
					height={120}
				/>
			),
		},
		{
			icon: (
				<Image
					src={amirkhanovClinicImage}
					alt='Клиника Амирханова'
					width={200}
					height={120}
				/>
			),
		},
	],
	[
		{
			icon: (
				<Image
					src={sportLeaderImage}
					alt='Спорт-Лидер'
					width={200}
					height={120}
				/>
			),
		},
		{
			icon: (
				<Image
					src={alterMedImage}
					alt='АЛЬТЕР-МЕД Медицинский центр'
					width={200}
					height={120}
				/>
			),
		},
		{
			icon: (
				<Image
					src={kadescentrImage}
					alt='Кадастровый Центр'
					width={200}
					height={120}
				/>
			),
		},
	],
	[
		{
			icon: (
				<Image
					src={astradentImage}
					alt='Астрадент'
					width={200}
					height={120}
				/>
			),
		},
	],
]

export const ClientsSlider: FC = () => {
	const [active, setActive] = useState(0)

	const prev = () => setActive(i => (i === 0 ? slides.length - 1 : i - 1))
	const next = () => setActive(i => (i === slides.length - 1 ? 0 : i + 1))

	return (
		<div className='flex flex-col items-center gap-4 w-full'>
			{/* Slide card */}
			<div className='relative bg-white/4 border border-white/13 rounded-2xl p-8 backdrop-blur-md overflow-hidden w-full'>
				<div className='flex items-center justify-between mb-8'>
					<h3 className='font-display text-[22px] font-bold leading-snug'>
						Наши клиенты
					</h3>

					<Link
						href={ROUTE_CASES}
						className='flex items-center gap-1 text-white/40 hover:text-brand-blue-light font-semibold transition-colors duration-150'
					>
						Подробнее <ArrowIcon />
					</Link>
				</div>

				<div className='flex gap-4'>
					{slides[active].map((item, i) => (
						<div
							key={i}
							className='w-1/3 h-36 rounded-xl bg-white border border-white/13 flex items-center justify-center text-brand-blue-light p-5'
						>
							{item.icon}
						</div>
					))}
				</div>
			</div>

			{/* Controls */}
			<div className='flex items-center justify-between w-full'>
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
