"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import { useI18n } from "./I18nProvider";

export default function Testimonials() {
  const { t } = useI18n();

  return (
    <section
      className="relative py-24 overflow-hidden"
      id="testimonials"
      style={{
        background:
          "linear-gradient(180deg,#f8f4eb 0%,#fffcf7 50%,#f8f4eb 100%)",
      }}
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d9ccb6]/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#264225]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center md:mb-16 mb-8">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "#e9ddc7",
              color: "#264225",
            }}
          >
            {t.testimonials.eyebrow}
          </span>

          <h2
            className="mt-5 text-4xl md:text-5xl font-bold capitalize"
            style={{ color: "#264225" }}
          >
            {t.testimonials.title}
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t.testimonials.description}
          </p>
        </div>

        <div className="relative ">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 3500 })]}
            className="w-full"
          >
            <CarouselContent>
              {t.testimonials.items.map((item) => (
                <CarouselItem
                  key={item.name}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="h-full rounded-[36px] border-3 p-8 backdrop-blur-sm transition-all duration-500 group"
                    style={{
                      background: "rgba(255,255,255,0.75)",
                      borderColor: "#e5d8c2",
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center group-hover:rotate-9 transition-all duration-500"
                      style={{
                        background: "#efe4d0",
                      }}
                    >
                      <Quote size={28} color="#264225" />
                    </div>

                    <p
                      className="mt-6 text-lg leading-8 min-h-[80px]"
                      style={{
                        color: "#5a5a50",
                      }}
                    >
                      “{item.text}”
                    </p>

                    <div className="flex items-center gap-4 mt-8">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center font-bold"
                        style={{
                          background: "#264225",
                          color: "#fff",
                        }}
                      >
                        {item.name[0]}
                      </div>

                      <div>
                        <h3
                          className="font-bold text-lg"
                          style={{
                            color: "#264225",
                          }}
                        >
                          {item.name}
                        </h3>

                        <p
                          className="text-sm"
                          style={{
                            color: "#7d7d72",
                          }}
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white shadow-sm text-[#264225] transition-all duration-300 opacity-100 hover:bg-[#264225] hover:text-white cursor-pointer" />
            <CarouselNext className="hidden md:flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white shadow-sm text-[#264225] transition-all duration-300 opacity-100 hover:bg-[#264225] hover:text-white cursor-pointer" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
