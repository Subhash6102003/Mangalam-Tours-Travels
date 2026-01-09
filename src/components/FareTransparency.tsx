export const FareTransparency = () => (
  <section className="bg-white py-14 dark:bg-background-dark">
    <div className="mx-auto max-w-6xl px-4 md:px-8">
      <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6 sm:p-8 shadow-soft dark:border-primary/30 dark:bg-primary/10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-eyebrow">Fare Transparency</p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-ink dark:text-white">Know your fare before you ride</h3>
            <p className="text-sm text-ink/70 dark:text-white/70">No hidden charges. Tolls & parking shared upfront.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-white px-4 py-3 text-ink shadow-sm ring-1 ring-primary/10 dark:bg-surface-dark dark:text-white">
              <p className="font-semibold">Starting price per km</p>
              <p className="text-primary font-bold">Sedan ₹12 | SUV ₹18</p>
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 text-ink shadow-sm ring-1 ring-primary/10 dark:bg-surface-dark dark:text-white">
              <p className="font-semibold">Waiting charges</p>
              <p className="text-primary font-bold">₹120 / hour after grace</p>
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 text-ink shadow-sm ring-1 ring-primary/10 dark:bg-surface-dark dark:text-white">
              <p className="font-semibold">Night charges</p>
              <p className="text-primary font-bold">After 10 PM — transparent</p>
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 text-ink shadow-sm ring-1 ring-primary/10 dark:bg-surface-dark dark:text-white">
              <p className="font-semibold">Toll / parking</p>
              <p className="text-primary font-bold">Actuals shared upfront</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FareTransparency;
