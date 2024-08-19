import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import LandingContainer from "../../../../shared/landing-container/landing-container";
import Button from "@/modules/shared/presentation/components/ui/button/button";
import { ButtonVariants } from "@/modules/shared/presentation/components/ui/button/button-variants.enum";
import { cn } from "@/lib/utils";

import herobg from "@root/public/mocks/pexels-kindelmedia-7688336.jpg";
import CardForStatistics from "./components/card-for-statistics/card-for-statistics";
import DedicationCard from "./components/dedication-card/dedication-card";

export default function OpeningSectionV2() {
  return (
    <>
      <LandingContainer className={cn("flex flex-col lg:flex-row justify-between")}>
        <div className="flex flex-col gap-y-6 w-full lg:max-w-[44%] lg:pt-5">
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-col md:flex-row lg:flex-col flex-wrap gap-y-4 font-bold text-4xl sm:text-5xl xl:text-6xl mr-auto">
              <h1>El éxito de tu</h1>
              <h2>marca empieza</h2>
              <div className="flex gap-x-2 items-center">
                <h2>aquí</h2>
                <div className="font-normal">
                  <hr className="md:w-[350px] lg:w-[250px] w-[140px] sm:w-[150px] border-foreground border-2" />
                </div>
                <Icon name={AppIcons.Globe} size={52} />
              </div>
            </div>

            <h3 className="font-light text-foreground text-lg w-full lg:max-w-[80%]">
              {" "}
              Incrementa tu base de clientes con <strong className="text-primary font-bold">Creativo</strong> y estrategias dirigidas.
            </h3>
          </div>

          <div className="flex gap-x-4 sm:w-fit flex-wrap gap-y-5">
            <Button className="grow shrink-0">Obtén mi propuesta gratuita</Button>
            <Button className="grow shrink-0" variant={ButtonVariants.OUTLINE}>
              Explicame Como funciona
            </Button>
          </div>

          <div className="flex gap-x-5 pt-10 font-bold md:font-normal flex-wrap text-foreground gap-y-3 text-sm items-center md:text-xl lg:max-w-[80%]">
            <div>Social Media</div>

            <div className="font-bold">/</div>

            <div>Content Writing</div>

            <div className="font-bold">/</div>

            <div>SEO</div>

            <div className="font-bold">/</div>

            <div>Video Production</div>

            <div className="font-bold">/</div>

            <div>Pay per click</div>
          </div>
        </div>

        <div className="h-[85vh] w-full lg:w-[50%] min-h-[550px] max-h-[550px] bg-background relative rounded-3xl mt-14 lg:mt-5 border-none border-0">
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
        </div>

        <CardForStatistics
          descriptionClassName="text-xl"
          titleClassName="font-bold text-3xl"
          className="block md:hidden w-full mt-14"
          contentClassName="gap-y-5"
        />

        <DedicationCard className="block md:hidden mt-10" />
      </LandingContainer>
    </>
  );
}
