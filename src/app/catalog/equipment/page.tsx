'use client'

import CTA from '@/src/components/catalog/CTA'
import EquipmentItem from '@/src/components/catalog/EquipmentItem'
import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import { equipmentCatalog } from '@/src/content/catalog'
import { ROUTE_HOME } from '@/src/routes'
import Link from 'next/link'
import { useState } from 'react'

export default function EquipmentPage() {
	const [activeCat, setActiveCat] = useState(equipmentCatalog[0].id)
	const [activeSubcat, setActiveSubcat] = useState('all')

	const category = equipmentCatalog.find(c => c.id === activeCat)!

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
				<div className='max-w-300 mx-auto px-8 md:px-12 py-10'>
					<div className='flex gap-7 items-start'>
						{/* ── Sidebar ── */}
						<aside className='w-60 shrink-0 sticky top-21'>
							<div className='bg-white/4 border border-white/7 rounded-2xl overflow-hidden'>
								<div className='px-5 py-4 border-b border-white/7'>
									<span className='text-[11px] font-semibold uppercase tracking-widest text-[#4D6280]'>
										Категории
									</span>
								</div>
								<ul className='py-2 list-none'>
									{equipmentCatalog.map(cat => (
										<li key={cat.id}>
											<button
												onClick={() =>
													handleCatChange(cat.id)
												}
												className={`w-full text-left px-5 py-3 text-[14px] transition-all duration-150 cursor-pointer ${
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
											className={`px-4 py-2 rounded-xl text-[13px] font-medium border transition-all duration-150 cursor-pointer ${
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
							<div className='grid grid-cols-3 gap-3'>
								{products.map(p => (
									<EquipmentItem key={p.id} product={p} />
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
