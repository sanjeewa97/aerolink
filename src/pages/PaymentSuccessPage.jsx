import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './PaymentSuccessPage.css';

export default function PaymentSuccessPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('order');

    useEffect(() => {
        // Optional: Send confirmation email or update database
        console.log('Payment successful for order:', orderId);
    }, [orderId]);

    return (
        <div className="payment-result-page success">
            <div className="result-container">
                <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>

                <h1>Payment Successful!</h1>
                <p className="success-message">
                    Your payment has been processed successfully.
                </p>

                {orderId && (
                    <div className="order-details">
                        <p><strong>Order ID:</strong> {orderId}</p>
                        <p><strong>Status:</strong> <span className="status-badge">Confirmed</span></p>
                    </div>
                )}

                <div className="next-steps">
                    <h3>What's Next?</h3>
                    <ul>
                        <li>✅ Payment confirmation email sent</li>
                        <li>✈️ Our team will contact you shortly with flight details</li>
                        <li>📧 Check your email for booking confirmation</li>
                    </ul>
                </div>

                <div className="action-buttons">
                    <button className="btn btn-primary" onClick={() => navigate('/')}>
                        Return to Home
                    </button>
                    <button className="btn btn-secondary" onClick={() => window.print()}>
                        Print Receipt
                    </button>
                </div>

                <div className="contact-support">
                    <p>Need help? WhatsApp us at <strong>+94 78 336 6630</strong></p>
                </div>
            </div>
        </div>
    );
}
