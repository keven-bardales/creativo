"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { REVIEWS } from "@/modules/landing/presentation/constants/reviews.constant";

export default function ReviewsCarousel() {
  return (
    <Carousel className="w-full mt-5 relative" opts={{ slidesToScroll: 1 }}>
      <CarouselContent className="w-full flex p-10 pb-14">
        {REVIEWS.map((review) => (
          <CarouselItem key={review.comment} className="flex shadow-2xl dark:bg-secondary rounded-3xl flex-col gap-y-5 p-4 mr-5 ml-5 max-w-[90%]">
            <div className="text-5xl">
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

      <div className="absolute bottom-0 right-[10%] flex p-4 z-10 mt-5">
        <CarouselPrevious className="bg-primary text-white p-2 rounded-full">{/* Previous button content */}</CarouselPrevious>

        <CarouselNext className="bg-primary text-white p-2 rounded-full">{/* Next button content */}</CarouselNext>
      </div>
    </Carousel>
  );
}
