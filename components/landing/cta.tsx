import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="pilot" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-16 md:py-20">
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              <span className="text-balance">Join the pilot</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm font-medium text-primary-foreground/60">
              Limited to a small number of studios
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                  <a target="_blank" href="https://forms.gle/dxGzFKaHGb3w334W8" rel="noopener noreferrer">
                    Join the pilot
                  </a>
              </Button>
            </div>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/50">
              No commitment. No obligation. Just testing if this is worth
              building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
