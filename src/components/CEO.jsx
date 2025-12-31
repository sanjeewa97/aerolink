import './CEO.css';

export default function CEO() {
    return (
        <section className="ceo-section" id="about">
            <div className="container">
                <h2 className="section-title text-center mb-3">Meet Our CEO</h2>
                <div className="ceo-content">
                    <div className="ceo-image-wrapper">
                        <img src="/ceo.png" alt="CEO" className="ceo-image" />
                    </div>
                    <div className="ceo-info">
                        <p className="ceo-description">
                            Our CEO, <strong>Vides Ayeshmantha</strong>, B.Sc. Civil Engineer, currently managing
                            top construction projects in Maldives, leads AeroLink with expertise and trust.
                        </p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
