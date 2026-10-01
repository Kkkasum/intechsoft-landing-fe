import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Отраслевые решения 1С — внедрение в Махачкале',
	description:
		'Отраслевые решения на платформе 1С для образования, медицины, строительства, общепита и торговли. Внедрение, настройка и поддержка в Махачкале и Дагестане.',
	alternates: { canonical: '/catalog/1c-industry' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return children
}
