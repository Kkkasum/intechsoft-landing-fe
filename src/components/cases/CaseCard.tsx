import { type Case } from '@/src/content/cases'
import Link from 'next/link'

const industryColors: Record<
	string,
	{ dot: string; badge: string; text: string }
> = {
	Образование: {
		dot: 'bg-violet-400',
		badge: 'bg-violet-500/10 border-violet-500/25',
		text: 'text-violet-400',
	},
	Медицина: {
		dot: 'bg-emerald-400',
		badge: 'bg-emerald-500/10 border-emerald-500/25',
		text: 'text-emerald-400',
	},
	Строительство: {
		dot: 'bg-amber-400',
		badge: 'bg-amber-500/10 border-amber-500/25',
		text: 'text-amber-400',
	},
	Общепит: {
		dot: 'bg-orange-400',
		badge: 'bg-orange-500/10 border-orange-500/25',
		text: 'text-orange-400',
	},
}

const fallback = {
	dot: 'bg-brand-blue-light',
	badge: 'bg-brand-blue/10 border-brand-blue/25',
	text: 'text-brand-blue-light',
}

export default function CaseCard({ item }: { item: Case }) {
	const color = industryColors[item.industry] ?? fallback

	return (
		<Link
			href={`/cases/${item.id}`}
			className='group flex flex-col justify-between bg-white/4 border border-white/7 rounded-2xl p-7 hover:bg-white/7 hover:border-brand-blue/35 transition-all duration-200 no-underline gap-3'
		>
			{/* Industry badge */}
			<div>
				<div className='flex items-center gap-2 mb-5'>
					<span
						className={`w-1.5 h-1.5 rounded-full ${color.dot} shrink-0`}
					/>
					<span
						className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${color.badge} ${color.text}`}
					>
						{item.industry}
					</span>
				</div>

				<div className='flex items-center justify-between w-full'>
					<div>
						{/* Company */}
						<p className='text-[12px] text-[#4D6280] mb-1.5'>
							{item.company}
						</p>

						{/* Title */}
						<h3 className='font-display text-[15px] font-semibold text-[#EEF2FF] leading-snug mb-3 group-hover:text-brand-blue-light transition-colors'>
							{item.title}
						</h3>
					</div>
				</div>
			</div>

			{/* Arrow */}
			<div className='flex items-center gap-1.5 text-[13px] text-[#4D6280] group-hover:text-brand-blue-light transition-colors pt-5 border-t border-white/7'>
				<span>Читать кейс</span>
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
					<path d='M3 8h10M9 4l4 4-4 4' />
				</svg>
			</div>
		</Link>
	)
}
