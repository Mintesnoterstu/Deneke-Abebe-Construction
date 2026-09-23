import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { company, pageMeta, siteUrl } from "@/data/company";
import { JsonLd } from "@/components/seo/JsonLd";
import { SkipLink } from "@/components/layout/SkipLink";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageMeta.home.title,
    template: `%s | ${company.name}`,
  },
  description: pageMeta.home.description,
  openGraph: {
    type: "website",
    locale: "en_ET",
    url: siteUrl,
    siteName: company.name,
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    images: [
      {
        url: company.images.hero.src,
        alt: company.images.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    images: [company.images.hero.src],
  },
  icons: {
    icon: company.logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${inter.variable} antialiased`}>
        <JsonLd />
        <SkipLink />
        <TopBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
