import CaseIcon from '@/src/components/ui/icons/CaseIcon'
import CateringIcon from '@/src/components/ui/icons/CateringIcon'
import ConstructionIcon from '@/src/components/ui/icons/ConstructionIcon'
import LayersIcon from '@/src/components/ui/icons/LayersIcon'
import MedicineIcon from '@/src/components/ui/icons/MedicineIcon'
import NoteIcon from '@/src/components/ui/icons/NoteIcon'

const iconProps = {
	className: 'w-6 h-6',
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 1.6,
	strokeLinecap: 'round' as const,
	strokeLinejoin: 'round' as const,
}

export const CATEGORY_ICONS: Record<string, React.ReactElement> = {
	/* Пищевая промышленность */
	food: <CateringIcon />,

	/* Здравоохранение */
	healthcare: <MedicineIcon />,

	/* Логистика и склад */
	'logistics-warehouse': (
		<svg {...iconProps}>
			<rect x='1' y='3' width='15' height='13' rx='1' />
			<path d='M16 8h4l3 3v5h-7V8z' />
			<circle cx='5.5' cy='18.5' r='2.5' />
			<circle cx='18.5' cy='18.5' r='2.5' />
		</svg>
	),

	/* Строительство */
	construction: <ConstructionIcon />,

	/* Полиграфия */
	printing: (
		<svg {...iconProps}>
			<polyline points='6 9 6 2 18 2 18 9' />
			<path d='M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2' />
			<rect x='6' y='14' width='12' height='8' />
		</svg>
	),

	/* Управление ресурсами */
	'resource-management': <NoteIcon />,

	/* Профессиональные услуги */
	professional: <CaseIcon />,

	/* Торговые предприятия */
	'trade-enterprises': (
		<svg {...iconProps}>
			<path d='M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z' />
			<line x1='3' y1='6' x2='21' y2='6' />
			<path d='M16 10a4 4 0 01-8 0' />
		</svg>
	),

	/* Другие отрасли */
	other: <LayersIcon />,
}
