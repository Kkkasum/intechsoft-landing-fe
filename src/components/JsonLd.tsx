import {
	OFFICES,
	ORGANIZATION_ID,
	SERVICES,
	SITE_DESCRIPTION,
	SITE_NAME,
	SITE_URL,
} from '@/src/constants/seo.constants'

const organization = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	'@id': ORGANIZATION_ID,
	name: 'ООО «Интех-Софт»',
	alternateName: SITE_NAME,
	url: SITE_URL,
	logo: `${SITE_URL}/favicon.ico`,
	email: 'info@intechsoft.ru',
	description: SITE_DESCRIPTION,
	foundingDate: '1996',
	taxID: '0561045110',
	areaServed: [
		{ '@type': 'City', name: 'Махачкала' },
		{ '@type': 'City', name: 'Пятигорск' },
		{ '@type': 'AdministrativeArea', name: 'Республика Дагестан' },
	],
	address: OFFICES.map(o => ({
		'@type': 'PostalAddress',
		addressCountry: 'RU',
		addressRegion: o.region,
		addressLocality: o.city,
		streetAddress: o.street,
	})),
	makesOffer: SERVICES.map(name => ({
		'@type': 'Offer',
		itemOffered: { '@type': 'Service', name },
	})),
}

export function JsonLd() {
	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(organization).replace(/</g, '\\u003c'),
			}}
		/>
	)
}
