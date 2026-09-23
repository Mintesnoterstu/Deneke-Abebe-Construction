import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company, pageMeta } from "@/data/company";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: pageMeta.contact.description,
};

export default function ContactPage() {
  const cards = [
    {
      title: "Phone",
      icon: Phone,
      lines: company.phones,
      hrefs: company.phones.map((phone) => `tel:${phone.replace(/\s/g, "")}`),
    },
    {
      title: "Email",
      icon: Mail,
      lines: [company.email],
      hrefs: [`mailto:${company.email}`],
    },
    {
      title: "Location",
      icon: MapPin,
      lines: [company.location],
      hrefs: [null],
    },
    {
      title: "Business hours",
      icon: Clock,
      lines: [company.businessHours],
      hrefs: [null],
    },
  ] as const;

  return (
    <>
      <PageHero
        title="Contact"
        description={`Reach ${company.shortName} in ${company.location}.`}
      />
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:px-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <card.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h2 className="mt-3 text-xl text-primary">{card.title}</h2>
                <ul className="mt-2 space-y-1">
                  {card.lines.map((line, index) => {
                    const href = card.hrefs[index];
                    return (
                      <li key={line} className="text-sm leading-relaxed text-muted">
                        {href ? (
                          <a href={href} className="hover:text-primary">
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
