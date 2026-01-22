import CTASection from "../components/CTASection";
import FleetGrid from "../components/FleetGrid";

const FleetPage = () => (
  <main>
    <section className="bg-white py-14 dark:bg-background-dark">
      <div className="mx-auto max-w-5xl space-y-4 px-4 md:px-8">
        <p className="section-eyebrow">Fleet</p>
        <h1 className="section-title">Modern, well-maintained vehicles</h1>
        <p className="text-base text-ink/70 dark:text-white/70">
          AC and non-AC options for city rides, airport transfers, outstation journeys, corporate travel, and weddings.
        </p>
      </div>
    </section>
    <FleetGrid />
    <CTASection />
  </main>
);

export default FleetPage;
