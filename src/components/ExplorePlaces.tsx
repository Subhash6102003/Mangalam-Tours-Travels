import { explorePlaces } from "../data/content";

export const ExplorePlaces = () => (
  <section className="bg-white py-16 dark:bg-background-dark">
    <div className="mx-auto max-w-6xl px-4 md:px-8">
      <div className="mb-10 space-y-2 text-center">
        <p className="section-eyebrow">Explore Madhya Pradesh</p>
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Famous Places & Temples</h2>
        <p className="text-sm sm:text-base text-ink/70 dark:text-white/70">
          Discover MP's spiritual heritage and natural beauty with our curated day trips and tour packages from Bhopal.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {explorePlaces.map((place) => (
          <article
            key={place.name}
            className="group overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-soft transition hover:-translate-y-1 hover:border-primary/30 dark:border-zinc-700 dark:bg-surface-dark"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={place.image}
                alt={place.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="font-heading text-lg font-bold text-white">{place.name}</h3>
                <p className="text-xs text-white/90">{place.distance}</p>
              </div>
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-ink/70 dark:text-white/70">
                  <span className="material-symbols-outlined text-primary text-base">schedule</span>
                  {place.duration}
                </span>
                <span className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                  {place.price}
                </span>
              </div>
              <p className="text-sm text-ink/70 dark:text-white/70">{place.highlights}</p>
              <div className="flex items-center justify-between pt-2">
                <a
                  href="#booking"
                  className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                >
                  Book This Trip
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

export default ExplorePlaces;
