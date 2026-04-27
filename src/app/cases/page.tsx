import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import CaseCard from '@/src/components/cases/CaseCard'
import { cases, industries } from '@/src/content/cases'
import { ROUTE_HOME } from '@/src/routes'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Кейсы — Интех-Софт',
	description:
		'Реальные проекты автоматизации бизнеса в Дагестане: образование, медицина, торговля, строительство и общепит.',
}

const industryGroups = industries.map(ind => ({
	name: ind,
	items: cases.filter(c => c.industry === ind),
}))

export default function CasesPage() {
	return (
		<main>
			<Navbar />

			{/* Hero */}
			<section className='relative pt-17 overflow-hidden bg-navy'>
				<div
					className='absolute inset-0 pointer-events-none'
					style={{
						background:
							'radial-gradient(ellipse 60% 70% at 80% 30%, rgba(29,111,232,0.11) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(0,210,255,0.05) 0%, transparent 55%)',
					}}
				/>
				<div className='absolute inset-0 pointer-events-none bg-hero-grid' />

				<div className='max-w-300 mx-auto px-8 md:px-12 relative py-20 md:py-28'>
					<Link
						href={ROUTE_HOME}
						className='inline-flex items-center gap-2 text-[#8B9EB7] text-sm hover:text-brand-blue-light transition-colors no-underline mb-8'
					>
						<svg
							width='14'
							height='14'
							viewBox='0 0 16 16'
							fill='none'
							stroke='currentColor'
							strokeWidth={1.8}
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M10 3L5 8l5 5' />
						</svg>
						На главную
					</Link>

					<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-4'>
						Кейсы
					</p>
					<h1 className='font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1.1] tracking-tight mb-5'>
						Реальные проекты
					</h1>
					<p className='text-[18px] text-[#8B9EB7] leading-relaxed max-w-130 mb-10'>
						За годы работы мы автоматизировали бизнесы разного
						масштаба и профиля, успешно справляемся с задачами в
						любой отрасли и находим решения для самых сложных
						проектов
					</p>

					{/* Stats row */}
					<div className='grid grid-cols-2 md:grid-cols-3 gap-px mt-16 bg-white/7 border border-white/7 rounded-2xl overflow-hidden'>
						{[
							{ val: '14,000+', label: 'успешных кейсов' },
							{
								val: '1,000+',
								label: 'запросов на техническую поддержку решается ежемесячно',
							},
							{
								val: '~30%',
								label: 'времени экономим нашим клиентам',
							},
						].map(s => (
							<div key={s.label} className='px-6 py-5 bg-navy'>
								<div className='font-display text-2xl font-bold text-brand-blue-light mb-1'>
									{s.val}
								</div>
								<div className='text-[13px] text-[#8B9EB7] leading-snug'>
									{s.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Cases by industry */}
			{industryGroups.map((group, gi) => (
				<section
					key={group.name}
					className={`py-20 ${gi % 2 === 0 ? 'bg-navy-2' : 'bg-navy'}`}
				>
					<div className='max-w-300 mx-auto px-8 md:px-12'>
						<p className='text-xs font-semibold tracking-[0.12em] uppercase text-[#4D6280] mb-2'>
							Отрасль
						</p>
						<h2 className='font-display text-[clamp(20px,2.5vw,32px)] font-bold leading-tight mb-10'>
							{group.name}
						</h2>

						<div className='grid grid-cols-3 gap-5'>
							{group.items.map(item => (
								<CaseCard key={item.id} item={item} />
							))}
						</div>
					</div>
				</section>
			))}

			<Footer />
		</main>
	)
}
