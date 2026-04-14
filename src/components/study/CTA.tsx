export default function CTA() {
	return (
		<section className='relative py-24 overflow-hidden bg-navy'>
			<div
				className='absolute inset-0 pointer-events-none'
				style={{
					background:
						'linear-gradient(135deg, rgba(29,111,232,0.18) 0%, rgba(0,210,255,0.07) 100%)',
				}}
			/>
			<div className='max-w-300 mx-auto px-8 md:px-12 relative text-center'>
				<h2 className='font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-tight tracking-tight mb-4'>
					Готовы начать обучение?
				</h2>
				<p className='text-lg text-[#8B9EB7] mb-10 max-w-120 mx-auto'>
					Оставьте заявку — подберём курс, согласуем даты и формат
				</p>
				<div className='flex flex-wrap gap-4 justify-center'>
					<a
						href='mailto:info@intechsoft.ru'
						className='inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 no-underline'
					>
						Записаться
					</a>
					<a
						href='tel:+78722000000'
						className='inline-flex items-center px-8 py-3.5 rounded-xl bg-transparent text-[#EEF2FF] text-base font-semibold border border-white/13 hover:border-brand-blue/35 hover:text-brand-blue-light transition-all duration-200 no-underline'
					>
						Позвонить
					</a>
				</div>
			</div>
		</section>
	)
}
