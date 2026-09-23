import { services } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServicesPreview() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          eyebrow="Services"
          title="Four core contracting services"
          description="DAC delivers building construction, road projects, water works, and engineering services."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <FadeIn key={service.id}>
              <ServiceCard
                name={service.name}
                summary={service.summary}
                href={service.href}
                image={service.image}
                imageAlt={service.imageAlt}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
