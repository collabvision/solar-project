"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import "./Navbar.css";
import Image from "next/image";

export default function Navbar({ theme = "light" }) {
  const pathname = usePathname();
  const router = useRouter();

  const isDark = theme === "dark";

  /* ===============================
      STATE
  =============================== */

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [showSearch, setShowSearch] = useState(false);

  const searchRef = useRef(null);

  /* ===============================
      NAVIGATION
  =============================== */

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  /* ===============================
      SEARCHABLE SERVICES
  =============================== */

  const services = [
    {
      title: "Solar PV Solutions",
      path: "/services/solar-pv",
    },

    {
      title: "EV Charging Solutions",
      path: "/services/ev-charging",
    },

    {
      title: "Domestic Scale Wind Turbines",
      path: "/services/wind-turbines",
    },

    {
      title: "Solar Appliances",
      path: "/services/solar-appliances",
    },

    {
      title: "Energy Audits",
      path: "/services/energy-audits",
    },

    {
      title: "ESCOM Liaisoning Services",
      path: "/services/escom-liaisoning",
    },

    {
      title: "Solar Financing Solutions",
      path: "/services/solar-financing",
    },
  ];

  /* ===============================
      FILTER SEARCH
  =============================== */

  const filteredServices = useMemo(() => {
    if (!search.trim()) {
      return services;
    }

    return services.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  /* ===============================
      CLOSE SEARCH
  =============================== */

  useEffect(() => {
    function handleClickOutside(event) {
      if (!searchRef.current?.contains(event.target)) {
        setShowSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* ===============================
      CLOSE MOBILE MENU
      WHEN ROUTE CHANGES
  =============================== */

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowSearch(false);
    setSearch("");
  }, [pathname]);

  /* ===============================
      NAVIGATION HANDLER
  =============================== */

  const navigate = (href) => {
    setMobileMenuOpen(false);

    setShowSearch(false);

    setSearch("");

    router.push(href);
  };
  return (
    <>
      <header className={`navbar ${isDark ? "dark" : "light"}`}>
        <div className="navbar-container">
          {/* =========================
            MOBILE NAVBAR
        ========================= */}

          <div className="mobile-navbar">
            <Link
              href="/"
              className="mobile-logo"
              onClick={() => navigate("/")}
            >
              <Image
                src="/logo.jpeg"
                alt="WattWorks Energies"
                width={52}
                height={52}
              />
              <div>
                <h2>WattWorks</h2>
                <span>ENERGIES</span>
              </div>
            </Link>

            <button
              type="button"
              className="menu-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? (
                <X size={28} strokeWidth={2.5} />
              ) : (
                <Menu size={28} strokeWidth={2.5} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}

          <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
            {links.map((item) => (
              <button
                key={item.href}
                type="button"
                className={`mobile-link ${
                  pathname === item.href ? "active" : ""
                }`}
                onClick={() => navigate(item.href)}
              >
                {item.label}
              </button>
            ))}

            {/* <a
              href="tel:+919845853002"
              className="mobile-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
              <ArrowUpRight size={18} />
            </a> */}
          </div>

          {/* =========================
            DESKTOP NAVBAR
        ========================= */}

          <div className="desktop-navbar">
 {/* CENTER */}

            <Link href="/" className="logo">
              <Image
                src="/logo.jpeg"
                alt="WattWorks Energies"
                width={55}
                height={55}
              />
              <div className="logoTxt">
                <span className="logo-title">WattWorks</span>
                <span className="logo-sub">ENERGIES</span>
              </div>
            </Link>

            {/* LEFT */}

            <nav className="nav-links">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    item.href === "/services"
                      ? pathname.startsWith("/services")
                        ? "active"
                        : ""
                      : pathname === item.href
                        ? "active"
                        : ""
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>

           

            {/* RIGHT */}

            {/* <div className="nav-actions">
              {/* Search *

              <div className="search-wrapper" ref={searchRef}>
                <Search size={18} className="search-icon" />

                <input
                  type="text"
                  value={search}
                  placeholder="Search services..."
                  className="search-input"
                  onFocus={() => {
                    setShowSearch(true);
                  }}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowSearch(true);
                  }}
                />

                {showSearch && (
                  <div className="search-dropdown">
                    {filteredServices.length ? (
                      filteredServices.map((service) => (
                        <button
                          key={service.path}
                          type="button"
                          className="search-item"
                          onClick={() => navigate(service.path)}
                        >
                          <div>
                            <h4>{service.title}</h4>
                            <p>{service.path}</p>
                          </div>

                          <ArrowUpRight size={18} />
                        </button>
                      ))
                    ) : (
                      <div className="search-empty">
                        No matching service found.
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Quote */}

              {/* <a href="tel:+919845853002" className="quote-btn">
                Get Quote
                <ArrowUpRight size={18} />
              </a> 
            </div> */}
          </div>
        </div>
      </header>

      {/* WhatsApp */}

      <div className="fixed bottom-6 right-6 z-50 group">
        <a
          href="https://wa.me/919845853002"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366] shadow-[0_20px_40px_rgba(37,211,102,0.35)] transition duration-300 hover:scale-110"
        >
          <FaWhatsapp className="text-4xl text-white" />
        </a>

        <span className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-xl transition duration-300 group-hover:opacity-100">
          Chat With Us
        </span>
      </div>
    </>
  );
}
