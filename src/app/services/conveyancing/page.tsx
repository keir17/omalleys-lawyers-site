import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Conveyancing | O'Malleys Lawyers",
  description: "Christchurch residential property conveyancing. Expert legal details handled smoothly from agreement to settlement."
};

export default function ConveyancingPage() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <PageHero 
        title="Residential Conveyancing" 
        subtitle="Handling the legal details so you can focus on the exciting part of buying or selling your home."
      />

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 max-w-4xl space-y-20">
          
          <div>
            <SectionHeading title="Property Transactions Made Simple" />
            <p className="text-lg text-mid leading-relaxed">
              Buying or selling your home is one of the biggest decisions you'll make. Our conveyancing team handles the legal detail from start to finish — from reviewing the agreement and title checks to settlement. Available to both new and existing clients buying or selling residential property in Christchurch and the surrounding areas.
            </p>
          </div>

          <div className="bg-white border text-center border-border/60 p-12 rounded-2xl shadow-sm mt-12 flex flex-col items-center">
            <h3 className="text-2xl font-heading text-navy font-bold mb-4">Buying or selling a property?</h3>
            <p className="text-mid mb-8 max-w-lg">
              Get in touch to have us review your agreement before you sign, or to handle the complete conveyancing process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blush hover:bg-blush/90 text-white font-semibold px-8 py-6 text-base">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
