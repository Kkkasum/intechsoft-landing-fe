'use client'

import CTA from '@/src/components/catalog/CTA'
import Row from '@/src/components/catalog/Row'
import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import { ROUTE_HOME } from '@/src/routes'
import { Category } from '@/src/types/catalog.type'
import Link from 'next/link'
import { useState } from 'react'

const catalog: Category[] = [
	{
		id: 'popular',
		label: 'Популярные товары',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'regulated', label: 'Регламентированный учет' },
			{ id: 'trade-warehouse', label: 'Торговый и складской учет' },
			{ id: 'management', label: 'Управленческий учет' },
			{ id: 'complex', label: 'Комплексные решения' },
		],
		products: [
			{
				id: 1,
				name: '1С:Бухгалтерия 8',
				subcat: 'regulated',
				badge: 'in_stock',
			},
			{
				id: 2,
				name: '1С:Зарплата и управление персоналом 8',
				subcat: 'regulated',
				badge: 'in_stock',
			},
			{
				id: 3,
				name: '1С:Бухгалтерия КОРП МСФО',
				subcat: 'regulated',
				badge: 'in_stock',
			},
			{
				id: 4,
				name: '1C:Налоговый мониторинг. Бухгалтерия КОРП МСФО',
				subcat: 'regulated',
				badge: 'in_stock',
			},
			{
				id: 5,
				name: '1С:Управление торговлей 8',
				subcat: 'trade-warehouse',
				badge: 'in_stock',
			},
			{
				id: 6,
				name: '1С:Розница 8',
				subcat: 'trade-warehouse',
				badge: 'in_stock',
			},
			{
				id: 7,
				name: '1С:Управление нашей фирмой 8',
				subcat: 'management',
				badge: 'in_stock',
			},
			{
				id: 8,
				name: '1С:Документооборот 8',
				subcat: 'management',
				badge: 'in_stock',
			},
			{
				id: 9,
				name: '1С:Предприятие 8. Управляющий',
				subcat: 'management',
				badge: 'in_stock',
			},
			{
				id: 10,
				name: '1С:Договорчики 8',
				subcat: 'management',
				badge: 'in_stock',
			},
			{
				id: 11,
				name: '1С:Предприятие 8. Управляющий. Базовая версия',
				subcat: 'management',
				badge: 'in_stock',
			},
			{
				id: 12,
				name: '1С:Предприятие 8. Управляющий. Стандарт',
				subcat: 'management',
				badge: 'in_stock',
			},
			{
				id: 13,
				name: '1С:ERP Управление предприятием 2',
				subcat: 'complex',
				badge: 'in_stock',
			},
			{
				id: 14,
				name: '1С:Комплексная автоматизация 8',
				subcat: 'complex',
				badge: 'in_stock',
			},
			{
				id: 15,
				name: '1С:Предприятие 8. Комплект прикладных решений на 5 пользователей',
				subcat: 'complex',
				badge: 'in_stock',
			},
			{
				id: 16,
				name: '1С:Корпорация',
				subcat: 'complex',
				badge: 'in_stock',
			},
			{
				id: 17,
				name: '1С:Управление холдингом 8',
				subcat: 'complex',
				badge: 'in_stock',
			},
			{
				id: 18,
				name: '1С:Предприятие 8. CRM',
				subcat: 'complex',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'license',
		label: 'Лицензии 1С',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'single', label: 'Однопользовательские лицензии' },
			{ id: 'multi', label: 'Многопользовательские лицензии' },
			{ id: 'korp', label: 'Лицензии КОРП' },
		],
		products: [
			{
				id: 19,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 1 рабочее место',
				subcat: 'single',
				badge: 'in_stock',
			},
			{
				id: 20,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 5 рабочих мест',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 21,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 10 рабочих мест',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 22,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 20 рабочих мест',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 23,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 50 рабочих мест',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 24,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 100 рабочих мест',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 25,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 300 рабочих мест 1',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 26,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 500 рабочих мест 2',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 27,
				name: '1С:Предприятие 8. Расширение для карманных компьютеров (включает лицензию на 5 КПК)',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 28,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 5 рабочих мест',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 29,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 10 рабочих мест',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 30,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 20 рабочих мест',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 31,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 50 рабочих мест',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 32,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 100 рабочих мест',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 33,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 300 рабочих мест 1',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 34,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 500 рабочих мест 2',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 35,
				name: '1С:Предприятие 8. Расширение для карманных компьютеров (включает лицензию на 5 КПК)',
				subcat: 'korp',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'services',
		label: '1С-Сервисы',
		subcats: [
			{ id: 'all', label: 'Все' },
			{
				id: 'docs',
				label: 'Для работы с документами и сдачи отчетности',
			},
			{
				id: 'сounteragent',
				label: 'Для работы с контрагентами и их проверки',
			},
			{ id: 'questions', label: 'Для решения возникающих вопросов' },
			{ id: 'internet', label: 'Для работы через Интернет' },
		],
		products: [
			{ id: 36, name: '1С:ЭДО', subcat: 'docs', badge: 'in_stock' },
			{ id: 37, name: '1С:Подпись', subcat: 'docs', badge: 'in_stock' },
			{
				id: 38,
				name: '1С:Отчетность',
				subcat: 'docs',
				badge: 'in_stock',
			},
			{
				id: 39,
				name: '1С:ДиректБанк',
				subcat: 'docs',
				badge: 'in_stock',
			},
			{ id: 40, name: '1С:ОФД', subcat: 'docs', badge: 'in_stock' },
			{
				id: 41,
				name: '1С:Кабинет сотрудника',
				subcat: 'docs',
				badge: 'in_stock',
			},
			{
				id: 42,
				name: '1С:Распознование документов',
				subcat: 'docs',
				badge: 'in_stock',
			},
			{
				id: 43,
				name: '1С:Контрагент',
				subcat: 'сounteragent',
				badge: 'in_stock',
			},
			{
				id: 44,
				name: '1С:ПАРК Риски',
				subcat: 'сounteragent',
				badge: 'in_stock',
			},
			{
				id: 45,
				name: '1С:КП (ИТС)',
				subcat: 'questions',
				badge: 'in_stock',
			},
			{
				id: 46,
				name: '1С:Коннект',
				subcat: 'questions',
				badge: 'in_stock',
			},
			{ id: 47, name: '1С:ФРЕШ', subcat: 'internet', badge: 'in_stock' },
			{
				id: 48,
				name: 'Аренда 1С',
				subcat: 'internet',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'bitrix',
		label: '1С-Битрикс24',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 49,
				name: '1С-Битрикс. Управление сайтом',
				badge: 'in_stock',
			},
			{
				id: 50,
				name: '1С-Битрикс24. Корпоративный портал',
				badge: 'in_stock',
			},
			{ id: 51, name: 'Облачный сервис Битрикс24', badge: 'in_stock' },
		],
	},
]

export default function Products1CPage() {
	const [activeCat, setActiveCat] = useState(catalog[0].id)
	const [activeSubcat, setActiveSubcat] = useState('all')

	const category = catalog.find(c => c.id === activeCat)!

	const products =
		activeSubcat === 'all'
			? category.products
			: category.products.filter(p => p.subcat === activeSubcat)

	const handleCatChange = (id: string) => {
		setActiveCat(id)
		setActiveSubcat('all')
	}

	return (
		<main>
			<Navbar />

			{/* Page header */}
			<div className='pt-17 bg-navy border-b border-white/7'>
				<div className='max-w-300 mx-auto px-8 md:px-12 py-10'>
					<Link
						href={ROUTE_HOME}
						className='inline-flex items-center gap-2 text-[#8B9EB7] text-sm hover:text-brand-blue-light transition-colors no-underline mb-5'
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
					<h1 className='font-display text-[clamp(28px,3vw,42px)] font-bold leading-tight tracking-tight'>
						1С-Продукты
					</h1>
				</div>
			</div>

			{/* Main layout */}
			<div className='bg-navy-2 min-h-screen'>
				<div className='max-w-300 mx-auto px-8 md:px-12 py-10'>
					<div className='flex gap-7 items-start'>
						{/* ── Sidebar ── */}
						<aside className='w-60 shrink-0 sticky top-21'>
							<div className='bg-white/4 border border-white/7 rounded-2xl overflow-hidden'>
								<div className='px-5 py-4 border-b border-white/7'>
									<span className='text-[11px] font-semibold uppercase tracking-[0.1em] text-[#4D6280]'>
										Категории
									</span>
								</div>
								<ul className='py-2 list-none'>
									{catalog.map(cat => (
										<li key={cat.id}>
											<button
												onClick={() =>
													handleCatChange(cat.id)
												}
												className={`w-full text-left px-5 py-3 text-[14px] transition-all duration-150 ${
													activeCat === cat.id
														? 'text-brand-blue-light bg-brand-blue/10 font-medium border-l-2 border-brand-blue-light'
														: 'text-[#8B9EB7] hover:text-[#EEF2FF] hover:bg-white/4 border-l-2 border-transparent'
												}`}
											>
												{cat.label}
											</button>
										</li>
									))}
								</ul>
							</div>
						</aside>

						{/* ── Right panel ── */}
						<div className='flex-1 min-w-0'>
							{/* Subcategory tabs */}
							{category.subcats.length > 1 && (
								<div className='flex flex-wrap gap-2 mb-6'>
									{category.subcats.map(sc => (
										<button
											key={sc.id}
											onClick={() =>
												setActiveSubcat(sc.id)
											}
											className={`px-4 py-2 rounded-xl text-[13px] font-medium border transition-all duration-150 ${
												activeSubcat === sc.id
													? 'bg-brand-blue border-brand-blue text-white'
													: 'bg-transparent border-white/13 text-[#8B9EB7] hover:border-brand-blue/35 hover:text-brand-blue-light'
											}`}
										>
											{sc.label}
										</button>
									))}
								</div>
							)}

							{/* Count */}
							<p className='text-[13px] text-[#4D6280] mb-5'>
								Найдено товаров:{' '}
								<span className='text-[#8B9EB7] font-medium'>
									{products.length}
								</span>
							</p>

							{/* Products list */}
							<div className='flex flex-col gap-3'>
								{products.map(p => (
									<Row key={p.id} product={p} />
								))}

								{products.length === 0 && (
									<div className='text-center py-20 text-[#4D6280]'>
										Товары в этой подкатегории не найдены
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			<CTA />

			<Footer />
		</main>
	)
}
