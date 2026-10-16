import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "SVU Developers Private Limited | Find a Place to Build Your Future",
  description: "Public company information and a property-discovery website prototype for SVU Developers Private Limited, Vijayawada. Sample property listings are illustrative.",
  openGraph: { title: "SVU Developers Private Limited", description: "Thoughtfully built. Ready for what's next.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}