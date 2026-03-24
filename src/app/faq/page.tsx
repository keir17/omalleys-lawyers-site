import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | O'Malleys Lawyers",
  description: "Answers to common questions about family law costs, Legal Aid, timeframe, and our legal services in Christchurch."
};

const allFaqs = [
  {
    question: "How much does family law advice cost?",
    answer: "We offer both hourly rate and fixed-fee billing depending on the matter. Many family law cases also qualify for Legal Aid - we'll always let you know if you're eligible. We believe in being upfront about costs before any work begins."
  },
  {
    question: "Do you offer Legal Aid?",
    answer: "Yes. We're one of the few Christchurch law firms still actively providing Legal Aid. If you think you might qualify, contact us and we'll help you find out at no cost."
  },
  {
    question: "How quickly can you see me?",
    answer: "We make best endeavours to see new clients with pressing matters within one to two working days. Urgent situations (such as family violence or immediate custody concerns) are attended to as swiftly as possible."
  },
  {
    question: "Where are you located, and is there parking?",
    answer: "We're on Level 1 at 68 Fitzgerald Avenue, Christchurch Central City. Off-street parking is available - just one less thing to worry about when you visit."
  },
  {
    question: "What's the difference between a barrister and a solicitor?",
    answer: "In New Zealand most lawyers are admitted as both Barristers and Solicitors - meaning they can advise clients AND appear in court. All our lawyers are fully qualified to represent you at any level of the Family Court."
  },
  {
    question: "I need a will - how long does it take?",
    answer: "A straightforward will can usually be completed within a few days once we have your instructions. We'll walk you through the key decisions clearly so you don't have to guess."
  },
  {
    question: "Can you help with a property purchase even if I'm not a current client?",
    answer: "Absolutely. Our conveyancing services are available to new clients buying or selling residential property in Christchurch and surrounds."
  }
];

export default function FAQPage() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <PageHero 
        title="Frequently Asked Questions" 
        subtitle="Clear answers to help you understand what to expect when working with us."
      />

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="All FAQs" centered />
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border mt-12">
            <Accordion className="w-full">
              {allFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
                  <AccordionTrigger className="text-left font-heading text-xl text-navy py-6 hover:text-teal-brand hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-mid text-base leading-relaxed pb-6 pr-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}
