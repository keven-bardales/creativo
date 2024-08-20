import { cn } from "@/lib/utils";
import LandingContainer from "../../../../shared/landing-container/landing-container";
import Card from "@/modules/shared/presentation/components/ui/card/card";
import Button from "@/modules/shared/presentation/components/ui/button/button";
import herobg from "@root/public/mocks/pexels-kindelmedia-7688336.jpg";
import Image from "next/image";

export function MainBlogItem() {
  return (
    <LandingContainer className={cn("flex flex-col justify-between")}>
      <Card className="min-h-[550px] h-auto md:h-[550px] w-full bg-transparent dark:border-none border dark:bg-secondary shadow-2xl flex gap-x-5 flex-col md:flex-row">
        <div
          style={{
            backgroundImage: `url(${herobg.src})`,
          }}
          className="md:w-[40%] w-full h-[300px] md:h-full bg-card md:!rounded-l-3xl shrink-0 bg-cover bg-center rounded-t-3xl md:rounded-r-none"
        ></div>
        <div className="flex flex-col p-3 md:pb-10">
          <div className="flex flex-col gap-y-3 font-bold text-2xl sm:text-4xl xl:text-6xl">
            <h2>¿Por son importantes los</h2>
            <h3 className="text-primary">servicios digitales?</h3>

            <p className="text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque porro nihil blanditiis dolorem similique nemo inventore aut amet
              mollitia tempora, consequuntur quo id vero reiciendis? Excepturi consequatur eaque ullam itaque? Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <Button className="shrink-0 w-fit min-w-[150px] mt-5 md:mt-auto">Leer más</Button>
        </div>
      </Card>
    </LandingContainer>
  );
}
