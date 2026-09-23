import { company } from "@/data/company";
import { ButtonLink } from "@/components/ui/Button";

export function CtaBand() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-12">
        <div>
          <h2 className="text-3xl text-white md:text-4xl">
            Ready to discuss a project?
          </h2>
          <p className="mt-3 max-w-xl text-white/80">
            Contact {company.shortName} in {company.city} by phone or email.
          </p>
        </div>
        <ButtonLink href="/contact">Get in touch</ButtonLink>
      </div>
    </section>
  );
}
