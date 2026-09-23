export const siteUrl = "https://deneke-abebe-construction.vercel.app";

export const company = {
  name: "Deneke Abebe Construction",
  shortName: "DAC",
  tagline: "Building Ethiopia's Future Since 1995",
  establishedLabel: "March 31, 1995",
  foundingDate: "1995-03-31",
  ownership: "Family-owned general contractor",
  city: "Addis Ababa",
  country: "Ethiopia",
  location: "Addis Ababa, Ethiopia",
  sectors: ["Public", "Private", "NGO"] as const,
  grades: ["GC-6", "GC-5"] as const,
  membership: "Construction Contractors Association of Ethiopia",
  litigation: "Clean litigation record",
  leader: {
    name: "Sophoniass Deneke Abebe",
    image: null as string | null,
  },
  phones: ["+251 91 146 3838", "+251 91 120 3647"] as const,
  email: "sophoniassdeneke@gmail.com",
  businessHours: "Contact us by phone or email during business hours.",
  logo: {
    src: "/image/logo.jpeg",
    alt: "Deneke Abebe Construction logo",
  },
  images: {
    hero: {
      src: "/image/finished building.jpg",
      alt: "Completed building constructed by Deneke Abebe Construction",
    },
    about: {
      src: "/image/office.jpg",
      alt: "Deneke Abebe Construction office",
    },
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const stats = [
  { value: "30+", label: "Years" },
  { value: "4", label: "Core services" },
  { value: "Public · Private · NGO", label: "Sectors served" },
  { value: "Clean", label: "Litigation record" },
] as const;

export const values = [
  {
    id: "timely",
    title: "Timely Completion",
    description:
      "We plan and execute so work finishes on the agreed schedule.",
  },
  {
    id: "quality",
    title: "Quality Assurance",
    description:
      "We hold work to professional construction standards from start to handover.",
  },
  {
    id: "sustainable",
    title: "Sustainable Development",
    description:
      "We build with care for people, materials, and the communities we serve.",
  },
] as const;

export const services = [
  {
    id: "building",
    name: "Building Construction",
    href: "/services#building",
    summary:
      "General building construction for public, private, and NGO clients.",
    description:
      "DAC delivers building construction as a registered general contractor, from site work through structural and finishing stages.",
    bullets: [
      "New building construction",
      "Structural and finishing works",
      "On-site coordination and quality control",
      "Handover of completed buildings",
    ],
    image: "/image/working building.jpg",
    imageAlt: "Building construction in progress by DAC",
  },
  {
    id: "road",
    name: "Road Projects",
    href: "/services#road",
    summary: "Road construction and related civil works.",
    description:
      "DAC undertakes road projects as part of its general contracting services for public, private, and NGO clients.",
    bullets: [
      "Road construction works",
      "Site preparation and earthworks",
      "Coordination with project stakeholders",
      "Delivery aligned with agreed specifications",
    ],
    image: null,
    imageAlt: "Road project works",
  },
  {
    id: "water",
    name: "Water Works",
    href: "/services#water",
    summary: "Water-related civil and construction works.",
    description:
      "DAC carries out water works within its general contracting scope, supporting infrastructure that communities rely on.",
    bullets: [
      "Water-related civil works",
      "Underground and site works where required",
      "Construction to agreed specifications",
      "Coordination through to handover",
    ],
    image: "/image/under ground work.jpg",
    imageAlt: "Underground construction work related to civil and water works",
  },
  {
    id: "engineering",
    name: "Engineering Services",
    href: "/services#engineering",
    summary: "Engineering support across DAC construction projects.",
    description:
      "DAC provides engineering services that support planning, execution, and quality of its construction work.",
    bullets: [
      "Engineering support for construction",
      "Planning and technical coordination",
      "Quality-focused execution",
      "Support through project handover",
    ],
    image: "/image/inside working building.jpg",
    imageAlt: "Engineering and construction work inside a building",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your needs, scope, and how DAC can serve the project.",
  },
  {
    step: "02",
    title: "Planning",
    description: "We organize the work, schedule, and resources for a clear path forward.",
  },
  {
    step: "03",
    title: "Execution",
    description: "We carry out construction with on-site supervision and quality control.",
  },
  {
    step: "04",
    title: "Handover",
    description: "We complete the work and hand over the project as agreed.",
  },
] as const;

export const contactSubjects = [
  "Building Construction",
  "Road Projects",
  "Water Works",
  "Engineering Services",
  "General inquiry",
] as const;

export const pageMeta = {
  home: {
    title: "Deneke Abebe Construction | General Contractor in Addis Ababa, Ethiopia",
    description:
      "Deneke Abebe Construction (DAC) is a family-owned general contractor in Addis Ababa, Ethiopia, established March 31, 1995. Building, road, water, and engineering services.",
  },
  about: {
    title: "About | Deneke Abebe Construction",
    description:
      "Learn about Deneke Abebe Construction, a family-owned general contractor established in 1995 in Addis Ababa. GC-6/GC-5 registered with a clean litigation record.",
  },
  services: {
    title: "Services | Deneke Abebe Construction",
    description:
      "DAC services: Building Construction, Road Projects, Water Works, and Engineering Services for public, private, and NGO clients in Ethiopia.",
  },
  projects: {
    title: "Projects | Deneke Abebe Construction",
    description:
      "Project photographs from Deneke Abebe Construction sites and completed buildings in Ethiopia.",
  },
  contact: {
    title: "Contact | Deneke Abebe Construction",
    description:
      "Contact Deneke Abebe Construction in Addis Ababa. Call +251 91 146 3838 or email sophoniassdeneke@gmail.com.",
  },
} as const;
