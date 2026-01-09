import CTASection from "../components/CTASection";
import Reviews from "../components/Reviews";

const ReviewsPage = () => (
  <main>
    <section className="bg-white py-14 dark:bg-background-dark">
      <div className="mx-auto max-w-5xl space-y-4 px-4 md:px-8">
        <p className="section-eyebrow">Testimonials</p>
        <h1 className="section-title">What riders say about us</h1>
        <p className="text-base text-ink/70 dark:text-white/70">
          Verified feedback from airport transfers, outstation trips, corporate travel, and tour bookings.
        </p>
      </div>
    </section>
    <Reviews />
    <CTASection />
  </main>
);

export default ReviewsPage;
