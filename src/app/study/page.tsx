import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import Courses from '@/src/components/study/Courses'
import CTA from '@/src/components/study/CTA'
import Formats from '@/src/components/study/Formats'
import Hero from '@/src/components/study/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Курсы 1С в Махачкале — Интех-Софт',
	description:
		'Очные и дистанционные курсы по 1С в Махачкале. Обучение бухгалтеров, менеджеров и руководителей. Сертификат по окончании. Группы и индивидуальные занятия.',
}

export default function StudyPage() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Courses />
			<Formats />
			<CTA />
			<Footer />
		</main>
	)
}
