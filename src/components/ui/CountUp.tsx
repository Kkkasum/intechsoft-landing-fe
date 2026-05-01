'use client'

import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 1500, start = false) {
	const [value, setValue] = useState(0)

	useEffect(() => {
		if (!start) return
		let startTime: number | null = null
		const step = (timestamp: number) => {
			if (!startTime) startTime = timestamp
			const progress = Math.min((timestamp - startTime) / duration, 1)
			// easeOutQuart
			const eased = 1 - Math.pow(1 - progress, 4)
			setValue(Math.floor(eased * target))
			if (progress < 1) requestAnimationFrame(step)
		}
		requestAnimationFrame(step)
	}, [start, target, duration])

	return value
}

// Парсим число и «обёртки» вокруг него: префикс (>) и суффикс (лет, мин, …)
function parseMetric(raw: string): {
	prefix: string
	num: number
	suffix: string
} {
	const match = raw.match(/^([^0-9]*)(\d[\d\s]*)(.*)$/)
	if (!match) return { prefix: '', num: 0, suffix: raw }
	return {
		prefix: match[1],
		num: parseInt(match[2].replace(/\s/g, ''), 10),
		suffix: match[3],
	}
}

interface IProps {
	label: string
	value: string
	index: number
	total: number
}

export function CountUp({ label, value, index, total }: IProps) {
	const ref = useRef<HTMLDivElement>(null)
	const [started, setStarted] = useState(false)
	const { prefix, num, suffix } = parseMetric(value)
	const animated = useCountUp(num, 1400, started)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setStarted(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.5 },
		)
		observer.observe(el)
		return () => observer.disconnect()
	}, [])

	const displayValue = `${prefix}${animated.toLocaleString('ru-RU')} ${suffix}`

	return (
		<div
			ref={ref}
			className={`flex justify-between items-baseline py-4 ${
				index < total - 1 ? 'border-b border-white/7' : ''
			}`}
		>
			<span className='text-sm text-[#8B9EB7]'>{label}</span>
			<span className='font-display text-xl font-bold text-brand-blue-light'>
				{displayValue}
			</span>
		</div>
	)
}
