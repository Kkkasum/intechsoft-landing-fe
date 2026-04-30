export interface IProduct {
	id: number
	name: string
	subcat?: string
	badge?: 'in_stock' | 'on_order'
}

export interface ICategory {
	id: string
	label: string
	subcats: { id: string; label: string }[]
	products: IProduct[]
}
