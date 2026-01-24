import CTASection from "../components/CTASection";
import { contactDetails } from "../data/content";

const ContactPage = () => (
  <main>
    <section className="bg-white py-14 dark:bg-background-dark">
      <div className="mx-auto max-w-5xl space-y-4 px-4 md:px-8">
        <p className="section-eyebrow">Contact</p>
        <h1 className="section-title">We’re here 24×7</h1>
        <p className="text-base text-ink/70 dark:text-white/70">
          Call, WhatsApp, or email us for bookings, corporate partnerships, or custom MP tour planning.
        </p>
      </div>
    </section>
    <section className="bg-[#f5f5f5] py-12 dark:bg-zinc-900">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 md:px-8 md:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-zinc-100 bg-white p-6 shadow-soft dark:border-zinc-700 dark:bg-surface-dark">
          <h2 className="text-xl font-bold text-ink dark:text-white">Reach us</h2>
          <p className="text-sm text-ink/70 dark:text-white/70">Mangalam Tours And Travels</p>
          <div className="space-y-3 text-sm text-ink/80 dark:text-white/70">
            <div className="flex gap-2">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span>{contactDetails.address}</span>
            </div>
            {contactDetails.phones.map((phone) => (
              <div className="flex gap-2" key={phone.number}>
                <span className="material-symbols-outlined text-primary">call</span>
                <a href={`tel:${phone.number.replace(/\s+/g, "")}`} className="hover:text-primary">
                  {phone.number}
                </a>
              </div>
            ))}
            <div className="flex gap-2">
              <span className="material-symbols-outlined text-primary">mail</span>
              <a href={`mailto:${contactDetails.email}`} className="hover:text-primary">
                {contactDetails.email}
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-3 rounded-2xl border border-zinc-100 bg-white p-6 shadow-soft dark:border-zinc-700 dark:bg-surface-dark">
          <h2 className="text-xl font-bold text-ink dark:text-white">Quick links</h2>
          <ul className="space-y-2 text-sm text-primary">
            <li>
              <a
                href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I want to book a taxi. Pickup: ___ | Drop: ___ | Date & Time: ___")}`}
                className="flex items-center gap-2 hover:text-primary-hover"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                WhatsApp instant booking
              </a>
            </li>
            <li>
              <a href="tel:+919009234111" className="flex items-center gap-2 hover:text-primary-hover">
                <span className="material-symbols-outlined text-base">phone_in_talk</span>
                Call support: +91 9669285999
              </a>
            </li>
            <li>
              <a href="tel:+919669285999" className="flex items-center gap-2 hover:text-primary-hover">
                <span className="material-symbols-outlined text-base">phone_android</span>
                Booking line: +91 9009234111
              </a>
            </li>
          </ul>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-ink/80 dark:text-white/80">
            <p className="font-semibold text-primary">Business hours</p>
            <p>Available 24×7. For night pickups, please share pickup point & landmark for faster dispatch.</p>
          </div>
        </div>
      </div>
    </section>
    <CTASection />
  </main>
);
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17895816129"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17895816129');
</script>

export default ContactPage;
