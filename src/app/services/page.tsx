import { PageHero } from "@/components/shared/PageHero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Legal Services | O'Malleys Lawyers",
  description: "Specialist family and property law firm in Christchurch providing straightforward advice for complex matters."
};

export default function ServicesPage() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <PageHero 
        title="Our Legal Services" 
        subtitle="Specialist expertise delivered with clear, practical advice. No jargon, just clear paths forward."
      />
      {/* We reuse the ServicesGrid which displays all services perfectly */}
      <div className="bg-surface pb-24">
         <ServicesGrid />
      </div>
    </main>
  );
}
