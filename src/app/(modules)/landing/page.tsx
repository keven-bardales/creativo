import LandingSection from "@/modules/landing/presentation/components/shared/landing-section/landing-section";
import LandingNavbar from "@/modules/landing/presentation/components/shared/navbar/landing-navbar";
import OpeningSectionV2 from "@/modules/landing/presentation/components/pages/home/sections/opening-section-v2/opening.section-v2";
import { AboutDigitalMarketingSection } from "@/modules/landing/presentation/components/pages/home/sections/about-digital-marketing/about-digital-marketing.section";
import { MainBlogItem } from "@/modules/landing/presentation/components/pages/home/sections/main-blog-item/main-blog-item.section";
import { ServicesSection } from "@/modules/landing/presentation/components/pages/home/sections/services-section/services.section";
import { BlogSection } from "@/modules/landing/presentation/components/pages/home/sections/blogs-section/blog.section";
import { ReviewSection } from "@/modules/landing/presentation/components/pages/home/sections/review-section/review-section";

export default function LandingMain() {
  return (
    <main className="min-h-screen max-h-screen overflow-auto md:gap-y-0 flex flex-col pb-10">
      <LandingSection className="">
        <LandingNavbar />
      </LandingSection>
      <LandingSection className="flex flex-col gap-y-8">
        <OpeningSectionV2 />
      </LandingSection>
      <LandingSection className="flex flex-col gap-y-8 mt-16 lg:mt-24">
        <AboutDigitalMarketingSection />
      </LandingSection>
      <LandingSection className="flex flex-col gap-y-8 mt-16 lg:mt-24">
        <MainBlogItem />
      </LandingSection>
      <LandingSection className="flex flex-col gap-y-8 mt-16 lg:mt-24">
        <ServicesSection />
      </LandingSection>
      <LandingSection className="flex flex-col gap-y-8 mt-16 lg:mt-24">
        <BlogSection />
      </LandingSection>
      <LandingSection className="flex flex-col gap-y-8 mt-24">
        <ReviewSection />
      </LandingSection>
    </main>
  );
}
