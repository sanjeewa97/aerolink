import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InquiryForm from './components/InquiryForm';
import Features from './components/Features';
import PaymentOptions from './components/PaymentOptions';
import CEO from './components/CEO';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InquiryForm />
      <Features />
      <PaymentOptions />
      <CEO />
      <Footer />
    </div>
  );
}

export default App;
