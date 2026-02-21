import { useNavigate } from 'react-router-dom';
import './AboutPage.css';

const stats = [
    { value: '2019', label: 'Established' },
    { value: '5+', label: 'Years Experience' },
    { value: '100+', label: 'Happy Travelers' },
    { value: '24/7', label: 'Customer Support' },
];

const services = [
    {
        icon: '✈',
        title: 'Air Ticketing Solutions',
        items: [
            'Domestic & international flight bookings',
            'Competitive airfare sourcing',
            'Ticket issuance, re-issuance & amendments',
            'Group and bulk travel bookings',
        ],
    },
    {
        icon: '🏢',
        title: 'Corporate Travel Management',
        items: [
            'Comprehensive corporate travel solutions',
            'Policy-based airfare & cost optimization',
            'Dedicated business traveler support',
            'Travel planning tailored to your company',
        ],
    },
    {
        icon: '🌍',
        title: 'Travel Support & Assistance',
        items: [
            'Customized holiday packages',
            'Hotel bookings & accommodation',
            'Airport transfers & ground arrangements',
            'Visa assistance & travel documentation',
        ],
    },
];

const values = [
    { icon: '🎯', title: 'Customer-Centric', desc: 'Personalized solutions crafted for every unique traveler' },
    { icon: '🛡️', title: 'Reliable', desc: 'Consistent, transparent and professional service always' },
    { icon: '💡', title: 'Experienced Team', desc: 'Travel professionals with years of industry expertise' },
    { icon: '💎', title: 'Best Value', desc: 'Trusted airline partnerships delivering competitive pricing' },
    { icon: '🚀', title: 'Flexible & Scalable', desc: 'Solutions that grow alongside your travel needs' },
];

export default function AboutPage() {
    const navigate = useNavigate();

    return (
        <div className="about-page">

            {/* Hero Banner */}
            <section className="about-hero">
                <div className="about-hero-overlay" />
                <button className="about-back-btn" onClick={() => navigate('/')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
                <div className="about-hero-content">
                    <span className="about-hero-badge">✈ Since 2019</span>
                    <h1>About Aerolink Travel</h1>
                    <p>Premium Air Ticketing &amp; Travel Management<br />— A Brand of Travexa Solutions —</p>
                </div>
                <div className="about-hero-wave">
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                        <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#f8f9fa" />
                    </svg>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="about-stats">
                {stats.map((s, i) => (
                    <div className="stat-card" key={i}>
                        <span className="stat-value">{s.value}</span>
                        <span className="stat-label">{s.label}</span>
                    </div>
                ))}
            </section>

            <div className="about-main">

                {/* Who We Are */}
                <section className="about-intro">
                    <div className="section-tag">Who We Are</div>
                    <h2>Your Trusted Travel Partner</h2>
                    <p>
                        Established in <strong>2019</strong>, Aerolink Travel is your trusted partner in delivering
                        exceptional travel services for both <strong>leisure and corporate travelers</strong>.
                        Operating under <strong>Travexa Solutions</strong>, we specialize in providing
                        end-to-end travel solutions designed to make your journeys smooth, efficient, and truly memorable.
                    </p>
                </section>

                {/* Services Grid */}
                <section className="about-services">
                    <div className="section-tag">What We Offer</div>
                    <h2>Our Services</h2>
                    <div className="services-grid">
                        {services.map((svc, i) => (
                            <div className="service-card" key={i}>
                                <div className="service-icon">{svc.icon}</div>
                                <h3>{svc.title}</h3>
                                <ul>
                                    {svc.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="about-values">
                    <div className="values-inner">
                        <div className="section-tag light">Why Choose Us</div>
                        <h2>Built on Trust &amp; Excellence</h2>
                        <div className="values-grid">
                            {values.map((v, i) => (
                                <div className="value-card" key={i}>
                                    <span className="value-icon">{v.icon}</span>
                                    <h4>{v.title}</h4>
                                    <p>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="about-mv">
                    <div className="mv-card mission">
                        <div className="mv-icon">🎯</div>
                        <h3>Our Mission</h3>
                        <p>
                            To deliver <strong>efficient, transparent, and value-driven</strong> air ticketing
                            and travel services while maintaining the highest standards of
                            <strong> professionalism and customer care</strong>.
                        </p>
                    </div>
                    <div className="mv-divider">
                        <div className="mv-divider-line" />
                        <span>✦</span>
                        <div className="mv-divider-line" />
                    </div>
                    <div className="mv-card vision">
                        <div className="mv-icon">🌟</div>
                        <h3>Our Vision</h3>
                        <p>
                            To be recognized as a <strong>trusted and progressive</strong> travel brand, known
                            for <strong>service excellence</strong>, <strong>operational efficiency</strong>,
                            and <strong>long-term partnerships</strong>.
                        </p>
                    </div>
                </section>

                {/* CEO Section */}
                <section className="about-ceo">
                    <div className="section-tag">Leadership</div>
                    <h2>CEO's Message</h2>

                    <div className="ceo-layout">
                        <div className="ceo-profile-card">
                            <div className="ceo-avatar">
                                <span>KA</span>
                            </div>
                            <div className="ceo-info">
                                <h4>K.A.V. Ayeshmantha</h4>
                                <span className="ceo-role">Founder &amp; Managing Director</span>
                                <div className="ceo-badges">
                                    <span>B.Sc. Civil Engineering</span>
                                    <span>Project Manager</span>
                                </div>
                            </div>
                        </div>

                        <div className="ceo-quotes">
                            <blockquote>
                                "At Aerolink Travel, we believe that <strong>travel is more than just moving from one
                                    destination to another</strong> — it is about trust, precision, and seamless execution.
                                Our goal is to <strong>simplify travel bookings</strong>, ensuring our clients
                                experience reliable and timely solutions."
                            </blockquote>
                            <blockquote>
                                "With a <strong>professional background in engineering and project management</strong>,
                                I bring a structured, detail-oriented approach to the travel industry — with
                                <strong> strong systems, clear accountability</strong>, and a commitment to service excellence."
                            </blockquote>
                            <div className="ceo-signature-block">
                                <div className="ceo-sig-line" />
                                <p><strong>K.A.V. Ayeshmantha</strong></p>
                                <p>Founder / Managing Director, Aerolink Travel</p>
                                <p className="ceo-brand">A Brand of Travexa Solutions</p>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Principles */}
                    <div className="leadership-principles">
                        <h4>Under His Leadership, Aerolink Operates With:</h4>
                        <div className="principles-grid">
                            {['Process-driven service delivery', 'Accuracy and compliance', 'Client-focused solutions', 'Long-term business relationships'].map((p, i) => (
                                <div className="principle-item" key={i}>
                                    <span className="principle-num">0{i + 1}</span>
                                    <span>{p}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="about-cta">
                    <div className="cta-glow" />
                    <span className="about-hero-badge light">✈ Ready to Fly?</span>
                    <h2>Plan Your Next Journey With Us</h2>
                    <p>Contact Aerolink Travel today and experience hassle-free, premium travel solutions.</p>
                    <button className="cta-btn" onClick={() => navigate('/inquiry')}>
                        Make an Inquiry
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </section>

            </div>
        </div>
    );
}
