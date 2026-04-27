import { PreviewSlider } from '@/src/components/home/sliders/PreviewSlider'
import Link from 'next/link'

export default function Hero() {
	return (
		<section className='relative min-h-screen pt-17 flex flex-col justify-center overflow-hidden'>
			{/* Background glow */}
			<div
				className='absolute inset-0 pointer-events-none'
				style={{
					background:
						'radial-gradient(ellipse 70% 60% at 70% 40%, rgba(29,111,232,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 15% 70%, rgba(0,210,255,0.06) 0%, transparent 55%)',
				}}
			/>
			{/* Grid pattern */}
			<div className='absolute inset-0 pointer-events-none bg-hero-grid' />

			<div className='max-w-300 mx-auto px-8 md:px-12 w-full'>
				<div className='grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 xl:gap-20 items-center py-20'>
					{/* Left */}
					<div>
						<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/35 text-brand-blue-light text-[13px] font-medium mb-7'>
							<span className='w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse' />
							Официальный представитель 1С
						</div>

						<h1 className='font-display text-[clamp(36px,4vw,58px)] font-bold leading-[1.12] tracking-tight mb-6'>
							Умные решения
							<br />
							для{' '}
							<span className='text-brand-blue-light'>умных</span>
							<br />
							компаний
						</h1>

						<p className='text-[18px] text-[#8B9EB7] leading-relaxed max-w-130 mb-10'>
							С Нами вам доступен полноценный комплекс IT-услуг:
							от бесплатной консультации до установки, настройки,
							обучения и постоянного сопровождения.
							<br />
							Работаем так, чтобы вам не пришлось ни о чём
							беспокоиться.
						</p>

						<div className='flex flex-wrap gap-4'>
							<Link
								href='#cta'
								className='inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 no-underline'
							>
								Бесплатная консультация
							</Link>
							<Link
								href='#products'
								className='inline-flex items-center px-8 py-3.5 rounded-xl bg-transparent text-[#EEF2FF] text-base font-semibold border border-white/13 hover:border-brand-blue/35 hover:text-brand-blue-light transition-all duration-200 no-underline'
							>
								Каталог продуктов
							</Link>
						</div>
					</div>

					<PreviewSlider />
				</div>
			</div>
		</section>
	)
}
