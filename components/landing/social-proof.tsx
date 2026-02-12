import { CalendarX, Ghost, Clock, Pencil } from "lucide-react";

const problems = [
  {
    icon: Ghost,
    text: "People forget they booked",
  },
  {
    icon: CalendarX,
    text: "Classes run half empty",
  },
  {
    icon: Clock,
    text: "Cancellations come too late to refill",
  },
  {
    icon: Pencil,
    text: "Schedules are managed manually",
  },
];

export function SocialProof() {
  return (
    <section id="problem" className="border-y border-border bg-card px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            The reality
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Studios lose money every week because:
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {problems.map((problem) => (
            <div
              key={problem.text}
              className="flex items-center gap-4 rounded-xl border border-border bg-background p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <problem.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-medium leading-snug text-foreground">
                {problem.text}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-muted-foreground">
            Most studios accept this as "just how it is".
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-foreground">
            {"It doesn't have to be."}
          </p>
        </div>
      </div>
    </section>
  );
}
