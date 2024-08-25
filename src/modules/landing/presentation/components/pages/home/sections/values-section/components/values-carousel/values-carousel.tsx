"use client";
import { CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { FadeIn } from "@/modules/shared/presentation/components/framer/fade-in";
import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import React from "react";

export const VALUES = [
  {
    title: "Innovación",
    description: "Nos mantenemos a la vanguardia de las últimas tendencias tecnológicas para ofrecerte soluciones innovadoras.",
    icon: AppIcons.Star,
  },
  {
    title: "Compromiso",
    description: "Nos comprometemos a entregar resultados de alta calidad en cada proyecto que emprendemos.",
    icon: AppIcons.HandShake,
  },
  {
    title: "Personalización",
    description: "Entendemos que cada negocio es único, por eso nuestras soluciones están hechas a la medida de tus necesidades.",
    icon: AppIcons.FilePen,
  },
  {
    title: "Transparencia",
    description: "Mantenemos una comunicación clara y abierta en todo momento, asegurando que estés informado en cada paso del camino.",
    icon: AppIcons.SearchCheck,
  },
  {
    title: "Eficiencia",
    description: "Optimizamos procesos y recursos para ofrecerte resultados efectivos y a tiempo.",
    icon: AppIcons.CalendarCheck,
  },
];

export default function ValuesCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full mt-5 relative" opts={{ slidesToScroll: 1 }}>
      <CarouselContent className="w-full flex lg:p-10 pb-14 lg:pb-16 ml-4 gap-x-4">
        {VALUES.map((value) => (
          <CarouselItem key={value.title} className="flex shadow-2xl dark:bg-secondary rounded-3xl flex-col gap-y-5 p-4 max-w-[90%] sm:max-w-[55%]">
            <FadeIn as="div" className="text-lg lg:text-4xl flex items-center gap-x-2">
              <Icon className="h-8 w-8 text-primary" name={value.icon}></Icon> <div> {value.title}</div>
            </FadeIn>
            <FadeIn as="div" className="text-base lg:text-xl text-muted-foreground">
              {value.description}
            </FadeIn>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -bottom-[10%] left-[45%] right-[45%] md:left-auto md:right-[7%] lg:right-[6%] p-4 z-10 mt-5 min-w-fit flex justify-evenly text-center">
        <CarouselPrevious className="bg-primary text-primary-foreground p-2 rounded-full">{/* Previous button content */}</CarouselPrevious>
        <div>
          {current}/{count}
        </div>
        <CarouselNext className="bg-primary text-primary-foreground p-2 rounded-full">{/* Next button content */}</CarouselNext>
      </div>
    </Carousel>
  );
}
