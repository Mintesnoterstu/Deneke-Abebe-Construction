import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";

type Props = {
  name: string;
  summary: string;
  href: string;
  image: string | null;
  imageAlt: string;
};

export function ServiceCard({ name, summary, href, image, imageAlt }: Props) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="relative aspect-[16/10] bg-surface">
        <SiteImage
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl text-primary">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>
        <Link
          href={href}
          className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
        >
          Learn more
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
