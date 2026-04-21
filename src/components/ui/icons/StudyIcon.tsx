export default function StudyIcon({
	width = '36',
	height = '24',
	color = '#3B8EFF',
}: {
	width?: string
	height?: string
	color?: string
}) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			stroke={color}
			strokeWidth={1.6}
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M12 3L2 8l10 5 10-5-10-5z' />
			<path d='M6 10.5v5.5a6 6 0 0 0 12 0v-5.5' />
			<line x1='2' y1='8' x2='2' y2='15' />
			<circle cx='2' cy='15.5' r='0.8' fill={color} stroke='none' />
		</svg>
	)
}
