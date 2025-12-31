import { useNavigate } from 'react-router-dom';
import './PaymentSuccessPage.css'; // Reuse same styles

export default function PaymentCancelPage() {
    const navigate = useNavigate();

    return (
        <div className="payment-result-page cancel">
            <div className="result-container">
                <div className="cancel-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                </div>

                <h1>Payment Cancelled</h1>
                <p className="cancel-message">
                    Your payment has been cancelled. No charges were made.
                </p>

                <div className="help-box">
                    <p><strong>Having trouble with payment?</strong></p>
                    <p>Contact us via WhatsApp: <strong>+94 78 336 6630</strong></p>
                </div>

                <div className="action-buttons">
                    <button className="btn btn-primary" onClick={() => navigate('/payment')}>
                        Try Again
                    </button>
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>
                        Return to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
