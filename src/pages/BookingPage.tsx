import BookingForm from "../components/BookingForm";
import CTASection from "../components/CTASection";
import { contactDetails } from "../data/content";

const BookingPage = () => (
  <main>
    <section className="bg-white py-14 dark:bg-background-dark">
      <div className="mx-auto max-w-5xl space-y-4 px-4 md:px-8">
        <p className="section-eyebrow">Book Online</p>
        <h1 className="section-title">Instant taxi booking</h1>
        <p className="text-base text-ink/70 dark:text-white/70">
          Fill the form for one-way, round-trip, airport, or tour packages. For immediate help, call {contactDetails.phones[0].number} or WhatsApp {contactDetails.whatsapp}.
        </p>
      </div>
    </section>
    <BookingForm />
    <CTASection />
  </main>
);

export default BookingPage;
