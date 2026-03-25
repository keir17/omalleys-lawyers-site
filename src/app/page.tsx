import Image from "next/image";
import { HomeHero } from "@/components/home/HomeHero";
import { TrustBar } from "@/components/shared/TrustBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TeamTeaser } from "@/components/home/TeamTeaser";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { SectionHeading } from "@/components/shared/SectionHeading";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full overflow-hidden">
      {/* 2 & 3. Responsive 100svh Background Container */}
      <HomeHero>
        {/* Trust bar layered securely as a child */}
        <TrustBar />
      </HomeHero>

      {/* 4. Services grid */}
      <ServicesGrid />

      {/* 5. "Why O'Malleys" stats + differentiators */}
      <StatsSection />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. Process steps */}
      <section className="relative py-24 overflow-hidden bg-surface/30">
        {/* Background Image */}
        <Image
          src="/process-image.png"
          alt="How we work process background"
          fill
          className="object-cover object-center -z-20 opacity-[0.15]"
          priority={false}
        />

        <div className="container relative mx-auto px-4 text-center z-10">
          <SectionHeading 
            title="How We Work Together" 
            subtitle="Clear communication from the first phone call to resolution."
            centered
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* 8. Team teaser */}
      <TeamTeaser />

      {/* 9. FAQ teaser */}
      <HomeFAQ />
      
    </main>
  );
}
