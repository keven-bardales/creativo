import { cn } from "@/lib/utils";
import LandingContainer from "../../../../shared/landing-container/landing-container";
import BlogsCarousel from "./components/blogs-carousel/blogs-carousel";
import { FadeIn } from "@/modules/shared/presentation/components/framer/fade-in";

export function BlogSection() {
  return (
    <LandingContainer className={cn("flex flex-col gap-y-3 !p-0")}>
      <FadeIn as="div" className="flex flex-col gap-y-3 text-center font-bold text-4xl sm:text-5xl xl:text-6xl col-span-full mb-4 px-4">
        <h2>Enterate de nuestras</h2>
        <h3 className="text-primary">ultmas noticias</h3>
      </FadeIn>
      <BlogsCarousel />
    </LandingContainer>
  );
}
