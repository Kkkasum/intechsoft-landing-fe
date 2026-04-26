export default function MonitorIcon({
	width = '24',
	height = '24',
}: {
	width?: string
	height?: string
}) {
	return (
		<svg
			viewBox='0 0 24 24'
			width={width}
			height={height}
			fill='none'
			stroke='currentColor'
			strokeWidth={1.4}
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<rect x='2' y='3' width='20' height='14' rx='2' />
			<path d='M8 21h8M12 17v4' />
		</svg>
	)
}
