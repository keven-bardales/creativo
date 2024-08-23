import { cn } from "@/lib/utils";
import LandingContainer from "../../../../shared/landing-container/landing-container";
import ReviewsCarousel from "./components/reviews-carousel/reviews-carousel";

export function ReviewSection() {
  return (
    <LandingContainer className={cn("flex flex-col gap-y-3")}>
      <div className="flex flex-col gap-y-3 text-center font-bold text-4xl sm:text-5xl xl:text-6xl col-span-full mb-4">
        <h2>Conoce lo que</h2>
        <h3 className="text-primary">dicen nuestros clientes</h3>
      </div>
      <ReviewsCarousel />
    </LandingContainer>
  );
}
