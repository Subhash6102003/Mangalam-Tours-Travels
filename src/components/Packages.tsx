import { packages } from "../data/content";
import { contactDetails } from "../data/content";

export const Packages = () => {
  const getWhatsAppLink = (packageName: string, days: string) => {
    const message = encodeURIComponent(
      `Hi, I want to book ${packageName} (${days}) with Mangalam Tours And Travels. Date: ___ | Number of Passengers: ___ | Requirements: ___`
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
      <div className="mb-8 space-y-2 text-center">
        <p className="section-eyebrow">MP Tour Packages</p>
        <h2 className="section-title">Handpicked Madhya Pradesh circuits</h2>
        <p className="text-sm text-ink/70 dark:text-white/70">Customizable itineraries with hotels, sightseeing, and reliable transport.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {packages.map((pkg) => (
          <article
            key={pkg.name}
            className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-soft transition hover:border-primary/30 hover:shadow-lg dark:border-zinc-700 dark:bg-surface-dark"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-ink dark:text-white mb-2">{pkg.name}</h3>
              <p className="text-sm text-primary font-semibold mb-2">{pkg.days}</p>
              <p className="text-sm text-ink/80 dark:text-white/80 mb-3 font-medium">{pkg.highlight}</p>
              {pkg.description && (
                <p className="text-sm text-ink/70 dark:text-white/70 mb-3 leading-relaxed">
                  {pkg.description}
                </p>
              )}
              {pkg.inclusions && pkg.inclusions.length > 0 && (
                <div className="mb-3">
                  <p className="text-xs font-semibold text-ink/80 dark:text-white/80 mb-2">Package Includes:</p>
                  <ul className="grid grid-cols-1 gap-1">
                    {pkg.inclusions.map((item, idx) => (
                      <li key={idx} className="text-xs text-ink/70 dark:text-white/70 flex items-start">
                        <span className="text-primary mr-1.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {pkg.price && (
                <p className="text-sm font-bold text-primary mb-3">{pkg.price}</p>
              )}
            </div>
            <a 
              href={getWhatsAppLink(pkg.name, pkg.days)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-full border border-primary/30 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition"
            >
              Book Now
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Packages;
