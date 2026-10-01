import { blogPosts } from '@/src/content/blog'
import { cases } from '@/src/content/cases'
import { SITE_URL } from '@/src/constants/seo.constants'
import {
	ROUTE_BLOG,
	ROUTE_CASES,
	ROUTE_CATALOG_1C_INDUSTRY,
	ROUTE_CATALOG_1C_PRODUCTS,
	ROUTE_CATALOG_EQUIPMENT,
	ROUTE_DATA,
	ROUTE_ITS,
	ROUTE_STORE,
	ROUTE_STUDY,
} from '@/src/routes'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const pages = [
		'',
		ROUTE_CATALOG_EQUIPMENT,
		ROUTE_CATALOG_1C_PRODUCTS,
		ROUTE_CATALOG_1C_INDUSTRY,
		ROUTE_ITS,
		ROUTE_STORE,
		ROUTE_STUDY,
		ROUTE_BLOG,
		ROUTE_CASES,
		ROUTE_DATA,
	]

	return [
		...pages.map(path => ({
			url: `${SITE_URL}${path}`,
			priority: path === '' ? 1 : 0.8,
		})),
		...blogPosts.map(p => ({
			url: `${SITE_URL}${ROUTE_BLOG}/${p.type}/${p.id}`,
			priority: 0.6,
		})),
		...cases.map(c => ({
			url: `${SITE_URL}${ROUTE_CASES}/${c.id}`,
			priority: 0.6,
		})),
	]
}
