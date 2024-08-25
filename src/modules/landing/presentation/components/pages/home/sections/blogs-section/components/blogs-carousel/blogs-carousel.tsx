"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BLOGS } from "@/modules/landing/presentation/constants/blogs.constant";
import { FadeIn } from "@/modules/shared/presentation/components/framer/fade-in";
import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogReadMoreItem from "./components/blog-carousel-read-more";

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
    <div className="flex flex-col relative w-full justify-center">
      <Carousel
        setApi={setApi}
        className="w-full mt-10"
        opts={{
          slidesToScroll: 1,
        }}
      >
        <CarouselContent className="w-full flex p-6 pb-16 gap-x-5">
          {BLOGS.map((blog) => (
            <CarouselItem
              key={blog.id}
              className="flex flex-col w-full gap-y-3 max-w-[95%] sm:max-w-[45%] lg:max-w-[40%] p-5 box-border shadow-2xl rounded-2xl dark:bg-secondary"
            >
              <FadeIn as="div" className="flex flex-col gap-y-3">
                <Image src={blog.image} alt={blog.image} width={500} height={300} className="rounded-sm mx-auto lg:min-h-[250px] w-full" />

                <div className="flex gap-x-3 w-full items-start">
                  <div className="flex flex-col gap-y-3">
                    <h3 className="sm:text-lg font-bold">{blog.title}</h3>
                    <p className="text-sm">{blog.excerpt}</p>
                  </div>
                  <BlogReadMoreItem blog={blog} />
                </div>
              </FadeIn>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="top-[-7%] absolute mx-auto right-[50%] left-[50%] md:left-auto md:right-[7%] lg:right-[6%] min-w-fit flex justify-evenly">
          <CarouselPrevious className="bg-primary text-primary-foreground p-2 rounded-full">{/* Previous button content */}</CarouselPrevious>
          <div>
            {current}/{count}
          </div>
          <CarouselNext className="bg-primary text-primary-foreground p-2 rounded-full">{/* Next button content */}</CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}
