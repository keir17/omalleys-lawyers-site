"use client";

import { Phone } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down slightly
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 md:hidden transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <Link
        href="tel:0333790590"
        className="flex items-center justify-center gap-2 bg-blush text-white px-5 py-3.5 rounded-full shadow-lg hover:bg-blush/90 active:scale-95 transition-all text-sm font-bold tracking-wide"
      >
        <Phone weight="fill" className="w-5 h-5 flex-shrink-0" />
        <span>Call Now</span>
      </Link>
    </div>
  );
}
