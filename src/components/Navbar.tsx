'use client'

import LogoImage from '@/src/assets/logo.png'
import { ROUTE_HOME } from '@/src/routes'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
	{ href: '#products', label: 'Продукты' },
	{ href: '#services', label: 'Услуги' },
	{ href: '#about', label: 'О компании' },
	{ href: '#contacts', label: 'Контакты' },
]

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 h-17 bg-navy/80 backdrop-blur-xl border-b border-white/7'>
			{/* Logo */}
			<Link
				href={ROUTE_HOME}
				className='flex items-center gap-3 no-underline'
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
				<div className='font-display text-[13px] font-semibold text-[#EEF2FF] leading-tight tracking-wide'>
					ИНТЕХ<span className='text-brand-blue-light'>-</span>СОФТ
					<br />
					<span className='font-body text-[10px] text-[#8B9EB7] font-normal tracking-widest'>
						Группа компаний
					</span>
				</div>
			</Link>

			{/* Desktop nav */}
			<ul className='hidden md:flex gap-1 list-none'>
				{navLinks.map(l => (
					<li key={l.href}>
						<Link
							href={l.href}
							className='text-[#8B9EB7] text-sm font-medium px-4 py-1.5 rounded-lg hover:text-[#EEF2FF] hover:bg-white/7 transition-all duration-200 no-underline'
						>
							{l.label}
						</Link>
					</li>
				))}
			</ul>

			{/* Right */}
			<div className='hidden md:flex items-center gap-4'>
				<a
					href='tel:+79634208232'
					className='text-[#8B9EB7] text-sm font-medium hover:text-[#EEF2FF] transition-colors no-underline'
				>
					+7 (963) 420-82-32
				</a>
				<Link
					href='#contacts'
					className='px-5 py-2 rounded-lg bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-light hover:-translate-y-px transition-all duration-200 no-underline'
				>
					Связаться
				</Link>
			</div>

			{/* Mobile burger */}
			<button
				className='md:hidden flex flex-col gap-1.5 p-2'
				onClick={() => setMenuOpen(v => !v)}
				aria-label='Меню'
			>
				<span
					className={`block w-5 h-0.5 bg-[#EEF2FF] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
				/>
				<span
					className={`block w-5 h-0.5 bg-[#EEF2FF] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
				/>
				<span
					className={`block w-5 h-0.5 bg-[#EEF2FF] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
				/>
			</button>

			{/* Mobile drawer */}
			{menuOpen && (
				<div className='md:hidden absolute top-17 left-0 right-0 bg-navy-2 border-b border-white/7 px-8 py-6 flex flex-col gap-4'>
					{navLinks.map(l => (
						<Link
							key={l.href}
							href={l.href}
							onClick={() => setMenuOpen(false)}
							className='text-[#8B9EB7] text-sm font-medium hover:text-[#EEF2FF] transition-colors no-underline'
						>
							{l.label}
						</Link>
					))}
					<Link
						href='#contacts'
						onClick={() => setMenuOpen(false)}
						className='mt-2 px-5 py-2.5 rounded-lg bg-brand-blue text-white text-sm font-semibold text-center no-underline'
					>
						Связаться
					</Link>
				</div>
			)}
		</nav>
	)
}
