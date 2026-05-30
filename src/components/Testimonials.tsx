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

export default function Testimonials() {
  const data = [
    {
      name: "অর্ণব সেনগুপ্ত",
      role: "কারিগর",
      text: "সমবায়ের মাধ্যমে আমরা আমাদের পণ্যের সঠিক মূল্য পাচ্ছি।",
    },
    {
      name: "শ্রাবণী রায়",
      role: "কৃষক",
      text: "এখন গ্রামের পণ্য শহরে সহজেই পৌঁছাচ্ছে।",
    },
    {
      name: "দেবজ্যোতি বসু",
      role: "উদ্যোক্তা",
      text: "এই উদ্যোগ গ্রামের মানুষের জীবন পরিবর্তন করছে।",
    },
    {
      name: "সুব্রত ঘোষ",
      role: "হস্তশিল্পী",
      text: "আমাদের পণ্য এখন দেশের বিভিন্ন প্রান্তে পৌঁছাচ্ছে।",
    },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden"
      id="testimonials"
      style={{
        background:
          "linear-gradient(180deg,#f8f4eb 0%,#fffcf7 50%,#f8f4eb 100%)",
      }}
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d9ccb6]/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#264225]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center md:mb-16 mb-8">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "#e9ddc7",
              color: "#264225",
            }}
          >
            সদস্যদের অভিজ্ঞতা
          </span>

          <h2
            className="mt-5 text-4xl md:text-5xl font-bold capitalize"
            style={{ color: "#264225" }}
          >
            আমাদের সদস্যদের কথা
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            আমাদের সমবায়ের সঙ্গে যুক্ত সদস্যদের বাস্তব অভিজ্ঞতা।
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
              {data.map((item) => (
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
                    {/* Quote Icon */}
                    <div
                      className="
                        w-14
                        h-14
                        rounded-full
                        flex
                        items-center
                        justify-center
                        group-hover:rotate-9
                        transition-all
                        duration-500
                      "
                      style={{
                        background: "#efe4d0",
                      }}
                    >
                      <Quote size={28} color="#264225" />
                    </div>

                    {/* Text */}
                    <p
                      className="
                        mt-6
                        text-lg
                        leading-8
                        min-h-[80px]
                      "
                      style={{
                        color: "#5a5a50",
                      }}
                    >
                      “{item.text}”
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-4 mt-8">
                      <div
                        className="
                          w-14
                          h-14
                          rounded-full
                          flex
                          items-center
                          justify-center
                          font-bold
                        "
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
