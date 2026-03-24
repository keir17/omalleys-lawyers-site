"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = false, className }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <div ref={ref} className={clsx("mb-12", centered && "text-center rounded-sm", className)}>
      <h2 className="text-3xl md:text-4xl font-heading text-navy font-semibold relative inline-block pb-4">
        {title}
        {/* Teal Reveal Underline */}
        <span
          className={clsx(
            "absolute bottom-0 h-[3px] bg-teal-brand transition-all duration-500 ease-out",
            centered ? "left-1/2 -translate-x-1/2" : "left-0",
            isInView ? "w-[60px]" : "w-0"
          )}
        />
      </h2>
      {subtitle && (
        <p className={clsx("mt-6 text-lg text-mid max-w-2xl", centered && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
