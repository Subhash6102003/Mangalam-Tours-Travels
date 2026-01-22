import { Link } from "react-router-dom";
import { contactDetails, services } from "../data/content";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Fleet", to: "/fleet" },
  { label: "Booking", to: "/booking" },
  { label: "Explore MP", to: "/explore" },
  { label: "Jungle Safari", to: "/jungle-safari" },
  { label: "Contact", to: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 md:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-primary">local_taxi</span>
            <h2 className="text-xl font-extrabold">Mangalam Tours And Travels</h2>
          </div>
          <p className="text-sm text-white/70">
            Professional taxi, car rental, and Madhya Pradesh tour specialist based in Bhopal. Safety-first drivers, modern fleet, transparent fares.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 font-semibold text-white shadow-soft hover:bg-primary-hover"
              href={`tel:${contactDetails.phones[0].number.replace(/\s+/g, "")}`}
            >
              <span className="material-symbols-outlined text-base">call</span>
              Primary: {contactDetails.phones[0].number}
            </a>
            <a
              className="flex items-center gap-2 rounded-lg bg-primary/20 px-3 py-2 font-semibold text-white shadow-soft hover:bg-primary/30"
              href="tel:+919009234111"
            >
              <span className="material-symbols-outlined text-base">support_agent</span>
              Support: +91 9009234111
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold">Our Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {services.slice(0, 6).map((svc) => (
              <li key={svc.title}>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">local_taxi</span>
                  {svc.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link className="transition-colors hover:text-primary" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="transition-colors hover:text-primary" to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-primary" to="/terms">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3 text-sm text-white/70">
          <h4 className="text-lg font-bold text-white">Contact</h4>
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span>{contactDetails.address}</span>
          </div>
          {contactDetails.phones.map((phone) => (
            <div className="flex gap-3" key={phone.number}>
              <span className="material-symbols-outlined text-primary">call</span>
              <a className="hover:text-primary" href={`tel:${phone.number.replace(/\s+/g, "")}`}>
                {phone.number}
              </a>
            </div>
          ))}
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-primary">mail</span>
            <a className="hover:text-primary" href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Mangalam Tours And Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
