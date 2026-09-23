import { values } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ValueCard } from "@/components/ui/ValueCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function ValuesPreview() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          eyebrow="Values"
          title="How we work"
          description="DAC is guided by timely completion, quality assurance, and sustainable development."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <FadeIn key={value.id}>
              <ValueCard title={value.title} description={value.description} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
