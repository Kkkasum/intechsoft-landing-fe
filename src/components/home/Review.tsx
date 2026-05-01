'use client'

import { useState } from 'react'

const reviews = [
	{
		text: 'Выражаем искреннюю благодарность компании «ИнтехСофт» за профессиональное внедрение и настройку Битрикс24 в нашей организации. Команда взяла на себя полный цикл работ: от анализа наших бизнес‑процессов и проектирования структуры CRM до настройки воронок продаж, автоматизаций и обучающего сопровождения сотрудников.',
		name: 'SURUPACK LTD',
		stars: 5,
	},
	{
		text: 'Добрый вечер, сталкивалась со многими вещами и не знала к кому обратиться. Через знакомых управляющих, бухгалтеров нашла компанию Интеx-Софт эта компания научила меня вдоль и поперёк всем вещам я очень рада что нашла вашу компанию где все технично аккуратно любой вопрос помогут решить отдельное спасибо менеджеру Заира за то что помогала мне🥹❤️',
		name: 'Городской житель',
		stars: 5,
	},
	{
		text: 'Я часто обращаюсь в Интех-Софт, именно к Саиду Магомедгаджиевичу. Компания и Саид всегда готовы помочь в любых вопросах, связанных с установкой и настройкой программных решений, а также маркировкой товаров, решают все вопросы по онлайн кассе. Интех-Софт зарекомендовал себя как надежный партнер для бизнеса, обеспечивая высокачественную техническую поддержку и консультации.',
		name: 'Аминат Магомедова',
		stars: 5,
	},
	{
		text: 'Прекрасно справляются со своей работой, реагируют быстро, оперативно, и всегда на связи, вежливы и интересуются все ли в порядке. Рекомендую. Не пожалеете!',
		name: 'Ханифа В.',
		stars: 5,
	},
	{
		text: 'Добрый день всем, сотрудничаю с этой компанией с 2019г. Могу оценить только с положительной стороны, все вопросы связанные с программой обеспечения 1С сами по себе отпали. Советую данную компанию.',
		name: 'Алик А.',
		stars: 5,
	},
	{
		text: 'Интех Софт - вы лучшие 🔥',
		name: 'Гульжанат Гасанова',
		stars: 5,
	},
]

function Stars({ count }: { count: number }) {
	return (
		<div className='flex gap-1 justify-center'>
			{Array.from({ length: count }).map((_, i) => (
				<svg
					key={i}
					className='w-4 h-4 fill-amber-400'
					viewBox='0 0 24 24'
				>
					<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
				</svg>
			))}
		</div>
	)
}

const DGIS_URL =
	'https://2gis.ru/makhachkala/firm/70000001081527265/tab/reviews'

export default function Review() {
	const [current, setCurrent] = useState(0)
	const total = reviews.length + 1 // +1 for the 2GIS slide

	const prev = () => setCurrent(i => (i - 1 + total) % total)
	const next = () => setCurrent(i => (i + 1) % total)

	const isLast = current === reviews.length
	const r = !isLast ? reviews[current] : null

	return (
		<section className='py-24 bg-navy'>
			<div className='max-w-300 mx-auto px-8 md:px-12'>
				<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5 text-center'>
					Отзывы клиентов
				</p>
				<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-12 text-center'>
					Бизнесы доверяют Нам
				</h2>

				<div className='flex items-center gap-4 md:gap-6 max-w-[860px] mx-auto'>
					{/* Prev */}
					<button
						onClick={prev}
						aria-label='Предыдущий отзыв'
						className='shrink-0 w-11 h-11 rounded-xl border border-white/13 bg-white/4 hover:bg-white/8 hover:border-brand-blue/35 flex items-center justify-center text-[#8B9EB7] hover:text-brand-blue-light transition-all duration-200 cursor-pointer'
					>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							stroke='currentColor'
							strokeWidth={1.8}
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M10 3L5 8l5 5' />
						</svg>
					</button>

					{/* Card */}
					<div className='flex flex-col items-center justify-between flex-1 bg-navy-2 border border-white/13 rounded-2xl p-8 md:p-12 text-center select-none h-96'>
						{isLast ? (
							/* 2GIS slide */
							<div className='flex flex-col items-center gap-6 py-4'>
								{/* 2GIS icon */}
								<div className='w-16 h-16 rounded-2xl bg-[#1ba26b]/10 border border-[#1ba26b]/30 flex items-center justify-center'>
									<svg
										viewBox='0 0 48 48'
										className='w-9 h-9'
										fill='none'
									>
										<circle
											cx='24'
											cy='24'
											r='24'
											fill='#1ba26b'
										/>
										<text
											x='50%'
											y='54%'
											dominantBaseline='middle'
											textAnchor='middle'
											fill='white'
											fontSize='16'
											fontWeight='bold'
											fontFamily='sans-serif'
										>
											2ГИС
										</text>
									</svg>
								</div>

								<div>
									<p className='font-display text-[clamp(18px,2.5vw,26px)] font-bold text-[#EEF2FF] leading-snug mb-2'>
										Ещё больше отзывов
									</p>
									<p className='text-[15px] text-[#8B9EB7] leading-relaxed max-w-xs mx-auto'>
										Читайте отзывы наших клиентов на 2ГИС —
										там их уже больше сотни
									</p>
								</div>

								{/* Stars row */}
								<div className='flex gap-1 justify-center'>
									{Array.from({ length: 5 }).map((_, i) => (
										<svg
											key={i}
											className='w-[18px] h-[18px] fill-amber-400'
											viewBox='0 0 24 24'
										>
											<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
										</svg>
									))}
									<span className='ml-2 text-sm text-[#8B9EB7] self-center'>
										4.9 на 2ГИС
									</span>
								</div>

								<a
									href={DGIS_URL}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#1ba26b] text-white text-sm font-semibold hover:bg-[#17915f] hover:-translate-y-0.5 transition-all duration-200 no-underline'
								>
									Открыть на 2ГИС
									<svg
										width='14'
										height='14'
										viewBox='0 0 16 16'
										fill='none'
										stroke='currentColor'
										strokeWidth={2}
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path d='M6 3l5 5-5 5' />
									</svg>
								</a>
							</div>
						) : (
							/* Regular review slide */
							<>
								<Stars count={r!.stars} />
								<blockquote className='text-base md:text-lg text-[#EEF2FF] leading-relaxed italic my-7'>
									«{r!.text}»
								</blockquote>
								<p className='font-semibold text-[15px] text-[#EEF2FF]'>
									{r!.name}
								</p>
							</>
						)}
					</div>

					{/* Next */}
					<button
						onClick={next}
						aria-label='Следующий отзыв'
						className='shrink-0 w-11 h-11 rounded-xl border border-white/13 bg-white/4 hover:bg-white/8 hover:border-brand-blue/35 flex items-center justify-center text-[#8B9EB7] hover:text-brand-blue-light transition-all duration-200 cursor-pointer'
					>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							stroke='currentColor'
							strokeWidth={1.8}
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M6 3l5 5-5 5' />
						</svg>
					</button>
				</div>

				{/* Dots */}
				<div className='flex justify-center gap-2 mt-8'>
					{Array.from({ length: total }).map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrent(i)}
							aria-label={
								i === reviews.length ? '2ГИС' : `Отзыв ${i + 1}`
							}
							className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
								i === current
									? i === reviews.length
										? 'w-6 bg-[#1ba26b]'
										: 'w-6 bg-brand-blue-light'
									: 'w-1.5 bg-white/20 hover:bg-white/40'
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
