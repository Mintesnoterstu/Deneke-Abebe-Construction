import type { Metadata } from "next";
import Link from "next/link";
import { company, pageMeta, processSteps, services } from "@/data/company";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description: pageMeta.services.description,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        description={`${company.shortName} provides four core services for public, private, and NGO clients.`}
        image={company.images.hero}
      />

      <nav
        aria-label="Service sections"
        className="border-b border-border bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-6 py-4 md:px-12">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`#${service.id}`}
              className="inline-flex min-h-11 items-center rounded-[4px] border border-border px-4 text-sm font-semibold text-primary hover:border-accent"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </nav>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`scroll-mt-28 py-16 md:py-24 ${index % 2 === 0 ? "bg-white" : "bg-surface"}`}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
            <div className={index % 2 === 1 ? "md:order-2" : undefined}>
              <SectionHeading
                eyebrow={`0${index + 1}`}
                title={service.name}
                description={service.description}
              />
              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-dark">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface">
              <SiteImage
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      ))}

      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="Process"
            title="From consultation to handover"
            dark
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {processSteps.map((step) => (
              <li
                key={step.step}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <p className="font-heading text-2xl font-bold text-accent">
                  {step.step}
                </p>
                <h3 className="mt-3 text-xl text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
