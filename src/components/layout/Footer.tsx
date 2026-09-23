import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks } from "@/data/company";
import { SiteImage } from "@/components/ui/SiteImage";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:px-12">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <SiteImage
              src={company.logo.src}
              alt={company.logo.alt}
              width={48}
              height={48}
              className="h-12 w-12 rounded-[4px] object-cover"
            />
            <span className="font-heading text-xl font-bold">
              {company.shortName}
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            {company.name} is a {company.ownership.toLowerCase()} in{" "}
            {company.location}, established {company.establishedLabel}.
          </p>
        </div>

        <div>
          <h2 className="text-lg text-white">Pages</h2>
          <ul className="mt-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg text-white">Contact</h2>
          <ul className="mt-4 space-y-1 text-sm text-white/80">
            {company.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex min-h-11 items-center gap-2 hover:text-accent"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex min-h-11 items-center gap-2 hover:text-accent"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {company.email}
              </a>
            </li>
            <li className="inline-flex min-h-11 items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {company.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-4 text-sm text-white/60 md:px-12">
          © {year} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
