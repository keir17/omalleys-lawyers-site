"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialStars } from "@/components/home/TestimonialStars";
import { Quotes } from "@phosphor-icons/react";

const reviews = [
  {
    text: "Brilliant, brilliant law firm! Felicity O'Malley is just awesome! Her knowledge, communication and support of her clients make all the difference.",
    author: "Google Review, 5★"
  },
  {
    text: "Sam has been the most amazing lawyer I have had the pleasure of working with and dealing with the family courts. After using Sam as my family lawyer for the last 3 years I have recommended his services and expertise to others.",
    author: "Google Review, 5★"
  },
  {
    text: "Felicity O'Malley was absolutely brilliant helping me. I cannot recommend her highly enough. Her communication was excellent and her support incredible. She made things very easy and is so knowledgeable with a great sense of humour!",
    author: "Google Review, 5★"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-navy text-white relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-brand/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">What Our Clients Say</h2>
          <p className="text-surface/80 max-w-2xl mx-auto text-lg">
            We measure our success by the families we help. Here's what some of them have shared about their experience with O'Malleys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
             <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors flex flex-col items-start relative overflow-hidden group">
               <Quotes weight="fill" className="absolute top-4 right-4 w-24 h-24 text-teal-brand/10 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
               <TestimonialStars />
               <p className="text-surface/90 font-sans text-base leading-relaxed mb-8 flex-1 relative z-10 font-medium">
                 "{review.text}"
               </p>
               <div className="mt-auto relative z-10 font-semibold text-teal-brand uppercase tracking-wider text-sm">
                 {review.author}
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
