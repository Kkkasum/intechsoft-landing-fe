import CaseIcon from '@/src/components/ui/icons/CaseIcon'
import NoteIcon from '@/src/components/ui/icons/NoteIcon'

const managers = [
	{
		text: 'Избегайте штрафов за ошибки в отчётности — программа всегда актуальна.',
	},
	{
		text: 'Минимизируйте риски банкротства контрагентов с помощью мониторинга их финансовой устойчивости.',
	},
	{
		text: 'Будьте в курсе изменений законодательства и работайте удалённо с проверенными ресурсами.',
	},
]

const accountants = [
	{
		text: 'Сдавайте отчётность вовремя и без проблем — форматы всегда актуальны.',
	},
	{
		text: 'Экономьте время на рутинных операциях с автоматическим заполнением данных и электронным документооборотом.',
	},
	{
		text: 'Получайте профессиональную поддержку и доступ к базам знаний для решения любых вопросов.',
	},
]

export default function Audience() {
	return (
		<section className='py-24 bg-navy'>
			<div className='max-w-300 mx-auto px-8 md:px-12'>
				<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5'>
					Для кого
				</p>
				<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-4'>
					Чем 1С: КП (ИТС) может помочь?
				</h2>
				<p className='text-[17px] text-[#8B9EB7] leading-relaxed max-w-145 mb-14'>
					Договор ИТС одинаково важен как для руководителей, так и для
					специалистов учёта — у каждого свои задачи, и ИТС решает их
					все.
				</p>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
					{/* Managers card */}
					<div className='bg-white/4 border border-white/7 rounded-2xl p-8 hover:border-brand-blue/35 transition-all duration-200'>
						<div className='flex items-center gap-3 mb-6'>
							<div className='w-11 h-11 rounded-xl bg-brand-blue/10 border border-brand-blue/35 flex items-center justify-center text-brand-blue-light shrink-0'>
								<CaseIcon />
							</div>
							<div>
								<p className='text-[11px] font-semibold tracking-[0.08em] uppercase text-[#4D6280] mb-0.5'>
									Аудитория
								</p>
								<h3 className='font-display text-[17px] font-bold text-[#EEF2FF]'>
									Руководителям
								</h3>
							</div>
						</div>

						<ul className='flex flex-col gap-4'>
							{managers.map((item, i) => (
								<li key={i} className='flex items-start gap-3'>
									<span className='mt-1 w-5 h-5 rounded-full bg-brand-blue/15 border border-brand-blue/35 flex items-center justify-center shrink-0'>
										<svg
											viewBox='0 0 12 12'
											fill='none'
											stroke='currentColor'
											strokeWidth={2}
											strokeLinecap='round'
											strokeLinejoin='round'
											className='w-3 h-3 text-brand-blue-light'
										>
											<polyline points='2 6 4.5 8.5 10 3' />
										</svg>
									</span>
									<span className='text-[14px] text-[#8B9EB7] leading-relaxed'>
										{item.text}
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Accountants card */}
					<div className='bg-white/4 border border-white/7 rounded-2xl p-8 hover:border-brand-blue/35 transition-all duration-200'>
						<div className='flex items-center gap-3 mb-6'>
							<div className='w-11 h-11 rounded-xl bg-brand-blue/10 border border-brand-blue/35 flex items-center justify-center text-brand-blue-light shrink-0'>
								<NoteIcon />
							</div>
							<div>
								<p className='text-[11px] font-semibold tracking-[0.08em] uppercase text-[#4D6280] mb-0.5'>
									Аудитория
								</p>
								<h3 className='font-display text-[17px] font-bold text-[#EEF2FF]'>
									Для бухгалтеров
								</h3>
							</div>
						</div>

						<ul className='flex flex-col gap-4'>
							{accountants.map((item, i) => (
								<li key={i} className='flex items-start gap-3'>
									<span className='mt-1 w-5 h-5 rounded-full bg-brand-blue/15 border border-brand-blue/35 flex items-center justify-center shrink-0'>
										<svg
											viewBox='0 0 12 12'
											fill='none'
											stroke='currentColor'
											strokeWidth={2}
											strokeLinecap='round'
											strokeLinejoin='round'
											className='w-3 h-3 text-brand-blue-light'
										>
											<polyline points='2 6 4.5 8.5 10 3' />
										</svg>
									</span>
									<span className='text-[14px] text-[#8B9EB7] leading-relaxed'>
										{item.text}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
