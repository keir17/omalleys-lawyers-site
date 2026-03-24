"use client";

import Link from "next/link";
import Image from "next/image";
import { Baby, Heart, HouseLine, Scroll, UsersThree, FileText, Handshake } from "@phosphor-icons/react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const services = [
  {
    title: "Care of Children",
    description: "Guidance through parenting orders, day-to-day care, and practical child-centred outcomes.",
    icon: Baby,
    href: "/services/family-law",
    image: "/images/care-of-children.png",
  },
  {
    title: "Relationship Property",
    description: "Clear advice on property agreements and fair settlements during separation.",
    icon: Handshake,
    href: "/services/family-law",
    image: "/images/relationship-property.png",
  },
  {
    title: "Family Violence",
    description: "Urgent protection orders and clear support when your family is in danger.",
    icon: Heart,
    href: "/services/family-law",
    image: "/images/family-violence.png",
  },
  {
    title: "Conveyancing",
    description: "Handling the legal detail of buying or selling your Christchurch home.",
    icon: HouseLine,
    href: "/services/conveyancing",
    image: "/images/conveyancing-home.png",
  },
  {
    title: "Wills & Estates",
    description: "Clear, up-to-date wills and empathetic estate administration.",
    icon: FileText,
    href: "/services/wills-estates",
    image: "/images/wills-estates.png",
  },
  {
    title: "Elder Law",
    description: "Enduring powers of attorney and planning ahead to protect the people you love.",
    icon: UsersThree,
    href: "/services/elder-law",
    image: "/images/elder-law.png",
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
                className="group relative bg-navy rounded-xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col items-start min-h-[360px] overflow-hidden"
              >
                {/* Background Image Output with specific opacity */}
                <Image 
                  src={service.image} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500 group-hover:scale-105" 
                  alt={service.title} 
                />
                
                {/* Overlay gradient to make text legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-navy/30" />
                
                <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon weight="light" className="w-7 h-7" />
                </div>
                
                <h3 className="relative z-10 text-2xl font-heading text-white font-medium mt-auto mb-3 drop-shadow-sm group-hover:text-blush transition-colors">
                  {service.title}
                </h3>
                <p className="relative z-10 text-white/90 text-sm leading-relaxed mb-6 font-medium drop-shadow-sm">
                  {service.description}
                </p>
                
                <div className="relative z-10 text-white text-sm font-semibold tracking-wide uppercase flex items-center gap-2 group-hover:text-white pb-2">
                  <span className="border-b border-transparent group-hover:border-blush transition-colors pb-1">Find out more</span>
                  <span className="transition-transform group-hover:translate-x-1 text-blush">→</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
