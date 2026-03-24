import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wills, Estates & Trusts | O'Malleys Lawyers",
  description: "Protect your family with clear wills, trusts, and seamless estate administration in Christchurch."
};

export default function WillsEstatesPage() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <PageHero 
        title="Wills, Estates & Trusts" 
        subtitle="A well-prepared will and estate plan gives your family certainty when they need it most."
      />

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-20">
              <div>
                <SectionHeading title="Planning for the Future" />
                <p className="text-lg text-mid leading-relaxed">
                  We help you prepare a clear, up-to-date will, establish family trusts, and administer estates with minimal stress. When disputes arise concerning estates, we also handle Family Protection Act and Testamentary Promises Act claims, approaching sensitive family dynamics with care and clarity.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 hidden lg:block sticky top-32">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-border/60">
                <Image src="/images/wills-estates.png" fill className="object-cover" alt="Writing Wills and Estates documentation" priority />
              </div>
            </div>
          </div>

          <div className="bg-white border text-center border-border/60 p-12 rounded-2xl shadow-sm mt-12 flex flex-col items-center">
            <h3 className="text-2xl font-heading text-navy font-bold mb-4">Ensure your family is protected.</h3>
            <p className="text-mid mb-8 max-w-lg">
              A straightforward will can usually be completed within a few days. We'll walk you through the key decisions clearly so you don't have to guess.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center shrink-0 rounded-lg text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blush hover:bg-blush/90 text-white font-semibold px-8 py-6 text-base shadow-sm">
                Book a Consultation
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
