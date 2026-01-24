import CTASection from "../components/CTASection";

const About = () => (
  <main className="bg-white py-16 dark:bg-background-dark">
    <div className="mx-auto max-w-5xl space-y-6 px-4 md:px-8">
      <p className="section-eyebrow">About Mangalam Tours And Travels</p>
      <h1 className="section-title">Safe, reliable, and hospitality-driven</h1>
      <p className="text-lg leading-relaxed text-ink/80 dark:text-white/70">
        Mangalam Tours And Travels is a professional taxi and car rental service based in Bhopal. We specialize in local city rides, airport transfers, outstation trips, corporate travel, wedding car rentals, and customized Madhya Pradesh tour packages. With a modern fleet, experienced chauffeurs, and 24×7 customer support, we ensure comfort, punctuality, and peace of mind for every journey.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          { title: "Founded", value: "2025" },
          { title: "Service areas", value: "Bhopal • MP • Outstation" },
          { title: "Support", value: "24×7 helpline" },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-soft dark:border-zinc-700 dark:bg-surface-dark">
            <p className="text-sm font-semibold text-primary">{item.title}</p>
            <p className="text-xl font-bold text-ink dark:text-white">{item.value}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-ink dark:text-white">Why riders choose us</h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {["Background-verified drivers", "Clean, AC & non-AC cars", "Transparent pricing with toll/parking notes", "Flight tracking for airport pickups", "Corporate invoicing & GST", "Wedding-ready decor options"].map((item) => (
          <li key={item} className="flex items-start gap-3 text-ink/80 dark:text-white/70">
            <span className="material-symbols-outlined text-primary">check_circle</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <CTASection />
  </main>
);
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17895816129"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17895816129');
</script>

export default About;
