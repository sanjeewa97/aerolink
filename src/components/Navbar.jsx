import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-brand">
                    <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                    </svg>
                    <span className="logo-text">AeroLink</span>
                </Link>

                <ul className="nav-menu">
                    <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                    <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link></li>
                    <li><a href="#flights" className="nav-link">Flights</a></li>
                    <li><a href="#services" className="nav-link">Services</a></li>
                    <li><a href="#payment" className="nav-link">Payment</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>

                <div className="nav-language">
                    <button className="language-btn">
                        <span>🌐</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
