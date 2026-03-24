"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Star } from "@phosphor-icons/react";

export function TestimonialStars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <motion.div 
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="flex gap-1.5 text-[#f59e0b] relative overflow-hidden group mb-6"
    >
      {[...Array(5)].map((_, i) => (
        <motion.div key={i} variants={item}>
          <Star weight="fill" className="w-5 h-5 drop-shadow-sm" />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out]" />
    </motion.div>
  );
}
