import { useNavigate } from 'react-router-dom';
import './CEO.css';

export default function CEO() {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate('/about#ceo');
        // Scroll to CEO section after navigation
        setTimeout(() => {
            const ceoSection = document.getElementById('ceo-section');
            if (ceoSection) {
                ceoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <section className="ceo-section">
            <div className="container">
                <h2 className="section-title">Meet Our CEO</h2>
                <div className="ceo-content">
                    <div className="ceo-image">
                        <img src="/ceo.png" alt="CEO" />
                    </div>
                    <div className="ceo-info">
                        <p className="ceo-description">
                            Our CEO, <strong>K.A.V. Ayeshmantha</strong>, B.Sc. Civil Engineer, currently managing
                            top construction projects in Maldives, leads AeroLink with expertise and trust.
                        </p>
                        <button className="btn btn-primary" onClick={handleReadMore}>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
