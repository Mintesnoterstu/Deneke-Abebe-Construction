type Props = {
  title: string;
  description: string;
};

export function ValueCard({ title, description }: Props) {
  return (
    <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
      <div className="mb-4 h-1 w-12 bg-accent" aria-hidden="true" />
      <h3 className="text-2xl text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
