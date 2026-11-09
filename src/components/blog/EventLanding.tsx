import type { EventLanding } from '@/src/content/event-landings'
import Image from 'next/image'

function SectionTitle({ children }: { children: React.ReactNode }) {
	return (
		<div className='mb-5'>
			<h2 className='font-display text-[clamp(30px,4vw,52px)] font-black leading-[1.11] tracking-tight'>
				{children}
			</h2>
			<span className='mt-3 block h-1.5 w-[72px] rounded-full bg-brand-cyan' />
		</div>
	)
}

function CalendarIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='#cbe8ff'
			strokeWidth={1.9}
			strokeLinecap='round'
			strokeLinejoin='round'
			className={className}
			aria-hidden='true'
		>
			<rect x='3' y='5' width='18' height='16' rx='2' />
			<path d='M7 3v4M17 3v4M3 10h18' />
		</svg>
	)
}

function ClockIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='#cbe8ff'
			strokeWidth={1.9}
			strokeLinecap='round'
			strokeLinejoin='round'
			className={className}
			aria-hidden='true'
		>
			<circle cx='12' cy='12' r='10' />
			<path d='M12 6v6l4 2' />
		</svg>
	)
}

function MonitorIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='#cbe8ff'
			strokeWidth={1.9}
			strokeLinecap='round'
			strokeLinejoin='round'
			className={className}
			aria-hidden='true'
		>
			<rect x='2' y='3' width='20' height='15' rx='2' />
			<path d='M8 21h8M12 18v3' />
		</svg>
	)
}

function QrMarkIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox='0 0 180 152'
			className={className}
			role='img'
			aria-label='Иконка маркировки'
		>
			<defs>
				<linearGradient id='qrgrad' x1='0' y1='0' x2='1' y2='1'>
					<stop stopColor='#86dbff' />
					<stop offset='1' stopColor='#2278ec' />
				</linearGradient>
				<filter
					id='qrshadow'
					x='-30%'
					y='-30%'
					width='160%'
					height='170%'
				>
					<feDropShadow
						dx='0'
						dy='7'
						stdDeviation='5'
						floodColor='#0e4b99'
						floodOpacity='.3'
					/>
				</filter>
			</defs>
			<g
				transform='translate(10,0)'
				filter='url(#qrshadow)'
				fill='none'
				stroke='url(#qrgrad)'
				strokeWidth='12'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M38 29H24Q16 29 16 37V52M122 29H137Q145 29 145 37V52M16 103V117Q16 125 24 125H39M145 103V117Q145 125 137 125H122' />
			</g>
			<g fill='#3b8ce9' opacity='.85'>
				<rect x='63' y='54' width='12' height='12' rx='2' />
				<rect x='82' y='54' width='12' height='12' rx='2' />
				<rect x='100' y='54' width='12' height='12' rx='2' />
				<rect x='63' y='73' width='12' height='12' rx='2' />
				<rect x='99' y='73' width='12' height='12' rx='2' />
				<rect x='81' y='91' width='12' height='12' rx='2' />
				<rect x='100' y='91' width='12' height='12' rx='2' />
				<rect x='63' y='91' width='11' height='11' rx='2' />
			</g>
		</svg>
	)
}

function RegistrationButton({
	href,
	children,
	className = '',
}: {
	href: string
	children: React.ReactNode
	className?: string
}) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={`inline-flex items-center justify-center gap-3.5 whitespace-nowrap rounded-xl border border-brand-blue-light bg-brand-blue px-6 py-3.5 text-[15px] font-bold shadow-[0_8px_24px_rgba(0,78,200,.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan md:px-7 md:py-4 md:text-[16px] no-underline ${className}`}
		>
			{children}
			<span className='translate-y-[-1px] text-[22px] font-normal leading-none'>
				→
			</span>
		</a>
	)
}

const iconClass = 'h-5 w-5 md:h-6 md:w-6'

export default function EventLanding({
	landing,
}: {
	landing: EventLanding
}) {
	return (
		<div className='overflow-hidden bg-[linear-gradient(145deg,#061529_0%,#081e37_60%,#07152b_100%)]'>
			{/* Hero */}
			<section className='relative flex min-h-[560px] items-center overflow-hidden border-b border-white/7'>
				<Image
					src={landing.heroImage}
					alt=''
					fill
					priority
					sizes='100vw'
					className='object-cover object-[center_right]'
				/>
				<div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(4,17,34,.55),rgba(4,17,34,.33)_39%,rgba(4,17,34,0)_65%)]' />

				<div className='relative mx-auto w-full max-w-300 px-8 pt-28 pb-14 md:px-12'>
					<div className='max-w-[565px]'>
						<span className='inline-flex items-center gap-2.5 rounded-full border border-brand-cyan/60 bg-navy-3/40 px-4 py-2 text-[13px] font-bold tracking-[0.04em] text-[#bedfff]'>
							<span className='h-2 w-2 rounded-full bg-brand-blue shadow-[0_0_15px_#428cff]' />
							{landing.badge}
						</span>

						<h1 className='mt-6 mb-6 font-display text-[clamp(36px,6vw,72px)] leading-[0.96] font-black tracking-tight'>
							{landing.titleTop}
							<br />
							{landing.titleBottom}{' '}
							<span className='text-brand-blue-light'>
								{landing.titleAccent}
							</span>
						</h1>

						<div className='mb-4 flex flex-wrap items-center gap-4 text-[16px] font-bold md:gap-6 md:text-[19px]'>
							<span className='inline-flex items-center gap-2.5'>
								<CalendarIcon className={iconClass} />
								16 декабря 2026
							</span>
							<span className='hidden h-6 w-px bg-white/40 sm:block' />
							<span className='inline-flex items-center gap-2.5'>
								<ClockIcon className={iconClass} />
								10:00 (МСК)
							</span>
						</div>

						<p className='mb-6 text-[16px] text-[#d9e8f8] md:text-[19px]'>
							{landing.lead}
						</p>

						<RegistrationButton href={landing.registrationUrl}>
							{landing.registrationLabel}
						</RegistrationButton>

						<p className='mt-4 text-[13px] text-[#c6d9ed] md:text-[15px]'>
							{landing.note}
						</p>
					</div>
				</div>
			</section>

			{/* About */}
			<section className='relative isolate pt-14 md:pt-20'>
				<div
					className='pointer-events-none absolute top-[-110px] right-[-240px] hidden h-[570px] w-[590px] rounded-full border-2 border-brand-blue/40 rotate-[16deg] lg:block'
					style={{
						background:
							'radial-gradient(ellipse at 36% 44%, rgba(40,124,227,.2), rgba(10,35,75,.65) 55%, rgba(10,42,90,.2) 70%)',
						boxShadow:
							'inset 8px 8px 24px rgba(99,211,255,.08), 0 0 85px rgba(32,117,200,.10)',
					}}
				/>
				<div className='relative mx-auto max-w-300 px-8 md:px-12'>
					<SectionTitle>{landing.aboutTitle}</SectionTitle>
					<p className='max-w-[710px] text-[16px] leading-[1.6] text-[#d5e4f4] md:text-[18px]'>
						{landing.aboutText}
					</p>
				</div>
			</section>

			{/* Topics */}
			<section className='py-10 md:py-14'>
				<div className='mx-auto max-w-300 px-8 md:px-12'>
					<SectionTitle>{landing.topicsTitle}</SectionTitle>
					<div className='grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4'>
						{landing.topics.map((topic, i) => (
							<article
								key={i}
								className='relative flex h-[210px] flex-col justify-end overflow-hidden rounded-[20px] bg-[linear-gradient(145deg,#b4e3ff,#89c5f3_65%,#78bbec)] shadow-[inset_0_0_0_1px_rgba(255,255,255,.56),0_18px_35px_rgba(0,11,29,.1)] md:h-[244px]'
							>
								{topic.image && (
									<div className='absolute inset-x-0 top-0 h-[137px] md:h-[169px]'>
										<Image
											src={topic.image}
											alt={topic.imageAlt ?? ''}
											fill
											sizes='(max-width: 1024px) 50vw, 25vw'
											className='object-cover object-[center_44%] [mask-image:linear-gradient(to_bottom,#000_0%,#000_78%,transparent_100%)]'
										/>
									</div>
								)}
								{topic.icon === 'qr' && (
									<div className='absolute inset-x-0 top-0 flex h-[137px] items-center justify-center md:h-[169px]'>
										<QrMarkIcon className='block h-[120px] w-[137px] md:h-[148px] md:w-[168px]' />
									</div>
								)}
								<h3 className='relative z-10 flex min-h-[70px] items-end px-3.5 pb-4 text-[clamp(16px,2vw,22px)] leading-[1.18] font-extrabold tracking-[-0.028em] text-[#081c34] md:min-h-[77px] md:px-5 md:pb-5 lg:text-[clamp(17px,1.6vw,25px)]'>
									<span>
										{topic.titleLines[0]}
										<br />
										{topic.titleLines[1]}
									</span>
								</h3>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Partner */}
			<section className='relative isolate py-12 md:py-16'>
				<div
					className='pointer-events-none absolute top-5 right-[-270px] hidden h-[480px] w-[480px] rounded-full border-2 border-brand-blue rotate-[-28deg] lg:block'
					style={{
						background:
							'linear-gradient(130deg, rgba(31,142,244,.6), rgba(8,33,70,.5) 60%, transparent 65%)',
					}}
				/>
				<div className='relative mx-auto max-w-300 px-8 md:px-12'>
					<div className='grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.1fr_1px_0.9fr] lg:gap-12'>
						<div>
							<h2 className='font-display text-[clamp(30px,4vw,52px)] leading-[1.06] font-black tracking-tight'>
								{landing.partnerTitle}
								<strong className='block text-brand-blue-light'>
									{landing.partnerHighlight}
								</strong>
							</h2>
							<span className='mt-3.5 block h-1.5 w-[73px] rounded-full bg-brand-cyan' />
							<p className='mt-6 max-w-[525px] text-[16px] leading-[1.55] text-[#e1edf9] md:text-[18px]'>
								{landing.partnerText}
							</p>
						</div>
						<div className='hidden h-[150px] w-px self-center bg-white/30 lg:block' />
						<div className='justify-self-start rounded-3xl border border-brand-blue-light/60 bg-[rgba(19,77,133,.26)] px-7 py-5 text-center shadow-[inset_0_0_40px_rgba(36,130,214,.09)] md:px-9 md:py-6 lg:justify-self-center'>
							<b className='block font-display text-[56px] leading-none font-black tracking-tighter md:text-[80px]'>
								{landing.statValue}
							</b>
							<span className='mt-1 block text-[18px] font-semibold text-[#d8eaff] md:text-[23px]'>
								{landing.statLabel}
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Closing */}
			<section className='pb-16 md:pb-24'>
				<div className='mx-auto max-w-300 px-8 md:px-12'>
					<div className='relative flex min-h-[420px] items-center overflow-hidden rounded-3xl border border-white/7 bg-[#0c3060] md:min-h-[250px]'>
						<Image
							src={landing.closingImage}
							alt=''
							fill
							sizes='100vw'
							className='object-cover object-bottom md:object-center'
						/>
						<div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,55,.6),rgba(4,20,41,.15)_60%,transparent),linear-gradient(90deg,rgba(6,27,55,.48)_0%,rgba(9,34,67,.2)_55%,transparent_80%)]' />

						<div className='relative px-6 py-10 md:px-11 md:py-8'>
							<h2 className='mb-5 font-display text-[clamp(28px,3.5vw,46px)] leading-[1.1] font-black tracking-tight'>
								{landing.closingTitle}
							</h2>
							<div className='mb-7 flex flex-wrap items-center gap-3.5 text-[14px] font-bold md:gap-5 md:text-[18px]'>
								<span className='inline-flex items-center gap-2.5'>
									<CalendarIcon className='h-[19px] w-[19px] md:h-[22px] md:w-[22px]' />
									{landing.closingMeta.date}
								</span>
								<span className='inline-flex items-center gap-2.5'>
									<MonitorIcon className='h-[19px] w-[19px] md:h-[22px] md:w-[22px]' />
									{landing.closingMeta.format}
								</span>
								<span className='inline-flex items-center gap-2.5'>
									<ClockIcon className='h-[19px] w-[19px] md:h-[22px] md:w-[22px]' />
									{landing.closingMeta.time}
								</span>
							</div>
							<RegistrationButton
								href={landing.registrationUrl}
								className='text-[14px] md:text-[16px]'
							>
								Зарегистрироваться
							</RegistrationButton>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
