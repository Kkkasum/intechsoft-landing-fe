export type Product = {
	id: number
	name: string
	subcat?: string
	badge?: 'in_stock' | 'on_order'
}

export type Category = {
	id: string
	label: string
	subcats: { id: string; label: string }[]
	products: Product[]
}
