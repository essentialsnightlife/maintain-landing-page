import { BarChart3, Bell, RefreshCw, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Track real demand per class",
    description:
      "See exactly which classes fill, which stall, and where the gaps are. Make decisions based on data, not guesswork.",
  },
  {
    icon: Bell,
    title: "Reduce no-shows with simple reminders",
    description:
      "Automatic, well-timed reminders so members actually show up. No complex app for them to download.",
  },
  {
    icon: RefreshCw,
    title: "Refill cancelled spots automatically",
    description:
      "When someone cancels, the next person on the waitlist gets notified instantly. No manual chasing.",
  },
  {
    icon: CalendarCheck,
    title: "See which classes to add, cancel, or reschedule",
    description:
      "Clear attendance reports tell you where to focus and optimize your schedule with confidence.",
  },
];

export function Features() {
  return (
    <section id="solution" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            What Session sync does
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              We help studios do more with what they already have
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            No new apps, platforms or complexity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
