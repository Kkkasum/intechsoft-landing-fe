import { formatDate, type BlogPost } from '@/src/content/blog'
import Link from 'next/link'

export default function PostCard({ post }: { post: BlogPost }) {
	const href =
		post.type === 'announce'
			? `/blog/announce/${post.id}`
			: `/blog/news/${post.id}`

	return (
		<Link
			href={href}
			className='group flex flex-col bg-white/4 border border-white/7 rounded-2xl p-7 hover:bg-white/7 hover:border-brand-blue/35 transition-all duration-200 no-underline'
		>
			{/* Top row */}
			<div className='flex items-center justify-between gap-3 mb-5'>
				<span className='text-xs font-semibold px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/35 text-brand-blue-light'>
					{post.category}
				</span>
				<span
					className={`text-xs font-semibold px-3 py-1 rounded-full border ${
						post.type === 'announce'
							? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
							: 'bg-white/5 border-white/10 text-[#8B9EB7]'
					}`}
				>
					{post.type === 'announce' ? 'Анонс' : 'Статья'}
				</span>
			</div>

			{/* Title */}
			<h3 className='font-display text-[15px] font-semibold text-[#EEF2FF] leading-snug mb-3 group-hover:text-brand-blue-light transition-colors'>
				{post.title}
			</h3>

			{/* Excerpt */}
			<p className='text-[13px] text-[#8B9EB7] leading-relaxed flex-1 mb-5'>
				{post.excerpt}
			</p>

			{/* Anonce event info */}
			{post.type === 'announce' && (
				<div className='flex flex-wrap gap-2 mb-5'>
					<span className='inline-flex items-center gap-1.5 text-[12px] text-[#8B9EB7] px-2.5 py-1 rounded-lg bg-white/4 border border-white/7'>
						<svg
							viewBox='0 0 16 16'
							fill='none'
							stroke='currentColor'
							strokeWidth={1.6}
							strokeLinecap='round'
							strokeLinejoin='round'
							className='w-3 h-3 shrink-0'
						>
							<rect x='1' y='2' width='14' height='13' rx='2' />
							<path d='M1 6h14M5 1v2M11 1v2' />
						</svg>
						{post.event.date}
					</span>
					<span className='inline-flex items-center gap-1.5 text-[12px] text-[#8B9EB7] px-2.5 py-1 rounded-lg bg-white/4 border border-white/7'>
						<svg
							viewBox='0 0 16 16'
							fill='none'
							stroke='currentColor'
							strokeWidth={1.6}
							strokeLinecap='round'
							strokeLinejoin='round'
							className='w-3 h-3 shrink-0'
						>
							<rect x='1' y='3' width='14' height='10' rx='1.5' />
							<path d='M4 7h8M4 10h5' />
						</svg>
						{post.event.format}
					</span>
				</div>
			)}

			{/* Footer */}
			<div className='flex items-center justify-between pt-5 border-t border-white/7'>
				<span className='text-[12px] text-[#4D6280]'>
					{formatDate(post.date)}
				</span>
				{post.type === 'news' && (
					<span className='text-[12px] text-[#4D6280]'>
						{post.readTime}
					</span>
				)}
				{post.type === 'announce' && (
					<span className='text-[12px] text-amber-500/70'>
						Бесплатно
					</span>
				)}
			</div>
		</Link>
	)
}
