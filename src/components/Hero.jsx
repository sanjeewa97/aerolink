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
                        <button className="btn btn-secondary">Make an Inquiry</button>
                    </div>
                </div>
                <div className="hero-plane float">
                    <svg viewBox="0 0 200 100" fill="currentColor">
                        <path d="M20,50 L180,30 L185,35 L175,40 L185,45 L180,50 L175,50 L165,55 L160,50 L150,52 L140,48 L130,50 L125,48 L115,50 L110,48 L100,50 L95,48 L85,50 L80,48 L70,50 L65,48 L55,50 L50,48 L40,50 L30,48 L20,50 Z M180,30 L185,25 L190,30 L185,35 Z M175,40 L180,35 L185,40 L180,45 Z" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
