import Image from "next/image";
import { Award, Users, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Award, label: "Licensed & Insured" },
  { icon: Users, label: "Expert Team" },
  { icon: Clock, label: "Reliable Service" },
  { icon: MapPin, label: "North Central Idaho" },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-sm border border-black/10">
            <Image
              src="/images/people.webp"
              alt="Innovative Electric team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              About Us
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-text-main">
              Experienced
              <br />
              <span className="text-primary">Electricians</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              At Innovative Electric, we pride ourselves on our skilled team of electricians. With
              years of experience in residential, commercial, and industrial projects, we ensure
              high-quality workmanship and safety standards.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 border border-primary/20">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-main">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
