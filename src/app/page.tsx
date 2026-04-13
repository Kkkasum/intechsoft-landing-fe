import About from '@/src/components/About'
import CTA from '@/src/components/CTA'
import Faq from '@/src/components/Faq'
import Footer from '@/src/components/Footer'
import Hero from '@/src/components/Hero'
import Navbar from '@/src/components/Navbar'
import Products from '@/src/components/Products'
import Review from '@/src/components/Review'
import Services from '@/src/components/Services'

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Products />
			<Services />
			<About />
			<Review />
			<Faq />
			<CTA />
			<Footer />
		</div>
	)
}
