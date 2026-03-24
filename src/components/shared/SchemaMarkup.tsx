export function SchemaMarkup() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    "name": "O'Malleys Lawyers",
    "legalName": "O'MALLEYS LEGAL LIMITED",
    "url": "https://omalleys.co.nz",
    "logo": "https://omalleys.co.nz/images/new-logo.svg",
    "image": "https://files.catbox.moe/s0kuz1.jpg",
    "description": "Christchurch family law specialists handling separation, relationship property, wills, and conveyancing. Trusted for over 20 years. Legal Aid provider.",
    "telephone": "+64-3-379-0590",
    "email": "admin@omalleys.co.nz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Level 1, 68 Fitzgerald Avenue, Christchurch Central City",
      "addressLocality": "Christchurch",
      "postalCode": "8011",
      "addressCountry": "NZ",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -43.5320,
      "longitude": 172.6460,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00",
    },
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "56",
    },
    "priceRange": "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
