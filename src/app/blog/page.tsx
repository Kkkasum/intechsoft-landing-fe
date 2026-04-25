import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import PostCard from '@/src/components/blog/PostCard'
import { blogPosts } from '@/src/content/blog'
import { ROUTE_HOME } from '@/src/routes'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Блог — Интех-Софт',
	description:
		'Статьи и анонсы мероприятий от Интех-Софт: маркировка, онлайн-кассы, 1С, автоматизация бизнеса в Махачкале.',
}

const news = blogPosts.filter(p => p.type === 'news')
const annonces = blogPosts.filter(p => p.type === 'announce')

export default function BlogPage() {
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
						Блог
					</p>
					<h1 className='font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1.1] tracking-tight mb-5'>
						Статьи и анонсы
					</h1>
					<p className='text-[18px] text-[#8B9EB7] leading-relaxed max-w-130'>
						Полезные материалы по 1С, онлайн-кассам, маркировке и
						автоматизации бизнеса.
						<br />
						Анонсы бесплатных семинаров и мероприятий.
					</p>
				</div>
			</section>

			{/* Annonces section */}
			{annonces.length > 0 && (
				<section className='py-20 bg-navy-2'>
					<div className='max-w-300 mx-auto px-8 md:px-12'>
						<div className='flex items-center gap-3 mb-10'>
							<span className='w-2 h-2 rounded-full bg-amber-400 shrink-0' />
							<p className='text-xs font-semibold tracking-[0.12em] uppercase text-amber-400'>
								Ближайшие мероприятия
							</p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
							{annonces.map(post => (
								<PostCard key={post.id} post={post} />
							))}
						</div>
					</div>
				</section>
			)}

			{/* News section */}
			{news.length > 0 && (
				<section className='py-20 bg-navy'>
					<div className='max-w-300 mx-auto px-8 md:px-12'>
						<div className='flex items-center gap-3 mb-10'>
							<span className='w-2 h-2 rounded-full bg-brand-blue-light shrink-0' />
							<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light'>
								Статьи
							</p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
							{news.map(post => (
								<PostCard key={post.id} post={post} />
							))}
						</div>
					</div>
				</section>
			)}

			<Footer />
		</main>
	)
}
