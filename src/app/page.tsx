import type { Metadata } from "next";
import { pageMeta } from "@/data/company";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ValuesPreview } from "@/components/home/ValuesPreview";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: { absolute: pageMeta.home.title },
  description: pageMeta.home.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <ServicesPreview />
      <ValuesPreview />
      <ProjectsPreview />
      <CtaBand />
    </>
  );
}
