"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { company, navLinks } from "@/data/company";
import { SiteImage } from "@/components/ui/SiteImage";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12">
        <Link href="/" className="flex min-h-11 items-center gap-3">
          <SiteImage
            src={company.logo.src}
            alt={company.logo.alt}
            width={48}
            height={48}
            className="h-12 w-12 rounded-[4px] object-cover"
            priority
          />
          <span className="font-heading text-lg font-bold leading-tight text-primary md:text-xl">
            {company.shortName}
            <span className="hidden sm:inline"> · {company.name}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex min-h-11 items-center px-3 text-sm font-semibold ${
                  active ? "text-accent" : "text-primary hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <ButtonLink href="/contact" className="ml-3">
            Get in touch
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[4px] text-primary lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-white px-6 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-11 items-center text-base font-semibold text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/contact" className="mt-3 w-full">
            Get in touch
          </ButtonLink>
        </nav>
      ) : null}
    </header>
  );
}
