import { reviews } from "../data/content";

export const Reviews = () => (
  <section className="bg-[#f5f5f5] py-16 dark:bg-zinc-900">
    <div className="mx-auto max-w-6xl px-4 md:px-8">
      <div className="mb-10 space-y-2 text-center">
        <p className="section-eyebrow">Customer Reviews</p>
        <h2 className="section-title">Trusted by families & corporates</h2>
        <p className="text-sm text-ink/70 dark:text-white/70">Real riders sharing punctuality, safety, and comfort stories.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-soft dark:border-zinc-700 dark:bg-surface-dark"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-ink dark:text-white">{review.name}</h3>
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-base">star</span>
                <span className="text-sm font-semibold">{review.rating}</span>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-white/70">{review.text}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-ink/60 dark:text-white/60">
              <span className="material-symbols-outlined text-primary">verified</span>
              Verified rider
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
