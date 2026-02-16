import { Star } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Innovative Electric installed our whole-home generator and we couldn't be happier. Professional, on time, and the work was flawless.",
    rating: 5,
  },
  {
    name: "Mike R.",
    text: "Jason and his team rewired our entire commercial building. They were communicative throughout the project and finished ahead of schedule.",
    rating: 5,
  },
  {
    name: "Linda K.",
    text: "Best electricians in the area. They handled our panel upgrade quickly and at a fair price. Highly recommend!",
    rating: 5,
  },
  {
    name: "Tom B.",
    text: "We had an emergency electrical issue and they responded the same day. True professionals who care about their customers.",
    rating: 5,
  },
  {
    name: "Jennifer W.",
    text: "From the initial estimate to the final inspection, Innovative Electric exceeded our expectations. Outstanding quality of work.",
    rating: 5,
  },
  {
    name: "Robert D.",
    text: "Had them install a generator for our shop. The financing options made it easy and the warranty gives great peace of mind.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-text-main">
            What Our Clients <span className="text-primary">Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            We stay in constant communication with our customers until the job is done.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-sm border border-white/10 bg-bg p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 text-sm font-bold text-text-main">{t.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="https://share.google/vWCgvd6j9mYbRECxz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-white"
          >
            See all reviews on Google
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
