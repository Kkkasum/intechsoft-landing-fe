'use client'

import { ApplicantModal } from '@/src/components/ApplicantModal'
import { EAction } from '@/src/interfaces/applicants.interface'
import { applicantsCreateApplicant } from '@/src/services/applicants.service.'
import { useState } from 'react'

export default function CTA() {
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	const onSubmit = async (name: string, phone: string, email?: string) => {
		await applicantsCreateApplicant({
			full_name: name,
			phone,
			email,
			action: EAction.COMMON,
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

			{modalOpen && (
				<ApplicantModal
					onClose={() => setModalOpen(false)}
					onSubmit={onSubmit}
				/>
			)}
		</>
	)
}
