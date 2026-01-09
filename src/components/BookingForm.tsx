import { contactDetails } from "../data/content";

export const BookingForm = () => {
  return (
    <section id="booking" className="bg-[#fbf8f8] py-16 dark:bg-background-dark">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="rounded-3xl border border-zinc-100 bg-white p-8 shadow-2xl shadow-primary/5 dark:border-zinc-700 dark:bg-surface-dark">
          <div className="mb-8 flex flex-col gap-4">
            <div>
              <p className="section-eyebrow">Online Taxi Booking</p>
              <h2 className="section-title text-2xl md:text-3xl">Book your ride in 60 seconds</h2>
              <p className="text-sm text-ink/70 dark:text-white/70">
                We confirm with driver details on call/WhatsApp. 24×7 support at {contactDetails.phones[0].number}.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href={`tel:${contactDetails.phones[0].number.replace(/\s+/g, "")}`}
                className="button-primary flex h-12 items-center justify-center gap-2 px-5 text-sm w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                <span className="font-bold">Call {contactDetails.phones[0].number}</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-ink/80 dark:text-white/80">
                <span className="material-symbols-outlined text-primary text-base">lock</span>
                <span>Secure & private — no spam</span>
              </div>
            </div>
          </div>

          <form className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink">Name</label>
              <input
                required
                className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none ring-primary/20 focus:border-primary focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="Your name"
                name="name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink">Phone</label>
              <input
                required
                type="tel"
                className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none ring-primary/20 focus:border-primary focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="10-digit mobile"
                name="phone"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink">Email</label>
              <input
                type="email"
                className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none ring-primary/20 focus:border-primary focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="mangalamtourstravels19@gmail.com"
                defaultValue={contactDetails.email}
                name="email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink">Pickup Location</label>
              <input
                required
                className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none ring-primary/20 focus:border-primary focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="Enter pickup point"
                name="pickup"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink">Drop Location</label>
              <input
                required
                className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none ring-primary/20 focus:border-primary focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="Enter destination"
                name="drop"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink">Date &amp; Time</label>
              <input
                required
                type="datetime-local"
                className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none ring-primary/20 focus:border-primary focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="Select date and time"
                name="datetime"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink">Car Type</label>
              <select
                className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none ring-primary/20 focus:border-primary focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900"
                title="Select car type"
                name="carType"
              >
                <option>Sedan (Economical)</option>
                <option>SUV / Innova (Comfort)</option>
                <option>Luxury Traveler / Tempo</option>
                <option>Wedding Luxury Car</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink">Ride Type</label>
              <select
                className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none ring-primary/20 focus:border-primary focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900"
                title="Select ride type"
                name="rideType"
              >
                <option>One Way</option>
                <option>Round Trip</option>
                <option>Airport Transfer</option>
                <option>Local City (8hr/80km)</option>
                <option>Outstation (per km)</option>
              </select>
            </div>
            <div className="space-y-2 lg:col-span-3">
              <label className="text-sm font-semibold text-ink">Notes (optional)</label>
              <textarea
                rows={3}
                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-primary/20 focus:border-primary focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="E.g., child seat needed, flight number, preferred pickup gate"
                name="notes"
              />
            </div>
            <div className="lg:col-span-3">
              <button
                type="submit"
                className="button-primary flex w-full items-center justify-center gap-2 py-4 text-lg"
              >
                <span className="material-symbols-outlined">check_circle</span>
                Check Availability & Pricing
              </button>
              <p className="mt-3 text-xs text-ink/60 dark:text-white/60">
                On submit, our team will call or WhatsApp you with exact fare, toll/parking notes, and driver details. HTTPS ready & validation included by default.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
