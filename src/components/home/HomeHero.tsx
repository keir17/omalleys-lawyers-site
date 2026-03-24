"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const headline = "Christchurch family law specialists who treat you like a person.";

export function HomeHero() {
  const words = headline.split(" ");

  return (
    <section className="relative flex-1 w-full min-h-[500px] flex items-center bg-navy overflow-hidden">
      {/* Background Image with Teal Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://files.catbox.moe/s0kuz1.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0891b2] opacity-45 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10"></div>
      </motion.div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-heading text-white mb-6 leading-[1.1]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: words.length * 0.06 + 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-white/90 font-sans max-w-2xl mb-10 leading-relaxed drop-shadow-sm"
          >
            For over 20 years, O'Malleys has helped Christchurch families navigate separation, custody, relationship property, and more - with expertise you can trust and care you'll actually feel.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: words.length * 0.06 + 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <Button asChild size="lg" className="bg-blush hover:bg-blush/90 text-white font-semibold text-base py-6 px-8 rounded-md shadow-lg shadow-blush/20 transition-transform active:scale-95">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold text-base py-6 px-8 rounded-md backdrop-blur-sm transition-transform active:scale-95">
              <Link href="tel:0333790590" className="flex items-center gap-2">
                <Phone weight="fill" className="w-5 h-5" />
                Call 03 379 0590
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
