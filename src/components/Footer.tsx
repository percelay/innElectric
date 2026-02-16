import { Zap, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-text-main">Innovative Electric</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Expert electrical solutions for residential, commercial, and industrial needs across
              north central Idaho.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <Link
                  href="tel:2084763321"
                  className="text-sm text-text-muted transition-colors duration-200 hover:text-primary"
                >
                  208-476-3321
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-text-muted">
                  1169 Vida Ave
                  <br />
                  Orofino, ID 83544
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">Hours</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="text-sm text-text-muted">
                  <p>Monday – Friday</p>
                  <p>07:00 am – 05:30 pm</p>
                </div>
              </li>
              <li className="text-sm text-text-muted pl-6">
                Saturday – Sunday: Closed
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {["Home", "Services", "About", "Contact"].map((label) => (
                <li key={label}>
                  <Link
                    href={`#${label.toLowerCase()}`}
                    className="text-sm text-text-muted transition-colors duration-200 hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Innovative Electric Services Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
