import Footer from '@/src/components/Footer'
import About from '@/src/components/home/About'
import CTA from '@/src/components/home/CTA'
import Faq from '@/src/components/home/Faq'
import Hero from '@/src/components/home/Hero'
import Products from '@/src/components/home/Products'
import Review from '@/src/components/home/Review'
import Services from '@/src/components/home/Services'
import Navbar from '@/src/components/Navbar'

export default function HomePage() {
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
