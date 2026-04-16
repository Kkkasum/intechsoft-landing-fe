import OneCIcon from '@/src/components/ui/icons/1CIcon'
import { Product } from '@/src/types/catalog.type'

interface IProps {
	product: Product
}

export default function Row({ product }: IProps) {
	return (
		<div className='flex items-center gap-6 bg-white/4 border border-white/7 rounded-2xl px-6 py-5 hover:bg-white/7 hover:border-brand-blue/35 transition-all duration-200 group'>
			{/* Image placeholder */}
			<div className='w-20 h-20 shrink-0 rounded-xl bg-white/4 border border-white/7 flex items-center justify-center'>
				<OneCIcon width='36' height='24' />
			</div>

			{/* Info */}
			<div className='flex-1 min-w-0'>
				<h3 className='text-[15px] font-semibold text-[#EEF2FF] group-hover:text-brand-blue-light transition-colors duration-150 mb-2 leading-snug'>
					{product.name}
				</h3>

				<div className='flex items-center gap-4 flex-wrap'>
					{/* Badge */}
					{product.badge === 'in_stock' && (
						<span className='text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 uppercase tracking-wide'>
							В наличии
						</span>
					)}
					{product.badge === 'on_order' && (
						<span className='text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase tracking-wide'>
							Под заказ
						</span>
					)}
				</div>
			</div>

			{/* Arrow */}
			{/* <div className='shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border border-white/7 text-[#4D6280] group-hover:border-brand-blue/35 group-hover:text-brand-blue-light transition-all duration-150'>
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
					<path d='M6 3l5 5-5 5' />
				</svg>
			</div> */}
		</div>
	)
}
