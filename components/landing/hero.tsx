import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Now accepting pilot studios
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">
                Fill more classes. Fewer no-shows.
              </span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              <span className="text-balance">
                Without more marketing.
              </span>
            </p>

            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              A lightweight booking + reminder system for boutique studios that
              want predictable attendance.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <Link href="#pilot">
                  Join the pilot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <Image
                src="/hero-dashboard.jpg"
                alt="Steadfast dashboard showing class schedule and attendance analytics"
                width={800}
                height={520}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
