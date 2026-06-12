import Products from '../components/Products'

const products = [
  { id: 1, name: 'Live Chickens', image: 'https://via.placeholder.com/400x300?text=Live+Chickens', description: 'Healthy live chickens raised with care.' },
  { id: 2, name: 'Fresh Eggs', image: 'https://via.placeholder.com/400x300?text=Fresh+Eggs', description: 'Farm-fresh eggs collected daily.' },
  { id: 3, name: 'Dressed Chickens', image: 'https://via.placeholder.com/400x300?text=Dressed+Chickens', description: 'Ready-to-cook dressed chickens.' },
  { id: 4, name: 'Day-Old Chicks', image: 'https://via.placeholder.com/400x300?text=Day-Old+Chicks', description: 'Day-old chicks for future growth.' }
]

export default function ProductsPage() {
  return (
	<div style={{ padding: '20px' }}>
	  <h1>Products</h1>
	  <Products products={products} />
	</div>
  )
}
