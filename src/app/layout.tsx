import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

import "@/app/globals.css";
import { cn } from "@/lib/utils";

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
  description: "Creativo es una agencia de marketing digital y desarrollo de software que ayuda a las empresas a crecer en el mundo digital.",
  generator: "Creativo",
  icons: "Creativo",
  robots: "index, follow",
  publisher: "Creativo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="scrollbar-thin scrollbar-track-secondary scrollbar-thumb-primary overflow-x-hidden flex flex-col min-h-full"
      suppressHydrationWarning={true}
      lang="es"
    >
      <body className={`${cn("bg-background !m-0 overflow-x-hidden w-full max-w-full flex flex-col min-h-full", inter.className)}`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
