'use client'

import { EAction } from '@/src/interfaces/applicants.interface'
import { applicantsCreateApplicant } from '@/src/services/applicants.service.'
import { validatePhone } from '@/src/utils/phone.utils'
import Link from 'next/link'
import { useState } from 'react'

export default function FinishedCTA({
	title,
	recordLink,
}: {
	title: string
	recordLink?: string
}) {
	const [name, setName] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [email, setEmail] = useState<string | undefined>('')
	const [error, setError] = useState<string | undefined>()

	const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

	const handleSubmit = async (e: any) => {
		e.preventDefault()

		if (!validatePhone(phone)) {
			setError('Неправильный формат номера телефона (+79xxxxxxxxx)')
			return
		}

		await applicantsCreateApplicant({
			full_name: name,
			phone: phone,
			email: email,
			action: EAction.RECORD,
			comment: `Запись для ${title}`,
		})

		setIsSubmitted(true)
	}

	return (
		<div className='bg-brand-blue/8 border border-brand-blue/20 rounded-2xl p-8 md:p-10'>
			{isSubmitted && recordLink ? (
				<>
					<h2 className='font-display text-[clamp(20px,2.5vw,30px)] font-bold text-[#EEF2FF] mb-3'>
						Вам доступна запись
					</h2>

					<div className='flex items-center justify-center mt-2'>
						<Link
							target='_blank'
							href={recordLink}
							className='w-full text-center py-3.5 rounded-xl bg-brand-blue text-white text-[15px] font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
						>
							Получить запись
						</Link>
					</div>
				</>
			) : (
				<>
					<h2 className='font-display text-[clamp(20px,2.5vw,30px)] font-bold text-[#EEF2FF] mb-3'>
						Не получилось прийти?
					</h2>
					<p className='text-[15px] text-[#8B9EB7] mb-7 leading-relaxed'>
						Оставьте информацию о себе и получите доступ к записи
					</p>

					<form
						className='flex flex-col gap-4'
						onSubmit={handleSubmit}
					>
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
							Подтвердить
						</button>
					</form>
				</>
			)}
		</div>
	)
}
