import closingBg from '@/src/assets/events/closing-bg.webp'
import heroBg from '@/src/assets/events/hero-bg.webp'
import topicFsbu from '@/src/assets/events/topic-fsbu.webp'
import topicReporting from '@/src/assets/events/topic-reporting.webp'
import topicTaxes from '@/src/assets/events/topic-taxes.webp'
import type { StaticImageData } from 'next/image'

export type EventLandingTopic = {
	titleLines: string[]
	image?: StaticImageData
	imageAlt?: string
	icon?: 'qr'
}

export type EventLanding = {
	badge: string
	titleTop: string
	titleBottom: string
	titleAccent: string
	lead: string
	note: string
	registrationUrl: string
	registrationLabel: string
	heroImage: StaticImageData
	closingImage: StaticImageData
	aboutTitle: string
	aboutText: string
	topicsTitle: string
	topics: EventLandingTopic[]
	partnerTitle: string
	partnerHighlight: string
	partnerText: string
	statValue: string
	statLabel: string
	closingTitle: string
	closingMeta: {
		date: string
		format: string
		time: string
	}
}

export const eventLandings: Record<string, EventLanding> = {
	'edinyi-seminar-1c-2026': {
		badge: 'ОНЛАЙН · БЕСПЛАТНО',
		titleTop: 'Единый',
		titleBottom: 'семинар',
		titleAccent: '1С',
		lead: 'Для бухгалтеров и руководителей',
		note: 'Фирма «1С» совместно с ИНТЕХСОФТ',
		registrationUrl: 'https://es.1c.ru/register?utm_source=link_partners#MzuPYW5rFs',
		registrationLabel: 'Зарегистрироваться бесплатно',
		heroImage: heroBg,
		closingImage: closingBg,
		aboutTitle: 'О семинаре',
		aboutText:
			'Эксперты ФНС и фирмы «1С» расскажут о важных изменениях в учёте, налогах и отчётности и их поддержке в 1С.',
		topicsTitle: 'Что обсудим',
		topics: [
			{
				titleLines: ['Налоги', 'и НДС'],
				image: topicTaxes,
				imageAlt:
					'Стеклянная плитка с логотипом 1С на синем фоне',
			},
			{
				titleLines: ['Отчётность', '2026–2027'],
				image: topicReporting,
				imageAlt: 'Трёхмерная иллюстрация базы данных',
			},
			{
				titleLines: ['ФСБУ: доходы', 'и расходы'],
				image: topicFsbu,
				imageAlt: 'Трёхмерная иллюстрация календаря',
			},
			{
				titleLines: ['Маркировка', 'и ЭДО'],
				icon: 'qr',
			},
		],
		partnerTitle: 'Ваш партнёр —',
		partnerHighlight: 'ИНТЕХСОФТ',
		partnerText:
			'С 1996 года помогаем компаниям внедрять, настраивать и сопровождать решения 1С.',
		statValue: '30',
		statLabel: 'лет опыта',
		closingTitle: 'Участвуйте бесплатно',
		closingMeta: {
			date: '16 декабря',
			format: 'Онлайн',
			time: '10:00 МСК',
		},
	},
}

export function getEventLanding(id: string): EventLanding | undefined {
	return eventLandings[id]
}
