import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MapPin, Phone, Clock, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | O'Malleys Lawyers",
  description: "Get in touch with O'Malleys Lawyers today. We offer urgent appointments and off-street parking in Christchurch Central City."
};

export default function ContactPage() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <PageHero 
        title="Get In Touch" 
        subtitle="We listen to your situation, explain your options clearly, and outline costs upfront. No jargon, no judgment."
      />

      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3 space-y-10">
            <div>
              <SectionHeading 
                title="Our Office" 
                subtitle="We make best endeavours to see new clients within 1–2 working days for pressing matters." 
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-border/50">
                <div className="w-12 h-12 bg-teal-brand/10 rounded-full flex items-center justify-center flex-shrink-0 text-teal-brand">
                  <Phone weight="light" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-navy font-semibold mb-1">Phone</h4>
                  <a href="tel:0333790590" className="text-mid hover:text-teal-brand transition-colors text-lg font-medium">03 379 0590</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-border/50">
                <div className="w-12 h-12 bg-teal-brand/10 rounded-full flex items-center justify-center flex-shrink-0 text-teal-brand">
                  <EnvelopeSimple weight="light" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-navy font-semibold mb-1">Email</h4>
                  <a href="mailto:admin@omalleys.co.nz" className="text-mid hover:text-teal-brand transition-colors text-base font-medium">admin@omalleys.co.nz</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-border/50">
                <div className="w-12 h-12 bg-teal-brand/10 rounded-full flex items-center justify-center flex-shrink-0 text-teal-brand">
                  <MapPin weight="light" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-navy font-semibold mb-1">Location</h4>
                  <p className="text-mid text-base leading-relaxed">
                    Level 1 (Upstairs)<br/>
                    68 Fitzgerald Avenue<br/>
                    Christchurch Central City<br/>
                    Christchurch 8011<br/>
                    <span className="text-xs font-semibold text-teal-brand uppercase tracking-wider block mt-2">Free off-street parking available</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-border/50">
                <div className="w-12 h-12 bg-teal-brand/10 rounded-full flex items-center justify-center flex-shrink-0 text-teal-brand">
                  <Clock weight="light" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-navy font-semibold mb-1">Hours</h4>
                  <p className="text-mid text-base leading-relaxed">
                    Monday–Friday: 9am–5pm<br/>
                    <span className="text-xs text-mid/70 block mt-1">After-hours appointments by arrangement</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
             {/* Map Placeholder */}
             <div className="w-full h-48 md:h-64 rounded-2xl bg-slate-200 border border-border/80 mb-8 overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center bg-teal-brand/5 text-teal-brand font-semibold text-lg flex-col gap-2 opacity-50">
                 <MapPin weight="fill" className="w-8 h-8" />
                 <span>Interactive Map Integration Point</span>
               </div>
             </div>
             
             <ContactForm />
          </div>

        </div>
      </section>

    </main>
  );
}
