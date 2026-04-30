'use client'

import CrossIcon from '@/src/components/ui/icons/CrossIcon'
import { useState } from 'react'
import { validatePhone } from '../utils/phone.utils'

export function ApplicantModal({
	onClose,
	onSubmit,
}: {
	onClose: () => void
	onSubmit: (name: string, phone: string, email?: string) => void
}) {
	const [name, setName] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [email, setEmail] = useState<string | undefined>('')
	const [error, setError] = useState<string | undefined>()

	const handleSubmit = (e: any) => {
		e.preventDefault()

		if (!validatePhone(phone)) {
			setError('Неправильный формат номера телефона (+79xxxxxxxxx)')
			return
		}

		onSubmit(name, phone, email)

		onClose()
	}

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
					Оставьте заявку — мы свяжемся с вами в ближайшее время
				</h3>

				<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
					<div className='flex flex-col gap-1.5'>
						<label className='text-[13px] text-[#8B9EB7]'>
							Ваше имя
						</label>
						<input
							id='name'
							type='text'
							value={name}
							onChange={e => setName(e.target.value)}
							placeholder='Иван Петров'
							className='w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#EEF2FF] text-[14px] placeholder-[#4D6280] focus:outline-none focus:border-brand-blue/50 transition-colors'
							required
							autoComplete='name'
						/>
					</div>
					<div className='flex flex-col gap-1.5'>
						<label className='text-[13px] text-[#8B9EB7]'>
							Телефон
						</label>
						<input
							id='phone'
							type='tel'
							value={phone}
							onChange={e => {
								setPhone(e.target.value)
								setError(undefined)
							}}
							placeholder='+79xxxxxxxxx'
							className='w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#EEF2FF] text-[14px] placeholder-[#4D6280] focus:outline-none focus:border-brand-blue/50 transition-colors'
							required
							autoComplete='phone'
						/>
					</div>

					<div className='flex flex-col gap-1.5'>
						<label className='text-[13px] text-[#8B9EB7]'>
							Почта
						</label>
						<input
							id='email'
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder='example@example.ru'
							className='w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#EEF2FF] text-[14px] placeholder-[#4D6280] focus:outline-none focus:border-brand-blue/50 transition-colors'
							autoComplete='email'
						/>
					</div>

					{error && (
						<span className='text-xs px-2.5 py-1 rounded-lg border bg-red-500/10 border-red-500/30 text-red-400'>
							{error}
						</span>
					)}

					<button
						type='submit'
						disabled={!!error}
						className='mt-2 w-full py-3.5 rounded-xl bg-brand-blue text-white text-[15px] font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed'
					>
						Отправить заявку
					</button>
				</form>
			</div>
		</div>
	)
}
