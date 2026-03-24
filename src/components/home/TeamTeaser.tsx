"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";

const team = [
  { name: "Felicity O'Malley", role: "Principal / Barrister & Solicitor", initials: "FO" },
  { name: "Sam Paerata", role: "Lawyer", initials: "SP" },
  { name: "Natasha Fujii", role: "Lawyer", initials: "NF" },
  { name: "Victoria Boyd", role: "Lawyer", initials: "VB" },
  { name: "Renzo Makoni", role: "Lawyer", initials: "RM" },
];

export function TeamTeaser() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading 
            title="Meet The Team" 
            subtitle="Bringing over 61 years of combined legal experience to every matter we take on."
            className="mb-0 max-w-2xl"
          />
          <Button asChild variant="outline" className="border-teal-brand text-teal-brand hover:bg-teal-brand hover:text-white group transition-colors">
            <Link href="/about" className="flex items-center gap-2">
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col items-center text-center p-6 bg-surface/30 rounded-2xl border border-border/40 hover:border-teal-brand/30 hover:bg-white transition-all duration-300">
              {/* Photo Placeholder */}
              <div className="w-24 h-24 mb-6 rounded-full bg-navy text-white flex items-center justify-center text-2xl font-heading font-medium tracking-wider shadow-inner group-hover:scale-105 group-hover:bg-teal-brand transition-all duration-500 overflow-hidden relative">
                <span className="relative z-10">{member.initials}</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
              </div>
              
              <h4 className="text-lg font-heading text-navy font-semibold mb-1 group-hover:text-teal-brand transition-colors">
                {member.name}
              </h4>
              <p className="text-xs text-mid uppercase tracking-wide font-semibold">
                {member.role}
              </p>
              <div className="mt-4 w-6 h-[2px] bg-teal-brand/30 group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
