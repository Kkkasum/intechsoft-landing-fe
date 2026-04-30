export default function FormatIcon({
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
			<rect x='1' y='3' width='14' height='10' rx='1.5' />
			<path d='M4 7h8M4 10h5' />
		</svg>
	)
}
