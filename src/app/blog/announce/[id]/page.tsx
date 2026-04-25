import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import { blogPosts, formatDate, getPostById } from '@/src/content/blog'
import { ROUTE_BLOG, ROUTE_HOME } from '@/src/routes'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params
	const post = getPostById(id)
	if (!post || post.type !== 'announce') return {}
	return {
		title: `${post.title} — Интех-Софт`,
		description: post.excerpt,
	}
}

export function generateStaticParams() {
	return blogPosts.filter(p => p.type === 'announce').map(p => ({ id: p.id }))
}

export default async function AnnouncePage({ params }: Props) {
	const { id } = await params
	const post = getPostById(id)
	if (!post || post.type !== 'announce') notFound()

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
						<nav className='flex items-center gap-2 text-[#4D6280] text-sm mb-10'>
							<Link
								href={ROUTE_HOME}
								className='hover:text-brand-blue-light transition-colors no-underline'
							>
								Главная
							</Link>
							<span>/</span>
							<Link
								href={ROUTE_BLOG}
								className='hover:text-brand-blue-light transition-colors no-underline'
							>
								Блог
							</Link>
							<span>/</span>
							<span className='text-[#8B9EB7] line-clamp-1'>
								{post.title}
							</span>
						</nav>

						{/* Badges */}
						<div className='flex flex-wrap items-center gap-3 mb-6'>
							<span className='text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400'>
								Анонс
							</span>
							<span className='text-xs font-semibold px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/35 text-brand-blue-light'>
								{post.category}
							</span>
							<span className='text-xs font-semibold px-3 py-1 rounded-full bg-[#1ba26b]/10 border border-[#1ba26b]/30 text-[#1ba26b]'>
								Бесплатно
							</span>
						</div>

						<h1 className='font-display text-[clamp(24px,3.2vw,44px)] font-bold leading-[1.15] tracking-tight mb-8'>
							{post.title}
						</h1>

						{/* Event info strip */}
						<div className='inline-flex flex-wrap gap-4 p-5 rounded-2xl bg-white/4 border border-white/7'>
							<div className='flex items-center gap-2.5 text-[14px]'>
								<span className='w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue-light shrink-0'>
									<svg
										viewBox='0 0 16 16'
										fill='none'
										stroke='currentColor'
										strokeWidth={1.6}
										strokeLinecap='round'
										strokeLinejoin='round'
										className='w-4 h-4'
									>
										<rect
											x='1'
											y='2'
											width='14'
											height='13'
											rx='2'
										/>
										<path d='M1 6h14M5 1v2M11 1v2' />
									</svg>
								</span>
								<div>
									<div className='text-[11px] text-[#4D6280] uppercase tracking-wide font-semibold'>
										Дата
									</div>
									<div className='text-[#EEF2FF] font-medium'>
										{post.event.date}
									</div>
								</div>
							</div>
							<div className='w-px bg-white/7 self-stretch' />
							<div className='flex items-center gap-2.5 text-[14px]'>
								<span className='w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue-light shrink-0'>
									<svg
										viewBox='0 0 16 16'
										fill='none'
										stroke='currentColor'
										strokeWidth={1.6}
										strokeLinecap='round'
										strokeLinejoin='round'
										className='w-4 h-4'
									>
										<rect
											x='1'
											y='3'
											width='14'
											height='10'
											rx='1.5'
										/>
										<path d='M4 7h8' />
									</svg>
								</span>
								<div>
									<div className='text-[11px] text-[#4D6280] uppercase tracking-wide font-semibold'>
										Формат
									</div>
									<div className='text-[#EEF2FF] font-medium'>
										{post.event.format}
									</div>
								</div>
							</div>
							<div className='w-px bg-white/7 self-stretch' />
							<div className='flex items-center gap-2.5 text-[14px]'>
								<span className='w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue-light shrink-0'>
									<svg
										viewBox='0 0 16 16'
										fill='none'
										stroke='currentColor'
										strokeWidth={1.6}
										strokeLinecap='round'
										strokeLinejoin='round'
										className='w-4 h-4'
									>
										<circle cx='8' cy='8' r='7' />
										<path d='M8 4v4l3 2' />
									</svg>
								</span>
								<div>
									<div className='text-[11px] text-[#4D6280] uppercase tracking-wide font-semibold'>
										Длительность
									</div>
									<div className='text-[#EEF2FF] font-medium'>
										{post.event.duration}
									</div>
								</div>
							</div>
						</div>

						<div className='mt-5 text-sm text-[#4D6280]'>
							Опубликовано {formatDate(post.date)}
						</div>
					</div>
				</section>

				{/* Body */}
				<section className='py-16 bg-navy-2'>
					<div className='max-w-240 mx-auto px-8 md:px-12'>
						<div className='max-w-[720px] flex flex-col gap-10'>
							{/* Intro */}
							<div>
								{post.intro.split('\n\n').map((para, i) => (
									<p
										key={i}
										className='text-[16px] text-[#8B9EB7] leading-relaxed mb-4'
									>
										{para}
									</p>
								))}
							</div>

							{/* Description + Agenda */}
							<div className='bg-white/4 border border-white/7 rounded-2xl p-7 md:p-9'>
								<p className='font-semibold text-[16px] text-[#EEF2FF] mb-6'>
									{post.description}
								</p>
								<ul className='flex flex-col gap-3'>
									{post.agenda.map((item, i) => (
										<li
											key={i}
											className='flex items-start gap-3 text-[15px] text-[#8B9EB7] leading-relaxed'
										>
											<span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue-light shrink-0' />
											{item}
										</li>
									))}
								</ul>
							</div>

							{/* Risks */}
							{post.risks && post.risks.length > 0 && (
								<div className='bg-red-500/5 border border-red-500/15 rounded-2xl p-7'>
									<p className='font-semibold text-[15px] text-[#EEF2FF] mb-4'>
										Ошибки в учёте или работе с маркировкой
										могут привести к:
									</p>
									<ul className='flex flex-col gap-2'>
										{post.risks.map((risk, i) => (
											<li
												key={i}
												className='flex items-center gap-2.5 text-[14px] text-red-300/80'
											>
												<span className='w-1.5 h-1.5 rounded-full bg-red-400 shrink-0' />
												{risk}
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Conclusion */}
							<div>
								{post.conclusion
									.split('\n\n')
									.map((para, i) => (
										<p
											key={i}
											className='text-[16px] text-[#8B9EB7] leading-relaxed mb-4'
										>
											{para}
										</p>
									))}
							</div>
						</div>
					</div>
				</section>

				{/* Registration CTA */}
				<section className='py-16 bg-navy border-t border-white/7'>
					<div className='max-w-240 mx-auto px-8 md:px-12'>
						<div className='max-w-[720px]'>
							<div className='bg-brand-blue/8 border border-brand-blue/20 rounded-2xl p-8 md:p-10'>
								<h2 className='font-display text-[clamp(20px,2.5vw,30px)] font-bold text-[#EEF2FF] mb-3'>
									Хотите участвовать?
								</h2>
								<p className='text-[15px] text-[#8B9EB7] mb-7 leading-relaxed'>
									{post.registration}
								</p>

								<a
									href={`tel:${post.ctaPhone}`}
									className='inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-blue text-white text-[15px] font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 no-underline'
								>
									Позвонить
								</a>
							</div>
						</div>
					</div>
				</section>
			</article>

			<Footer />
		</main>
	)
}
