'use client'

import { TicketModal } from '@/src/components/TicketModal'
import { useState } from 'react'

export default function CTA() {
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	return (
		<>
			<section
				id='cta'
				className='relative py-24 overflow-hidden bg-navy'
			>
				<div className='max-w-300 mx-auto px-8 md:px-12 relative text-center'>
					<h2 className='font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-tight tracking-tight mb-4'>
						Готовы автоматизировать
						<br />
						ваш бизнес?
					</h2>
					<p className='text-lg text-[#8B9EB7] mb-10'>
						Закажите бесплатную консультацию
					</p>

					<button
						onClick={() => setModalOpen(true)}
						className='inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
					>
						Оставить заявку
					</button>
				</div>
			</section>

			{modalOpen && <TicketModal onClose={() => setModalOpen(false)} />}
		</>
	)
}
