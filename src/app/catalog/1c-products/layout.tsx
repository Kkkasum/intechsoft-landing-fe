import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Программные продукты 1С — купить в Махачкале',
	description:
		'Каталог программ 1С: 1С:Предприятие, Бухгалтерия, Розница, Управление торговлей, ЗУП. Продажа лицензий, внедрение и сопровождение в Махачкале, Дагестане и Пятигорске.',
	alternates: { canonical: '/catalog/1c-products' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return children
}
