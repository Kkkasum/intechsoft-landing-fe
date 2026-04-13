import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'ИНТЕХСОФТ',
	description:
		'Группа компаний Интех-Софт — официальный представитель фирмы 1С в Махачкале. Торговое оборудование, онлайн-кассы, программные продукты и автоматизация бизнеса.',
	keywords: [
		'1С',
		'онлайн-кассы',
		'торговое оборудование',
		'Махачкала',
		'автоматизация бизнеса',
	],
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;900&family=Golos+Text:wght@400;500;600&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>{children}</body>
		</html>
	)
}
