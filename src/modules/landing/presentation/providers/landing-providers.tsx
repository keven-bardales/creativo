"use client";

import { ThemeProvider } from "@landing/presentation/providers/theme-provider";

export default function LandingProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={false}>
        {children}
      </ThemeProvider>
    </>
  );
}
