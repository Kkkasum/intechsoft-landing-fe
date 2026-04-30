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
			action: EAction.ITS,
		})
	}

	return (
		<>
			<section id='cta' className='relative py-24 overflow-hidden'>
				<div
					className='absolute inset-0 pointer-events-none'
					style={{
						background:
							'linear-gradient(135deg, rgba(29,111,232,0.18) 0%, rgba(0,210,255,0.07) 100%)',
					}}
				/>
				<div className='max-w-300 mx-auto px-8 md:px-12 relative text-center'>
					<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-4'>
						Начните сейчас
					</p>
					<h2 className='font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-tight tracking-tight mb-4'>
						Начните пользоваться всеми возможностями уже сейчас!
					</h2>
					<p className='text-lg text-[#8B9EB7] mb-10 max-w-130 mx-auto'>
						Заключите договор 1С: КП (ИТС) с нашей компанией и
						убедитесь в эффективности нашего сервиса!
					</p>

					<button
						onClick={() => setModalOpen(true)}
						className='inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
					>
						Заключить договор
					</button>
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
