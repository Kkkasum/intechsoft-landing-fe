import CrossIcon from '@/src/components/ui/icons/CrossIcon'

export function TicketModal({ onClose }: { onClose: () => void }) {
	const title = 'Оставьте заявку — мы свяжемся с вами в ближайшее время'

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center px-4'
			onClick={e => e.target === e.currentTarget && onClose()}
		>
			{/* Backdrop */}
			<div
				className='absolute inset-0 bg-navy/80 backdrop-blur-sm'
				onClick={onClose}
			/>

			{/* Modal */}
			<div className='relative w-full max-w-lg bg-navy-2 border border-white/10 rounded-2xl p-8 shadow-2xl'>
				{/* Close button */}
				<button
					onClick={onClose}
					className='absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#8B9EB7] hover:text-[#EEF2FF] transition-all cursor-pointer'
				>
					<CrossIcon />
				</button>

				<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3'>
					Связаться с нами
				</p>
				<h3 className='font-display text-[22px] font-bold text-[#EEF2FF] leading-tight mb-2'>
					{title}
				</h3>

				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-1.5'>
						<label className='text-[13px] text-[#8B9EB7]'>
							Ваше имя
						</label>
						<input
							type='text'
							placeholder='Иван Петров'
							className='w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#EEF2FF] text-[14px] placeholder-[#4D6280] focus:outline-none focus:border-brand-blue/50 transition-colors'
						/>
					</div>
					<div className='flex flex-col gap-1.5'>
						<label className='text-[13px] text-[#8B9EB7]'>
							Телефон или e-mail
						</label>
						<input
							type='text'
							placeholder='+7 (000) 000-00-00'
							className='w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#EEF2FF] text-[14px] placeholder-[#4D6280] focus:outline-none focus:border-brand-blue/50 transition-colors'
						/>
					</div>

					<button
						onClick={onClose}
						className='mt-2 w-full py-3.5 rounded-xl bg-brand-blue text-white text-[15px] font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
					>
						Отправить заявку
					</button>

					<p className='text-center text-[12px] text-[#4D6280]'>
						Нажимая кнопку, вы соглашаетесь с политикой
						конфиденциальности
					</p>
				</div>
			</div>
		</div>
	)
}
