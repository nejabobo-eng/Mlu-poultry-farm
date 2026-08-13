import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSuccess(false)
    setError('')

    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mdovdgok'

      const data = new FormData()
      data.append('name', formData.name)
      data.append('email', formData.email)
      data.append('message', formData.message)

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      })

      const json = await res.json().catch(() => ({}))
      if (res.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        const msg = Array.isArray(json?.errors)
          ? json.errors.map((e) => e.message).join(', ')
          : 'Failed to send message. Please try again later.'
        setError(msg)
      }
    } catch (err) {
      setError('Network error. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="contact">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>Reach out to Mlu Poultry Farm</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Mlu Poultry Farm</h3>
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

          {success && (
            <div className="success-message">Thank you! Your message has been sent.</div>
          )}
          {error && (
            <div className="error-message">{error}</div>
          )}

          <button type="submit" className="btn-submit" disabled={submitting}>
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
