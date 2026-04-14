'use client'

import Row from '@/src/components/catalog/Row'
import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import { Category } from '@/src/types/catalog.type'
import Link from 'next/link'
import { useState } from 'react'

const catalog: Category[] = [
	{
		id: 'food',
		label: 'Пищевая промышленность',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 1,
				name: '1С:Хлебобулочное и кондитерское производство 2. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
			{
				id: 2,
				name: '1С:Бухгалтерия хлебобулочного и кондитерского предприятия',
				badge: 'in_stock',
			},
			{
				id: 3,
				name: '1С:Производство алкогольной продукции. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
			{
				id: 4,
				name: '1С:ERP Управление мясоперерабатывающим предприятием 2',
				badge: 'in_stock',
			},
			{
				id: 5,
				name: '1С:Мясопереработка MES. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
			{
				id: 6,
				name: '1С:Молокозавод . Модуль для 1С:ERP и 1С:КА2',
				badge: 'in_stock',
			},
			{
				id: 7,
				name: '1С:Производство мясной и рыбной продукции 2. Модуль для 1C:ERP',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'healthcare',
		label: 'Здравоохранение',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{ id: 8, name: '1С:Розница 8. Аптека', badge: 'in_stock' },
			{ id: 9, name: '1С:Медицина. Поликлиника', badge: 'in_stock' },
			{ id: 10, name: '1С:Медицина. Больница', badge: 'in_stock' },
			{
				id: 11,
				name: '1С:Медицина. Клиническая лаборатория',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'logistics-warehouse',
		label: 'Логистика и склад',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 12,
				name: '1С:Предприятие 8. 1С-Логистика. Управление складом',
				badge: 'in_stock',
			},
			{
				id: 13,
				name: '1С:Предприятие 8. Управление автотранспортом Стандарт',
				badge: 'in_stock',
			},
			{
				id: 14,
				name: '1С:Предприятие 8. Управление автотранспортом Проф',
				badge: 'in_stock',
			},
			{
				id: 15,
				name: '1С:WMS Логистика. Управление складом',
				badge: 'in_stock',
			},
			{
				id: 16,
				name: '1С:Предприятие 8. TMS Логистика. Управление перевозками',
				badge: 'in_stock',
			},
			{
				id: 17,
				name: '1С:Предприятие 8. Транспортная логистика, экспедирование и управление автотранспортом КОРП',
				badge: 'in_stock',
			},
			{
				id: 18,
				name: '1С:Транспортная логистика, экспедирование и управление автотранспортом КОРП',
				badge: 'in_stock',
			},
			{
				id: 19,
				name: '1С:Управление автотранспортом. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'construction',
		label: 'Строительство',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 20,
				name: 'Модуль «Планирование строительства» для «1С:ERP»',
				badge: 'in_stock',
			},
			{
				id: 21,
				name: '1С:Предприятие 8. Бухгалтерия строительной организации',
				badge: 'in_stock',
			},
			{
				id: 22,
				name: '1С:Подрядчик строительства 4.0',
				badge: 'in_stock',
			},
			{ id: 23, name: '1С:Предприятие 8. Смета', badge: 'in_stock' },
			{
				id: 24,
				name: '1C:Предприятие 8. Элит-строительство',
				badge: 'in_stock',
			},
			{
				id: 25,
				name: '1С:ERP Управление строительной организацией 2',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'printing',
		label: 'Полиграфия',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 26,
				name: '1С:Предприятие 8. Оперативная печать',
				badge: 'in_stock',
			},
			{
				id: 27,
				name: '1С:Предприятие 8. Широкоформатная печать',
				badge: 'in_stock',
			},
			{
				id: 28,
				name: '1С:Полиграфия 2. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'resource-management',
		label: 'Управление ресурсами',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 29,
				name: '1С:Предприятие 8. PDM Управление инженерными данными',
				badge: 'in_stock',
			},
			{
				id: 30,
				name: '1С:ERP+PM Управление проектной организацией 2',
				badge: 'in_stock',
			},
			{
				id: 31,
				name: '1С:Предприятие 8. ITIL Управление информационными технологиями предприятия',
				badge: 'in_stock',
			},
			{
				id: 32,
				name: '1С:Предприятие 8. MDM Управление нормативно-справочной информацией',
				badge: 'in_stock',
			},
			{
				id: 33,
				name: '1С:Предприятие 8. MES Оперативное управление производством',
				badge: 'in_stock',
			},
			{
				id: 34,
				name: '1С:Предприятие 8. МТО Материально-техническое обеспечение',
				badge: 'in_stock',
			},
			{
				id: 35,
				name: '1С:Предприятие 8. ТОИР Управление ремонтами и обслуживанием оборудования',
				badge: 'in_stock',
			},
			{
				id: 36,
				name: '1С:ТОИР Управление ремонтами и обслуживанием оборудования 2 КОРП',
				badge: 'in_stock',
			},
			{
				id: 37,
				name: '1С:ERP Управление предприятием 2',
				badge: 'in_stock',
			},
			{
				id: 38,
				name: '1С:ERP Агропромышленный комплекс 2',
				badge: 'in_stock',
			},
			{
				id: 39,
				name: '1С ITIL Управление информационными технологиями предприятия СТАНДАРТ',
				badge: 'in_stock',
			},
			{
				id: 40,
				name: 'Модуль 1C:PM Управление проектами для 1С:ERP',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'professional',
		label: 'Профессиональные услуги',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{ id: 41, name: '1С:SPA-Салон', badge: 'in_stock' },
			{ id: 42, name: '1С:Автосервис', badge: 'in_stock' },
			{ id: 43, name: '1С:Кадровое агентство', badge: 'in_stock' },
			{ id: 44, name: '1С:Общепит 8', badge: 'in_stock' },
			{ id: 45, name: '1С:Предприятие 8. Отель', badge: 'in_stock' },
			{ id: 46, name: '1С:Предприятие 8. Ресторан', badge: 'in_stock' },
			{
				id: 47,
				name: '1С:Предприятие 8. Турагентство. Базовая версия',
				badge: 'in_stock',
			},
			{
				id: 48,
				name: '1С:Предприятие 8. Турагентство',
				badge: 'in_stock',
			},
			{
				id: 49,
				name: '1С:Предприятие 8. Управление проектным офисом',
				badge: 'in_stock',
			},
			{
				id: 50,
				name: '1С:Предприятие 8. Управление сервисным центром',
				badge: 'in_stock',
			},
			{ id: 51, name: '1С:Салон красоты', badge: 'in_stock' },
			{
				id: 52,
				name: '1С:Такси и аренда автомобилей',
				badge: 'in_stock',
			},
			{ id: 53, name: '1С:Фитнес клуб', badge: 'in_stock' },
			{ id: 54, name: '1С:Фитнес клуб КОРП', badge: 'in_stock' },
			{ id: 55, name: '1С:Фотоуслуги', badge: 'in_stock' },
			{
				id: 56,
				name: '1С:Предприятие 8. Страховая компания 8 КОРП',
				badge: 'in_stock',
			},
			{
				id: 57,
				name: '1С:Предприятие 8. Управление ритуальными услугами',
				badge: 'in_stock',
			},
			{ id: 58, name: '1С:Театр', badge: 'in_stock' },
		],
	},
	{
		id: 'trade-enterprises',
		label: 'Торговые предприятия',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{ id: 59, name: '1С:Мобильная торговля', badge: 'in_stock' },
			{
				id: 60,
				name: '1С:Предприятие 8. Управление торговлей алкогольной продукцией',
				badge: 'in_stock',
			},
			{
				id: 61,
				name: '1С:Розница 8. Книжный магазин',
				badge: 'in_stock',
			},
			{
				id: 62,
				name: '1С:Розница 8. Магазин автозапчастей',
				badge: 'in_stock',
			},
			{
				id: 63,
				name: '1С:Розница 8. Магазин бытовой техники и средств связи',
				badge: 'in_stock',
			},
			{
				id: 64,
				name: '1С:Розница 8. Магазин одежды и обуви',
				badge: 'in_stock',
			},
			{
				id: 65,
				name: '1С:Розница 8. Магазин строительных и отделочных материалов',
				badge: 'in_stock',
			},
			{ id: 66, name: '1С:Розница 8. Салон оптики', badge: 'in_stock' },
			{
				id: 67,
				name: '1С:Розница 8. Ювелирный магазин',
				badge: 'in_stock',
			},
			{ id: 68, name: '1С:Управление аптечной сетью', badge: 'in_stock' },
		],
	},
	{
		id: 'other',
		label: 'Другие отрасли',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 69,
				name: '1С:Электронное обучение. Корпоративный университет',
				badge: 'in_stock',
			},
			{ id: 70, name: '1C:ERP Энергетика', badge: 'in_stock' },
			{ id: 71, name: '1С:Садовод', badge: 'in_stock' },
			{ id: 72, name: '1С:Музей', badge: 'in_stock' },
			{
				id: 73,
				name: '1С-Рарус: Финансовый менеджмент',
				badge: 'in_stock',
			},
			{
				id: 74,
				name: '1С:Предприятие 8. Производственная безопасность. Охрана окружающей среды',
				badge: 'in_stock',
			},
			{
				id: 75,
				name: 'Модуль 1С:Аренда и управление недвижимостью для 1С:ERP',
				badge: 'in_stock',
			},
			{ id: 76, name: '1С:Музейный каталог', badge: 'in_stock' },
			{
				id: 77,
				name: 'Программно-методический комплекс 1С:Машиностроение 8',
				badge: 'in_stock',
			},
			{
				id: 78,
				name: '1С:ERP Горнодобывающая промышленность 2',
				badge: 'in_stock',
			},
			{ id: 79, name: '1С:Управление водоканалом 2', badge: 'in_stock' },
			{
				id: 80,
				name: '1С:Управляющая компания ЖКХ. Модуль для 1С:ERP и 1С:КА2',
				badge: 'in_stock',
			},
			{ id: 81, name: '1C:Управление теплосетью 2', badge: 'in_stock' },
			{
				id: 82,
				name: '1С:Риэлтор. Управление продажами недвижимости. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
			{
				id: 83,
				name: '1С:Управление металлургическим комбинатом 2. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
		],
	},
]

export default function Industry1CPage() {
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
						href='/'
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
						Отраслевые решения 1C
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

			<Footer />
		</main>
	)
}
