import { packages } from "../data/content";

export const Packages = () => (
  <section className="bg-white py-16 dark:bg-background-dark">
    <div className="mx-auto max-w-6xl px-4 md:px-8">
      <div className="mb-8 space-y-2 text-center">
        <p className="section-eyebrow">MP Tour Packages</p>
        <h2 className="section-title">Handpicked Madhya Pradesh circuits</h2>
        <p className="text-sm text-ink/70 dark:text-white/70">Customizable itineraries with hotels, sightseeing, and reliable transport.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {packages.map((pkg) => (
          <article
            key={pkg.name}
            className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-100 bg-white px-6 py-5 shadow-soft transition hover:border-primary/30 dark:border-zinc-700 dark:bg-surface-dark"
          >
            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white">{pkg.name}</h3>
              <p className="text-sm text-primary font-semibold">{pkg.days}</p>
              <p className="text-sm text-ink/70 dark:text-white/70">{pkg.highlight}</p>
            </div>
            <a href="#booking" className="rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white">
              Book
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Packages;
