import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import LandingProviders from "@/modules/landing/presentation/providers/landing-providers/landing-providers";
import LandingSection from "@/modules/landing/presentation/components/shared/landing-section/landing-section";
import LandingNavbar from "@/modules/landing/presentation/components/shared/navbar/landing-navbar";
import LandingFooter from "@/modules/landing/presentation/components/shared/footer/footer";
import GoogleAnalyticsLanding from "@/modules/landing/presentation/components/shared/google-analytics/google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creativo",
  abstract: "Creativo es una agencia de marketing digital que ayuda a las empresas a crecer en el mundo digital.",
  keywords:
    "marketing digital en honduras, marketing social en honduras, estrategias de marketing, agencias de publicidad en honduras, agencias de publicidad honduras, diseño web en honduras, empresas de desarrollo de software en honduras, desarrollo web en honduras, desarrollo de software en honduras, marketing en honduras, aplicaciones web en honduras, posicionamiento web en honduras, agencia marketing digital en honduras, empresa de marketing en honduras, digital marketing digital, marketing digital marketing digital, digital marketing que es",
  applicationName: "Creativo",
  archives: "Creativo",
  authors: {
    name: "Creativo",
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
  category: "Creativo",
  classification: "Creativo",
  bookmarks: "Creativo",
  assets: "Creativo",
  creator: "Creativo",
  description: "Creativo es una agencia de marketing digital que ayuda a las empresas a crecer en el mundo digital.",
  generator: "Creativo",
  icons: "Creativo",
  robots: "index, follow",
  publisher: "Creativo",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LandingProviders>
      <GoogleAnalyticsLanding />
      <main suppressHydrationWarning={true} className="md:gap-y-0 flex flex-col w-full max-w-full">
        <LandingSection id="nav" className="fixed top-0 z-[50] bg-background">
          <LandingNavbar />
        </LandingSection>
        {children}
        <LandingSection className="mt-24">
          <LandingFooter />
        </LandingSection>
      </main>
    </LandingProviders>
  );
}
