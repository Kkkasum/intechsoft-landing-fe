import { VendorsSlider } from '@/src/components/home/sliders/VendorsSlider'
import { CountUp } from '@/src/components/ui/CountUp'
import MonitorIcon from '@/src/components/ui/icons/MonitorIcon'
import { ClientsSlider } from './sliders/ClientsSlider'

const features = [
	{
		icon: (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth={1.8}
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-5 h-5'
			>
				<path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
				<circle cx='9' cy='7' r='4' />
				<path d='M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' />
			</svg>
		),
		title: 'Команда профессионалов',
		text: 'Наши специалисты — это многопрофильная команда, которая решает любые задачи в единой точке контакта, экономя ваше время и ресурсы. ',
	},
	{
		icon: <MonitorIcon />,
		title: 'Широкий продуктовый портфель',
		text: 'Мы предлагаем ассортимент, включающий программные продукты и аппаратные решения от ведущих вендоров.',
	},
]

const metrics = [
	{ label: 'Опыт работы', value: '25 лет' },
	{ label: 'Проектов автоматизировано', value: '>14 000' },
	{ label: 'Ср. время реакции на ваши обращения', value: '~15 мин' },
]

export default function About() {
	return (
		<section id='about' className='py-24 bg-navy-2'>
			<div className='max-w-300 mx-auto px-8 md:px-12'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center'>
					{/* Left */}
					<div>
						<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5'>
							Почему мы
						</p>
						<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-5'>
							Комплексная поддержка: единая точка контакта для
							всех ИТ-решений
						</h2>
						<p className='text-base text-[#8B9EB7] leading-relaxed mb-12'>
							Основанная в 1996 году компания «ИнтехСофт»
							зарекомендовала себя как надёжный партнёр в сфере
							автоматизации бизнеса
							<br />
							Сегодня мы — динамично развивающаяся компания с
							собственным Учебным центром и развитой
							инфраструктурой
						</p>

						<div className='flex flex-col gap-9'>
							{features.map(f => (
								<div key={f.title} className='flex gap-5'>
									<div className='w-11 h-11 rounded-[10px] bg-brand-blue/10 border border-brand-blue/35 flex items-center justify-center shrink-0 text-brand-blue-light'>
										{f.icon}
									</div>
									<div>
										<h3 className='font-semibold text-base text-[#EEF2FF] mb-1.5'>
											{f.title}
										</h3>
										<p className='text-sm text-[#8B9EB7] leading-[1.55]'>
											{f.text}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right: metrics, vendors */}
					<div className='flex flex-col items-center gap-5 mt-10'>
						<div className='bg-white/4 border border-white/13 rounded-2xl p-8 w-full'>
							<h3 className='font-display text-[22px] font-bold leading-snug mb-8'>
								Результаты,
								<br />
								которые говорят сами
							</h3>
							<div className='flex flex-col'>
								{metrics.map((m, i) => (
									<CountUp
										key={m.label}
										{...m}
										index={i}
										total={metrics.length}
									/>
								))}
							</div>
						</div>

						<VendorsSlider />
					</div>
				</div>

				<div className='mt-12'>
					<ClientsSlider />
				</div>
			</div>
		</section>
	)
}
