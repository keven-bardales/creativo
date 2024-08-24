import { cn } from "@/lib/utils";
import LandingContainer from "../../../../shared/landing-container/landing-container";
import Card from "@/modules/shared/presentation/components/ui/card/card";
import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import herobg from "@root/public/mocks/pexels-kindelmedia-7688336.jpg";

export function AboutDigitalMarketingSection() {
  return (
    <LandingContainer className={cn("flex flex-col justify-between")}>
      <div className="flex flex-col gap-y-3 text-center font-bold text-4xl sm:text-5xl xl:text-6xl">
        <h2>Como los servicios de marketing</h2>
        <h3 className="text-primary">hacen crecer tu negocio</h3>
      </div>

      <div className="w-full flex-col lg:flex-row flex mt-10 gap-x-7 gap-y-8">
        <Card className="h-auto md:min-h-[400px] w-full lg:max-w-[48%] bg-transparent dark:border-none border dark:bg-secondary shadow-2xl gap-x-5 flex flex-col md:flex-row">
          <div
            style={{
              backgroundImage: `url(${herobg.src})`,
            }}
            className="md:w-[35%] w-full h-[300px] rounded-t-3xl md:!rounded-r-none  md:h-full bg-card md:!rounded-l-3xl shrink-0 bg-cover bg-center"
          ></div>
          <div className="flex flex-col justify-between p-3 gap-y-8">
            <div className="p-4 rounded-3xl bg-primary w-fit mx-auto md:ml-0 md:mr-0">
              <Icon className="text-primary-foreground" size={40} name={AppIcons.Globe} />
            </div>
            <div className="flex gap-x-4 justify-center md:justify-start">
              <div className="flex flex-col gap-y-2">
                <div className="font-bold text-4xl">+237%</div>
                <div className="text-sm">Top 5 word rankings</div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="font-bold text-4xl">+124%</div>
                <div className="text-sm">Monthly leads</div>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-bold text-xl">Multi Location Practice Group</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque porro nihil blanditiis dolorem similique nemo inventore aut amet
                mollitia tempora, consequuntur quo id vero reiciendis? Excepturi consequatur eaque ullam itaque?
              </p>
            </div>
          </div>
        </Card>

        <div className="flex flex-col md:flex-row lg:max-w-[48%] gap-x-7 gap-y-5">
          <Card className="min-h-[400px] bg-transparent dark:border-none border dark:bg-secondary shadow-2xl flex md:!w-fit w-full p-3 gap-x-5">
            <div className="flex flex-col justify-between">
              <div className="p-4 rounded-3xl bg-primary w-fit mx-auto md:ml-0 md:mr-0">
                <Icon className="text-primary-foreground" size={40} name={AppIcons.Globe} />
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold text-xl">Multi Location Practice Group</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque porro nihil blanditiis dolorem similique nemo inventore aut amet
                  mollitia tempora, consequuntur quo id vero reiciendis? Excepturi consequatur eaque ullam itaque?
                </p>
              </div>
            </div>
          </Card>

          <Card className="min-h-[400px] bg-transparent dark:border-none border dark:bg-secondary shadow-2xl flex md:!w-fit w-full p-3 gap-x-5">
            <div className="flex flex-col justify-between">
              <div className="p-4 rounded-3xl bg-primary w-fit mx-auto md:ml-0 md:mr-0">
                <Icon className="text-primary-foreground" size={40} name={AppIcons.Globe} />
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold text-xl">Multi Location Practice Group</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque porro nihil blanditiis dolorem similique nemo inventore aut amet
                  mollitia tempora, consequuntur quo id vero reiciendis? Excepturi consequatur eaque ullam itaque?
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </LandingContainer>
  );
}
