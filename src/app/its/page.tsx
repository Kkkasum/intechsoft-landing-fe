import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import Audience from '@/src/components/its/Audience'
import Benefits from '@/src/components/its/Benefits'
import CTA from '@/src/components/its/CTA'
import Hero from '@/src/components/its/Hero'
import Pricing from '@/src/components/its/Pricing'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '1С: ИТС — информационно-технологическое сопровождение | Интех-Софт',
	description:
		'Договор 1С: КП (ИТС) — доступ к официальным ресурсам, регулярные обновления конфигураций, профессиональная поддержка и консультационная линия. Заключить или продлить договор в Махачкале.',
}

export default function ItsPage() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Benefits />
			<Audience />
			<CTA />
			<Pricing />
			<Footer />
		</main>
	)
}
