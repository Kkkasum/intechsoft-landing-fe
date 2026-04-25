type Props = {
	content: string
}

/**
 * Lightweight markdown → JSX renderer.
 * Supports: h1-h3, bold, italic, inline code, code blocks,
 * unordered lists, ordered lists, blockquotes, horizontal rules,
 * paragraphs, and simple table (pipe-separated).
 */
export default function MdRenderer({ content }: Props) {
	const lines = content.split('\n')
	const elements: React.ReactNode[] = []
	let i = 0

	const renderInline = (text: string): React.ReactNode => {
		const parts: React.ReactNode[] = []
		// bold + italic combined, then bold, then italic, then inline code
		const pattern =
			/(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|__(.+?)__|_(.+?)_|\*(.+?)\*|`(.+?)`)/g
		let last = 0
		let m: RegExpExecArray | null
		let key = 0

		while ((m = pattern.exec(text)) !== null) {
			if (m.index > last) parts.push(text.slice(last, m.index))
			if (m[2])
				parts.push(
					<strong key={key++}>
						<em>{m[2]}</em>
					</strong>,
				)
			else if (m[3]) parts.push(<strong key={key++}>{m[3]}</strong>)
			else if (m[4]) parts.push(<strong key={key++}>{m[4]}</strong>)
			else if (m[5]) parts.push(<em key={key++}>{m[5]}</em>)
			else if (m[6]) parts.push(<em key={key++}>{m[6]}</em>)
			else if (m[7])
				parts.push(
					<code
						key={key++}
						className='px-1.5 py-0.5 rounded bg-white/8 text-brand-blue-light text-[0.88em] font-mono'
					>
						{m[7]}
					</code>,
				)
			last = m.index + m[0].length
		}
		if (last < text.length) parts.push(text.slice(last))
		return parts.length === 1 ? parts[0] : parts
	}

	while (i < lines.length) {
		const line = lines[i]

		// Code block
		if (line.startsWith('```')) {
			const codeLines: string[] = []
			i++
			while (i < lines.length && !lines[i].startsWith('```')) {
				codeLines.push(lines[i])
				i++
			}
			elements.push(
				<pre
					key={i}
					className='my-6 p-5 rounded-xl bg-navy-3 border border-white/7 overflow-x-auto text-[13px] font-mono text-[#8B9EB7] leading-relaxed'
				>
					<code>{codeLines.join('\n')}</code>
				</pre>,
			)
			i++
			continue
		}

		// Table (pipe syntax)
		if (
			line.includes('|') &&
			i + 1 < lines.length &&
			lines[i + 1].includes('---')
		) {
			const headers = line
				.split('|')
				.map(c => c.trim())
				.filter(Boolean)
			i += 2 // skip header row and separator
			const rows: string[][] = []
			while (i < lines.length && lines[i].includes('|')) {
				rows.push(
					lines[i]
						.split('|')
						.map(c => c.trim())
						.filter(Boolean),
				)
				i++
			}
			elements.push(
				<div
					key={i}
					className='my-6 overflow-x-auto rounded-xl border border-white/7'
				>
					<table className='w-full text-[13px]'>
						<thead>
							<tr className='border-b border-white/7 bg-white/4'>
								{headers.map((h, hi) => (
									<th
										key={hi}
										className='px-4 py-3 text-left text-[#EEF2FF] font-semibold'
									>
										{renderInline(h)}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{rows.map((row, ri) => (
								<tr
									key={ri}
									className='border-b border-white/5 hover:bg-white/3 transition-colors'
								>
									{row.map((cell, ci) => (
										<td
											key={ci}
											className='px-4 py-3 text-[#8B9EB7]'
										>
											{renderInline(cell)}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>,
			)
			continue
		}

		// Headings
		if (line.startsWith('### ')) {
			elements.push(
				<h3
					key={i}
					className='font-display text-[17px] font-semibold text-[#EEF2FF] mt-8 mb-3 leading-snug'
				>
					{renderInline(line.slice(4))}
				</h3>,
			)
			i++
			continue
		}
		if (line.startsWith('## ')) {
			elements.push(
				<h2
					key={i}
					className='font-display text-[22px] font-bold text-[#EEF2FF] mt-10 mb-4 leading-snug'
				>
					{renderInline(line.slice(3))}
				</h2>,
			)
			i++
			continue
		}
		if (line.startsWith('# ')) {
			elements.push(
				<h1
					key={i}
					className='font-display text-[clamp(24px,3vw,36px)] font-bold text-[#EEF2FF] mb-6 leading-tight'
				>
					{renderInline(line.slice(2))}
				</h1>,
			)
			i++
			continue
		}

		// Horizontal rule
		if (line.match(/^(-{3,}|\*{3,}|_{3,})$/)) {
			elements.push(<hr key={i} className='my-8 border-white/10' />)
			i++
			continue
		}

		// Blockquote
		if (line.startsWith('> ')) {
			elements.push(
				<blockquote
					key={i}
					className='my-5 pl-4 border-l-2 border-brand-blue/50 text-[#8B9EB7] italic text-[15px] leading-relaxed'
				>
					{renderInline(line.slice(2))}
				</blockquote>,
			)
			i++
			continue
		}

		// Unordered list
		if (line.startsWith('- ') || line.startsWith('* ')) {
			const items: string[] = []
			while (
				i < lines.length &&
				(lines[i].startsWith('- ') || lines[i].startsWith('* '))
			) {
				items.push(lines[i].slice(2))
				i++
			}
			elements.push(
				<ul key={i} className='my-4 flex flex-col gap-2'>
					{items.map((item, idx) => (
						<li
							key={idx}
							className='flex items-start gap-2.5 text-[15px] text-[#8B9EB7] leading-relaxed'
						>
							<span className='mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue-light shrink-0' />
							{renderInline(item)}
						</li>
					))}
				</ul>,
			)
			continue
		}

		// Ordered list
		if (/^\d+\.\s/.test(line)) {
			const items: string[] = []
			while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
				items.push(lines[i].replace(/^\d+\.\s/, ''))
				i++
			}
			elements.push(
				<ol key={i} className='my-4 flex flex-col gap-2 list-none'>
					{items.map((item, idx) => (
						<li
							key={idx}
							className='flex items-start gap-3 text-[15px] text-[#8B9EB7] leading-relaxed'
						>
							<span className='shrink-0 w-6 h-6 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-[11px] font-semibold text-brand-blue-light mt-0.5'>
								{idx + 1}
							</span>
							{renderInline(item)}
						</li>
					))}
				</ol>,
			)
			continue
		}

		// Empty line
		if (line.trim() === '') {
			i++
			continue
		}

		// Paragraph
		elements.push(
			<p
				key={i}
				className='text-[15px] text-[#8B9EB7] leading-relaxed my-3'
			>
				{renderInline(line)}
			</p>,
		)
		i++
	}

	return <div className='prose-custom'>{elements}</div>
}
