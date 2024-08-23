import { cn } from "@/lib/utils";
import LandingContainer from "../../../../shared/landing-container/landing-container";
import Card from "@/modules/shared/presentation/components/ui/card/card";
import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import { SERVICES } from "@/modules/landing/presentation/constants/services.constant";
import herobg from "@root/public/mocks/pexels-kindelmedia-7688336.jpg";
import Image from "next/image";

export function ServicesSection() {
  const ArrayFill = (length: number) => Array.from({ length }, (_, i) => i);

  const items = ArrayFill(8);

  return (
    <LandingContainer className={cn("flex flex-col gap-y-3")}>
      <div className="flex flex-col gap-y-3 text-center font-bold text-4xl sm:text-5xl xl:text-6xl col-span-full mb-4">
        <h2>Construye tu marca con</h2>
        <h3 className="text-primary">nuestros servicios</h3>
      </div>

      <div className="relative flex flex-wrap justify-evenly gap-y-4">
        {SERVICES.map((item, index) => {
          return (
            <Card
              key={`Service-section${index}`}
              className={cn(
                "relative transition-transform duration-300 ease-in-out bg-transparent dark:border-none border dark:bg-secondary shadow-2xl flex md:!w-fit w-full max-w-[23%] p-3 gap-x-5 h-fit min-h-[400px]",
                {
                  "z-10 translate-y-4 transform scale-110 scale-x-[1.15] !bg-primary text-primary-foreground": item?.scaleUp,
                  "z-0": !item?.scaleUp,
                }
              )}
            >
              <div className="flex flex-col justify-between">
                <Icon
                  className={cn("text-primary mt-3", {
                    "text-primary-foreground": item?.scaleUp,
                  })}
                  size={40}
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
                    width={500}
                    height={300}
                    className="rounded-sm absolute left-[10%] top-0 max-w-[55%] -rotate-12"
                  />
                  <Image
                    src={herobg.src}
                    alt="hero"
                    width={500}
                    height={300}
                    className="rounded-sm absolute left-[20%] top-[34%] max-w-[55%] rotate-2"
                  />
                  <Image
                    src={herobg.src}
                    alt="hero"
                    width={500}
                    height={300}
                    className="rounded-sm absolute left-[10%] top-[70%] max-w-[55%] rotate-[25deg] z-[30]"
                  />
                </>
              )}
            </Card>
          );
        })}
      </div>
    </LandingContainer>
  );
}
