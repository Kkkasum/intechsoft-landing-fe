import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import Benefits from '@/src/components/store/Benefits'
import CTA from '@/src/components/store/CTA'
import Hero from '@/src/components/store/Hero'
import Solutions from '@/src/components/store/Solutions'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Автоматизация магазина в Махачкале — Интех-Софт',
	description:
		'Автоматизация розничных магазинов на базе 1С: учёт продаж, склад, онлайн-кассы, маркировка. Внедрение и сопровождение в Махачкале.',
}

export default function StorePage() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Solutions />
			<Benefits />
			<CTA />
			<Footer />
		</main>
	)
}
