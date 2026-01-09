import BookingForm from "../components/BookingForm";
import CTASection from "../components/CTASection";
import ExplorePlaces from "../components/ExplorePlaces";
import FareTransparency from "../components/FareTransparency";
import FleetGrid from "../components/FleetGrid";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import Reviews from "../components/Reviews";
import ServicesGrid from "../components/ServicesGrid";

const Home = () => {
  return (
    <main>
      <Hero />
      <BookingForm />
      <FareTransparency />
      <ServicesGrid />
      <FleetGrid />
      <ExplorePlaces />
      <Packages />
      <Reviews />
      <CTASection />
    </main>
  );
};

export default Home;
