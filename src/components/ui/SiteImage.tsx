import Image from "next/image";

type Props = {
  src: string | null;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function SiteImage({
  src,
  alt,
  className,
  priority,
  sizes,
  fill,
  width,
  height,
}: Props) {
  if (!src) {
    return (
      <div
        className={`bg-surface ${className ?? ""}`}
        role="img"
        aria-label={alt}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 800}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
