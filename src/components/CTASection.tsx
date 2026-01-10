import { contactDetails } from "../data/content";

const CTASection = () => {
	const whatsappLink = `https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
		"Hi, I want to book a taxi with Mangalam Tours And Travels. Pickup: ___ | Drop: ___ | Date & Time: ___ | Car Type: ___"
	)}`;

	return (
		<section className="bg-gradient-to-r from-primary via-primary-hover to-primary-dark py-10 text-white">
			<div className="mx-auto max-w-6xl px-4 md:px-8">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<div>
						<h2 className="font-heading text-2xl font-extrabold md:text-3xl">Ready to ride?</h2>
						<p className="mt-1 text-white/90">Instant WhatsApp booking. Transparent fares. Verified drivers.</p>
					</div>
					<div className="flex flex-wrap items-center gap-3">
						<a
							className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary shadow-soft hover:bg-white/90"
							href={whatsappLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="material-symbols-outlined text-base">chat</span>
							WhatsApp Book Now
						</a>
						<a
							className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-white/20"
							href={`tel:${contactDetails.phones[0].number.replace(/\s+/g, "")}`}
						>
							<span className="material-symbols-outlined text-base">call</span>
							Call {contactDetails.phones[0].number}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
