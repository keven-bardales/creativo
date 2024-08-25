"use client";

import { ThemeProvider } from "@/modules/landing/presentation/providers/theme-providers/theme-provider";

export default function LandingProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={false}>
        {children}
      </ThemeProvider>
    </>
  );
}
