import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/base/Navbar";
import HeroSection from "./components/base/HeroSection";
import FeatureSection from "./components/base/FeatureSection";
import UserReviews from "./components/base/UserReviews";
import Footer from "./components/base/Footer";
import { PrimeReactProvider } from 'primereact/api';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Navbar />
        {/* Hero Section */}
        <HeroSection />
        {/* Features Section */}
        <FeatureSection />
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
