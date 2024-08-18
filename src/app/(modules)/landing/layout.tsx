import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import LandingProviders from "@/modules/landing/presentation/providers/landing-providers/landing-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creativo",
  description: "Generated by create next app",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LandingProviders>{children}</LandingProviders>;
}
