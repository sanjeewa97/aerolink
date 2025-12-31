import { Link } from 'react-router-dom';
import './PaymentOptions.css';

export default function PaymentOptions() {
    return (
        <section className="payment-section" id="payment">
            <div className="container">
                <h2 className="section-title text-center mb-3">Secure Payment Options</h2>
                <div className="payment-card">
                    <div className="payment-logos">
                        <div className="payment-logo">
                            <img src="/visa-logo.png" alt="Visa" />
                        </div>
                        <div className="payment-logo">
                            <img src="/mastercard-logo.png" alt="Mastercard" />
                        </div>
                        <div className="payment-logo">
                            <img src="/paypal-logo.png" alt="PayPal" />
                        </div>
                        <div className="payment-logo bank-transfer">
                            <svg viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="4" y="8" width="40" height="16" rx="2" />
                                <line x1="4" y1="12" x2="44" y2="12" />
                                <line x1="8" y1="16" x2="16" y2="16" />
                                <line x1="8" y1="20" x2="12" y2="20" />
                            </svg>
                            <span>Bank Transfer</span>
                        </div>
                    </div>
                    <Link to="/payment" className="btn btn-primary proceed-btn">Proceed to Payment</Link>
                </div>
            </div>
        </section>
    );
}
