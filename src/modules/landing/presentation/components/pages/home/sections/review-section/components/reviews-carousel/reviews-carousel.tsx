"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { REVIEWS } from "@/modules/landing/presentation/constants/reviews.constant";
import { FadeIn } from "@/modules/shared/presentation/components/framer/fade-in";
import React from "react";

export default function ReviewsCarousel() {
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
    <Carousel setApi={setApi} className="w-full mt-5 relative" opts={{ slidesToScroll: 1 }}>
      <CarouselContent className="w-full flex lg:p-10 pb-14 lg:pb-16 ml-4 gap-x-4">
        {REVIEWS.map((review) => (
          <CarouselItem key={review.comment} className="flex dark:bg-secondary rounded-3xl flex-col gap-y-5 p-4 max-w-[90%] sm:max-w-[55%]">
            <FadeIn as="div" className="text-lg lg:text-4xl">
              {'"'}
              {review.comment}
              {'"'}
            </FadeIn>
            <FadeIn as="div" className="flex gap-x-2 items-center">
              <div className="font-bold bg-primary text-primary-foreground rounded-full p-5">
                {review?.customerName
                  ?.split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>

              <div className="flex flex-col">
                <div className="font-bold text-lg">{review.customerName}</div>
                <div className="text-lg text-muted-foreground">{review.type}</div>
              </div>
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
