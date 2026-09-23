import type { Metadata } from "next";
import { company, pageMeta, values } from "@/data/company";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ValueCard } from "@/components/ui/ValueCard";
import { SiteImage } from "@/components/ui/SiteImage";

export const metadata: Metadata = {
  title: "About",
  description: pageMeta.about.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About DAC"
        description={`${company.name} is a ${company.ownership.toLowerCase()} in ${company.location}, established ${company.establishedLabel}.`}
        image={company.images.about}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 md:grid-cols-2 md:px-12">
          <SectionHeading
            eyebrow="Our story"
            title={`Established ${company.establishedLabel}`}
            description={`${company.name} (${company.shortName}) began on ${company.establishedLabel} as a family-owned general contractor in ${company.location}. We serve public, private, and NGO clients.`}
          />
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              DAC is registered {company.grades.join(" / ")} and is a member of
              the {company.membership}.
            </p>
            <p>{company.litigation}.</p>
            <p>
              Our work covers building construction, road projects, water works,
              and engineering services.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading eyebrow="Values" title="What we stand for" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <ValueCard
                key={value.id}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading eyebrow="Leadership" title={company.leader.name} />
          <article className="mt-10 max-w-xl overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <div className="relative aspect-[4/3] bg-surface">
              <SiteImage
                src={company.leader.image}
                alt={`${company.leader.name}, leadership at ${company.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 32rem"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl text-primary">{company.leader.name}</h3>
              <p className="mt-2 text-sm text-muted">
                Leadership, {company.name}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="text-3xl text-white">Credentials</h2>
          <ul className="mt-6 grid gap-4 text-white/90 md:grid-cols-3">
            <li className="rounded-lg bg-white/10 p-5">
              Member: {company.membership}
            </li>
            <li className="rounded-lg bg-white/10 p-5">
              Grade: {company.grades.join(" / ")}
            </li>
            <li className="rounded-lg bg-white/10 p-5">{company.litigation}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
