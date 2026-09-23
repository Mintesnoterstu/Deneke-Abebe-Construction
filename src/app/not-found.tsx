import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-surface px-6 py-24">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          404
        </p>
        <h1 className="mt-3 text-4xl text-primary md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted">
          The page you requested does not exist. Return to the Deneke Abebe
          Construction home page.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Return home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
