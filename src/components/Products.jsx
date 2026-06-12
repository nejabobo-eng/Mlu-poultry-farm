export default function Products({ products = [] }) {
  return (
    <section className="products">
      <div className="section-header">
        <h2>Our Products</h2>
        <p>Simple, fresh, and traceable poultry products</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image || 'https://via.placeholder.com/400x300?text=Image+Placeholder'} alt={product.name} loading="lazy" />
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
