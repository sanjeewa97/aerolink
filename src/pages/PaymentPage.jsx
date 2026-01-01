import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

export default function PaymentPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        nameOnCard: ''
    });
    const [paymentAmount, setPaymentAmount] = useState('0.00');
    const [isProcessing, setIsProcessing] = useState(false);

    // Demo Payment Mode 
    const USE_DEMO_MODE = true;

    // PayHere Payment Handler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!paymentAmount || parseFloat(paymentAmount) <= 0) {
            alert('Please enter a valid payment amount');
            return;
        }

        if (!formData.nameOnCard.trim()) {
            alert('Please enter your name');
            return;
        }

        // Use demo mode if enabled
        if (USE_DEMO_MODE) {
            handleDemoPayment();
            return;
        }

        // Real PayHere payment 
        handlePayHerePayment();
    };

    // Demo Payment 
    const handleDemoPayment = () => {
        setIsProcessing(true);

        // Generate order ID
        const orderId = "DEMO_ORDER_" + Date.now();

        // Show processing message
        const confirmed = window.confirm(
            `DEMO MODE: Process payment of LKR ${paymentAmount}?\n\n` +
            `Order ID: ${orderId}\n` +
            `Name: ${formData.nameOnCard}\n\n` +
            `Click OK to simulate successful payment\n` +
            `Click Cancel to simulate payment cancellation`
        );

        // Simulate payment processing delay
        setTimeout(() => {
            setIsProcessing(false);

            if (confirmed) {
                // Simulate successful payment
                console.log("Demo payment successful. Order ID:", orderId);
                navigate('/payment/success?order=' + orderId);
            } else {
                // User cancelled
                console.log("Demo payment cancelled");
                navigate('/payment/cancel');
            }
        }, 1000);
    };

    // Real PayHere Payment 
    const handlePayHerePayment = () => {
        // Check if PayHere is loaded
        if (typeof window.payhere === 'undefined') {
            alert('Payment system is loading. Please wait a moment and try again.');
            // Try to reload the script
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            return;
        }

        // PayHere Payment Configuration
        const payment = {
            sandbox: true,
            merchant_id: import.meta.env.VITE_PAYHERE_MERCHANT_ID || "YOUR_MERCHANT_ID", // Valid PayHere sandbox merchant ID
            return_url: window.location.origin + "/payment/success",
            cancel_url: window.location.origin + "/payment/cancel",
            notify_url: undefined,
            order_id: "AEROLINK_ORDER_" + Date.now(),
            items: "Flight Booking",
            amount: parseFloat(paymentAmount).toFixed(2),
            currency: "LKR",
            first_name: formData.nameOnCard.split(' ')[0] || "Customer",
            last_name: formData.nameOnCard.split(' ').slice(1).join(' ') || "",
            email: "customer@example.com",
            phone: "0771234567",
            address: "No.1, Galle Road",
            city: "Colombo",
            country: "Sri Lanka",
            delivery_address: "No.1, Galle Road",
            delivery_city: "Colombo",
            delivery_country: "Sri Lanka"
        };

        console.log('Starting PayHere payment:', payment);

        // Set up PayHere callbacks
        window.payhere.onCompleted = function (orderId) {
            console.log("Payment completed. OrderID:" + orderId);
            navigate('/payment/success?order=' + orderId);
        };

        window.payhere.onDismissed = function () {
            console.log("Payment dismissed by user");
        };

        window.payhere.onError = function (error) {
            console.log("Payment Error:", error);
            alert('Payment failed: ' + error);
        };

        // Start payment
        try {
            window.payhere.startPayment(payment);
        } catch (error) {
            console.error('Error starting payment:', error);
            alert('Failed to start payment. Please try again.');
        }
    };

    const handleChange = (e) => {
        let value = e.target.value;
        const name = e.target.name;

        // Format card number with spaces
        if (name === 'cardNumber') {
            value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
            if (value.length > 19) return;
        }

        // Format expiry date
        if (name === 'expiryDate') {
            value = value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
            }
            if (value.length > 7) return;
        }

        // Limit CVC to 3 digits
        if (name === 'cvc' && value.length > 3) return;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="payment-page">
            <div className="payment-container">
                <button className="back-button" onClick={() => navigate('/')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>

                {USE_DEMO_MODE && (
                    <div style={{
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        color: 'white',
                        padding: '1rem',
                        borderRadius: '8px',
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                        fontWeight: '600'
                    }}>
                        🔧 DEMO MODE: Payment simulation enabled (no real payment required)
                    </div>
                )}

                <h1 className="payment-title">Secure Payment Portal</h1>
                <p className="payment-subtitle">Please enter your payment details to complete the transaction.</p>

                <div className="payment-card">
                    {/* Payment Amount */}
                    <div className="payment-amount-section">
                        <div className="amount-left">
                            <div className="lock-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </div>
                            <div>
                                <div className="amount-label">Payment Amount</div>
                                <div className="payment-methods-small">
                                    <img src="/visa-logo.png" alt="Visa" />
                                    <img src="/mastercard-logo.png" alt="Mastercard" />
                                </div>
                            </div>
                        </div>
                        <input
                            type="text"
                            className="amount-value editable-amount"
                            value={`$ ${paymentAmount}`}
                            onChange={(e) => {
                                let value = e.target.value.replace(/[^0-9.]/g, '');

                                // Remove leading zeros except for decimal values (e.g., 0.50)
                                if (value.length > 1 && value[0] === '0' && value[1] !== '.') {
                                    value = value.replace(/^0+/, '');
                                }

                                // Ensure value is not empty
                                if (value === '') {
                                    value = '0';
                                }

                                // Allow only one decimal point
                                const parts = value.split('.');
                                if (parts.length > 2) return;

                                // Limit to 2 decimal places
                                if (parts[1] && parts[1].length > 2) return;

                                setPaymentAmount(value);
                            }}
                            placeholder="$ 0.00"
                        />
                    </div>

                    {/* Card Details Form */}
                    <form onSubmit={handleSubmit} className="payment-form">
                        <h3 className="form-section-title">Card Details</h3>

                        <div className="form-group-payment">
                            <label>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="Card Number"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="card-brands">
                                    <img src="/visa-logo.png" alt="Visa" />
                                    <img src="/mastercard-logo.png" alt="Mastercard" />
                                </div>
                            </label>
                        </div>

                        <div className="form-row-payment">
                            <div className="form-group-payment">
                                <label>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        placeholder="MM / YY"
                                        value={formData.expiryDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div className="form-group-payment">
                                <label>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    <input
                                        type="text"
                                        name="cvc"
                                        placeholder="CVC"
                                        value={formData.cvc}
                                        onChange={handleChange}
                                        maxLength="3"
                                        required
                                    />
                                    <svg className="card-icon-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                        <line x1="1" y1="10" x2="23" y2="10" />
                                    </svg>
                                </label>
                            </div>
                        </div>

                        <div className="form-group-payment">
                            <label>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <input
                                    type="text"
                                    name="nameOnCard"
                                    placeholder="Name on Card"
                                    value={formData.nameOnCard}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary complete-payment-btn" disabled={isProcessing}>
                            {isProcessing ? 'Processing...' : (USE_DEMO_MODE ? 'Simulate Payment (Demo)' : 'Complete Payment')}
                        </button>

                        <div className="or-divider">Or</div>

                        {/* Alternative Payment Methods */}
                        <div className="alternative-payments">
                            {/* PayPal Badge */}
                            <button type="button" className="alt-payment-btn">
                                <svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="140" height="60" fill="white" stroke="#E0E0E0" strokeWidth="2" rx="8" />
                                    <image href="/paypal-icon.png" x="5" y="5" width="130" height="50" preserveAspectRatio="xMidYMid meet" />
                                </svg>
                            </button>

                            {/* GPay Badge */}
                            <button type="button" className="alt-payment-btn">
                                <svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="140" height="60" fill="white" stroke="#E0E0E0" strokeWidth="2" rx="8" />
                                    <image href="/gpay-icon.png" x="5" y="5" width="130" height="50" preserveAspectRatio="xMidYMid meet" />
                                </svg>
                            </button>

                            {/* PhonePe Badge */}
                            <button type="button" className="alt-payment-btn">
                                <svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="140" height="60" fill="white" stroke="#E0E0E0" strokeWidth="2" rx="8" />
                                    <image href="/phonepe-icon.png" x="5" y="5" width="130" height="50" preserveAspectRatio="xMidYMid meet" />
                                </svg>
                            </button>

                            {/* UPI Badge */}
                            <button type="button" className="alt-payment-btn">
                                <svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="140" height="60" fill="white" stroke="#E0E0E0" strokeWidth="2" rx="8" />
                                    <image href="/upi-icon.png" x="5" y="5" width="130" height="50" preserveAspectRatio="xMidYMid meet" />
                                </svg>
                            </button>
                        </div>

                        <div className="security-message">
                            <svg viewBox="0 0 24 24" fill="#10b981">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Payments are secure and encrypted</span>
                        </div>

                        {/* Security Badges */}
                        <div className="security-badges">
                            {/* PCI DSS Badge */}
                            <div className="badge">
                                <svg viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="120" height="50" fill="#0D7C8C" rx="4" />
                                    <text x="60" y="20" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">PCI DSS</text>
                                    <text x="60" y="36" fill="white" fontSize="8" textAnchor="middle" fontFamily="Arial, sans-serif">COMPLIANT</text>
                                </svg>
                            </div>

                            {/* SSL Encryption Badge */}
                            <div className="badge">
                                <svg viewBox="0 0 140 50" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="translate(8, 10)">
                                        <path d="M15 0 L30 8 L30 22 L15 30 L0 22 L0 8 Z" fill="#00A651" />
                                        <path d="M10 15 L13 18 L20 11" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <text x="50" y="22" fill="#333" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">Secure SSL</text>
                                    <text x="50" y="35" fill="#666" fontSize="8" fontFamily="Arial, sans-serif">Encryption</text>
                                </svg>
                            </div>

                            {/* Norton Badge */}
                            <div className="badge">
                                <svg viewBox="0 0 130 50" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="25" r="13" fill="#FFC720" />
                                    <path d="M14 25 L18 29 L26 20" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    <text x="42" y="24" fill="#000" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">Norton</text>
                                    <text x="42" y="36" fill="#888" fontSize="7" fontFamily="Arial, sans-serif">by Symantec</text>
                                </svg>
                            </div>

                            {/* Payment Digest Badge */}
                            <div className="badge">
                                <svg viewBox="0 0 140 50" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="translate(8, 12)">
                                        <path d="M13 0 L26 7 L26 18 L13 26 L0 18 L0 7 Z" fill="#FF9933" />
                                        <rect x="9" y="12" width="8" height="8" rx="1" fill="white" />
                                        <rect x="11" y="8" width="4" height="5" rx="2" fill="none" stroke="white" strokeWidth="1.5" />
                                    </g>
                                    <text x="48" y="22" fill="#333" fontSize="9" fontWeight="bold" fontFamily="Arial, sans-serif">PAYMENT</text>
                                    <text x="48" y="33" fill="#666" fontSize="8" fontFamily="Arial, sans-serif">digest</text>
                                </svg>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
