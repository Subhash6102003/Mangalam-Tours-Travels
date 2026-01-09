import CTASection from "../components/CTASection";
import ServicesGrid from "../components/ServicesGrid";
import { contactDetails } from "../data/content";

const ServicesPage = () => (
  <main>
    <section className="bg-white py-14 dark:bg-background-dark">
      <div className="mx-auto max-w-5xl space-y-4 px-4 md:px-8">
        <p className="section-eyebrow">All Services</p>
        <h1 className="section-title">Taxi, rentals, and tours</h1>
        <p className="text-base text-ink/70 dark:text-white/70">
          Available 24×7 across Bhopal, Madhya Pradesh, and outstation routes. Call {contactDetails.phones[0].number} or WhatsApp us for custom requirements.
        </p>
      </div>
    </section>
    <ServicesGrid />
    <CTASection />
  </main>
);

export default ServicesPage;
