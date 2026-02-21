import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './InquiryPage.css';

export default function InquiryPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        email: '',
        luggage: '',
        leavingFrom: '',
        departureDate: '',
        goingTo: '',
        returnDate: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        let value = e.target.value;
        // Strip non-numeric characters from WhatsApp field
        if (e.target.name === 'whatsapp') {
            value = value.replace(/[^0-9+\-\s]/g, '');
        }
        // If departure date changes and return date is now before it, clear return date
        if (e.target.name === 'departureDate' && formData.returnDate && value > formData.returnDate) {
            setFormData({ ...formData, departureDate: value, returnDate: '' });
            return;
        }
        setFormData({ ...formData, [e.target.name]: value });
    };

    // Block non-numeric keys on WhatsApp field
    const handleWhatsAppKey = (e) => {
        const allowed = ['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Home', 'End', '+', '-', ' '];
        if (!allowed.includes(e.key) && !/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const businessNumber = '+94717777432';
        const message = `*New Flight Inquiry from AeroLink*

👤 *Customer Details:*
Name: ${formData.name}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
Luggage: ${formData.luggage || 'Not specified'}

✈️ *Flight Details:*
From: ${formData.leavingFrom}
To: ${formData.goingTo}
Departure: ${formData.departureDate}
Return: ${formData.returnDate || 'One-way'}

Please provide available options and pricing.`;

        const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };


    return (
        <div className="iq-page">
            <Navbar />

            {/* Hero Banner */}
            <section className="iq-hero">
                <div className="iq-hero-overlay" />
                <div className="iq-hero-content">
                    <button className="iq-back-btn" onClick={() => navigate('/')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </button>
                    <span className="iq-hero-badge">✈ AeroLink Travel</span>
                    <h1>Flight Inquiry</h1>
                    <p>Fill in your details and we'll contact you via WhatsApp with the best available options.</p>
                </div>
            </section>

            {/* Form Section */}
            <section className="iq-form-section">
                <div className="iq-form-wrap">

                    {/* Sidebar info */}
                    <div className="iq-sidebar">
                        <h3>How it works</h3>
                        <div className="iq-steps">
                            {[
                                { n: '01', title: 'Fill the form', desc: 'Enter your travel details below' },
                                { n: '02', title: 'WhatsApp sent', desc: 'Your inquiry goes to our team instantly' },
                                { n: '03', title: 'Get a quote', desc: 'We respond with options within 1 hour' },
                                { n: '04', title: 'Confirm & fly', desc: 'Confirm your seat and travel smoothly' },
                            ].map((s) => (
                                <div key={s.n} className="iq-step">
                                    <div className="iq-step-num">{s.n}</div>
                                    <div>
                                        <div className="iq-step-title">{s.title}</div>
                                        <div className="iq-step-desc">{s.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="iq-contact-info">
                            <div className="iq-contact-item">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span>+960 7897543</span>
                            </div>
                            <div className="iq-contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>info@travexasolutions.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="iq-card">
                        <div className="iq-card-header">
                            <h2>Your Travel Details</h2>
                            <p>All fields marked * are required</p>
                        </div>

                        <form onSubmit={handleSubmit} className="iq-form">

                            {/* Section: Personal */}
                            <div className="iq-section-label">
                                <span>Personal Information</span>
                            </div>
                            <div className="iq-grid-2">
                                <div className="iq-field">
                                    <label htmlFor="iq-name">Full Name *</label>
                                    <div className="iq-input-wrap">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                        <input id="iq-name" type="text" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="iq-field">
                                    <label htmlFor="iq-whatsapp">WhatsApp Number *</label>
                                    <div className="iq-input-wrap">
                                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                        <input id="iq-whatsapp" type="tel" name="whatsapp"
                                            placeholder="+960 xxx xxxx"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            onKeyDown={handleWhatsAppKey}
                                            inputMode="numeric"
                                            required />
                                    </div>
                                </div>
                                <div className="iq-field">
                                    <label htmlFor="iq-email">Email Address *</label>
                                    <div className="iq-input-wrap">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                        <input id="iq-email" type="email" name="email" placeholder="email@example.com" value={formData.email} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="iq-field">
                                    <label htmlFor="iq-luggage">Luggage Requirements</label>
                                    <div className="iq-input-wrap">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M8 2V1M16 2V1" /><line x1="5" y1="8" x2="19" y2="8" /></svg>
                                        <select id="iq-luggage" name="luggage" value={formData.luggage} onChange={handleChange}>
                                            <option value="">Select luggage</option>
                                            <option>7kg (1 piece)</option>
                                            <option>7kg plus 20kg</option>
                                            <option>7kg plus 30kg</option>
                                            <option>7kg plus 40kg</option>
                                            <option>7kg plus 45kg</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Section: Flight */}
                            <div className="iq-section-label" style={{ marginTop: '0.5rem' }}>
                                <span>Flight Details</span>
                            </div>
                            <div className="iq-grid-2">
                                <div className="iq-field">
                                    <label htmlFor="iq-from">Leaving From *</label>
                                    <div className="iq-input-wrap">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 13-8 13S4 15.25 4 10a8 8 0 0 1 8-8z" /></svg>
                                        <input id="iq-from" type="text" name="leavingFrom" placeholder="City or airport" value={formData.leavingFrom} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="iq-field">
                                    <label htmlFor="iq-depart">Departure Date *</label>
                                    <div className="iq-input-wrap">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                        <input id="iq-depart" type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="iq-field">
                                    <label htmlFor="iq-to">Going To *</label>
                                    <div className="iq-input-wrap">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 13-8 13S4 15.25 4 10a8 8 0 0 1 8-8z" /></svg>
                                        <input id="iq-to" type="text" name="goingTo" placeholder="City or airport" value={formData.goingTo} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="iq-field">
                                    <label htmlFor="iq-return">Return Date <span className="iq-optional">(optional)</span></label>
                                    <div className="iq-input-wrap">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                        <input id="iq-return" type="date" name="returnDate"
                                            value={formData.returnDate}
                                            min={formData.departureDate || undefined}
                                            onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className={`iq-submit-btn ${submitted ? 'iq-sent' : ''}`}>
                                {submitted ? (
                                    <>✅ Sent via WhatsApp!</>
                                ) : (
                                    <>
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Send Inquiry via WhatsApp
                                    </>
                                )}
                            </button>

                            <p className="iq-note">
                                🔒 Your details are only used to process your flight inquiry and will not be shared.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
