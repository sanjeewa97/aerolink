import { Link } from 'react-router-dom';
import './PaymentOptions.css';

const methods = [
    {
        name: 'Visa',
        icon: '/visa-logo.png',
        tag: 'Credit & Debit',
        isImg: true,
    },
    {
        name: 'Mastercard',
        icon: '/mastercard-logo.png',
        tag: 'Credit & Debit',
        isImg: true,
    },
    {
        name: 'PayPal',
        icon: '/paypal-logo.png',
        tag: 'Online Wallet',
        isImg: true,
    },
    {
        name: 'Bank Transfer',
        tag: 'Direct Transfer',
        isImg: false,
        svg: (
            <svg viewBox="0 0 48 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <rect x="3" y="10" width="42" height="22" rx="3" />
                <line x1="3" y1="16" x2="45" y2="16" />
                <line x1="9" y1="22" x2="19" y2="22" />
                <line x1="9" y1="27" x2="14" y2="27" />
            </svg>
        ),
    },
];

export default function PaymentOptions() {
    return (
        <section className="pay-section" id="payment">
            <div className="pay-container">
                <div className="pay-header">
                    <span className="pay-tag">Safe & Secure</span>
                    <h2>Flexible Payment Options</h2>
                    <p>Choose from multiple trusted payment methods for a seamless booking experience.</p>
                </div>

                <div className="pay-grid">
                    {methods.map((m, i) => (
                        <div key={i} className="pay-card">
                            <div className="pay-card-inner">
                                <div className="pay-logo-wrap">
                                    {m.isImg
                                        ? <img src={m.icon} alt={m.name} />
                                        : <span className="pay-svg-icon">{m.svg}</span>
                                    }
                                </div>
                                <div className="pay-card-name">{m.name}</div>
                                <div className="pay-card-tag">{m.tag}</div>
                            </div>
                            <div className="pay-card-glow" />
                        </div>
                    ))}
                </div>

                <div className="pay-security-bar">
                    <span>🔒 256-bit SSL Encrypted</span>
                    <span>✅ PCI DSS Compliant</span>
                    <span>⚡ Instant Confirmation</span>
                </div>

                <div className="pay-action">
                    <Link to="/payment" className="pay-btn">
                        Proceed to Payment
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
