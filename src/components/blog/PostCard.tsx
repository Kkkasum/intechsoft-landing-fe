import CalendarIcon from '@/src/components/ui/icons/CalendarIcon'
import { formatDate, type BlogPost } from '@/src/content/blog'
import Link from 'next/link'
import FormatIcon from '../ui/icons/FormatIcon'

export default function PostCard({ post }: { post: BlogPost }) {
	const isAnnounce = post.type === 'announce'
	const isFinished = isAnnounce && post.event.date.getTime() < Date.now()
	const isRecordAvailable = isAnnounce && !!post.recordUrl

	const href = isAnnounce
		? `/blog/announce/${post.id}`
		: `/blog/news/${post.id}`

	return (
		<Link
			href={href}
			className={`group flex flex-col bg-white/4 border border-white/7 rounded-2xl p-7 hover:bg-white/7 hover:opacity-100 hover:border-brand-blue/35 transition-all duration-200 no-underline ${isFinished ? 'opacity-80' : ''}`}
		>
			{/* Top row */}
			<div className='flex items-center justify-between gap-3 mb-5'>
				<span className='text-xs font-semibold px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/35 text-brand-blue-light'>
					{post.category}
				</span>
				<span
					className={`text-xs font-semibold px-3 py-1 rounded-full border ${
						isAnnounce
							? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
							: 'bg-white/5 border-white/10 text-[#8B9EB7]'
					}`}
				>
					{isAnnounce ? 'Анонс' : 'Статья'}
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
			{isAnnounce && (
				<div className='flex flex-wrap gap-2 mb-5'>
					<span
						className={`inline-flex items-center gap-1.5 text-[12px]  px-2.5 py-1 rounded-lg border ${isFinished ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'text-[#8B9EB7] bg-white/4 border-white/7'}`}
					>
						<CalendarIcon width='12' height='12' />
						{isFinished ? 'Завершен' : formatDate(post.event.date)}
					</span>

					<span
						className={`inline-flex items-center gap-1.5 text-[12px]  px-2.5 py-1 rounded-lg border border-white/7 ${isRecordAvailable ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'text-[#8B9EB7] bg-white/4 border-white/7'}`}
					>
						<FormatIcon width='12' height='12' />
						{isRecordAvailable
							? 'Доступна запись'
							: post.event.format}
					</span>
				</div>
			)}

			{/* Footer */}
			<div className='flex items-center justify-between pt-5 border-t border-white/7'>
				<span className='text-[12px] text-[#4D6280]'>
					{formatDate(post.date)}
				</span>
				{!isAnnounce && (
					<span className='text-[12px] text-[#4D6280]'>
						{post.readTime}
					</span>
				)}
				{isAnnounce && (
					<span className='text-[12px] text-amber-500/70'>
						Бесплатно
					</span>
				)}
			</div>
		</Link>
	)
}
