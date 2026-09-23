export type ProjectCategory = "building" | "road" | "water" | "engineering";

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "building", label: "Building" },
  { id: "road", label: "Road" },
  { id: "water", label: "Water" },
  { id: "engineering", label: "Engineering" },
] as const;

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    id: "finished-building",
    title: "Completed building",
    category: "building",
    image: "/image/finished building.jpg",
    alt: "Completed building by Deneke Abebe Construction",
  },
  {
    id: "finished-building-1",
    title: "Completed building exterior",
    category: "building",
    image: "/image/finished building1.jpg",
    alt: "Exterior of a completed DAC building",
  },
  {
    id: "finished-building-3",
    title: "Completed building view",
    category: "building",
    image: "/image/finished building 3.jpg",
    alt: "View of a completed building project",
  },
  {
    id: "finshed-building",
    title: "Finished building",
    category: "building",
    image: "/image/finshed building.jpg",
    alt: "Finished building constructed by DAC",
  },
  {
    id: "finshed-building-4",
    title: "Finished building elevation",
    category: "building",
    image: "/image/finshed building4.jpg",
    alt: "Elevation of a finished DAC building",
  },
  {
    id: "top-finished-building",
    title: "Completed building from above",
    category: "building",
    image: "/image/top finished building.jpg",
    alt: "Upper view of a completed building",
  },
  {
    id: "worked-building",
    title: "Completed building works",
    category: "building",
    image: "/image/worked building.jpg",
    alt: "Building after construction works",
  },
  {
    id: "working-building",
    title: "Building under construction",
    category: "building",
    image: "/image/working building.jpg",
    alt: "DAC building under construction",
  },
  {
    id: "finishing-works",
    title: "Building finishing works",
    category: "building",
    image: "/image/finishing finshed.jpg",
    alt: "Finishing works on a DAC building",
  },
  {
    id: "interior-construction",
    title: "Interior construction",
    category: "building",
    image: "/image/inside working building.jpg",
    alt: "Interior of a building under construction",
  },
  {
    id: "site-working",
    title: "Active construction site",
    category: "building",
    image: "/image/site working.jpg",
    alt: "Active DAC construction site",
  },
  {
    id: "site-working-3",
    title: "Construction site work",
    category: "building",
    image: "/image/site working 3.jpg",
    alt: "Work underway on a DAC construction site",
  },
  {
    id: "working-site",
    title: "Site operations",
    category: "building",
    image: "/image/working site.jpg",
    alt: "Construction site operations",
  },
  {
    id: "worker-working",
    title: "On-site construction",
    category: "building",
    image: "/image/worker working.jpg",
    alt: "Construction work being carried out on site",
  },
  {
    id: "underground-work",
    title: "Underground works",
    category: "building",
    image: "/image/under ground work.jpg",
    alt: "Underground construction works",
  },
];

export const featuredProjects = projects.slice(0, 3);
