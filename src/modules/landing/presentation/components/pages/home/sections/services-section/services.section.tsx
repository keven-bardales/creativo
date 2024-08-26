import { cn } from "@/lib/utils";
import LandingContainer from "../../../../shared/landing-container/landing-container";
import Card from "@/modules/shared/presentation/components/ui/card/card";
import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import { SERVICES } from "@/modules/landing/presentation/constants/services.constant";
import herobg from "@root/public/mocks/pexels-kindelmedia-7688336.jpg";
import Image from "next/image";
import { FadeIn, FadeInStagger, FadeInStaggredChildren } from "@/modules/shared/presentation/components/framer/fade-in";

export function ServicesSection() {
  return (
    <LandingContainer className={cn("flex flex-col gap-y-3")}>
      <FadeIn as="div" className="flex flex-col gap-y-3 text-center font-bold text-4xl sm:text-5xl xl:text-6xl col-span-full mb-4">
        <h2>Construye tu marca con</h2>
        <h3 className="text-primary">nuestros servicios</h3>
      </FadeIn>

      <FadeInStagger as="div" className="relative flex-col sm:flex-row gap-y-8 md:flex-row flex flex-wrap justify-evenly lg:gap-y-4 w-full">
        {SERVICES.map((item, index) => {
          return (
            <FadeInStaggredChildren
              as={"div"}
              key={`Service-section${index}`}
              className={cn(
                "relative transition-transform duration-300 ease-in-out bg-transparent dark:border-none border dark:bg-secondary shadow-2xl flex md:!w-fit w-full sm:max-w-[47%] lg:max-w-[23%] p-3 gap-x-5 h-fit min-h-[400px] rounded-3xl",
                {
                  "z-30 lg:translate-y-4 lg:transform lg:scale-110 lg:scale-x-[1.15] !bg-primary text-primary-foreground": item?.scaleUp, // Alto z-index para la tarjeta que contiene imágenes
                  "z-10": !item?.scaleUp, // Z-index bajo para otras tarjetas
                  "z-30": item?.imagesOnTop,
                }
              )}
            >
              <div className="flex flex-col justify-between">
                <Icon
                  className={cn("text-primary mx-auto mt-auto mb-auto h-24 w-24", {
                    "text-primary-foreground": item?.scaleUp,
                  })}
                  name={item?.icon}
                />

                <div className="flex flex-col gap-y-3">
                  <h3 className="font-bold text-xl">{item?.name}</h3>
                  <p className="text-sm">{item?.description}</p>
                </div>
              </div>

              {item?.imagesOnTop && (
                <>
                  <Image
                    src={herobg.src}
                    alt="hero"
                    width={512}
                    height={512}
                    className="rounded-sm absolute left-[10%] top-0 max-w-[35%] sm:max-w-[55%] -rotate-12 z-40" // Z-index superior para las imágenes
                  />
                  <Image
                    src={herobg.src}
                    alt="hero"
                    width={512}
                    height={512}
                    className="rounded-sm absolute left-[20%] top-[34%] max-w-[35%] sm:max-w-[55%] rotate-2 z-40" // Z-index superior para las imágenes
                  />
                  <Image
                    src={herobg.src}
                    alt="hero"
                    width={512}
                    height={512}
                    className="rounded-sm absolute left-[10%] top-[70%] max-w-[35%] sm:max-w-[55%] rotate-[25deg] z-40" // Z-index superior para las imágenes
                  />
                </>
              )}
            </FadeInStaggredChildren>
          );
        })}
      </FadeInStagger>
    </LandingContainer>
  );
}
