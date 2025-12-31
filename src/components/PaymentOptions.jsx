import './PaymentOptions.css';

export default function PaymentOptions() {
    return (
        <section className="payment-section" id="payment">
            <div className="container">
                <h2 className="section-title text-center mb-3">Secure Payment Options</h2>
                <div className="payment-card">
                    <div className="payment-logos">
                        <div className="payment-logo">
                            <svg viewBox="0 0 48 32" fill="none">
                                <rect width="48" height="32" rx="4" fill="#1A1F71" />
                                <text x="24" y="20" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">VISA</text>
                            </svg>
                        </div>
                        <div className="payment-logo">
                            <svg viewBox="0 0 48 32" fill="none">
                                <rect width="48" height="32" rx="4" fill="white" stroke="#EB001B" />
                                <circle cx="18" cy="16" r="8" fill="#EB001B" />
                                <circle cx="30" cy="16" r="8" fill="#F79E1B" />
                                <path d="M24 10a8 8 0 0 0 0 12 8 8 0 0 0 0-12z" fill="#FF5F00" />
                            </svg>
                        </div>
                        <div className="payment-logo">
                            <svg viewBox="0 0 48 32" fill="none">
                                <rect width="48" height="32" rx="4" fill="#003087" />
                                <text x="12" y="14" fontSize="8" fill="#009CDE" fontWeight="bold">Pay</text>
                                <text x="12" y="22" fontSize="8" fill="#009CDE" fontWeight="bold">Pal</text>
                            </svg>
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
                    <button className="btn btn-primary proceed-btn">Proceed to Payment</button>
                </div>
            </div>
        </section>
    );
}
