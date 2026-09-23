import { company } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutPreview() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface">
            <SiteImage
              src={company.images.about.src}
              alt={company.images.about.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
        <FadeIn>
          <SectionHeading
            eyebrow="About DAC"
            title={`${company.name} since 1995`}
            description={`${company.name} (${company.shortName}) is a ${company.ownership.toLowerCase()} based in ${company.location}. Established ${company.establishedLabel}, DAC serves public, private, and NGO clients across building construction, road projects, water works, and engineering services.`}
          />
          <ul className="mt-6 space-y-2 text-sm text-dark">
            <li>Registered {company.grades.join(" / ")}</li>
            <li>Member: {company.membership}</li>
            <li>{company.litigation}</li>
          </ul>
          <div className="mt-8">
            <ButtonLink href="/about" variant="secondary">
              Our story
            </ButtonLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
