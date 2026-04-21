import ArrowIcon from '@/src/components/ui/icons/ArrowIcon'
import { ROUTE_ITS, ROUTE_STORE, ROUTE_STUDY } from '@/src/routes'
import Link from 'next/link'

const services = [
	{
		num: '01',
		name: 'Настройка и внедрение 1С',
		desc: 'Диагностика и обследование, тестирование, внедрение системы, документация.',
	},
	{
		num: '02',
		name: 'Внедрение Битрикс 24',
		desc: 'Настройка CRM, задач, воронок продаж и интеграция с корпоративными системами.',
	},
	{
		num: '03',
		name: 'Сопровождение 1С (ИТС)',
		desc: 'Обновления, консультации, официальная поддержка, доступ к лицензионным ресурсам.',
		to: ROUTE_ITS,
	},
	{
		num: '04',
		name: 'Подключение торгового оборудования',
		desc: 'Подбор, поставка, подключение и настройка оборудования под ваши задачи.',
	},
	{
		num: '05',
		name: 'Маркировка товаров',
		desc: 'Подключение к системе «Честный знак», настройка оборудования и ПО.',
	},
	{
		num: '06',
		name: 'Автоматизация магазина (Розница)',
		desc: 'Интеграция с 1С, торговая техника, обучение персонала, сопровождение.',
		to: ROUTE_STORE,
	},
	{
		num: '07',
		name: 'Услуги внедрения iiko',
		desc: 'Техподдержка системы iiko, внедрение, разработка, обучение, продажа лицензий.',
	},
	{
		num: '08',
		name: 'Абонентское обслуживание касс',
		desc: 'Регистрация кассы, ремонт, прошивка, замена фискального накопителя, снятие с учета.',
	},
	{
		num: '09',
		name: 'Курсы профессиональной подготовки по 1С',
		desc: 'Теоретическая подготовка, практические занятия, сертификация, индив. формат. ',
		to: ROUTE_STUDY,
	},
]

export default function Services() {
	return (
		<section id='services' className='py-24 bg-navy'>
			<div className='max-w-300 mx-auto px-8 md:px-12'>
				<p className='text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-light mb-3.5'>
					Услуги
				</p>
				<h2 className='font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight mb-5'>
					Что мы делаем
				</h2>
				<p className='text-[17px] text-[#8B9EB7] leading-relaxed max-w-150 mb-14'>
					Специализируемся на сложных процессах и точечных решениях —
					от внедрения 1С до полной автоматизации ресторанов.
				</p>

				{/* Grid table */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/7 border border-white/7 rounded-2xl overflow-hidden'>
					{services.map(s =>
						s.to ? (
							<Link
								key={s.num}
								href={s.to}
								className='p-8 bg-navy hover:bg-navy-2 transition-colors duration-200 cursor-pointer relative'
							>
								<p className='font-display text-[11px] font-semibold text-[#4D6280] tracking-[0.08em] mb-4'>
									{s.num}
								</p>
								<h3 className='text-[15px] font-semibold text-[#EEF2FF] leading-snug mb-2.5'>
									{s.name}
								</h3>
								<p className='text-[13px] text-[#8B9EB7] leading-[1.55]'>
									{s.desc}
								</p>

								<div className='absolute bottom-3 right-3 text-[#4D6280]'>
									<ArrowIcon />
								</div>
							</Link>
						) : (
							<div
								key={s.num}
								className='p-8 bg-navy hover:bg-navy-2 transition-colors duration-200 cursor-default'
							>
								<p className='font-display text-[11px] font-semibold text-[#4D6280] tracking-[0.08em] mb-4'>
									{s.num}
								</p>
								<h3 className='text-[15px] font-semibold text-[#EEF2FF] leading-snug mb-2.5'>
									{s.name}
								</h3>
								<p className='text-[13px] text-[#8B9EB7] leading-[1.55]'>
									{s.desc}
								</p>
							</div>
						),
					)}
				</div>
			</div>
		</section>
	)
}
