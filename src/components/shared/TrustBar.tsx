import { Star, StarHalf, ShieldCheck, Car, CalendarCheck } from "@phosphor-icons/react/dist/ssr";

export function TrustBar() {
  return (
    <div className="w-full bg-surface border-y border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 md:gap-16">
        
        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1 text-[#f59e0b]">
            {[...Array(5)].map((_, i) => (
              i === 4 ? (
                <StarHalf key={i} weight="fill" className="w-5 h-5" />
              ) : (
                <Star key={i} weight="fill" className="w-5 h-5" />
              )
            ))}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-navy text-sm">4.5 / 5.0</span>
            <span className="text-xs text-mid">56 Google Reviews</span>
          </div>
        </div>

        <div className="hidden md:block w-px h-10 bg-border"></div>

        {/* Experience */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-brand/10 flex items-center justify-center">
            <CalendarCheck weight="light" className="w-5 h-5 text-teal-brand" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-navy text-sm">Established 2006</span>
            <span className="text-xs text-mid">20 Years Experience</span>
          </div>
        </div>

        <div className="hidden md:block w-px h-10 bg-border"></div>

        {/* Legal Aid */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-brand/10 flex items-center justify-center">
            <ShieldCheck weight="light" className="w-5 h-5 text-teal-brand" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-navy text-sm">Legal Aid Provider</span>
            <span className="text-xs text-mid">Accessible Family Law</span>
          </div>
        </div>

        <div className="hidden lg:block w-px h-10 bg-border"></div>

        {/* Parking */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-brand/10 flex items-center justify-center">
            <Car weight="light" className="w-5 h-5 text-teal-brand" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-navy text-sm">Client Parking</span>
            <span className="text-xs text-mid">Off-street available</span>
          </div>
        </div>

      </div>
    </div>
  );
}
