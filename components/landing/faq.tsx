"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is the pilot?",
    answer:
      "It's a free, no-obligation 2-week test. We set up a booking + reminder system for your studio and measure the impact on attendance. If it doesn't help, we stop. No cost, no contract.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Less than a day. We handle the technical setup for you. All you need to do is share your class schedule and point your members to the booking link.",
  },
  {
    question: "Do my members need to download an app?",
    answer:
      "No. Everything works through a simple web link and SMS/email reminders. No app downloads, no accounts to create, no friction.",
  },
  {
    question: "What kind of studios is this for?",
    answer:
      "Boutique studios that run class-based schedules with limited capacity \u2014 yoga, Pilates, CrossFit, martial arts, cycling, barre, and similar formats. Typically 1\u20133 locations.",
  },
  {
    question: "Will this replace my current booking system?",
    answer:
      "Not necessarily. For the pilot, we set up a standalone booking link to test the impact. If it works, we can discuss integrating with your existing tools or replacing them entirely.",
  },
  {
    question: "What happens after the 2-week pilot?",
    answer:
      "We share the results with you. If the numbers show improvement, we'll talk about next steps. If they don't, we part ways \u2014 no hard feelings, no bill.",
  },
  {
    question: "How many studios are you accepting?",
    answer:
      "We're keeping the pilot small so we can give each studio hands-on support. We're accepting a limited number of studios at a time.",
  },
  {
    question: "Is there any cost?",
    answer:
      "The pilot is completely free. We're still validating the product and your feedback is more valuable to us than payment at this stage.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border bg-card px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Questions you might have</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
