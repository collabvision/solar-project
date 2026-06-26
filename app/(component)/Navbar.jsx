"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import { FaWhatsapp } from "react-icons/fa6";

export default function Navbar({ theme = "light" }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const isDark = theme === "dark";

  return (
    <>
      <header className={`navbar ${isDark ? "dark" : "light"}`}>
        <div className="navbar-container">
          {/* =========================
              MOBILE NAVBAR
          ========================== */}

          <div className="mobile-navbar">
            <Link href="/" className="mobile-logo">
              <h2>Wattworks</h2>

              <span>ENERGIES</span>
            </Link>

            <button
              className="menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mobile-menu">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="tel:+919845853002"
                className="mobile-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote ↗
              </a>
            </div>
          )}

          {/* =========================
              DESKTOP NAVBAR
          ========================== */}

          <div className="desktop-navbar">
            {/* Left */}

            <nav className="nav-links">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Center */}

            <Link href="/" className="logo">
              <span className="logo-title">Wattworks</span>

              <span className="logo-sub">ENERGIES</span>
            </Link>

            {/* Right */}

            <div className="nav-actions">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />

              <a href="tel:+919845853002" className="quote-btn">
                Get Quote
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919845853002"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366] shadow-[0_20px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:rotate-6"
        >
          <FaWhatsapp className="text-4xl text-white transition-transform duration-300 group-hover:scale-110" />
        </a>

        <span className="absolute -left-28 top-1/2 -translate-y-1/2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100">
          Chat With Us
        </span>
      </div>
    </>
  );
}
