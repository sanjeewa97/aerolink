import './Features.css';

const features = [
    {
        icon: '✈',
        title: 'Easy Booking',
        description: 'Quick, simple reservations for domestic and international flights with instant confirmation.',
        tag: 'Fast',
    },
    {
        icon: '💬',
        title: '24/7 Support',
        description: 'Our expert travel team is always available to assist you at any hour of the day.',
        tag: 'Always On',
    },
    {
        icon: '🔒',
        title: 'Secure Payments',
        description: 'Industry-standard encryption and multiple trusted payment options for complete safety.',
        tag: 'Safe',
    },
    {
        icon: '🎯',
        title: 'Tailored Travel',
        description: 'Personalized flight solutions crafted to match your exact preferences and budget.',
        tag: 'Custom',
    },
];

export default function Features() {
    return (
        <section className="features-section" id="services">
            <div className="features-container">
                <div className="features-header">
                    <span className="features-tag">Why AeroLink</span>
                    <h2>Travel Smarter with Us</h2>
                    <p>Everything you need for a seamless travel experience, from booking to boarding.</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="feature-icon-wrap">
                                <span className="feature-emoji">{feature.icon}</span>
                            </div>
                            <div className="feature-tag">{feature.tag}</div>
                            <h4 className="feature-title">{feature.title}</h4>
                            <p className="feature-description">{feature.description}</p>
                            <div className="feature-glow" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
