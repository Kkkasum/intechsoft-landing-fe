import image1 from '@/src/assets/equipment/1.png'
import image10 from '@/src/assets/equipment/10.png'
import image11 from '@/src/assets/equipment/11.png'
import image12 from '@/src/assets/equipment/12.png'
import image13 from '@/src/assets/equipment/13.png'
import image14 from '@/src/assets/equipment/14.png'
import image15 from '@/src/assets/equipment/15.png'
import image16 from '@/src/assets/equipment/16.png'
import image17 from '@/src/assets/equipment/17.png'
import image18 from '@/src/assets/equipment/18.png'
import image19 from '@/src/assets/equipment/19.png'
import image2 from '@/src/assets/equipment/2.png'
import image20 from '@/src/assets/equipment/20.png'
import image21 from '@/src/assets/equipment/21.png'
import image22 from '@/src/assets/equipment/22.png'
import image23 from '@/src/assets/equipment/23.png'
import image24 from '@/src/assets/equipment/24.png'
import image25 from '@/src/assets/equipment/25.png'
import image26 from '@/src/assets/equipment/26.png'
import image27 from '@/src/assets/equipment/27.png'
import image28 from '@/src/assets/equipment/28.png'
import image29 from '@/src/assets/equipment/29.png'
import image3 from '@/src/assets/equipment/3.png'
import image30 from '@/src/assets/equipment/30.png'
import image31 from '@/src/assets/equipment/31.png'
import image32 from '@/src/assets/equipment/32.png'
import image4 from '@/src/assets/equipment/4.png'
import image5 from '@/src/assets/equipment/5.png'
import image6 from '@/src/assets/equipment/6.png'
import image7 from '@/src/assets/equipment/7.png'
import image8 from '@/src/assets/equipment/8.png'
import image9 from '@/src/assets/equipment/9.png'
import MonitorIcon from '@/src/components/ui/icons/MonitorIcon'
import { IProduct } from '@/src/interfaces/catalog.interface'
import Image from 'next/image'

const imageMap: Record<number, any> = {
	1: image1,
	2: image2,
	3: image3,
	4: image4,
	5: image5,
	6: image6,
	7: image7,
	8: image8,
	9: image9,
	10: image10,
	11: image11,
	12: image12,
	13: image13,
	14: image14,
	15: image15,
	16: image16,
	17: image17,
	18: image18,
	19: image19,
	20: image20,
	21: image21,
	22: image22,
	23: image23,
	24: image24,
	25: image25,
	26: image26,
	27: image27,
	28: image28,
	29: image29,
	30: image30,
	31: image31,
	32: image32,
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
