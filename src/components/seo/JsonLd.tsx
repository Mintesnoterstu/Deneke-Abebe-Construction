import { company } from "@/data/company";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: company.name,
    alternateName: company.shortName,
    foundingDate: company.foundingDate,
    email: company.email,
    telephone: [...company.phones],
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressCountry: "ET",
    },
    areaServed: {
      "@type": "Country",
      name: company.country,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
