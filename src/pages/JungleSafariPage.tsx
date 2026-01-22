import CTASection from "../components/CTASection";
import JungleSafari from "../components/JungleSafari";

const JungleSafariPage = () => (
  <main>
    <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20 dark:from-primary/20 dark:to-primary/10">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
              <span className="material-symbols-outlined text-4xl">forest</span>
            </div>
          </div>
          <p className="section-eyebrow">Wildlife Experiences</p>
          <h1 className="section-title text-3xl sm:text-4xl md:text-5xl">Jungle Safari Adventures</h1>
          <p className="text-base sm:text-lg text-ink/70 dark:text-white/70 max-w-3xl mx-auto">
            Embark on thrilling wildlife safaris across India's finest national parks and reserves. 
            Mangalam Tours and Travels has special tie-ups with expert trip teams to arrange exclusive 
            safari experiences, priority bookings, and premium wildlife encounters for our guests.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm dark:bg-surface-dark">
              <span className="material-symbols-outlined text-primary text-xl">verified</span>
              <span className="text-sm font-semibold text-ink dark:text-white">Expert Naturalists</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm dark:bg-surface-dark">
              <span className="material-symbols-outlined text-primary text-xl">event_available</span>
              <span className="text-sm font-semibold text-ink dark:text-white">Priority Bookings</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm dark:bg-surface-dark">
              <span className="material-symbols-outlined text-primary text-xl">landscape</span>
              <span className="text-sm font-semibold text-ink dark:text-white">Premium Safaris</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <JungleSafari />
    <section className="bg-zinc-50 py-16 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink dark:text-white mb-4">Why Choose Our Safari Packages?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-2xl">handshake</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-ink dark:text-white mb-2">Special Tie-ups</h3>
                <p className="text-sm text-ink/70 dark:text-white/70">
                  Exclusive partnerships with expert trip teams and safari operators ensure you get the best wildlife experiences with priority bookings.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-2xl">photo_camera</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-ink dark:text-white mb-2">Wildlife Photography</h3>
                <p className="text-sm text-ink/70 dark:text-white/70">
                  Professional guides and photographers accompany you to capture stunning wildlife moments and ensure memorable experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-2xl">directions_car</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-ink dark:text-white mb-2">Complete Transportation</h3>
                <p className="text-sm text-ink/70 dark:text-white/70">
                  Comfortable AC vehicles from your doorstep to the safari gates. We handle all travel logistics so you can focus on the adventure.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-2xl">hotel</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-ink dark:text-white mb-2">Accommodation Support</h3>
                <p className="text-sm text-ink/70 dark:text-white/70">
                  We coordinate premium resorts and jungle lodges near the reserves, ensuring comfortable stays amidst nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CTASection />
  </main>
);

export default JungleSafariPage;
