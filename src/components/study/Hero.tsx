import { ROUTE_HOME } from '@/src/routes'
import Link from 'next/link'

export default function Hero() {
	return (
		<section className='relative pt-17 overflow-hidden bg-navy h-screen'>
			<div
				className='absolute inset-0 pointer-events-none'
				style={{
					background:
						'radial-gradient(ellipse 60% 70% at 80% 30%, rgba(29,111,232,0.11) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(0,210,255,0.05) 0%, transparent 55%)',
				}}
			/>
			<div className='absolute inset-0 pointer-events-none bg-hero-grid' />

			<div className='max-w-300 mx-auto px-8 md:px-12 relative py-24 md:py-32'>
				<Link
					href={ROUTE_HOME}
					className='inline-flex items-center gap-2 text-[#8B9EB7] text-sm hover:text-brand-blue-light transition-colors no-underline mb-8'
				>
					<svg
						width='14'
						height='14'
						viewBox='0 0 16 16'
						fill='none'
						stroke='currentColor'
						strokeWidth={1.8}
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path d='M10 3L5 8l5 5' />
					</svg>
					На главную
				</Link>

				<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-4'>
					Образование
				</p>
				<h1 className='font-display text-[clamp(36px,4.5vw,62px)] font-bold leading-[1.1] tracking-tight mb-6 max-w-175'>
					Курсы 1С
					<br />в Махачкале
				</h1>
				<p className='text-[18px] text-[#8B9EB7] leading-relaxed max-w-140 mb-10'>
					Практическое обучение для бухгалтеров, менеджеров, кассиров
					и руководителей. Очно, онлайн и с выездом к заказчику.
					Сертификат по окончании.
				</p>

				<div className='flex flex-wrap gap-4'>
					<a
						href='/study#cta'
						className='inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-blue text-white text-base font-semibold hover:bg-brand-blue-light hover:-translate-y-0.5 transition-all duration-200 no-underline'
					>
						Записаться на курс
					</a>
					<a
						href='#courses'
						className='inline-flex items-center px-8 py-3.5 rounded-xl bg-transparent text-[#EEF2FF] text-base font-semibold border border-white/13 hover:border-brand-blue/35 hover:text-brand-blue-light transition-all duration-200 no-underline'
					>
						Смотреть программы
					</a>
				</div>

				{/* Quick stats */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-px mt-16 bg-white/7 border border-white/7 rounded-2xl overflow-hidden'>
					{[
						{ val: '5', label: 'курсов по 1С' },
						{ val: '18-30', label: 'часа продолжительность' },
						{ val: '25+', label: 'лет преподаём' },
						{
							val: '100%',
							label: 'практика на реальных задачах',
						},
					].map(s => (
						<div key={s.label} className='px-6 py-5 bg-navy'>
							<div className='font-display text-2xl font-bold text-brand-blue-light mb-1'>
								{s.val}
							</div>
							<div className='text-[13px] text-[#8B9EB7] leading-snug'>
								{s.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
