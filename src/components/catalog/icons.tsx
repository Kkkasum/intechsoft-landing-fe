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
	food: (
		<svg {...iconProps}>
			<path d='M18 8h1a4 4 0 010 8h-1' />
			<path d='M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z' />
			<line x1='6' y1='1' x2='6' y2='4' />
			<line x1='10' y1='1' x2='10' y2='4' />
			<line x1='14' y1='1' x2='14' y2='4' />
		</svg>
	),

	/* Здравоохранение */
	healthcare: (
		<svg {...iconProps}>
			<path d='M22 12h-4l-3 9L9 3l-3 9H2' />
		</svg>
	),

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
	construction: (
		<svg {...iconProps}>
			<polygon points='3 22 21 22 12 2 3 22' />
			<line x1='12' y1='8' x2='12' y2='14' />
			<line x1='12' y1='17' x2='12.01' y2='17' />
		</svg>
	),

	/* Полиграфия */
	printing: (
		<svg {...iconProps}>
			<polyline points='6 9 6 2 18 2 18 9' />
			<path d='M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2' />
			<rect x='6' y='14' width='12' height='8' />
		</svg>
	),

	/* Управление ресурсами */
	'resource-management': (
		<svg {...iconProps}>
			<circle cx='12' cy='12' r='3' />
			<path d='M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14' />
			<path d='M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07' />
		</svg>
	),

	/* Профессиональные услуги */
	professional: (
		<svg {...iconProps}>
			<path d='M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z' />
			<path d='M16 17V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12' />
		</svg>
	),

	/* Торговые предприятия */
	'trade-enterprises': (
		<svg {...iconProps}>
			<path d='M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z' />
			<line x1='3' y1='6' x2='21' y2='6' />
			<path d='M16 10a4 4 0 01-8 0' />
		</svg>
	),

	/* Другие отрасли */
	other: (
		<svg {...iconProps}>
			<circle cx='12' cy='12' r='10' />
			<line x1='12' y1='8' x2='12' y2='12' />
			<line x1='12' y1='16' x2='12.01' y2='16' />
		</svg>
	),
}
