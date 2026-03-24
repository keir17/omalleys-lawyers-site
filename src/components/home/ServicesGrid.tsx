"use client";

import Link from "next/link";
import { Baby, Heart, HouseLine, Scroll, UsersThree, FileText, Handshake } from "@phosphor-icons/react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const services = [
  {
    title: "Care of Children",
    description: "Guidance through parenting orders, day-to-day care, and practical child-centred outcomes.",
    icon: Baby,
    href: "/services/family-law",
  },
  {
    title: "Relationship Property",
    description: "Clear advice on property agreements and fair settlements during separation.",
    icon: Handshake,
    href: "/services/family-law",
  },
  {
    title: "Family Violence",
    description: "Urgent protection orders and clear support when your family is in danger.",
    icon: Heart,
    href: "/services/family-law",
  },
  {
    title: "Conveyancing",
    description: "Handling the legal detail of buying or selling your Christchurch home.",
    icon: HouseLine,
    href: "/services/conveyancing",
  },
  {
    title: "Wills & Estates",
    description: "Clear, up-to-date wills and empathetic estate administration.",
    icon: FileText,
    href: "/services/wills-estates",
  },
  {
    title: "Elder Law",
    description: "Enduring powers of attorney and planning ahead to protect the people you love.",
    icon: UsersThree,
    href: "/services/elder-law",
  },
];



export function ServicesGrid() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Legal Services" 
          subtitle="Specialist expertise delivered with clear, practical advice. No jargon, just clear paths forward."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, i) => {
            const Icon = service.title === "Relationship Property" ? Handshake : service.icon;
            return (
              <Link 
                key={i} 
                href={service.href}
                className="group relative bg-white rounded-xl p-8 border border-border/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-brand/5 flex flex-col items-start min-h-[260px] overflow-hidden"
              >
                {/* Custom Hover Border Effect */}
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-teal-brand scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100" />
                
                <div className="w-14 h-14 rounded-full bg-teal-brand/10 flex items-center justify-center mb-6 text-teal-brand transition-transform duration-300 group-hover:scale-110 group-hover:bg-teal-brand group-hover:text-white">
                  <Icon weight="light" className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-heading text-navy font-semibold mb-3 group-hover:text-teal-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-mid text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <div className="mt-auto text-teal-brand text-sm font-semibold tracking-wide uppercase flex items-center gap-2">
                  Find out more 
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
