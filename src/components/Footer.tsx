import LogoImage from '@/src/assets/logo.png'
import {
	ROUTE_CATALOG_1C_INDUSTRY,
	ROUTE_CATALOG_1C_PRODUCTS,
	ROUTE_CATALOG_EQUIPMENT,
	ROUTE_HOME,
} from '@/src/routes'
import Image from 'next/image'
import Link from 'next/link'

const productLinks = [
	{ label: 'Торговое оборудование', href: ROUTE_CATALOG_EQUIPMENT },
	{ label: '1С-Продукты', href: ROUTE_CATALOG_1C_PRODUCTS },
	{ label: 'Отраслевые решения 1С', href: ROUTE_CATALOG_1C_INDUSTRY },
]

const serviceLinks = [
	{ label: 'Сопровождение 1С (ИТС)', href: '/services/its' },
	{ label: 'Внедрение Битрикс 24', href: '/services/bitrix24' },
	{ label: 'Абонентское сопровождение', href: '/services/abonement' },
	{ label: 'Автоматизация ресторанов', href: '/services/restoran' },
	{ label: 'ФГИС Меркурий', href: '/services/mercury' },
]

const companyLinks = [
	{ label: 'О нас', href: '/#about' },
	{ label: 'FAQ', href: '/#faq' },
]

export default function Footer() {
	return (
		<footer className='bg-navy-2 border-t border-white/7 pt-14 pb-8'>
			<div className='max-w-300 mx-auto px-8 md:px-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)] gap-12 mb-12'>
					{/* Brand */}
					<div>
						<Link
							href={ROUTE_HOME}
							className='flex items-center gap-3 no-underline mb-4'
						>
							<div className='rounded-lg flex items-center justify-center shrink-0'>
								<Image
									src={LogoImage}
									alt=''
									width={50}
									height={50}
									className='rounded-lg'
								/>
							</div>
							<span className='font-display text-[13px] font-semibold text-[#EEF2FF] tracking-wide'>
								ИНТЕХ
								<span className='text-brand-blue-light'>-</span>
								СОФТ
							</span>
						</Link>
						<p className='text-sm text-[#8B9EB7] leading-relaxed max-w-55'>
							Официальный представитель фирмы 1С с 1996 года.
						</p>
						<a
							href='mailto:info@intechsoft.ru'
							className='inline-block mt-3 text-sm text-[#8B9EB7] hover:text-brand-blue-light transition-colors no-underline'
						>
							info@intechsoft.ru
						</a>
					</div>

					{/* Products */}
					<div>
						<p className='text-[13px] font-semibold uppercase tracking-widest text-[#4D6280] mb-4'>
							Продукты
						</p>
						<ul className='flex flex-col gap-2.5 list-none'>
							{productLinks.map(l => (
								<li key={l.href}>
									<Link
										href={l.href}
										className='text-sm text-[#8B9EB7] hover:text-brand-blue-light transition-colors no-underline'
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<p className='text-[13px] font-semibold uppercase tracking-widest text-[#4D6280] mb-4'>
							Услуги
						</p>
						<ul className='flex flex-col gap-2.5 list-none'>
							{serviceLinks.map(l => (
								<li key={l.href}>
									<Link
										href={l.href}
										className='text-sm text-[#8B9EB7] hover:text-brand-blue-light transition-colors no-underline'
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Company */}
					<div>
						<p className='text-[13px] font-semibold uppercase tracking-widest text-[#4D6280] mb-4'>
							Компания
						</p>
						<ul className='flex flex-col gap-2.5 list-none'>
							{companyLinks.map(l => (
								<li key={l.href}>
									<Link
										href={l.href}
										className='text-sm text-[#8B9EB7] hover:text-brand-blue-light transition-colors no-underline'
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
						<p className='text-[13px] text-[#8B9EB7] leading-relaxed mt-6'>
							г. Махачкала,
							<br />
							пр-кт Гамидова, д. 18п, 710 офис
						</p>

						<p className='text-[13px] text-[#8B9EB7] leading-relaxed mt-6'>
							г. Пятигорск,
							<br />
							ул. Крайнего, д. 49
						</p>
					</div>
				</div>

				{/* Bottom bar */}
				<div className='pt-7 border-t border-white/7 flex flex-col sm:flex-row justify-between items-center gap-3'>
					<p className='text-[13px] text-[#4D6280]'>
						© 2026 ООО «Интех-Софт». Все права защищены.
					</p>
					<a
						href='mailto:info@intechsoft.ru'
						className='text-[13px] text-[#8B9EB7] hover:text-brand-blue-light transition-colors no-underline'
					>
						info@intechsoft.ru
					</a>
				</div>
			</div>
		</footer>
	)
}
