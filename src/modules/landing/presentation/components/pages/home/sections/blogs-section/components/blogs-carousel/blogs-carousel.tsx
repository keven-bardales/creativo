"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BLOGS } from "@/modules/landing/presentation/constants/blogs.constant";
import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogsCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{
        slidesToScroll: 1,
      }}
    >
      <CarouselContent className="w-full flex">
        {BLOGS.map((blog) => (
          <CarouselItem key={blog.id} className="flex flex-col gap-y-3 max-w-[50%] p-4 box-border">
            <Image src={blog.image} alt={blog.image} width={500} height={300} className="rounded-sm mx-auto min-h-[600px] w-full" />

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
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">{/* Add Next button content */}</CarouselNext>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">{/* Add Previous button content */}</CarouselPrevious>
    </Carousel>
  );
}
