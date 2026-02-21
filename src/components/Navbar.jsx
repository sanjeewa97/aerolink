import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => { setMenuOpen(false); }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
                    <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                    </svg>
                    <span className="logo-text">AeroLink</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                    <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link></li>
                    <li><a href="#services" className="nav-link">Services</a></li>
                    <li><a href="#payment" className="nav-link">Payment</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                    <li><Link to="/inquiry" className="nav-link nav-cta">Make Inquiry</Link></li>
                </ul>

                {/* Hamburger Button */}
                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
                <div className="mobile-menu-inner">
                    <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                        <span>🏠</span> Home
                    </Link>
                    <Link to="/about" className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                        <span>ℹ️</span> About Us
                    </Link>
                    <a href="#services" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                        <span>✈</span> Services
                    </a>
                    <a href="#payment" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                        <span>💳</span> Payment
                    </a>
                    <a href="#contact" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                        <span>📞</span> Contact
                    </a>
                    <Link to="/inquiry" className="mobile-nav-cta">
                        Make an Inquiry →
                    </Link>
                </div>
            </div>

            {/* Backdrop */}
            {menuOpen && (
                <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />
            )}
        </nav>
    );
}
