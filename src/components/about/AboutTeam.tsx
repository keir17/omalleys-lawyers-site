"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";

const team = [
  { 
    name: "Felicity O'Malley", 
    role: "Principal / Barrister & Solicitor", 
    initials: "FO",
    bio: "Felicity has been a Barrister and Solicitor in Christchurch since 1987. As principal of O'Malleys Lawyers, she brings over 35 years of specialist experience in family law, property, trusts, and estates. Clients consistently describe her communication as excellent and her support as 'incredible' - and her sense of humour is a bonus during what are rarely easy times.",
    email: "felicity@omalleys.co.nz"
  },
  { 
    name: "Sam Paerata", 
    role: "Lawyer", 
    initials: "SP",
    bio: "Sam is one of Christchurch's most trusted family lawyers. He has built a reputation over years of practice in the Family Court for his dedication, communication, and genuine care for the people he represents. Multiple clients have recommended him specifically to friends and family. Sam specialises in parenting and custody matters, and family violence proceedings.",
    email: "sam@omalleys.co.nz"
  },
  { name: "Natasha Fujii", role: "Lawyer", initials: "NF", bio: "", email: "natasha@omalleys.co.nz" },
  { name: "Victoria Boyd", role: "Lawyer", initials: "VB", bio: "", email: "victoria@omalleys.co.nz" },
  { name: "Renzo Makoni", role: "Lawyer", initials: "RM", bio: "", email: "renzo@omalleys.co.nz" },
];

export function AboutTeam() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading 
          title="Meet The Team" 
          subtitle="61+ years of combined legal experience, dedicated to handling your matter with care and expertise."
          centered
        />

        <div className="flex flex-col gap-12 mt-16">
          {team.map((member, i) => (
             <div key={i} className="flex flex-col md:flex-row gap-8 items-start bg-surface/30 p-8 rounded-3xl border border-border/50">
               {/* Photo Placeholder */}
               <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full bg-navy text-white flex flex-col items-center justify-center shadow-lg relative overflow-hidden group">
                 <span className="text-4xl font-heading font-medium tracking-wider relative z-10">{member.initials}</span>
                 <span className="text-[10px] uppercase font-semibold text-white/50 absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Real photos to be added</span>
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
               </div>

               <div className="flex-1">
                 <h3 className="text-2xl font-heading text-navy font-bold mb-2">{member.name}</h3>
                 <p className="text-teal-brand font-semibold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                 {member.bio && (
                   <p className="text-mid leading-relaxed mb-6 bg-white p-6 rounded-xl border border-border/40 shadow-sm">
                     {member.bio}
                   </p>
                 )}
                 <a href={`mailto:${member.email}`} className="inline-flex items-center text-sm font-semibold text-navy hover:text-teal-brand transition-colors bg-white px-4 py-2 rounded-lg border border-border/60 hover:border-teal-brand shadow-sm">
                   {member.email}
                 </a>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
