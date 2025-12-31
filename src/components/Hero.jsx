import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content fade-in-up">
                    <h1 className="hero-title">
                        Fly Conveniently, Travel Smoothly
                    </h1>
                    <p className="hero-subtitle">
                        Book your flights with ease and confidence
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">Book a Flight</button>
                        <Link to="/inquiry" className="btn btn-secondary">Make an Inquiry</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
