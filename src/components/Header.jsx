import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <h2>Mlu Poultry Farm (Pty) Ltd</h2>
        </div>

        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  )
}
