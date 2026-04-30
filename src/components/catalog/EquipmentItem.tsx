import firstImage from '@/src/assets/equipment/1.png'
import secondImage from '@/src/assets/equipment/2.png'
import thirdImage from '@/src/assets/equipment/3.png'
import fourthImage from '@/src/assets/equipment/4.png'
import fifthImage from '@/src/assets/equipment/5.png'
import sixthImage from '@/src/assets/equipment/6.png'
import MonitorIcon from '@/src/components/ui/icons/MonitorIcon'
import { IProduct } from '@/src/interfaces/catalog.interface'
import Image from 'next/image'

const imageMap: Record<number, any> = {
	1: firstImage,
	2: secondImage,
	3: thirdImage,
	4: fourthImage,
	5: fifthImage,
	6: sixthImage,
}

interface IProps {
	product: IProduct
}

export default function EquipmentItem({ product }: IProps) {
	const imageSrc = product.id ? imageMap[product.id] : null

	return (
		<div className='flex flex-col items-center gap-6 bg-white/4 border border-white/7 rounded-2xl px-6 py-5 hover:bg-white/7 hover:border-brand-blue/35 transition-all duration-200 group relative min-h-75'>
			{/* Image placeholder */}
			<div className='w-40 h-40 shrink-0 rounded-xl bg-white/4 border border-white/7 flex items-center justify-center text-[#4D6280]'>
				{imageSrc ? (
					<Image
						src={imageSrc}
						alt={product.name}
						width={125}
						height={125}
						className='object-contain'
					/>
				) : (
					<MonitorIcon width='100' height='100' />
				)}
			</div>

			{/* Info */}
			<h3 className='text-[15px] font-semibold text-[#EEF2FF] group-hover:text-brand-blue-light transition-colors duration-150 mb-2 leading-snug'>
				{product.name}
			</h3>

			<div className='flex items-center gap-4 flex-wrap absolute bottom-2 right-2'>
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
	)
}
