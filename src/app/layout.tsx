import { JsonLd } from '@/src/components/JsonLd'
import { YandexMetrics } from '@/src/components/YandexMetrics'
import {
	SITE_DESCRIPTION,
	SITE_NAME,
	SITE_URL,
	YANDEX_VERIFICATION,
} from '@/src/constants/seo.constants'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default:
			'ИнтехСофт — 1С, онлайн-кассы и автоматизация бизнеса в Махачкале',
		template: `%s — ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	applicationName: SITE_NAME,
	keywords: [
		'1С Махачкала',
		'внедрение 1С',
		'1С Пятигорск',
		'франчайзи 1С',
		'1С:ИТС',
		'онлайн-кассы',
		'торговое оборудование',
		'автоматизация бизнеса',
		'автоматизация магазина',
		'iiko Дагестан',
		'маркировка Честный Знак',
		'курсы 1С',
		'Дагестан',
	],
	alternates: { canonical: '/' },
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
	},
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		siteName: SITE_NAME,
		url: '/',
		title: 'ИнтехСофт — 1С, онлайн-кассы и автоматизация бизнеса в Махачкале',
		description: SITE_DESCRIPTION,
	},
	twitter: {
		card: 'summary',
		title: 'ИнтехСофт — 1С, онлайн-кассы и автоматизация бизнеса',
		description: SITE_DESCRIPTION,
	},
	robots: { index: true, follow: true },
	verification: { yandex: YANDEX_VERIFICATION || undefined },
	category: 'business',
	other: {
		'geo.region': 'RU-DA',
		'geo.placename': 'Махачкала',
		'geo.position': '42.9849;47.5047',
		ICBM: '42.9849, 47.5047',
	},
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
			<body>
				<JsonLd />
				{children}
				<YandexMetrics />
			</body>
		</html>
	)
}
