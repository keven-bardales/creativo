import { cn } from "@/lib/utils";
import LandingContainer from "../../../../shared/landing-container/landing-container";
import Card from "@/modules/shared/presentation/components/ui/card/card";
import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import { FadeIn } from "@/modules/shared/presentation/components/framer/fade-in";
import Image from "next/image";
import chartsImage from "@root/public/landing/news/pexels-goumbik-590016.jpg";

export function AboutDigitalMarketingSection() {
  return (
    <LandingContainer className={cn("flex flex-col justify-between")}>
      <FadeIn as="div" className="flex flex-col gap-y-3 text-center font-bold text-4xl sm:text-5xl xl:text-6xl">
        <h2>Cómo nuestros servicios de marketing</h2>
        <h3 className="text-primary">impulsan el crecimiento de tu negocio</h3>
      </FadeIn>

      <FadeIn as="div" className="w-full flex-col lg:flex-row flex mt-10 gap-x-7 gap-y-8">
        <Card className="h-auto md:min-h-[400px] w-full lg:max-w-[48%] bg-transparent dark:border-none border dark:bg-secondary shadow-2xl gap-x-5 flex flex-col md:flex-row">
          <Image
            src={chartsImage.src}
            alt="hero"
            width={512}
            height={512}
            className="md:w-[35%] w-full rounded-t-3xl md:!rounded-r-none min-h-[400px] h-full bg-card md:!rounded-l-3xl shrink-0 object-cover"
          ></Image>
          <div className="flex flex-col justify-between p-3 gap-y-8">
            <div className="p-4 rounded-3xl bg-primary w-fit mx-auto md:ml-0 md:mr-0">
              <Icon className="text-primary-foreground" size={40} name={AppIcons.Globe} />
            </div>
            <div className="flex gap-x-4 justify-center md:justify-start">
              <div className="flex flex-col gap-y-2">
                <div className="font-bold text-4xl">+200%</div>
                <div className="text-sm">Incremento en conversiones</div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="font-bold text-4xl">+150%</div>
                <div className="text-sm">Crecimiento en tráfico web</div>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-bold text-xl">Estrategias de Marketing Digital</h3>
              <p className="text-sm">
                Nuestro enfoque personalizado asegura que cada campaña sea optimizada para maximizar el retorno de inversión. Desde la creación de
                contenido hasta la gestión de redes sociales, nuestros servicios están diseñados para que tu negocio crezca de manera sostenida.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex flex-col md:flex-row lg:max-w-[48%] gap-x-7 gap-y-5">
          <Card className="max-h-[300px] sm:max-h-[400px] min-h-[400px] bg-transparent dark:border-none border dark:bg-secondary shadow-2xl flex md:!w-fit w-full p-3 gap-x-5">
            <div className="flex flex-col justify-between">
              <div className="p-4 rounded-3xl bg-primary w-fit mx-auto md:ml-0 md:mr-0">
                <Icon className="text-primary-foreground" size={40} name={AppIcons.Globe} />
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold text-xl">Desarrollo Web Integral</h3>
                <p className="text-sm">
                  Creamos sitios web optimizados para la conversión, asegurando que tu presencia en línea sea una herramienta efectiva para atraer y
                  retener clientes. Desde el diseño hasta la implementación, cada paso está orientado a maximizar el impacto.
                </p>
              </div>
            </div>
          </Card>

          <Card className="max-h-[300px] sm:max-h-[400px] min-h-[400px] bg-transparent dark:border-none border dark:bg-secondary shadow-2xl flex md:!w-fit w-full p-3 gap-x-5">
            <div className="flex flex-col justify-between">
              <div className="p-4 rounded-3xl bg-primary w-fit mx-auto md:ml-0 md:mr-0">
                <Icon className="text-primary-foreground" size={40} name={AppIcons.Globe} />
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold text-xl">SEO y Posicionamiento</h3>
                <p className="text-sm">
                  Aumenta tu visibilidad en los motores de búsqueda y alcanza a más clientes potenciales. Nuestra experiencia en SEO te ayudará a
                  escalar posiciones y a mantenerte por encima de la competencia en los resultados de búsqueda.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </FadeIn>
    </LandingContainer>
  );
}
