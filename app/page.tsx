import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import Review from '@/components/Review'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Products />
			<Services />
			<WhyUs />
			<Review />
			<CTA />
			<Footer />
		</div>
	)
}
