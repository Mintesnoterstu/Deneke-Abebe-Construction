import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";

export function TopBar() {
  return (
    <div className="bg-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-2 text-sm md:flex-row md:items-center md:justify-between md:px-12">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {company.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-11 items-center gap-2 hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {phone}
            </a>
          ))}
          <a
            href={`mailto:${company.email}`}
            className="inline-flex min-h-11 items-center gap-2 hover:text-accent"
          >
            <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {company.email}
          </a>
        </div>
        <p className="inline-flex min-h-11 items-center gap-2 text-white/80">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {company.location}
        </p>
      </div>
    </div>
  );
}
