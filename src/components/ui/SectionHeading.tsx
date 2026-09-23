type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl md:text-4xl ${dark ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed ${dark ? "text-white/80" : "text-muted"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
