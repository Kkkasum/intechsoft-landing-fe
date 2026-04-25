import MonitorIcon from '@/src/components/ui/icons/MonitorIcon'
import type { Product } from '@/src/types/catalog.type'
import type { ReactNode } from 'react'

type Props = {
	product: Product
	icon?: ReactNode
}

export default function IndustryRow({ product, icon }: Props) {
	return (
		<div className='flex items-center gap-6 bg-white/4 border border-white/7 rounded-2xl px-6 py-5 hover:bg-white/7 hover:border-brand-blue/35 transition-all duration-200 group'>
			{/* Icon block */}
			<div className='w-14 h-14 shrink-0 rounded-xl bg-brand-blue/10 border border-brand-blue/35 flex items-center justify-center text-brand-blue-light'>
				{icon ?? <MonitorIcon />}
			</div>

			{/* Info */}
			<div className='flex-1 min-w-0'>
				<h3 className='text-[15px] font-semibold text-[#EEF2FF] group-hover:text-brand-blue-light transition-colors duration-150 mb-2 leading-snug'>
					{product.name}
				</h3>

				<div className='flex items-center gap-3 flex-wrap'>
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
		</div>
	)
}
