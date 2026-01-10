import { Navigate, Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import FleetPage from "./pages/FleetPage";
import Home from "./pages/Home";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ReviewsPage from "./pages/ReviewsPage";
import ServicesPage from "./pages/ServicesPage";
import TermsPage from "./pages/TermsPage";
import ExplorePage from "./pages/ExplorePage";

function App() {
  return (
    <div className="min-h-screen bg-background-light text-ink dark:bg-background-dark dark:text-white">
      <SpeedInsights />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
