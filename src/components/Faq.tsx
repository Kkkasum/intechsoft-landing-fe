'use client'

import { useState } from 'react'

const faqs = [
	{
		q: 'Вопрос 1',
		a: 'Ответ 1',
	},
	{
		q: 'Вопрос 2',
		a: 'Ответ 2',
	},
	{
		q: 'Вопрос 3',
		a: 'Ответ 3',
	},
]

export default function Faq() {
	const [open, setOpen] = useState<number | null>(0)

	return (
		<section id='faq' className='py-24 bg-navy-2'>
			<div className='max-w-300 mx-auto px-8 md:px-12'>
				<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5 text-center'>
					FAQ
				</p>
				<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-12 text-center'>
					Частые вопросы
				</h2>

				<div className='flex flex-col gap-2'>
					{faqs.map((f, i) => (
						<div
							key={i}
							className={`rounded-2xl border overflow-hidden transition-colors duration-200 bg-navy ${open === i ? 'border-active-border' : 'border-border'}`}
						>
							<button
								onClick={() => setOpen(open === i ? null : i)}
								className='w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-white text-sm font-bold cursor-pointer bg-transparent border-none'
							>
								{f.q}
								<div
									className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 transition-all transform duration-200 ${open === i ? 'rotate-180 bg-brand-blue-light' : 'bg-surface2 rotate-0'}`}
								>
									▾
								</div>
							</button>

							<div
								className='overflow-hidden transition-all duration-300 text-sm leading-relaxed'
								style={{
									maxHeight: open === i ? '200px' : '0',
									padding:
										open === i ? '0 24px 20px' : '0 24px',
									color: 'var(--text-muted)',
								}}
							>
								{f.a}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
