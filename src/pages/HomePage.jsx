import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PaymentOptions from '../components/PaymentOptions';
import CEO from '../components/CEO';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <PaymentOptions />
            <CEO />
            <Footer />
        </>
    );
}
