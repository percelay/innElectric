import { Phone, MapPin, Clock, User } from "lucide-react";
import Link from "next/link";

const team = [
  { name: "Jason", role: "Owner", phone: "208-400-1139" },
  { name: "Jacob", role: "Owner", phone: "208-400-1132" },
  { name: "Jeff", role: "Estimator", phone: "208-400-1111" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-text-main">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            We stay in constant communication with our customers until the job is done.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Team Cards */}
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-sm border border-white/10 bg-surface p-8 text-center transition-all duration-300 hover:border-primary/30"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                <User className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-text-main">{member.name}</h3>
              <p className="text-sm text-primary font-medium">{member.role}</p>
              <Link
                href={`tel:${member.phone.replace(/-/g, "")}`}
                className="mt-3 inline-flex items-center gap-2 text-sm text-text-muted transition-colors duration-200 hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                {member.phone}
              </Link>
            </div>
          ))}
        </div>

        {/* Info Bar */}
        <div className="mt-12 grid gap-6 rounded-sm border border-white/10 bg-surface p-8 sm:grid-cols-3">
          <div className="flex items-start gap-4">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-bold text-text-main">Office Phone</p>
              <Link
                href="tel:2084763321"
                className="text-sm text-text-muted transition-colors duration-200 hover:text-primary"
              >
                208-476-3321
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-bold text-text-main">Location</p>
              <p className="text-sm text-text-muted">
                1169 Vida Ave, Orofino, ID 83544
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-bold text-text-main">Office Hours</p>
              <p className="text-sm text-text-muted">Mon–Fri: 07:00 am – 05:30 pm</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="tel:2084763321"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-10 py-4 text-lg font-bold text-bg transition-all duration-200 hover:bg-white hover:text-bg hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Call for a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
