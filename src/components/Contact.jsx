import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect Formspree endpoint later
    alert('Form submission will be connected later. Thank you!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>Reach out to Mlu Poultry Farm (Pty) Ltd</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Mlu Poultry Farm (Pty) Ltd</h3>
          <p className="contact-description">We are happy to answer enquiries about our products and services.</p>

          <div className="contact-details">
            <div className="contact-item">
              <h4>Phone</h4>
              <p>062 247 5462</p>
            </div>

            <div className="contact-item">
              <h4>Email</h4>
              <p>nejabobo@gmail.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}
