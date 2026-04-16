export default function CTA() {
	return (
		<section
			id='contacts'
			className='relative py-24 overflow-hidden bg-navy'
		>
			<div className='max-w-300 mx-auto px-8 md:px-12 relative text-center'>
				<h2 className='font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-tight tracking-tight mb-4'>
					Не нашли то,
					<br />
					что искали?
				</h2>
				<p className='text-lg text-[#8B9EB7] mb-10'>
					Закажите бесплатную консультацию
				</p>

				<div className='flex flex-wrap gap-4 justify-center'>
					<a
						href='mailto:info@intechsoft.ru'
						className='inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 no-underline'
					>
						Написать на почту
					</a>
				</div>
			</div>
		</section>
	)
}
