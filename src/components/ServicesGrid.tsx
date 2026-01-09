import { services } from "../data/content";

export const ServicesGrid = () => {
  return (
    <section className="bg-white py-16 dark:bg-background-dark">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10 space-y-2 text-center">
          <p className="section-eyebrow">Services</p>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Taxi solutions for every need</h2>
          <p className="text-sm sm:text-base text-ink/70 dark:text-white/70">
            One-way, round trip, airport, corporate, weddings, and Madhya Pradesh tour packages — transparent rates and punctual drivers.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col gap-3 rounded-2xl border border-zinc-100 bg-white p-5 sm:p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/30 dark:border-zinc-700 dark:bg-surface-dark"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-ink dark:text-white">{service.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-ink/70 dark:text-white/70">{service.description}</p>
              <div className="mt-auto flex items-center justify-between pt-2 text-sm font-semibold text-primary">
                <span>{service.price}</span>
                <button className="rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary/10">
                  Book Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
