import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay" />
            <div className="hero-container">
                <div className="hero-content fade-in-up">
                    <span className="hero-badge">✈ Premium Air Ticketing</span>
                    <h1 className="hero-title">
                        Fly <span className="highlight">Conveniently</span>,<br />
                        Travel Smoothly
                    </h1>
                    <p className="hero-subtitle">
                        Your trusted partner for international &amp; domestic flights.
                        Expert travel management with seamless booking and 24/7 support.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/inquiry" className="hero-btn-primary">
                            Make an Inquiry
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/about" className="hero-btn-outline">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats Strip */}
            <div className="hero-stats-strip">
                {[
                    { value: '2019', label: 'Established' },
                    { value: '100+', label: 'Happy Travelers' },
                    { value: '50+', label: 'Destinations' },
                    { value: '24/7', label: 'Support' },
                ].map((s, i) => (
                    <div className="hero-stat" key={i}>
                        <span className="hero-stat-value">{s.value}</span>
                        <span className="hero-stat-label">{s.label}</span>
                    </div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
                Scroll
            </div>
        </section>
    );
}
