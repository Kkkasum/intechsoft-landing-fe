import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Торговое оборудование и онлайн-кассы в Махачкале',
	description:
		'Каталог торгового оборудования: онлайн-кассы Эвотор, АТОЛ, Штрих-М, сканеры штрихкодов, принтеры этикеток, терминалы сбора данных. Продажа, подключение и настройка в Махачкале и Пятигорске.',
	alternates: { canonical: '/catalog/equipment' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return children
}
