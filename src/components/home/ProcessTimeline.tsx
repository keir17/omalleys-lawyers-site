"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Phone, Users, Scales, Handshake, CheckCircle } from "@phosphor-icons/react";

const steps = [
  {
    title: "Get in touch",
    description: "Call us on 03 379 0590 or email admin@omalleys.co.nz. We'll set up an initial consultation - usually within 1–2 days for urgent matters.",
    icon: Phone,
  },
  {
    title: "Initial consultation",
    description: "We listen to your situation, explain your options clearly, and outline costs upfront. No jargon, no judgment.",
    icon: Users,
  },
  {
    title: "We get to work",
    description: "Your dedicated lawyer handles your matter from start to finish. You'll always know who's working on your file and how to reach them.",
    icon: Scales,
  },
  {
    title: "Regular updates",
    description: "We keep you informed throughout. You won't be left wondering what's happening with your case.",
    icon: Handshake,
  },
  {
    title: "Resolution",
    description: "Whether it's a negotiated settlement, court order, signed will, or settled property purchase - we work toward the clearest, most practical outcome for you.",
    icon: CheckCircle,
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-10 mt-16 px-4 md:px-0">
      {/* Background Line */}
      <div className="absolute left-[48px] md:left-1/2 top-0 bottom-0 w-[3px] bg-border md:-translate-x-1/2 rounded-full overflow-hidden">
        {/* Draw Line */}
        <motion.div 
          className="absolute left-0 right-0 top-0 bg-teal-brand w-full origin-top"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="flex flex-col gap-12 md:gap-24 relative">
        {steps.map((step, index) => (
          <ProcessStep key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}

function ProcessStep({ step, index }: { step: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  
  const isEven = index % 2 === 0;
  const Icon = step.icon;

  return (
    <div 
      ref={ref}
      className={`flex flex-row items-start md:items-center gap-6 md:gap-12 relative ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`md:w-1/2 hidden md:flex ${isEven ? "justify-end text-right" : "justify-start text-left"}`}>
        <span className="text-8xl font-heading text-surface font-bold absolute top-1/2 -translate-y-1/2 opacity-50 pointer-events-none select-none -z-10 tracking-tighter">
          0{index + 1}
        </span>
      </div>

      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-warm-white border-2 border-teal-brand z-10 flex items-center justify-center flex-shrink-0 relative sticky top-1/2 md:mt-0 shadow-sm"
      >
        <Icon weight="light" className="w-7 h-7 md:w-8 md:h-8 text-teal-brand" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        className="md:w-1/2 bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border/80 flex-1 mt-0 md:mt-0"
      >
        <div className="text-blush font-bold text-xs mb-3 opacity-90 uppercase tracking-[0.2em]">Step {index + 1}</div>
        <h3 className="text-2xl font-heading text-navy font-semibold mb-3">{step.title}</h3>
        <p className="text-mid leading-relaxed">{step.description}</p>
      </motion.div>
    </div>
  );
}
