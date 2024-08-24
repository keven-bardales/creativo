"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BLOGS } from "@/modules/landing/presentation/constants/blogs.constant";
import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", (tes) => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full"
      opts={{
        slidesToScroll: 1,
      }}
    >
      <CarouselContent className="w-full flex">
        {BLOGS.map((blog) => (
          <CarouselItem key={blog.id} className="flex flex-col gap-y-3 max-w-[45%] p-4 box-border">
            <Image src={blog.image} alt={blog.image} width={500} height={300} className="rounded-sm mx-auto min-h-[400px] w-full" />

            <div className="flex gap-x-3 w-full items-start">
              <div>
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <p className="text-sm">{blog.excerpt}</p>
              </div>
              <Link className="bg-primary text-primary-foreground rounded-3xl p-3 !max-h-fit mt-2" href={`/blog/${blog.id}`}>
                <Icon name={AppIcons.ExternalLink} size={24} />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute -top-[13%] right-[10%] flex p-4 z-10 mt-5">
        <CarouselPrevious className="bg-primary text-white p-2 rounded-full">{/* Previous button content */}</CarouselPrevious>
        {current}/{count}
        <CarouselNext className="bg-primary text-white p-2 rounded-full">{/* Next button content */}</CarouselNext>
      </div>
    </Carousel>
  );
}
