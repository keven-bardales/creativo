import { cn } from "@/lib/utils";
import LandingContainer from "../../../../shared/landing-container/landing-container";
import Card from "@/modules/shared/presentation/components/ui/card/card";
import imageForCard from "@root/public/landing/news/pexels-kaboompics-6224.jpg";
import { FadeIn } from "@/modules/shared/presentation/components/framer/fade-in";
import Image from "next/image";

export function MainBlogItem() {
  return (
    <LandingContainer className={cn("flex flex-col justify-between")}>
      <Card className="min-h-[550px] h-auto md:h-[550px] w-full dark:border-none border flex gap-x-5 flex-col md:flex-row">
        <FadeIn
          as="div"
          className="md:w-[40%] w-full h-[300px] md:h-full bg-card md:!rounded-l-3xl shrink-0 bg-cover bg-center rounded-t-3xl md:rounded-r-none"
        >
          <Image
            src={imageForCard.src}
            alt="hero"
            width={512}
            height={512}
            quality={100}
            className="w-full rounded-t-3xl md:!rounded-r-none h-full bg-card md:!rounded-l-3xl shrink-0 object-cover object-center"
          ></Image>
        </FadeIn>
        <div className="flex flex-col p-3 md:pb-10">
          <FadeIn as="div" className="flex flex-col gap-y-3 font-bold text-2xl sm:text-4xl xl:text-6xl">
            <h2>¿Por son importantes los</h2>
            <h3 className="text-primary">servicios digitales?</h3>

            <div className="flex flex-col gap-y-4 dark:text-foreground font-normal text-base">
              <p>
                Los servicios digitales son esenciales para cualquier negocio moderno. Permiten alcanzar a un público más amplio, mejorar la
                eficiencia operativa y crear experiencias personalizadas para los clientes. En un mundo cada vez más conectado, tu presencia en línea
                puede ser la diferencia entre el éxito y la irrelevancia.
              </p>

              <p>
                Invertir en servicios digitales no solo fortalece tu marca, sino que también te posiciona como un líder en tu industria. Con
                estrategias digitales efectivas, puedes anticiparte a las necesidades de tus clientes, optimizar tus procesos internos y obtener datos
                valiosos para tomar decisiones informadas. El futuro de los negocios es digital, y estar preparado es clave para mantenerse
                competitivo.
              </p>
            </div>
          </FadeIn>
        </div>
      </Card>
    </LandingContainer>
  );
}
