import Hero from '../components/Hero'
import Products from '../components/Products'
import Contact from '../components/Contact'
import About from '../components/About'
import Footer from '../components/Footer'
import '../styles/Header.css'

const products = [
  { id: 1, name: 'Live Chickens', image: 'https://via.placeholder.com/400x300?text=Live+Chickens', description: 'Healthy live chickens raised with care.' },
  { id: 2, name: 'Fresh Eggs', image: 'https://via.placeholder.com/400x300?text=Fresh+Eggs', description: 'Farm-fresh eggs collected daily.' },
  { id: 3, name: 'Dressed Chickens', image: 'https://via.placeholder.com/400x300?text=Dressed+Chickens', description: 'Ready-to-cook dressed chickens.' }
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
