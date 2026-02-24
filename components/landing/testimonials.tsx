import { Check } from "lucide-react";

const audiences = [
  "Yoga, Hyrox, Pilates, CrossFit, fitness studios",
  "1\u20133 locations",
  "Classes with limited capacity",
  "Currently using manual or semi-manual booking systems",
];

export function Testimonials() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Who this is for
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Built for studios that run on class schedules
            </span>
          </h2>
        </div>

        <div className="mx-auto max-w-md">
          <div className="rounded-2xl border border-border bg-card p-8">
            <ul className="flex flex-col gap-5">
              {audiences.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
