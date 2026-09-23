import { company } from "@/data/company";
import { SiteImage } from "@/components/ui/SiteImage";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-dark">
      <SiteImage
        src={company.images.hero.src}
        alt={company.images.hero.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20 md:px-12">
        <FadeIn className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {company.shortName} · Est. {company.establishedLabel}
          </p>
          <h1 className="mt-4 text-4xl text-white md:text-6xl lg:text-7xl">
            {company.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            {company.name} is a {company.ownership.toLowerCase()} in{" "}
            {company.location}, serving public, private, and NGO clients.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects">View projects</ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-dark"
            >
              Contact us
            </ButtonLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
