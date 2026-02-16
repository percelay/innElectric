import { Zap, ShieldCheck, Wrench, Power, DollarSign, BadgeCheck } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Power,
    title: "Whole-Home Generators",
    description:
      "Automatic backup power that turns on within seconds of an outage, keeping your home running.",
  },
  {
    icon: DollarSign,
    title: "Financing Available",
    description:
      "Flexible financing options to make generator installation accessible for every budget.",
  },
  {
    icon: ShieldCheck,
    title: "Manufacturer Warranty",
    description:
      "Every generator comes with a full manufacturer warranty plus 1 year warranty on installation.",
  },
  {
    icon: Zap,
    title: "Residential Electrical",
    description:
      "Complete electrical services for homes — wiring, panels, lighting, and code upgrades.",
  },
  {
    icon: Wrench,
    title: "Commercial & Industrial",
    description:
      "Reliable power solutions for businesses, warehouses, and industrial facilities across Idaho.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    description:
      "Fully licensed electricians committed to safety standards and high-quality workmanship.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Generator Feature */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Generator Specialist
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-text-main">
              Never Lose
              <br />
              <span className="text-primary">Power Again</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              Automatic backup power that keeps running during outages. Power outages can happen at
              anytime due to storms, grid failures, or unexpected emergencies.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Whole home generator automatically turns on within seconds.",
                "Financing available.",
                "Manufacturer warranty included.",
                "1 year warranty on install.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Zap className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10">
            <Image
              src="/images/image_2.jpg"
              alt="Generator installation by Innovative Electric"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-sm border border-white/10 bg-bg p-8 transition-all duration-300 hover:border-primary/30 hover:bg-bg/80"
            >
              <service.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mt-5 text-lg font-bold text-text-main transition-colors duration-200 group-hover:text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
