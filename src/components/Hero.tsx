import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end pb-24 pt-16">
      {/* Background Image */}
      <Image
        src="/images/image_1.jpg"
        alt="Electrical work by Innovative Electric"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30" />

      {/* Industrial Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wider text-primary uppercase">
              Serving North Central Idaho
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-text-main">
            Expert Electrical
            <br />
            Solutions for
            <br />
            <span className="text-primary">Every Need</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-text-muted leading-relaxed">
            Reliable residential, commercial, and industrial services in north central Idaho.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-base font-bold text-bg transition-all duration-200 hover:bg-white hover:text-bg hover:scale-105"
            >
              Get a Free Estimate
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 px-8 py-4 text-base font-medium text-text-main transition-all duration-200 hover:border-primary hover:text-primary"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
