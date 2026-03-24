"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { User, ShieldCheck, ChatDots, Scales } from "@phosphor-icons/react";

const differentiators = [
  {
    title: "Established 2006",
    value: "20+",
    suffix: "Years",
    description: "Deep roots in Christchurch. Over two decades of specialist family law experience.",
    icon: Scales,
  },
  {
    title: "Accessible Help",
    value: "100%",
    suffix: "Clear",
    description: "Legal Aid provider, fixed-fee options, off-street parking, and urgent appointments.",
    icon: ShieldCheck,
  },
  {
    title: "Personal Service",
    value: "1:1",
    suffix: "Lawyer",
    description: "No mid-matter handoffs. One dedicated lawyer from start to finish.",
    icon: User,
  },
  {
    title: "Plain Speaking",
    value: "Zero",
    suffix: "Jargon",
    description: "We explain everything clearly. Always kept informed. No Latin.",
    icon: ChatDots,
  },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-warm-white border-y border-border/60">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <SectionHeading 
            title="Why Choose O'Malleys?" 
            subtitle="We're a boutique family and property law firm — and we've stayed boutique deliberately. The quality of your relationship with your lawyer matters just as much as their qualifications."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {differentiators.map((item, i) => (
            <div key={i} className="flex flex-col p-6 rounded-2xl bg-surface/50 border border-border/40 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white mb-6">
                <item.icon weight="light" className="w-6 h-6" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-heading font-bold text-teal-brand tracking-tight">{item.value}</span>
                <span className="text-navy font-semibold text-sm uppercase tracking-wider">{item.suffix}</span>
              </div>
              <h4 className="text-lg font-bold text-navy mb-2">{item.title}</h4>
              <p className="text-mid text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
