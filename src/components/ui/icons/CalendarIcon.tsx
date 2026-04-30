export default function CalendarIcon({
	width = '30',
	height = '30',
	color = '#3B8EFF',
}: {
	width?: string
	height?: string
	color?: string
}) {
	return (
		<svg
			viewBox='0 0 16 16'
			fill='none'
			stroke='currentColor'
			strokeWidth={1.6}
			strokeLinecap='round'
			strokeLinejoin='round'
			width={width}
			height={height}
		>
			<rect x='1' y='2' width='14' height='13' rx='2' />
			<path d='M1 6h14M5 1v2M11 1v2' />
		</svg>
	)
}
