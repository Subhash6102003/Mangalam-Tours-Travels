import { fleet } from "../data/content";
import { contactDetails } from "../data/content";

export const FleetGrid = () => {
  const getWhatsAppLink = (carName: string) => {
    const message = encodeURIComponent(
      `Hi, I want to book ${carName} with Mangalam Tours And Travels. Pickup: ___ | Drop: ___ | Date & Time: ___ | Number of Passengers: ___`
    );
    return `https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}?text=${message}`;
  };

  return (
    <section className="bg-[#f5f5f5] py-16 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary/80">
            Mangalam Tours And Travels
          </p>
        </div>
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-eyebrow">Fleet</p>
            <h2 className="section-title">Choose the perfect ride</h2>
            <p className="text-sm text-ink/70 dark:text-white/70">AC & Non-AC · Clean interiors · Verified chauffeurs</p>
          </div>
          <a
            href="#booking"
            className="button-primary flex h-12 items-center justify-center gap-2 px-5 text-sm"
          >
            <span className="material-symbols-outlined text-base">event_available</span>
            Check availability
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((car) => (
            <article
              key={car.name}
              className="group overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-soft transition hover:-translate-y-1 hover:border-primary/30 dark:border-zinc-700 dark:bg-surface-dark"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-soft">
                  {car.tag}
                </span>
              </div>
              <div className="space-y-3 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-ink dark:text-white">{car.name}</h3>
                  <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary w-fit">{car.rate}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-ink/70 dark:text-white/70">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-base">group</span>{car.seats} seats</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-base">luggage</span>{car.luggage} bags</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-base">ac_unit</span>AC</span>
                </div>
                <p className="text-sm text-ink/70 dark:text-white/70">{car.features}</p>
                <div className="flex items-center justify-between pt-2">
                  <a 
                    href={getWhatsAppLink(car.name)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                  >
                    Book this car
                  </a>
                  <span className="material-symbols-outlined text-primary">chevron_right</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetGrid;
