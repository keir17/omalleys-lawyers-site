"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "Do you offer Legal Aid?",
    answer: "Yes. We're one of the few Christchurch law firms still actively providing Legal Aid. If you think you might qualify, contact us and we'll help you find out at no cost."
  },
  {
    question: "How much does family law advice cost?",
    answer: "We offer both hourly rate and fixed-fee billing depending on the matter. Many family law cases also qualify for Legal Aid. We believe in being upfront about costs before any work begins."
  },
  {
    question: "How quickly can you see me?",
    answer: "We make best endeavours to see new clients with pressing matters within one to two working days. Urgent situations (such as family violence or immediate custody concerns) are attended to as swiftly as possible."
  },
  {
    question: "Where are you located, and is there parking?",
    answer: "We're on Level 1 at 68 Fitzgerald Avenue, Christchurch Central City. Off-street parking is available — just one less thing to worry about when you visit."
  }
];

export function HomeFAQ() {
  return (
    <section className="py-24 bg-surface/50 border-t border-border/50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-start">
        
        <div className="lg:w-1/3 sticky top-32">
          <SectionHeading 
            title="Common Questions" 
            subtitle="Straightforward answers to the most common questions we hear from new clients."
          />
          <Button asChild className="bg-blush hover:bg-blush/90 text-white shadow-sm mt-4">
            <Link href="/faq">View All FAQs</Link>
          </Button>
        </div>

        <div className="lg:w-2/3 w-full bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-border">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
                <AccordionTrigger className="text-left font-heading text-xl text-navy py-6 hover:text-teal-brand hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-mid text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
