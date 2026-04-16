'use client'

import CTA from '@/src/components/catalog/CTA'
import EquipmentRow from '@/src/components/catalog/EquipmentRow'
import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import { ROUTE_HOME } from '@/src/routes'
import { Category } from '@/src/types/catalog.type'
import Link from 'next/link'
import { useState } from 'react'

const catalog: Category[] = [
	{
		id: 'kassy',
		label: 'Онлайн-кассы',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'fisk', label: 'Фискальные регистраторы' },
			{ id: 'smart', label: 'Смарт-терминалы' },
			{ id: 'prosh', label: 'Прошивки и лицензии для ККТ' },
		],
		products: [
			{
				id: 1,
				name: 'АТОЛ СТБ 5 Смарт-терминал',
				subcat: 'smart',
				badge: 'on_order',
			},
			{
				id: 2,
				name: 'АТОЛ 91Ф Фискальный регистратор',
				subcat: 'fisk',
				badge: 'on_order',
			},
			{
				id: 3,
				name: 'Эвотор 5 Смарт-терминал',
				subcat: 'smart',
				badge: 'on_order',
			},
			{
				id: 4,
				name: 'АТОЛ 55Ф Фискальный регистратор',
				subcat: 'fisk',
				badge: 'on_order',
			},
			{
				id: 5,
				name: 'Эвотор 10 Смарт-терминал',
				subcat: 'smart',
				badge: 'on_order',
			},
			{
				id: 6,
				name: 'АТОЛ Connect. ИТС на 1 год',
				subcat: 'prosh',
				badge: 'on_order',
			},
		],
	},
	{
		id: 'shtrih',
		label: 'Оборудование для штрих-кодов',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'scan', label: 'Сканеры штрих-кодов' },
			{ id: 'print', label: 'Принтеры этикеток' },
			{ id: 'ter', label: 'Терминалы сбора данных' },
		],
		products: [
			{
				id: 7,
				name: 'Honeywell Voyager 1250g Сканер',
				subcat: 'scan',
				badge: 'on_order',
			},
			{
				id: 8,
				name: 'Zebra DS2208 Сканер штрих-кода',
				subcat: 'scan',
				badge: 'on_order',
			},
			{
				id: 9,
				name: 'АТОЛ BP41 Принтер этикеток',
				subcat: 'print',
				badge: 'on_order',
			},
			{
				id: 10,
				name: 'Godex G500 Принтер этикеток',
				subcat: 'print',
				badge: 'on_order',
			},
			{
				id: 11,
				name: 'Newland MT65 Терминал сбора данных',
				subcat: 'ter',
				badge: 'on_order',
			},
		],
	},
	{
		id: 'vesy',
		label: 'Весы',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'torg', label: 'Торговые весы' },
			{ id: 'cen', label: 'Весы с печатью этикеток' },
			{ id: 'fas', label: 'Фасовочные весы' },
		],
		products: [
			{
				id: 12,
				name: 'CAS AP-EX06 Торговые весы',
				subcat: 'torg',
				badge: 'on_order',
			},
			{
				id: 13,
				name: 'Mettler Toledo bPRO Торговые весы',
				subcat: 'torg',
				badge: 'on_order',
			},
			{
				id: 14,
				name: 'CAS LP-1.5R Весы с печатью',
				subcat: 'cen',
				badge: 'on_order',
			},
			{
				id: 15,
				name: 'DIGI SM-300P Весы с принтером',
				subcat: 'cen',
				badge: 'on_order',
			},
			{
				id: 16,
				name: 'CAS SW-20 Фасовочные весы',
				subcat: 'fas',
				badge: 'on_order',
			},
		],
	},
	{
		id: 'yashiki',
		label: 'Денежные ящики',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'avt', label: 'Автоматические' },
			{ id: 'ruch', label: 'Ручные' },
		],
		products: [
			{
				id: 17,
				name: 'АТОЛ CD-410-B Денежный ящик',
				subcat: 'avt',
				badge: 'on_order',
			},
			{
				id: 18,
				name: 'Posiflex CR-4000 Денежный ящик',
				subcat: 'avt',
				badge: 'on_order',
			},
			{
				id: 19,
				name: 'Mercury CD-330 Денежный ящик',
				subcat: 'ruch',
				badge: 'on_order',
			},
		],
	},
	{
		id: 'bank',
		label: 'Банковское оборудование',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'pin', label: 'Пинпады и терминалы' },
			{ id: 'schot', label: 'Счётчики банкнот' },
			{ id: 'det', label: 'Детекторы валют' },
		],
		products: [
			{
				id: 20,
				name: 'Verifone VX820 Пинпад',
				subcat: 'pin',
				badge: 'on_order',
			},
			{
				id: 21,
				name: 'Ingenico iPP350 Пинпад',
				subcat: 'pin',
				badge: 'on_order',
			},
			{
				id: 22,
				name: 'Dors 1200 Счётчик банкнот',
				subcat: 'schot',
				badge: 'on_order',
			},
			{
				id: 23,
				name: 'Cassida 6650 Счётчик банкнот',
				subcat: 'schot',
				badge: 'on_order',
			},
			{
				id: 24,
				name: 'Dors 100 Детектор валют',
				subcat: 'det',
				badge: 'on_order',
			},
		],
	},
	{
		id: 'avto',
		label: 'Оборудование для автоматизации',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'pos', label: 'POS-системы' },
			{ id: 'disp', label: 'Дисплеи покупателя' },
			{ id: 'print', label: 'Принтеры чеков' },
		],
		products: [
			{
				id: 25,
				name: 'Posiflex PT-6900 POS-система',
				subcat: 'pos',
				badge: 'on_order',
			},
			{
				id: 26,
				name: 'АТОЛ Sigma 10 POS-система',
				subcat: 'pos',
				badge: 'on_order',
			},
			{
				id: 27,
				name: 'Posiflex PD-300 Дисплей покупателя',
				subcat: 'disp',
				badge: 'on_order',
			},
			{
				id: 28,
				name: 'АТОЛ 22v10 Принтер чеков',
				subcat: 'print',
				badge: 'on_order',
			},
			{
				id: 29,
				name: 'Epson TM-T20III Принтер чеков',
				subcat: 'print',
				badge: 'on_order',
			},
		],
	},
	{
		id: 'raskh',
		label: 'Расходные материалы',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'lenta', label: 'Чековая лента' },
			{ id: 'etik', label: 'Этикетки' },
			{ id: 'kras', label: 'Красящие ленты' },
		],
		products: [
			{
				id: 30,
				name: 'Лента чековая 57×40 мм (10 рулонов)',
				subcat: 'lenta',
				badge: 'on_order',
			},
			{
				id: 31,
				name: 'Лента чековая 80×80 мм (10 рулонов)',
				subcat: 'lenta',
				badge: 'on_order',
			},
			{
				id: 32,
				name: 'Этикетки 58×40 мм (1000 шт)',
				subcat: 'etik',
				badge: 'on_order',
			},
			{
				id: 33,
				name: 'Этикетки 40×25 мм (2000 шт)',
				subcat: 'etik',
				badge: 'on_order',
			},
			{
				id: 34,
				name: 'Красящая лента для Zebra GX420',
				subcat: 'kras',
				badge: 'on_order',
			},
		],
	},
]

export default function EquipmentPage() {
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
						Каталог оборудования
					</h1>
				</div>
			</div>

			{/* Main layout */}
			<div className='bg-navy-2 min-h-screen'>
				<div className='max-w-[1200px] mx-auto px-8 md:px-12 py-10'>
					<div className='flex gap-7 items-start'>
						{/* ── Sidebar ── */}
						<aside className='w-[240px] shrink-0 sticky top-[84px]'>
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
									<EquipmentRow key={p.id} product={p} />
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
