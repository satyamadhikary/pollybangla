"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    desktop: "/hero3.png",
    mobile: "/mobile4.jpg",
  },
  {
    desktop: "/hero2.png",
    mobile: "/mobile3.jpg",
  },
  {
    desktop: "/hero1.png",
    mobile: "/mobile2.jpg",
  },
   
];

export default function Hero() {
  return (
    <section className="relative mt-21.75 h-[calc(100dvh-87px)] overflow-hidden">
      <Carousel
        opts={{
          loop: true,
          duration: 20,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="h-full"
      >
        <CarouselContent className="ml-0 h-full">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="pl-0 basis-full h-[calc(100dvh-87px)]"
            >
              <div className="relative h-full w-full">
                <Image
                  src={slide.desktop}
                  alt=""
                  fill
                  priority={index === 0}
                  className="hidden md:block object-cover"
                />

                <Image
                  src={slide.mobile}
                  alt=""
                  fill
                  priority={index === 0}
                  className="block md:hidden object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}