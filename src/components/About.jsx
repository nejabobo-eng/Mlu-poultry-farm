export default function About() {
  return (
    <section className="about">
      <div className="section-header">
        <h2>About Mlu Poultry Farm (Pty) Ltd</h2>
      </div>

      <div className="about-content">
        <div className="about-story">
          <h3>Our Story</h3>
          <p>
            Mlu Poultry Farm (Pty) Ltd is dedicated to producing quality poultry products while maintaining high standards of animal care and customer satisfaction. We strive to serve our customers with reliable products and professional service.
          </p>
        </div>

        <div className="about-image" style={{ marginTop: '20px' }}>
          <img src="https://via.placeholder.com/1200x600?text=About+Image+Placeholder" alt="About Mlu Poultry Farm" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </section>
  )
}
