import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/modules/landing/presentation/components/shared/theme-switcher/theme-swticher";
import { ChevronRight } from "lucide-react";

import BrandLogo from "@/modules/landing/presentation/components/shared/brand-logo/brand-logo";
import LandingSection from "@/modules/landing/presentation/components/shared/landing-section/landing-section";
import LandingNavbar from "@/modules/landing/presentation/components/shared/navbar/landing-navbar";
import OpeningSection from "@/modules/landing/presentation/components/pages/home/sections/opening-section/opening-section";
import OpeningSectionV2 from "@/modules/landing/presentation/components/pages/home/sections/opening-section-v2/opening-section-v2";

export default function LandingMain() {
  return (
    <main className="min-h-screen max-h-screen overflow-auto md:gap-y-0 flex flex-col">
      <LandingSection className="">
        <LandingNavbar />
      </LandingSection>
      <LandingSection className="flex flex-col gap-y-8">
        {/* <OpeningSection /> */}
        <OpeningSectionV2 />
      </LandingSection>
    </main>
  );
}
