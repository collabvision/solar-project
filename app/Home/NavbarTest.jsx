"use client";

import { Phone, Menu, SunMedium } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="bg-white/80 backdrop-blur-xl border border-white rounded-full shadow-xl px-7 py-4 flex items-center justify-between">
          {/* Logo */}

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
              <SunMedium className="text-white" />
            </div>

            <div>
              <h2 className="font-bold text-xl">WattWorks</h2>

              <p className="text-sm text-gray-500">Energies Pvt. Ltd.</p>
            </div>
          </div>

          {/* Menu */}

          <nav className="hidden lg:flex gap-8 font-medium">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </nav>

          {/* Buttons */}

          <div className="flex items-center gap-3">
            <a
              href="tel:+919845853002"
              className="hidden md:flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 hover:bg-yellow-500 transition"
            >
              <Phone size={18} />
              Call Now
            </a>

            <button className="lg:hidden w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
