"use client";

import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <Zap className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
            <span className="text-lg font-bold tracking-tight text-text-main">
              Innovative Electric
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-muted transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-sm bg-primary px-5 py-2 text-sm font-bold text-bg transition-all duration-200 hover:bg-white hover:text-bg"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-main"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-text-muted transition-colors duration-200 hover:text-primary border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-sm bg-primary px-5 py-2.5 text-center text-sm font-bold text-bg transition-all duration-200 hover:bg-white"
          >
            Free Estimate
          </Link>
        </div>
      )}
    </nav>
  );
}
