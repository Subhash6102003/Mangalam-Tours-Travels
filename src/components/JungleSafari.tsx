import { jungleSafaris } from "../data/content";
import { contactDetails } from "../data/content";

export const JungleSafari = () => {
  const getWhatsAppLink = (safariName: string) => {
    const message = encodeURIComponent(
      `Hi, I want to book ${safariName} with Mangalam Tours And Travels. Date: ___ | Number of Passengers: ___ | Requirements: ___`
    );
    return `https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}?text=${message}`;
  };

  return (
    <section className="bg-white py-16 dark:bg-background-dark">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary/80">
            Mangalam Tours And Travels
          </p>
        </div>
        <div className="mb-10 space-y-2 text-center">
          <p className="section-eyebrow">Wildlife Adventures</p>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Jungle Safari Packages</h2>
          <p className="text-sm sm:text-base text-ink/70 dark:text-white/70">
            Experience thrilling wildlife safaris with our special tie-ups. We arrange exclusive events and premium safari experiences for our guests.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jungleSafaris.map((safari) => (
            <article
              key={safari.name}
              className="group overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-soft transition hover:-translate-y-1 hover:border-primary/30 dark:border-zinc-700 dark:bg-surface-dark"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={safari.image}
                  alt={safari.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-heading text-lg font-bold text-white">{safari.name}</h3>
                  <p className="text-xs text-white/90">{safari.distance}</p>
                </div>
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center text-sm">
                  <span className="flex items-center gap-1 text-ink/70 dark:text-white/70">
                    <span className="material-symbols-outlined text-primary text-base">schedule</span>
                    {safari.duration}
                  </span>
                </div>
                <p className="text-sm text-ink/70 dark:text-white/70 font-medium">{safari.highlights}</p>
                <p className="text-sm text-ink/60 dark:text-white/60 leading-relaxed">{safari.description}</p>
                {safari.inclusions && safari.inclusions.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-ink/80 dark:text-white/80 mb-2">Includes:</p>
                    <ul className="space-y-1">
                      {safari.inclusions.map((item, idx) => (
                        <li key={idx} className="text-xs text-ink/70 dark:text-white/70 flex items-start">
                          <span className="text-primary mr-1.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex items-center justify-between pt-2">
                  <a
                    href={getWhatsAppLink(safari.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                  >
                    Book Safari
                  </a>
                  <span className="material-symbols-outlined text-primary">arrow_forward</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JungleSafari;
