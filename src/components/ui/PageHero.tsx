import { SiteImage } from "@/components/ui/SiteImage";

type Props = {
  title: string;
  description?: string;
  image?: { src: string | null; alt: string };
};

export function PageHero({ title, description, image }: Props) {
  return (
    <section className="relative min-h-[280px] overflow-hidden bg-dark py-16 md:min-h-[360px] md:py-24">
      {image?.src ? (
        <SiteImage
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-primary" aria-hidden="true" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/55" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <h1 className="max-w-3xl text-4xl text-white md:text-6xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
