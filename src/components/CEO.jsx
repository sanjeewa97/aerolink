import { useNavigate } from 'react-router-dom';
import './CEO.css';

export default function CEO() {
    const navigate = useNavigate();

    return (
        <section className="ceo-home-section" id="about">
            <div className="ceo-home-container">
                <div className="ceo-home-inner">
                    {/* Left: Text */}
                    <div className="ceo-home-text">
                        <span className="ceo-home-tag">Our Leadership</span>
                        <h2>Meet Our Founder &amp; CEO</h2>
                        <div className="ceo-home-quote">
                            "Travel is more than just moving from one destination to another — it's about <strong>trust, precision, and seamless execution</strong>."
                        </div>
                        <p>
                            <strong>K.A.V. Ayeshmantha</strong>, a qualified Civil Engineer and Construction
                            Project Manager, leads AeroLink Travel with a structured, detail-oriented
                            approach — bringing the same precision from large-scale engineering projects
                            into delivering world-class travel management.
                        </p>
                        <div className="ceo-home-details">
                            <div className="ceo-detail-item">
                                <span className="ceo-detail-icon">🎓</span>
                                <span>B.Sc. (Hons) Civil Engineering</span>
                            </div>
                            <div className="ceo-detail-item">
                                <span className="ceo-detail-icon">🏗️</span>
                                <span>Construction Project Manager</span>
                            </div>
                            <div className="ceo-detail-item">
                                <span className="ceo-detail-icon">✈</span>
                                <span>Founder, Aerolink Travel / Travexa Solutions</span>
                            </div>
                        </div>
                        <button className="ceo-home-btn" onClick={() => navigate('/about')}>
                            Read Full Profile
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Right: Card */}
                    <div className="ceo-home-card">
                        <div className="ceo-home-avatar">
                            <span>KA</span>
                            <div className="ceo-avatar-ring" />
                        </div>
                        <h3>K.A.V. Ayeshmantha</h3>
                        <p>Founder &amp; Managing Director</p>
                        <div className="ceo-home-brand">Aerolink Travel · Travexa Solutions</div>
                        <div className="ceo-principles">
                            {[
                                'Process-driven delivery',
                                'Client-focused solutions',
                                'Accuracy & compliance',
                                'Long-term partnerships',
                            ].map((p, i) => (
                                <div className="ceo-principle" key={i}>
                                    <span className="ceo-principle-dot" />
                                    {p}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
