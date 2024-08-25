import { cn } from "@/lib/utils";
import LandingContainer from "../../../../shared/landing-container/landing-container";
import { FadeIn } from "@/modules/shared/presentation/components/framer/fade-in";
import ValuesCarousel from "./components/values-carousel/values-carousel";

export function ValuesSection() {
  return (
    <LandingContainer className={cn("flex flex-col !p-0")}>
      <FadeIn as="div" className="flex flex-col gap-y-3 text-center font-bold text-4xl sm:text-5xl xl:text-6xl col-span-full px-1">
        <h2>Descubre lo que</h2>
        <h3 className="text-primary">representa nuestra empresa</h3>
        <h3 className="w-full px-5 font-light text-xl text-center">
          Estos son los valores fundamentales de <strong className="text-primary">Creativo</strong>
        </h3>
      </FadeIn>

      <ValuesCarousel />
    </LandingContainer>
  );
}
