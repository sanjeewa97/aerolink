import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InquiryPage.css';

export default function InquiryPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        email: '',
        luggage: 'Luggage Requirements',
        leavingFrom: '',
        departureDate: '',
        goingTo: '',
        returnDate: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();


        const businessNumber = '+94717777432';

        const message = `*New Flight Inquiry from AeroLink*

👤 *Customer Details:*
Name: ${formData.name}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
Luggage: ${formData.luggage}

✈️ *Flight Details:*
From: ${formData.leavingFrom}
To: ${formData.goingTo}
Departure: ${formData.departureDate}
Return: ${formData.returnDate}

Please provide available options and pricing.`;

        const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="inquiry-page">
            <div className="inquiry-page-container">
                <button className="back-button" onClick={() => navigate('/')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>

                <h1 className="inquiry-page-title">Inquiry</h1>

                <div className="inquiry-card-page">
                    <h2 className="form-title">Flight Inquiry</h2>

                    <form onSubmit={handleSubmit} className="inquiry-form-page">
                        <div className="form-row-page">
                            <div className="form-group">
                                <label>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label>
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    <input
                                        type="tel"
                                        name="whatsapp"
                                        placeholder="WhatsApp Number"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="form-row-page">
                            <div className="form-group">
                                <label>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                        <rect x="6" y="15" width="4" height="6" />
                                    </svg>
                                    <select
                                        name="luggage"
                                        value={formData.luggage}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option> Luggage Requirements </option>
                                        <option> 7kg (1 piece) </option>
                                        <option> 7kg plus 20kg </option>
                                        <option> 7kg plus 30kg </option>
                                        <option> 7kg plus 40kg </option>
                                        <option> 7kg plus 45kg </option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className="form-row-page">
                            <div className="form-group">
                                <label>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <input
                                        type="text"
                                        name="leavingFrom"
                                        placeholder="Leaving from"
                                        value={formData.leavingFrom}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <input
                                        type="date"
                                        name="departureDate"
                                        placeholder="Departure Date"
                                        value={formData.departureDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="form-row-page">
                            <div className="form-group">
                                <label>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <input
                                        type="text"
                                        name="goingTo"
                                        placeholder="Going to"
                                        value={formData.goingTo}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <input
                                        type="date"
                                        name="returnDate"
                                        placeholder="Return Date"
                                        value={formData.returnDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn-page">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
