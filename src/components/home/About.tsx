'use client'

import AstralLogo from '@/src/assets/astral.png'
import AtolLogo from '@/src/assets/atol.png'
import BitrixLogo from '@/src/assets/bitrix.png'
import EvotorLogo from '@/src/assets/evotor.png'
import MobiSLogo from '@/src/assets/mobis.png'
import OFDLogo from '@/src/assets/ofd.png'
import OneCLogo from '@/src/assets/onec.png'
import OneCBitrixLogo from '@/src/assets/onecbitrix.png'
import RarusLogo from '@/src/assets/rarus.png'
import RKeeperLogo from '@/src/assets/rkeeper.png'
import SoftBalanceLogo from '@/src/assets/softbalance.png'
import TaxComLogo from '@/src/assets/taxcom.png'
import LeftArrowIcon from '@/src/components/ui/icons/LeftArrowIcon'
import RightArrowIcon from '@/src/components/ui/icons/RightArrowIcon'
import Image from 'next/image'
import { useState } from 'react'

const features = [
	{
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth={1.8}
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-5 h-5'
			>
				<path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
				<circle cx='9' cy='7' r='4' />
				<path d='M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' />
			</svg>
		),
		title: 'Команда профессионалов',
		text: 'Наши специалисты — это многопрофильная команда, которая решает любые задачи в единой точке контакта, экономя ваше время и ресурсы. ',
	},
	{
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth={1.8}
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-5 h-5'
			>
				<rect x='2' y='3' width='20' height='14' rx='2' />
				<path d='M8 21h8M12 17v4' />
			</svg>
		),
		title: 'Широкий продуктовый портфель',
		text: 'Мы предлагаем ассортимент, включающий программные продукты и аппаратные решения от ведущих вендоров.',
	},
]

const metrics = [
	{ label: 'Опыт работы', value: '25 лет' },
	{ label: 'Проектов автоматизировано', value: '>14 000' },
	{ label: 'Ср. время решения задач', value: '~15 мин' },
]

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

export default function About() {
	const [active, setActive] = useState(0)

	const prev = () => setActive(i => (i === 0 ? slides.length - 1 : i - 1))
	const next = () => setActive(i => (i === slides.length - 1 ? 0 : i + 1))

	return (
		<section id='about' className='py-24 bg-navy-2'>
			<div className='max-w-300 mx-auto px-8 md:px-12'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center'>
					{/* Left */}
					<div>
						<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5'>
							Почему мы
						</p>
						<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-5'>
							Комплексная поддержка: единая точка контакта для
							всех ИТ-решений
						</h2>
						<p className='text-base text-[#8B9EB7] leading-relaxed mb-12'>
							Основанная в 1996 году компания «ИнтехСофт»
							зарекомендовала себя как надёжный партнёр в сфере
							автоматизации бизнеса
							<br />
							Сегодня мы — динамично развивающаяся компания с
							собственным Учебным центром и развитой
							инфраструктурой
						</p>

						<div className='flex flex-col gap-9'>
							{features.map(f => (
								<div key={f.title} className='flex gap-5'>
									<div className='w-11 h-11 rounded-[10px] bg-brand-blue/10 border border-brand-blue/35 flex items-center justify-center shrink-0 text-brand-blue-light'>
										{f.icon}
									</div>
									<div>
										<h3 className='font-semibold text-base text-[#EEF2FF] mb-1.5'>
											{f.title}
										</h3>
										<p className='text-sm text-[#8B9EB7] leading-[1.55]'>
											{f.text}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right: metrics */}
					<div className='flex flex-col items-center gap-5 mt-10'>
						<div className='bg-white/4 border border-white/13 rounded-2xl p-8 w-full'>
							<h3 className='font-display text-[22px] font-bold leading-snug mb-8'>
								Результаты,
								<br />
								которые говорят сами
							</h3>
							<div className='flex flex-col'>
								{metrics.map((m, i) => (
									<div
										key={m.label}
										className={`flex justify-between items-baseline py-4 ${
											i < metrics.length - 1
												? 'border-b border-white/7'
												: ''
										}`}
									>
										<span className='text-sm text-[#8B9EB7]'>
											{m.label}
										</span>
										<span className='font-display text-xl font-bold text-brand-blue-light'>
											{m.value}
										</span>
									</div>
								))}
							</div>
						</div>

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
										<LeftArrowIcon />
									</button>
									<button
										onClick={next}
										aria-label='Следующий слайд'
										className='w-10 h-10 rounded-xl flex items-center justify-center border border-white/13 text-[#8B9EB7] hover:border-brand-blue/35 hover:text-brand-blue-light hover:bg-brand-blue/10 transition-all duration-200'
									>
										<RightArrowIcon />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
