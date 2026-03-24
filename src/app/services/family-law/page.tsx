import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Law & Relationship Property | O'Malleys Lawyers",
  description: "Expert family law advice in Christchurch including care of children, relationship property, and family violence."
};

export default function FamilyLawPage() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <PageHero 
        title="Family Law" 
        subtitle="Practical, calm, and deeply experienced guidance through complex family matters."
      />

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-20">
              
              <div>
                <SectionHeading title="Care of Children / Parenting" />
                <p className="text-lg text-mid leading-relaxed">
                  When your children are at the centre of a legal dispute, you need someone who understands both the law and the stakes. We guide parents through every step — from initial parenting orders and day-to-day care arrangements to complex shared care disputes and enforcing breaches. We focus on practical, child-centred outcomes.
                </p>
              </div>

              <div>
                <SectionHeading title="Relationship Property" />
                <p className="text-lg text-mid leading-relaxed">
                  Whether you're separating from a long-term partner or simply want a relationship property agreement in place before things get complicated, we help you understand your rights and reach a fair outcome. From straightforward settlements to contested litigation, we've handled it all.
                </p>
              </div>

              <div>
                <SectionHeading title="Family Violence" />
                <p className="text-lg text-mid leading-relaxed">
                  If you or your family are in danger, acting quickly is everything. We help clients apply for protection orders and occupation orders as a matter of urgency, guiding you through the process clearly and without judgment. You don't have to face this alone.
                </p>
              </div>

              <div>
                <SectionHeading title="Guardianship & Complex Family Matters" />
                <p className="text-lg text-mid leading-relaxed">
                  Some family situations involve more than just parenting — they involve fundamental questions about where a child lives, which school they attend, or what medical treatment they receive. These disputes require a lawyer who knows the Family Court inside out. We handle complex guardianship matters with calm expertise.
                </p>
              </div>

              <div>
                <SectionHeading title="Oranga Tamariki / Ministry for Children" />
                <p className="text-lg text-mid leading-relaxed">
                  Oranga Tamariki involvement can feel frightening and confusing for families. We represent parents and whānau in Family Court proceedings involving Oranga Tamariki, helping you understand the process, your rights, and how to work toward the best outcome for your children.
                </p>
              </div>

            </div>

            <div className="lg:col-span-5 hidden lg:block sticky top-32">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-border/60">
                <Image src="/images/family-services.png" fill className="object-cover" alt="Family Services Consultation" priority />
              </div>
            </div>
          </div>

          <div className="bg-white border text-center border-border/60 p-12 rounded-2xl shadow-sm mt-12 flex flex-col items-center">
            <h3 className="text-2xl font-heading text-navy font-bold mb-4">Need clear advice on a family matter?</h3>
            <p className="text-mid mb-8 max-w-lg">
              Contact us for an initial consultation. We'll listen to your situation and outline your options without the legal jargon.
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
