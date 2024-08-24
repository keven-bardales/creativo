import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import LandingContainer from "../../../../shared/landing-container/landing-container";
import Button from "@/modules/shared/presentation/components/ui/button/button";
import { ButtonVariants } from "@/modules/shared/presentation/components/ui/button/button-variants.enum";
import { cn } from "@/lib/utils";

import herobg from "@root/public/mocks/pexels-kindelmedia-7688336.jpg";
import CardForStatistics from "./components/card-for-statistics/card-for-statistics";
import DedicationCard from "./components/dedication-card/dedication-card";
import { FadeIn } from "@/modules/shared/presentation/components/framer/fade-in";

export default function OpeningSectionV2() {
  return (
    <>
      <LandingContainer className={cn("flex flex-col lg:flex-row justify-between")}>
        <div className="flex flex-col gap-y-6 w-full lg:max-w-[44%] lg:pt-5">
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-col text-center items-center md:text-7xl lg:text-left lg:items-start gap-4 font-bold text-4xl sm:text-6xl lg:text-6xl">
              <FadeIn as="h1">El éxito de tu</FadeIn>
              <FadeIn as="h2">marca empieza</FadeIn>
              <FadeIn as="div" className="flex items-center gap-2">
                <h2>aquí</h2>
                <div>
                  <hr className="border-foreground border-2 w-[140px] sm:w-[150px] md:w-[250px]" />
                </div>
                <Icon name={AppIcons.Globe} size={52} />
              </FadeIn>
            </div>

            <h3 className="font-light text-foreground text-center lg:text-left md:text-xl lg:text-lg w-full lg:max-w-[80%]">
              {" "}
              Incrementa tu base de clientes con <strong className="text-primary font-bold">Creativo</strong> y estrategias dirigidas.
            </h3>
          </div>

          <div className="flex gap-x-4 sm:w-fit flex-wrap gap-y-5 ml-auto mr-auto lg:ml-0 lg:mr-0">
            <Button className="grow shrink-0">Obtén tu propuesta gratuita</Button>
            <Button className="grow shrink-0" variant={ButtonVariants.OUTLINE}>
              Explicame Como funciona
            </Button>
          </div>

          <FadeIn
            as="div"
            className="flex justify-center gap-2 lg:gap-x-5 pt-10 font-bold md:semi-bold flex-wrap text-foreground gap-y-3 text-sm sm:text-base items-center md:text-xl lg:max-w-[80%] ml-auto mr-auto lg:justify-start lg:ml-0 lg:mr-0"
          >
            <div>Social Media</div>

            <div className="font-bold">/</div>

            <div>Content Writing</div>

            <div className="font-bold">/</div>

            <div>SEO</div>

            <div className="font-bold">/</div>

            <div>Video Production</div>

            <div className="font-bold">/</div>

            <div>Pay per click</div>
          </FadeIn>
        </div>

        <FadeIn
          as="div"
          className="h-[85vh] w-full lg:w-[50%] min-h-[600px] max-h-[600px] bg-background relative rounded-3xl mt-14 lg:mt-5 border-none border-0"
        >
          <div
            style={{
              backgroundImage: `url(${herobg.src})`,
            }}
            className="w-full h-full bg-cover bg-center rounded-3xl"
          ></div>
          <div className="bg-background top-0 left-0 z-[10] absolute h-[20%] w-[30%] rounded-br-3xl"></div>
          <div className="absolute z-[10] top-0 h-[25px] left-[30%] w-[25px] rounded-[50%] shadow-hero-rounded-top"></div>
          <div className="absolute z-[10] top-[20%] h-[25px] left-[0] w-[25px] bg-transparent rounded-[50%] shadow-hero-rounded-top"></div>

          <div className="bg-background bottom-0 right-0 z-[10] absolute h-[50%] w-[40%] rounded-tl-3xl p-3 pr-0 pb-0">
            <DedicationCard />
          </div>

          <div className="absolute z-[10] top-[46%] h-[25px] right-0 w-[25px] bg-transparent rounded-[50%] shadow-hero-rounded-bottom"></div>

          <div className="absolute z-[10] bottom-0 h-[25px] right-[40%] w-[25px] bg-transparent rounded-[50%] shadow-hero-rounded-bottom"></div>

          <CardForStatistics />
        </FadeIn>

        <CardForStatistics
          descriptionClassName="text-xl text-center"
          titleClassName="font-bold text-4xl sm:text-5xl xl:text-6xl text-center"
          className="block lg:hidden w-full mt-14 md:max-w-[80%] mx-auto"
          contentClassName="gap-y-5"
        />

        <DedicationCard className="block sm:max-w-[80%] md:hidden mt-10 mx-auto" />
      </LandingContainer>
    </>
  );
}
