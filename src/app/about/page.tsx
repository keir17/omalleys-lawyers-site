import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AboutTeam } from "@/components/about/AboutTeam";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | O'Malleys Lawyers Christchurch",
  description: "Learn about O'Malleys Lawyers, a boutique family and property law firm established in Christchurch in 2006."
};

export default function AboutPage() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <PageHero 
        title="About O'Malleys Lawyers" 
        subtitle="Specialist family and property law firm — where you're not just a case number."
      />

      <section className="py-24 bg-surface relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute -left-[20%] top-[10%] w-[40%] h-[80%] rounded-full bg-teal-brand/5 blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <SectionHeading title="Our Story" />
          
          <div className="relative w-full aspect-[3/2] md:aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-sm border border-border/60">
            <Image src="/images/about-office.png" fill className="object-cover" alt="O'Malleys Lawyers Office Environment" priority />
          </div>
          
          <div className="prose prose-lg text-mid max-w-none space-y-6">
            <p className="text-2xl font-medium text-navy leading-relaxed font-heading">
              O'Malleys Lawyers was founded in Christchurch in 2006 with a straightforward belief: that specialist legal help should feel human.
            </p>
            <p>
              We're a boutique family and property law firm — and we've stayed boutique deliberately. Not because we can't grow, but because we know that the quality of your relationship with your lawyer matters as much as their qualifications. When your family is going through something difficult, you deserve a lawyer who knows your name, returns your calls, and explains things clearly.
            </p>
            <p>
              Our team brings over 61 years of combined legal experience to every matter we take on. Our principal, Felicity O'Malley, has been practising law in Christchurch since 1987 — she's seen the Family Court evolve, the laws change, and hundreds of families find a way through. That depth of experience is what we bring to even the most straightforward matter.
            </p>
            <p>
              We're also one of the few Christchurch firms still actively providing Legal Aid — because we believe access to justice shouldn't depend on your income.
            </p>
            <div className="bg-blush/10 border-l-4 border-blush p-6 mt-8 rounded-r-lg">
              <p className="font-semibold text-navy mb-0">
                If you're facing something hard — a separation, a custody dispute, a family violence situation, or the loss of a loved one — we're the team you call first.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutTeam />
    </main>
  );
}
