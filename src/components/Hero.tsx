import { contactDetails } from "../data/content";

export const Hero = () => {
  const primaryCall = contactDetails.phones[0].number;
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to book a taxi. Pickup: ___ | Drop: ___ | Date & Time: ___ | Car Type: ___"
  );

  return (
    <section className="relative overflow-hidden bg-background-light py-16 dark:bg-background-dark lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="section-eyebrow">Premium Chauffeur Service</p>
          <h1 className="text-4xl font-extrabold leading-tight text-ink dark:text-white md:text-6xl">
            Reliable Taxi <span className="text-primary">Services in Bhopal</span>
          </h1>
          <p className="text-lg leading-relaxed text-ink/70 dark:text-white/70">
            Safe, punctual, and affordable rides for local city travel, airport transfers, outstation trips, corporate travel, weddings, and MP tour packages with 24×7 support.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${primaryCall.replace(/\s+/g, "")}`}
              className="button-primary flex h-14 items-center justify-center gap-2 px-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">call</span>
              <span className="font-bold">Call Now</span>
            </a>
            <a
              href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}?text=${whatsappMessage}`}
              className="flex h-14 items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-6 text-lg font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Booking
            </a>
            <a
              href="#booking"
              className="flex h-14 items-center justify-center gap-2 rounded-xl border border-zinc-200 px-6 text-lg font-semibold text-ink transition-colors hover:border-primary hover:text-primary dark:border-zinc-700 dark:text-white"
            >
              Book Online
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-ink/70 dark:text-white/70">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              24×7 Support
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">payments</span>
              Transparent Pricing
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">event_available</span>
              Instant Confirmation
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-full w-full -rotate-2 rounded-3xl bg-primary/10" />
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/15">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNcLiUNmj_U-ADfm7cK1JJ_lu_6mDIXSfZq2HyHj79HapCy4GmeKYI6dNPGfUQbIBcRLapKAApnORr9hJWtFMcNFu2PZy865Z8lX4EpAdHmeIbB830lpyPIdPNVUu8EF9M8bq0cyVSlSLuUMaQXrg20VVanLdPeHm069TWTSFpLM4i2H-MUDu8Nzv3rO1TWX2zkHiq_edxADvJWGuXQUOeY0Rm7sXPaQQXM5p2xkbt5CzWzoVpPOEllH-cQc5MRBQyaQazu6D2g9Uc"
              alt="Luxury white sedan parked for Mangalam Tours And Travels"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
