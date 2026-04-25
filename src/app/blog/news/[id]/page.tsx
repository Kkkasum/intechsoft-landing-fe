import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import MdRenderer from '@/src/components/ui/MdRenderer'
import { blogPosts, formatDate, getPostById } from '@/src/content/blog'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params
	const post = getPostById(id)
	if (!post || post.type !== 'news') return {}
	return {
		title: `${post.title} — Интех-Софт`,
		description: post.excerpt,
	}
}

export function generateStaticParams() {
	return blogPosts.filter(p => p.type === 'news').map(p => ({ id: p.id }))
}

export default async function NewsPage({ params }: Props) {
	const { id } = await params
	const post = getPostById(id)
	if (!post || post.type !== 'news') notFound()

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
								href='/'
								className='hover:text-brand-blue-light transition-colors no-underline'
							>
								Главная
							</Link>
							<span>/</span>
							<Link
								href='/blog'
								className='hover:text-brand-blue-light transition-colors no-underline'
							>
								Блог
							</Link>
							<span>/</span>
							<span className='text-[#8B9EB7] line-clamp-1'>
								{post.title}
							</span>
						</nav>

						{/* Meta */}
						<div className='flex flex-wrap items-center gap-3 mb-6'>
							<span className='text-xs font-semibold px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/35 text-brand-blue-light'>
								{post.category}
							</span>
							<span className='text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#8B9EB7]'>
								Статья
							</span>
						</div>

						<h1 className='font-display text-[clamp(26px,3.5vw,48px)] font-bold leading-[1.15] tracking-tight mb-6'>
							{post.title}
						</h1>

						<p className='text-[17px] text-[#8B9EB7] leading-relaxed mb-8 max-w-160'>
							{post.excerpt}
						</p>

						<div className='flex items-center gap-4 text-sm text-[#4D6280]'>
							<span>{formatDate(post.date)}</span>
							<span>·</span>
							<span>{post.readTime}</span>
						</div>
					</div>
				</section>

				{/* Content */}
				<section className='py-16 bg-navy-2'>
					<div className='max-w-240 mx-auto px-8 md:px-12'>
						<div className='max-w-[720px]'>
							<MdRenderer content={post.content} />
						</div>
					</div>
				</section>

				{/* Footer CTA */}
				<section className='py-16 bg-navy border-t border-white/7'>
					<div className='max-w-240 mx-auto px-8 md:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6'>
						<div>
							<p className='font-semibold text-[#EEF2FF] mb-1'>
								Остались вопросы?
							</p>
							<p className='text-[14px] text-[#8B9EB7]'>
								Свяжитесь с нашими специалистами — поможем
								разобраться
							</p>
						</div>
						<div className='flex flex-wrap gap-3 shrink-0'>
							<a
								href='tel:+79634208232'
								className='inline-flex items-center px-6 py-3 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 no-underline'
							>
								Позвонить
							</a>
							<Link
								href='/blog'
								className='inline-flex items-center px-6 py-3 rounded-xl border border-white/13 text-[#EEF2FF] text-sm font-semibold hover:border-brand-blue/35 hover:text-brand-blue-light transition-all duration-200 no-underline'
							>
								← Все статьи
							</Link>
						</div>
					</div>
				</section>
			</article>

			<Footer />
		</main>
	)
}
