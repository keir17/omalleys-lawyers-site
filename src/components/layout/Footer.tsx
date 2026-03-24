"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, ShieldCheck, EnvelopeSimple } from "@phosphor-icons/react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-navy text-surface/80 pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div className="space-y-6 lg:max-w-xs">
          <div className="bg-warm-white inline-block p-4 rounded-lg shadow-sm">
            <Image src="/images/new-logo.svg" alt="O'Malleys Lawyers" width={100} height={100} className="h-12 w-auto object-contain mix-blend-multiply" />
          </div>
          <p className="text-sm leading-relaxed text-surface/70">
            Christchurch family law specialists who treat you like a person. Trusted for over 20 years.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-2 border border-teal-brand/30 rounded-md bg-teal-brand/10">
            <ShieldCheck weight="light" className="w-6 h-6 text-teal-brand" />
            <span className="text-white text-xs font-semibold tracking-wide uppercase">Legal Aid Provider</span>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-heading text-xl text-white">Contact</h4>
          <ul className="space-y-4 text-sm text-surface/70">
            <li>
              <Link href="tel:0333790590" className="flex items-start gap-3 hover:text-white transition-colors group">
                <Phone weight="light" className="w-5 h-5 text-teal-brand mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>03 379 0590</span>
              </Link>
            </li>
            <li>
              <Link href="mailto:admin@omalleys.co.nz" className="flex items-start gap-3 hover:text-white transition-colors">
                <EnvelopeSimple weight="light" className="w-5 h-5 text-teal-brand mt-0.5 flex-shrink-0" />
                <span>admin@omalleys.co.nz</span>
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <MapPin weight="light" className="w-5 h-5 text-teal-brand mt-0.5 flex-shrink-0" />
              <span>Level 1, 68 Fitzgerald Avenue<br/>Christchurch Central City<br/>Christchurch 8011</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock weight="light" className="w-5 h-5 text-teal-brand mt-0.5 flex-shrink-0" />
              <span>Mon - Fri: 9:00am - 5:00pm</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-heading text-xl text-white">Services</h4>
          <ul className="space-y-3 text-sm text-surface/70 flex flex-col items-start">
            <li><Link href="/services/family-law" className="hover:text-white transition-colors">Family Law</Link></li>
            <li><Link href="/services/wills-estates" className="hover:text-white transition-colors">Wills, Estates & Trusts</Link></li>
            <li><Link href="/services/conveyancing" className="hover:text-white transition-colors">Residential Conveyancing</Link></li>
            <li><Link href="/services/elder-law" className="hover:text-white transition-colors">Elder Law & Powers of Attorney</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-heading text-xl text-white">Firm</h4>
          <ul className="space-y-3 text-sm text-surface/70 flex flex-col items-start">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Our Team</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-surface/40">
        <p>&copy; {new Date().getFullYear()} O'Malleys Legal Limited. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Qualifying Reporting Entity under AML Act</p>
      </div>
    </footer>
  );
}
