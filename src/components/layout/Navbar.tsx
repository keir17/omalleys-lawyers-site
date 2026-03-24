"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, Phone } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";
import { clsx } from "clsx";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-warm-white/90 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 h-24 md:h-28 flex items-center justify-between">
        <Link href="/" className="h-full block py-2 md:py-3 cursor-pointer">
          <Image src="/images/new-logo.svg" alt="O'Malleys Lawyers" width={160} height={160} className="h-full w-auto object-contain mix-blend-multiply" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-teal-brand",
                pathname === link.href ? "text-teal-brand" : "text-charcoal"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:0333790590" className="flex items-center gap-2 text-navy hover:text-teal-brand transition-colors text-sm font-semibold">
            <Phone weight="light" className="w-5 h-5" />
            03 379 0590
          </a>
          <Button asChild className="bg-blush hover:bg-blush/90 text-white rounded-md text-sm cursor-pointer shadow-none">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex items-center justify-center rounded-md p-2 text-navy hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-brand focus:ring-offset-2">
              <List weight="light" className="w-6 h-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-warm-white border-none sm:w-[400px]">
              <div className="hidden">
                 <SheetTitle>Menu</SheetTitle>
              </div>
              <div className="flex flex-col gap-8 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "text-xl font-heading transition-colors hover:text-teal-brand",
                      pathname === link.href ? "text-teal-brand" : "text-navy"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-border">
                  <a href="tel:0333790590" className="flex items-center gap-3 text-navy text-lg font-medium">
                    <Phone weight="light" className="w-6 h-6 text-teal-brand" />
                    03 379 0590
                  </a>
                  <Button asChild className="bg-blush hover:bg-blush/90 text-white w-full mt-2 text-lg py-6 shadow-none">
                    <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
