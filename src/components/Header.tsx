import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { contactDetails } from "../data/content";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { 
    label: "Tours", 
    dropdown: [
      { to: "/explore", label: "Explore MP" },
      { to: "/jungle-safari", label: "Jungle Safari" },
    ]
  },
  { to: "/booking", label: "Booking" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const [toursClickOpen, setToursClickOpen] = useState(false);
  const toursDropdownRef = useRef<HTMLDivElement>(null);
  
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to book a taxi with Mangalam Tours And Travels. Pickup: ___ | Drop: ___ | Date & Time: ___ | Car Type: ___"
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toursDropdownRef.current && !toursDropdownRef.current.contains(event.target as Node)) {
        setToursClickOpen(false);
        setToursOpen(false);
      }
    };

    if (toursClickOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toursClickOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-surface-dark/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-soft">
            <span className="material-symbols-outlined text-3xl">local_taxi</span>
          </div>
          <div className="leading-tight">
            <p className="font-heading text-xl font-extrabold tracking-tight text-ink dark:text-white">Mangalam </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Tours And Travels</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item, index) => (
            item.dropdown ? (
              <div 
                key={index}
                ref={toursDropdownRef}
                className="relative group"
                onMouseEnter={() => !toursClickOpen && setToursOpen(true)}
                onMouseLeave={() => !toursClickOpen && setToursOpen(false)}
              >
                <button 
                  className="text-sm font-semibold transition-colors hover:text-primary text-ink/80 dark:text-white/80 flex items-center gap-1"
                  onClick={() => {
                    setToursClickOpen(!toursClickOpen);
                    setToursOpen(!toursClickOpen);
                  }}
                >
                  {item.label}
                  <span className="material-symbols-outlined text-base">expand_more</span>
                </button>
                {(toursOpen || toursClickOpen) && (
                  <div className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-white shadow-xl border border-zinc-200/80 py-2 dark:bg-surface-dark dark:border-zinc-800">
                    {item.dropdown.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary/5 hover:text-primary ${isActive ? "text-primary" : "text-ink/80 dark:text-white/80"}`
                        }
                        onClick={() => {
                          setToursClickOpen(false);
                          setToursOpen(false);
                        }}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors hover:text-primary ${isActive ? "text-primary" : "text-ink/80 dark:text-white/80"}`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${contactDetails.phones[0].number.replace(/\s+/g, "")}`}
            className="button-primary flex h-11 items-center gap-2 px-4 text-sm shadow-lg hover:shadow-xl transition-all"
          >
            <span className="material-symbols-outlined text-base">call</span>
            <span className="font-semibold">{contactDetails.phones[0].number}</span>
          </a>
          <a
            href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}?text=${whatsappMessage}`}
            className="flex h-11 items-center rounded-xl border border-primary/20 bg-primary/5 px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            WhatsApp
          </a>
        </div>

        <button
          aria-label="Toggle navigation"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-200 bg-white text-ink shadow-soft lg:hidden"
          onClick={() => {
            setOpen((p) => !p);
            if (open) {
              setToursOpen(false);
            }
          }}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 dark:border-zinc-800 dark:bg-surface-dark lg:hidden">
          <nav className="grid gap-3">
            {navLinks.map((item, index) => (
              item.dropdown ? (
                <div key={index}>
                  <button
                    className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-ink/80 dark:text-white/80"
                    onClick={() => setToursOpen(!toursOpen)}
                  >
                    {item.label}
                    <span className={`material-symbols-outlined text-base transition-transform ${toursOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {toursOpen && (
                    <div className="ml-4 mt-2 grid gap-2">
                      {item.dropdown.map((subItem) => (
                        <NavLink
                          key={subItem.to}
                          to={subItem.to}
                          className={({ isActive }) =>
                            `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${isActive ? "bg-primary/10 text-primary" : "text-ink/80 dark:text-white/80"}`
                          }
                          onClick={() => {
                            setOpen(false);
                            setToursOpen(false);
                          }}
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${isActive ? "bg-primary/10 text-primary" : "text-ink/80 dark:text-white/80"}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </nav>
          <div className="mt-4 grid gap-3">
            <a
              href={`tel:${contactDetails.phones[1].number.replace(/\s+/g, "")}`}
              className="button-primary flex items-center justify-center gap-2 px-3 py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              <span className="material-symbols-outlined text-base">call</span>
              {contactDetails.phones[1].number}
            </a>
            <a
              href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}?text=${whatsappMessage}`}
              className="flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-semibold text-primary"
              onClick={() => setOpen(false)}
            >
              <span className="material-symbols-outlined text-base">chat</span>
              WhatsApp Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
