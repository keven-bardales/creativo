import LandingSection from "@/modules/landing/presentation/components/shared/landing-section/landing-section";
import OpeningSectionV2 from "@/modules/landing/presentation/components/pages/home/sections/opening-section-v2/opening.section-v2";
import { AboutDigitalMarketingSection } from "@/modules/landing/presentation/components/pages/home/sections/about-digital-marketing/about-digital-marketing.section";
import { MainBlogItem } from "@/modules/landing/presentation/components/pages/home/sections/main-blog-item/main-blog-item.section";
import { ServicesSection } from "@/modules/landing/presentation/components/pages/home/sections/services-section/services.section";
import { BlogSection } from "@/modules/landing/presentation/components/pages/home/sections/blogs-section/blog.section";
import { ValuesSection } from "@/modules/landing/presentation/components/pages/home/sections/values-section/values-section";

export default function LandingMain() {
  return (
    <>
      <LandingSection id="main" className="flex flex-col gap-y-8 mt-16">
        <OpeningSectionV2 />
      </LandingSection>
      <LandingSection id="about-marketing" className="flex flex-col gap-y-8 mt-16 lg:mt-24">
        <AboutDigitalMarketingSection />
      </LandingSection>
      <LandingSection id="main-blog" className="flex flex-col gap-y-8 mt-16 lg:mt-24">
        <MainBlogItem />
      </LandingSection>
      <LandingSection id="services" className="flex flex-col gap-y-8 mt-16 lg:mt-24">
        <ServicesSection />
      </LandingSection>
      <LandingSection id="blogs" className="flex flex-col gap-y-8 mt-10 lg:mt-24">
        <BlogSection />
      </LandingSection>
      <LandingSection id="values" className="flex flex-col gap-y-8 mt-0 lg:mt-16">
        <ValuesSection />
      </LandingSection>
    </>
  );
}
