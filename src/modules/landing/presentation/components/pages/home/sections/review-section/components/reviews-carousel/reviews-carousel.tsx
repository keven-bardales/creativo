"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { REVIEWS } from "@/modules/landing/presentation/constants/reviews.constant";
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
          <CarouselItem
            key={review.comment}
            className="flex shadow-2xl dark:bg-secondary rounded-3xl flex-col gap-y-5 p-4 max-w-[90%] sm:max-w-[55%]"
          >
            <div className="text-lg lg:text-4xl">
              {'"'}
              {review.comment}
              {'"'}
            </div>
            <div className="flex gap-x-2 items-center">
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
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -bottom-[10%] left-[50%] right-[50%] md:left-auto md:right-[7%] lg:right-[6%] p-4 z-10 mt-5 min-w-fit flex justify-evenly">
        <CarouselPrevious className="bg-primary text-primary-foreground p-2 rounded-full">{/* Previous button content */}</CarouselPrevious>
        {current}/{count}
        <CarouselNext className="bg-primary text-primary-foreground p-2 rounded-full">{/* Next button content */}</CarouselNext>
      </div>
    </Carousel>
  );
}
