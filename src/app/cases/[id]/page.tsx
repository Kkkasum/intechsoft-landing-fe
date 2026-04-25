import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import MdRenderer from '@/src/components/ui/MdRenderer'
import { cases, getCaseById } from '@/src/content/cases'
import { ROUTE_CASES } from '@/src/routes'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params
	const item = getCaseById(id)
	if (!item) return {}
	return {
		title: `${item.company} — кейс Интех-Софт`,
		description: item.excerpt,
	}
}

export function generateStaticParams() {
	return cases.map(c => ({ id: c.id }))
}

const industryColors: Record<string, string> = {
	Образование: 'bg-violet-500/10 border-violet-500/25 text-violet-400',
	Медицина: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400',
	Строительство: 'bg-amber-500/10 border-amber-500/25 text-amber-400',
	Общепит: 'bg-orange-500/10 border-orange-500/25 text-orange-400',
}

export default async function CasePage({ params }: Props) {
	const { id } = await params
	const item = getCaseById(id)
	if (!item) notFound()

	const industryClass =
		industryColors[item.industry] ??
		'bg-brand-blue/10 border-brand-blue/25 text-brand-blue-light'

	// Find prev/next for navigation
	const idx = cases.findIndex(c => c.id === id)
	const prev = idx > 0 ? cases[idx - 1] : null
	const next = idx < cases.length - 1 ? cases[idx + 1] : null

	return (
		<main>
			<Navbar />

			<article>
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

					<div className='max-w-240 mx-auto px-8 md:px-12 relative py-20 md:py-28'>
						{/* Breadcrumb */}
						<nav className='flex items-center gap-2 text-[#4D6280] text-sm mb-10 flex-wrap'>
							<Link
								href='/'
								className='hover:text-brand-blue-light transition-colors no-underline'
							>
								Главная
							</Link>
							<span>/</span>
							<Link
								href='/cases'
								className='hover:text-brand-blue-light transition-colors no-underline'
							>
								Кейсы
							</Link>
							<span>/</span>
							<span className='text-[#8B9EB7] line-clamp-1'>
								{item.company}
							</span>
						</nav>

						{/* Badges */}
						<div className='flex flex-wrap gap-2 mb-5'>
							<span
								className={`text-xs font-semibold px-3 py-1 rounded-full border ${industryClass}`}
							>
								{item.industry}
							</span>
							{item.tags.map(tag => (
								<span
									key={tag}
									className='text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#8B9EB7]'
								>
									{tag}
								</span>
							))}
						</div>

						<p className='text-[13px] text-[#4D6280] mb-2'>
							{item.company}
						</p>
						<h1 className='font-display text-[clamp(24px,3.2vw,44px)] font-bold leading-[1.15] tracking-tight'>
							{item.title}
						</h1>
					</div>
				</section>

				{/* Content */}
				<section className='py-16 bg-navy-2'>
					<div className='max-w-240 mx-auto px-8 md:px-12'>
						<div className='max-w-[720px]'>
							<MdRenderer content={item.content} />
						</div>
					</div>
				</section>

				{/* Prev / Next */}
				<section className='py-12 bg-navy border-t border-white/7'>
					<div className='max-w-240 mx-auto px-8 md:px-12'>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							{prev ? (
								<Link
									href={`/cases/${prev.id}`}
									className='flex flex-col gap-1 p-5 rounded-xl border border-white/7 bg-white/3 hover:bg-white/6 hover:border-brand-blue/30 transition-all duration-200 no-underline'
								>
									<span className='text-[11px] text-[#4D6280] flex items-center gap-1.5'>
										<svg
											width='12'
											height='12'
											viewBox='0 0 16 16'
											fill='none'
											stroke='currentColor'
											strokeWidth={2}
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M10 3L5 8l5 5' />
										</svg>
										Предыдущий кейс
									</span>
									<span className='text-[14px] font-medium text-[#8B9EB7] group-hover:text-[#EEF2FF]'>
										{prev.title}
									</span>
								</Link>
							) : (
								<div />
							)}

							{next ? (
								<Link
									href={`/cases/${next.id}`}
									className='flex flex-col gap-1 p-5 rounded-xl border border-white/7 bg-white/3 hover:bg-white/6 hover:border-brand-blue/30 transition-all duration-200 no-underline text-right sm:items-end'
								>
									<span className='text-[11px] text-[#4D6280] flex items-center gap-1.5'>
										Следующий кейс
										<svg
											width='12'
											height='12'
											viewBox='0 0 16 16'
											fill='none'
											stroke='currentColor'
											strokeWidth={2}
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M6 3l5 5-5 5' />
										</svg>
									</span>
									<span className='text-[14px] font-medium text-[#8B9EB7]'>
										{next.title}
									</span>
								</Link>
							) : (
								<div />
							)}
						</div>

						<Link
							href={ROUTE_CASES}
							className='inline-flex items-center gap-1.5 text-[14px] text-[#8B9EB7] hover:text-brand-blue-light transition-colors no-underline mt-5'
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
							Все кейсы
						</Link>
					</div>
				</section>
			</article>

			<Footer />
		</main>
	)
}
