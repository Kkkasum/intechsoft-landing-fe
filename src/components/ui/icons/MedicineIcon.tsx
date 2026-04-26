export default function MedicineIcon({
	width = '24',
	height = '24',
	color = '#3B8EFF',
}: {
	width?: string
	height?: string
	color?: string
}) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke={color}
			strokeWidth={1.6}
			strokeLinecap='round'
			strokeLinejoin='round'
			width={width}
			height={height}
		>
			<path d='M22 12h-4l-3 9L9 3l-3 9H2' />
		</svg>
	)
}
