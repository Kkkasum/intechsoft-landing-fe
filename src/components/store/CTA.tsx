'use client'

import { TicketModal } from '@/src/components/TicketModal'
import { EAction } from '@/src/interfaces/ticket.interface'
import { ticketsCreateTicket } from '@/src/services/tickets.service'
import { useState } from 'react'

export default function CTA() {
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	const onSubmit = async (name: string, phone: string, email?: string) => {
		await ticketsCreateTicket({
			full_name: name,
			phone,
			email,
			action: EAction.STORE,
		})
	}

	return (
		<>
			<section className='relative py-24 overflow-hidden bg-navy'>
				<div className='max-w-300 mx-auto px-8 md:px-12 relative text-center'>
					<h2 className='font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-tight tracking-tight mb-4'>
						Готовы автоматизировать магазин?
					</h2>
					<p className='text-lg text-[#8B9EB7] mb-10 max-w-120 mx-auto'>
						Оставьте заявку — обсудим задачи, подберём решение и
						рассчитаем стоимость
					</p>

					<div className='flex flex-wrap gap-4 justify-center'>
						<button
							onClick={() => setModalOpen(true)}
							className='inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
						>
							Оставить заявку
						</button>

						<a
							href='tel:+79634208232'
							className='inline-flex items-center px-8 py-3.5 rounded-xl bg-transparent text-[#EEF2FF] text-base font-semibold border border-white/13 hover:border-brand-blue/35 hover:text-brand-blue-light transition-all duration-200 no-underline'
						>
							Позвонить
						</a>
					</div>
				</div>
			</section>

			{modalOpen && (
				<TicketModal
					onClose={() => setModalOpen(false)}
					onSubmit={onSubmit}
				/>
			)}
		</>
	)
}
