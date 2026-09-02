import { equipmentImageMap } from '@/src/components/catalog/equipmentImages'
import MonitorIcon from '@/src/components/ui/icons/MonitorIcon'
import { IProduct } from '@/src/interfaces/catalog.interface'
import Image from 'next/image'

interface IProps {
	product: IProduct
}

export default function EquipmentRow({ product }: IProps) {
	const imageSrc = product.id ? equipmentImageMap[product.id] : null

	return (
		<div className='flex items-center justify-between bg-white/4 border border-white/7 rounded-2xl px-6 py-5 hover:bg-white/7 hover:border-brand-blue/35 transition-all duration-200 group w-full'>
			<div className='flex items-center gap-6'>
				{/* Image */}
				<div className='w-20 h-20 shrink-0 rounded-xl bg-white/4 border border-white/7 flex items-center justify-center text-[#4D6280]'>
					{imageSrc ? (
						<Image
							src={imageSrc}
							alt={product.name}
							width={44}
							height={44}
							className='object-contain'
						/>
					) : (
						<MonitorIcon width='36' height='36' />
					)}
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
			</div>

			{product.price && (
				<div className='text-xs shrink-0'>Цена: {product.price} ₽</div>
			)}
		</div>
	)
}
