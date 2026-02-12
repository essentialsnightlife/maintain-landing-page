import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">
                S
              </span>
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Steadfast
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="#problem"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Problem
            </Link>
            <Link
              href="#solution"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Solution
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            2026 Steadfast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
