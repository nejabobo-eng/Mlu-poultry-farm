export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector('.products')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('.contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-image" style={{ backgroundImage: "url('/images/hero/hero-broilers-01.png')" }}></div>

      <div className="hero-content">
        <img src="/images/logo/mlu-poultry-farm-logo.png" alt="Mlu Poultry Farm" style={{ height: 80, marginBottom: 12 }} />
        <h1>Mlu Poultry Farm</h1>
        <h2>Quality Poultry Products You Can Trust</h2>

        <p className="hero-intro">
          We are committed to supplying quality poultry products while maintaining high standards of care, hygiene, and customer service.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={scrollToProducts}>View Products</button>
          <button className="btn-secondary" onClick={scrollToContact}>Contact Us</button>
        </div>
      </div>
    </section>
  )
}
