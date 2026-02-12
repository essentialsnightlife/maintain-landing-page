const steps = [
  {
    number: "01",
    title: "We set up a simple booking link",
    description:
      "No tech setup on your end. We create a clean booking page for your classes and share it with you.",
  },
  {
    number: "02",
    title: "Customers get automatic reminders",
    description:
      "Members who book receive well-timed reminders so they actually show up. Cancellations trigger automatic waitlist backfill.",
  },
  {
    number: "03",
    title: "You get a clear attendance report",
    description:
      "A simple dashboard shows you real attendance data, demand patterns, and where your schedule can improve.",
  },
  {
    number: "04",
    title: "We measure the impact over 2 weeks",
    description:
      "Together we track no-show rates, fill rates, and rebookings. You see the numbers, not just promises.",
  },
  {
    number: "05",
    title: "If it doesn't help, we stop",
    description:
      "No lock-in, no contracts. If the data doesn't show improvement, we part ways. Simple as that.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-border bg-card px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            How the pilot works
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Five steps. Two weeks. Real results.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                  <span className="font-display text-sm font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="my-0 h-full w-px bg-border" />
                )}
              </div>
              <div className={`pb-10 ${index === steps.length - 1 ? "pb-0" : ""}`}>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
