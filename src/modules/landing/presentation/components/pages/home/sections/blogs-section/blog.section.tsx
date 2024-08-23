import { cn } from "@/lib/utils";
import LandingContainer from "../../../../shared/landing-container/landing-container";
import BlogsCarousel from "./components/blogs-carousel/blogs-carousel";

export function BlogSection() {
  return (
    <LandingContainer className={cn("flex flex-col gap-y-3")}>
      <div className="flex flex-col gap-y-3 text-center font-bold text-4xl sm:text-5xl xl:text-6xl col-span-full mb-4">
        <h2>Enterate de nuestras</h2>
        <h3 className="text-primary">ultmas noticias</h3>
      </div>
      <BlogsCarousel />
    </LandingContainer>
  );
}
