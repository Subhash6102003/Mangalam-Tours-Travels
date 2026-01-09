const TermsPage = () => (
  <main className="bg-white py-14 dark:bg-background-dark">
    <div className="mx-auto max-w-4xl space-y-6 px-4 md:px-8">
      <p className="section-eyebrow">Terms & Conditions</p>
      <h1 className="section-title">Ride and rental policies</h1>
      <ul className="space-y-3 text-sm leading-relaxed text-ink/80 dark:text-white/70">
        <li>
          <strong>Booking:</strong> Trips are confirmed after we share driver and vehicle details. Please provide accurate pickup/drop info for on-time dispatch.
        </li>
        <li>
          <strong>Inclusions:</strong> Base fare covers vehicle, driver, and fuel per km/package. Tolls, parking, interstate taxes, and entry fees are extra at actuals unless specified.
        </li>
        <li>
          <strong>Waiting & night:</strong> Waiting beyond grace period is chargeable. Night charges may apply for pickups after 10 PM.
        </li>
        <li>
          <strong>Safety:</strong> All rides are subject to standard road safety norms. Seat belts are mandatory. Luggage should be within vehicle capacity.
        </li>
        <li>
          <strong>Cancellations:</strong> Please inform us early for schedule changes. Free reschedule subject to availability; late cancellations may attract minimal charges.
        </li>
        <li>
          <strong>Payments:</strong> Digital payments and UPI accepted. Corporate billing & GST invoices available on request.
        </li>
      </ul>
    </div>
  </main>
);

export default TermsPage;
