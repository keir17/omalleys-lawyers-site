import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elder Law & Powers of Attorney | O'Malleys Lawyers",
  description: "Clear, practical advice on enduring powers of attorney and elder law matters in Christchurch. No jargon."
};

export default function ElderLawPage() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <PageHero 
        title="Elder Law & Powers of Attorney" 
        subtitle="Planning ahead protects the people you love. Clear, practical advice with no jargon."
      />

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 max-w-4xl space-y-20">
          
          <div>
            <SectionHeading title="Protecting Your Future Decisions" />
            <p className="text-lg text-mid leading-relaxed">
              We help families put enduring powers of attorney in place before they're needed, giving you certainty over who will manage your personal care, welfare, and property if you become unable to do so yourself.
            </p>
            <p className="text-lg text-mid leading-relaxed mt-4">
              We also assist when a family member's capacity to make decisions has already become a concern, guiding you compassionately through the necessary legal steps to ensure they are protected and cared for.
            </p>
          </div>

          <div className="bg-white border text-center border-border/60 p-12 rounded-2xl shadow-sm mt-12 flex flex-col items-center">
            <h3 className="text-2xl font-heading text-navy font-bold mb-4">Want to set up an enduring power of attorney?</h3>
            <p className="text-mid mb-8 max-w-lg">
              Contact us to arrange an appointment. We'll outline precisely what this involves and the steps required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blush hover:bg-blush/90 text-white font-semibold px-8 py-6 text-base">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
