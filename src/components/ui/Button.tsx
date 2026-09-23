import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const baseClass =
  "inline-flex min-h-11 items-center justify-center rounded-[4px] px-5 py-2.5 text-sm font-semibold transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-dark hover:bg-[#d99700]",
  secondary: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
};

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: CommonProps & { href: string }) {
  return (
    <Link href={href} className={cx(baseClass, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
}: CommonProps & { type?: "button" | "submit" }) {
  return (
    <button type={type} className={cx(baseClass, variants[variant], className)}>
      {children}
    </button>
  );
}
