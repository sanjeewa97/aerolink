import { useNavigate } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
    const navigate = useNavigate();

    return (
        <div className="about-page">
            <div className="about-container">
                <button className="back-button" onClick={() => navigate('/')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>

                {/* Welcome Section */}
                <section className="welcome-section">
                    <h1>Welcome to Aerolink Travel</h1>
                    <h2>Premium Air Ticketing & Travel Management – A Brand of Tranava Solutions</h2>

                    <p>
                        Established in <strong>2019</strong>, Aerolink Travel is your trusted partner in delivering exceptional travel
                        services for both <strong>leisure and corporate travelers</strong>. Operating under <strong>Tranava Solutions</strong>, we
                        specialize in providing end-to-end travel solutions designed to make your journeys smooth,
                        efficient, and memorable.
                    </p>
                </section>

                {/* Our Services Section */}
                <section className="services-section">
                    <h2>Our Services</h2>

                    <div className="service-category">
                        <h3>Air Ticketing Solutions</h3>
                        <ul>
                            <li>Domestic and international flight bookings</li>
                            <li>Competitive airfare sourcing</li>
                            <li>Ticket issuance, re-issuance, cancellations, and amendments</li>
                            <li>Group and bulk travel bookings</li>
                        </ul>
                    </div>

                    <div className="service-category">
                        <h3>Corporate Travel Management</h3>
                        <ul>
                            <li>Comprehensive corporate travel solutions</li>
                            <li>Policy-based airfare management and cost optimization</li>
                            <li>Dedicated support for business travelers</li>
                            <li>Travel planning tailored to your company's needs</li>
                        </ul>
                    </div>

                    <div className="service-category">
                        <h3>Travel Support & Assistance</h3>
                        <ul>
                            <li>Customized holiday packages</li>
                            <li>Hotel bookings and accommodation management</li>
                            <li>Airport transfers and ground arrangements</li>
                            <li>Visa assistance (as per applicable regulations)</li>
                        </ul>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="why-choose-section">
                    <h2>Why Choose Aerolink Travel</h2>
                    <ul>
                        <li><strong>Customer-Centric:</strong> Personalized solutions for every traveler</li>
                        <li><strong>Reliable:</strong> Consistent, transparent, and professional service</li>
                        <li><strong>Experienced Team:</strong> Travel professionals with years of industry expertise</li>
                        <li><strong>Competitive Pricing:</strong> Trusted airline partnerships to deliver the best value</li>
                        <li><strong>Flexible & Scalable:</strong> Solutions that grow with your travel needs</li>
                    </ul>
                </section>

                {/* Divider */}
                <div className="section-divider"></div>

                {/* Mission Section */}
                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p>
                        To deliver <strong>efficient, transparent, and value-driven</strong> air ticketing and travel services while
                        maintaining the highest standards of <strong>professionalism and customer care</strong>.
                    </p>
                </section>

                {/* Vision Section */}
                <section className="vision-section">
                    <h2>Our Vision</h2>
                    <p>
                        To be recognized as a <strong>trusted and progressive</strong> travel brand, known for <strong>service excellence</strong>,
                        <strong>operational efficiency</strong>, and <strong>long-term partnerships</strong>.
                    </p>
                </section>

                {/* Divider */}
                <div className="section-divider"></div>

                {/* CEO's Message & Leadership */}
                <section className="ceo-section" id="ceo-section">
                    <h2 className="ceo-section-title">CEO's Message</h2>

                    <div className="ceo-message">
                        <p>
                            At Aerolink Travel, we believe that <strong>travel is more than just moving from one destination to another</strong>—it is about trust, precision, and seamless execution. Our goal is to <strong>simplify travel bookings</strong>, ensuring our clients experience <strong>reliable and timely solutions</strong> to meet their needs.
                        </p>
                        <p>
                            With a <strong>professional background in engineering and project management</strong>, I bring a structured, detail-oriented approach to the travel industry. This engineering mindset allows us to operate with <strong>strong systems</strong>, <strong>clear accountability</strong>, and a commitment to <strong>service excellence</strong>.
                        </p>
                        <p>
                            <strong>Aerolink Travel / Tranava Solutions</strong> is built on <strong>integrity, transparency, and reliability</strong>. Whether serving corporate clients, business travelers, or individual customers, our team is dedicated to delivering <strong>efficient travel management solutions</strong> backed by excellent customer care.
                        </p>
                        <p>
                            We look forward to building <strong>long-term partnerships</strong> and becoming your <strong>trusted travel solutions provider</strong>.
                        </p>
                        <p className="ceo-signature">
                            <strong>K.A.V. Ayeshmantha</strong><br />
                            Founder / Managing Director<br />
                            Aerolink Travel<br />
                            A Brand of Tranava Solutions
                        </p>
                    </div>

                    <div className="leadership-divider"></div>

                    {/* Leadership Profile */}
                    <div className="leadership-profile">
                        <h3>Leadership Profile – Managing Director / CEO</h3>

                        <div className="profile-details">
                            <p><strong>Name:</strong> K.A.V. Ayeshmantha</p>
                            <p><strong>Position:</strong> Owner / Managing Director</p>
                            <p><strong>Education:</strong> B.Sc. (Hons) in Civil Engineering</p>
                            <p><strong>Profession:</strong> Civil Engineer & Construction Project Manager</p>
                        </div>

                        <div className="profile-description">
                            <p>
                                Mr. K.A.V. Ayeshmantha is a <strong>qualified Civil Engineer</strong> holding a Bachelor of Science (Honours) degree in Civil Engineering. He is currently serving as a <strong>Construction Project Manager</strong> with expertise in <strong>managing complex projects</strong>, <strong>multidisciplinary teams</strong>, <strong>budgets</strong>, and <strong>schedules</strong> under dynamic conditions.
                            </p>
                            <p>
                                His <strong>strong engineering foundation</strong>, combined with <strong>hands-on project management experience</strong>, brings a unique advantage to Aerolink Travel. The same principles applied in large-scale construction—<strong>planning, risk management, cost control, and operational efficiency</strong>—are embedded into his travel management practice.
                            </p>
                        </div>

                        <div className="operating-principles">
                            <h4>Under his leadership, Aerolink Travel operates with a focus on:</h4>
                            <ul>
                                <li>Process-driven service delivery</li>
                                <li>Accuracy and compliance</li>
                                <li>Client-focused solutions</li>
                                <li>Long-term business relationships</li>
                            </ul>
                        </div>

                        <div className="ceo-vision">
                            <p>
                                His vision is to <strong>establish Aerolink Travel as a trusted, professional, and progressive travel brand</strong> for both <strong>corporate and individual clients</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <h2>Ready to Plan Your Next Journey?</h2>
                    <p>Contact Aerolink Travel today and experience hassle-free travel solutions!</p>
                    <button className="btn btn-primary" onClick={() => navigate('/inquiry')}>
                        Make an Inquiry
                    </button>
                </section>
            </div>
        </div>
    );
}
