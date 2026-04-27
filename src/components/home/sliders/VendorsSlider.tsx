'use client'

import AstralLogo from '@/src/assets/vendors/astral.png'
import AtolLogo from '@/src/assets/vendors/atol.png'
import BitrixLogo from '@/src/assets/vendors/bitrix.png'
import EvotorLogo from '@/src/assets/vendors/evotor.png'
import MobiSLogo from '@/src/assets/vendors/mobis.png'
import OFDLogo from '@/src/assets/vendors/ofd.png'
import OneCLogo from '@/src/assets/vendors/onec.png'
import OneCBitrixLogo from '@/src/assets/vendors/onecbitrix.png'
import RarusLogo from '@/src/assets/vendors/rarus.png'
import RKeeperLogo from '@/src/assets/vendors/rkeeper.png'
import SoftBalanceLogo from '@/src/assets/vendors/softbalance.png'
import TaxComLogo from '@/src/assets/vendors/taxcom.png'
import LeftArrowIcon from '@/src/components/ui/icons/LeftArrowIcon'
import RightArrowIcon from '@/src/components/ui/icons/RightArrowIcon'
import Image from 'next/image'
import { FC, useState } from 'react'

const slides = [
	[
		{ icon: <Image src={OneCLogo} alt='1С' width={200} height={120} /> },
		{
			icon: (
				<Image
					src={OneCBitrixLogo}
					alt='1С-Битрикс'
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
					src={BitrixLogo}
					alt='Битрикс24'
					width={200}
					height={120}
				/>
			),
		},
		{ icon: <Image src={AtolLogo} alt='АТОЛ' width={200} height={120} /> },
	],
	[
		{
			icon: (
				<Image
					src={RarusLogo}
					alt='1С-Рарус'
					width={200}
					height={120}
				/>
			),
		},
		{
			icon: (
				<Image src={EvotorLogo} alt='ЭВОТОР' width={200} height={120} />
			),
		},
	],
	[
		{
			icon: (
				<Image
					src={AstralLogo}
					alt='Калуга Астрал'
					width={200}
					height={120}
				/>
			),
		},
		{
			icon: (
				<Image
					src={SoftBalanceLogo}
					alt='СофтБаланс'
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
					src={RKeeperLogo}
					alt='R_Keeper'
					width={200}
					height={120}
				/>
			),
		},
		{
			icon: (
				<Image src={MobiSLogo} alt='Моби-С' width={200} height={120} />
			),
		},
	],
	[
		{
			icon: (
				<Image
					src={OFDLogo}
					alt='Платформа ОФД'
					width={200}
					height={120}
				/>
			),
		},
		{
			icon: (
				<Image src={TaxComLogo} alt='TAXCOM' width={200} height={120} />
			),
		},
	],
]

export const VendorsSlider: FC = () => {
	const [active, setActive] = useState(0)

	const prev = () => setActive(i => (i === 0 ? slides.length - 1 : i - 1))
	const next = () => setActive(i => (i === slides.length - 1 ? 0 : i + 1))

	return (
		<div className='flex flex-col items-center gap-4 w-full'>
			{/* Slide card */}
			<div className='relative bg-white/4 border border-white/13 rounded-2xl p-8 backdrop-blur-md overflow-hidden w-full'>
				<h3 className='font-display text-[22px] font-bold leading-snug mb-8'>
					Вендоры
				</h3>

				<div className='flex gap-4'>
					{slides[active].map((item, i) => (
						<div
							key={i}
							className='w-1/2 h-28 rounded-xl bg-white border border-white/13 flex items-center justify-center text-brand-blue-light p-5'
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
