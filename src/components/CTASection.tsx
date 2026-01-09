import { contactDetails } from "../data/content";

export const CTASection = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to book a taxi. Pickup: ___ | Drop: ___ | Date: ___ | Time: ___ | Car: ___"
  );
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-white">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 text-center md:px-8">
        <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl">Ready to start your journey?</h2>
        <p className="mt-3 text-base sm:text-lg text-white/80">
          Call or WhatsApp for instant confirmation. Transparent fares, toll & parking notes upfront.
        </p>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href={`tel:${contactDetails.phones[0].number.replace(/\s+/g, "")}`}
            className="flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-6 text-lg font-bold text-primary shadow-soft transition hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined">call</span>
            {contactDetails.phones[0].number}
          </a>
          <a
            href={`tel:${contactDetails.phones[1].number.replace(/\s+/g, "")}`}
            className="flex h-14 items-center justify-center gap-2 rounded-xl border border-white/60 px-6 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            <span className="material-symbols-outlined">support_agent</span>
            {contactDetails.phones[1].number}
          </a>
          <a
            href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}?text=${whatsappMessage}`}
            className="flex h-14 items-center justify-center gap-2 rounded-xl border border-white/60 px-6 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            <span className="material-symbols-outlined">chat</span>
            WhatsApp Auto-Fill
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
