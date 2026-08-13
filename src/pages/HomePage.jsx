import Hero from '../components/Hero'
import Products from '../components/Products'
import Contact from '../components/Contact'
import About from '../components/About'
import Footer from '../components/Footer'
import '../styles/Header.css'

const products = [
  {
    id: 1,
    name: 'Broiler Chickens',
    image: '/images/products/broiler-chickens/broiler-chickens-01.png',
    description: 'Fresh quality broilers for your table.'
  },
  {
    id: 2,
    name: 'Day-Old Chicks',
    image: '/images/products/day-old-chicks/day-old-chicks-01.jpg',
    description: 'Healthy broiler chicks for farmers.'
  },
  {
    id: 3,
    name: 'Fertile Eggs',
    image: '/images/products/fertile-eggs/fertile-eggs-01.jpg',
    description: 'Quality fertile eggs for incubation.'
  },
  {
    id: 4,
    name: 'Organic Fertilizer',
    image: '/images/products/organic-fertilizer/organic-fertilizer-01.webp',
    description: 'Poultry manure for agricultural use.'
  }
]

export default function HomePage() {
  return (
    <div className="app">
      <div style={{ paddingTop: '70px' }}>
        <Hero />
        <section className="why-choose-us">
          <h2>Why Choose Us</h2>
          <div className="features">
            <div>Quality Products</div>
            <div>Reliable Service</div>
            <div>Customer Focused</div>
          </div>
        </section>

        <Products products={products} />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
