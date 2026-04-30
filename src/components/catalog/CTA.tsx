'use client'

import { TicketModal } from '@/src/components/TicketModal'
import { EAction } from '@/src/interfaces/ticket.interface'
import {
	ROUTE_CATALOG_1C_INDUSTRY,
	ROUTE_CATALOG_1C_PRODUCTS,
	ROUTE_CATALOG_EQUIPMENT,
} from '@/src/routes'
import { ticketsCreateTicket } from '@/src/services/tickets.service'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function CTA() {
	const pathname = usePathname()
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	const onSubmit = async (name: string, phone: string, email?: string) => {
		let comment: string = ''
		if (pathname === ROUTE_CATALOG_EQUIPMENT) {
			comment = 'Торговое оборудование'
		} else if (pathname === ROUTE_CATALOG_1C_PRODUCTS) {
			comment = '1С-Продукты'
		} else if (pathname === ROUTE_CATALOG_1C_INDUSTRY) {
			comment = 'Отраслевые решения 1С'
		}

		await ticketsCreateTicket({
			full_name: name,
			phone,
			email,
			action: EAction.CATALOG,
			comment,
		})
	}

	return (
		<>
			<section
				id='cta'
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

					<button
						onClick={() => setModalOpen(true)}
						className='inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
					>
						Связаться с нами
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
