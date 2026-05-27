"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { CarouselApi } from "@/components/ui/carousel";

// Categories
const categories = [
  { title: "ধান ও চাল" },
  { title: "তামা-পিতল" },
  { title: "হস্তশিল্প" },
  { title: "মধু" },
  { title: "বস্ত্র" },
  { title: "মসলা" },
  { title: "ধান ও চাল" },
  { title: "তামা-পিতল" },
  { title: "হস্তশিল্প" },
  { title: "মধু" },
  { title: "মধু" },
  { title: "মধু" },
];

// Products
const productsData: Record<
  string,
  Array<{
    id: number;
    name: string;
    price: string;
    weight: string;
    img: string;
  }>
> = {
  "ধান ও চাল": [
    {
      id: 1,
      name: "প্রিমিয়াম নাজিরশাইল চাল প্রিমিয়াম নাজিরশাইল চাল",
      price: "৳৮৫",
      weight: "১ কেজি",
      img: "/hero.png",
    },
    {
      id: 2,
      name: "মিনিকেট চাল (নতুন)",
      price: "৳৭২",
      weight: "১ কেজি",
      img: "/hero.png",
    },
    {
      id: 3,
      name: "সুগন্ধি চিনিগুঁড়া চাল",
      price: "৳১৫০",
      weight: "১ কেজি",
      img: "/hero.png",
    },
    {
      id: 4,
      name: "বালাম চাল",
      price: "৳৭৮",
      weight: "১ কেজি",
      img: "/hero.png",
    },
    {
      id: 5,
      name: "প্রিমিয়াম নাজিরশাইল চাল",
      price: "৳৮৫",
      weight: "১ কেজি",
      img: "/hero.png",
    },
    {
      id: 6,
      name: "মিনিকেট চাল (নতুন)",
      price: "৳৭২",
      weight: "১ কেজি",
      img: "/hero.png",
    },
  ],
  "তামা-পিতল": [
    {
      id: 7,
      name: "পিতলের ঐতিহ্যবাহী কলসি",
      price: "৳২,৫০০",
      weight: "১ টি",
      img: "/category2.jpg",
    },
    {
      id: 8,
      name: "তামার পানির পাত্র",
      price: "৳১,৮০০",
      weight: "১ টি",
      img: "/category2.jpg",
    },
  ],
  হস্তশিল্প: [
    {
      id: 9,
      name: "নকশী কাঁথা",
      price: "৳৩,৫০০",
      weight: "১ টি",
      img: "/category3.jpg",
    },
  ],
  মধু: [
    {
      id: 10,
      name: "সুন্দরবনের খাঁটি মধু",
      price: "৳৮৫০",
      weight: "১ কেজি",
      img: "/category4.jpg",
    },
  ],
  বস্ত্র: [
    {
      id: 11,
      name: "তাঁতের সুতি শাড়ি",
      price: "৳১,৮০০",
      weight: "১ টি",
      img: "/category5.jpg",
    },
  ],
  মসলা: [
    {
      id: 12,
      name: "খাঁটি গুড়া হলুদ",
      price: "৳১২০",
      weight: "২৫০ গ্রাম",
      img: "/category6.jpg",
    },
  ],
};

const NAV_BTN_BASE =
  "flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white shadow-sm text-[#264225] transition-all duration-300";

export default function Categories() {
  const [activeTab, setActiveTab] = useState("ধান ও চাল");
  const [tabApi, setTabApi] = useState<CarouselApi>();
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(true);
  const [productApi, setProductApi] = useState<CarouselApi>();
  const [showLeftProducts, setShowLeftProducts] = useState(false);
  const [showRightProducts, setShowRightProducts] = useState(true);

  const currentProducts = productsData[activeTab] || [];

  useEffect(() => {
    if (!tabApi) return;

    const updateButtons = () => {
      const idx = tabApi.selectedScrollSnap();
      const last = tabApi.scrollSnapList().length - 1;

      setLeftVisible(idx > 0);
      setRightVisible(idx < last);
    };

    updateButtons();

    tabApi.on("select", updateButtons);
    tabApi.on("reInit", updateButtons);

    return () => {
      tabApi.off("select", updateButtons);
      tabApi.off("reInit", updateButtons);
    };
  }, [tabApi]);

  useEffect(() => {
    if (!productApi) return;
    const update = () => {
      const idx = productApi.selectedScrollSnap();
      const last = productApi.scrollSnapList().length - 1;
      setShowLeftProducts(idx > 0);
      setShowRightProducts(idx < last);
    };
    update();
    productApi.on("select", update);
    productApi.on("reInit", update);
    return () => {
      productApi.off("select", update);
      productApi.off("reInit", update);
    };
  }, [productApi]);

  return (
    <section className="py-16 px-4 bg-[#FAF9F5] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#264225]">
            জনপ্রিয় বিভাগসমূহ
          </h2>
        </div>

        {/* ── CATEGORY ROW: [← btn] [carousel] [→ btn] ── */}
        {/* ── CATEGORY ROW ── */}
        <div className="flex items-center gap-3 mb-6">
          {/* LEFT BUTTON */}
          <div className="hidden md:flex w-10 shrink-0">
            <button
              onClick={() => tabApi?.scrollPrev()}
              disabled={!leftVisible}
              aria-label="Previous categories"
              className={`
      ${NAV_BTN_BASE}
      transform-gpu
      transition-all
      duration-300
      ease-out
      will-change-transform
      ${
        leftVisible
          ? "opacity-100 scale-100 hover:bg-[#264225] hover:text-white cursor-pointer"
          : "opacity-40 scale-95 cursor-not-allowed"
      }
    `}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>

          {/* CAROUSEL */}
          <div className="flex-1 min-w-0">
            <Carousel
              opts={{
                align: "start",
                dragFree: true,
                duration: 25,
              }}
              setApi={setTabApi}
              className="w-full"
            >
              <CarouselContent className="-ml-2">
                {categories.map((category, index) => {
                  const isActive = activeTab === category.title;

                  return (
                    <CarouselItem key={index} className="basis-auto pl-2">
                      <button
                        onClick={() => setActiveTab(category.title)}
                        className={`
                  px-5 py-2 rounded-full whitespace-nowrap border text-lg font-medium
                  transform-gpu
                  transition-colors
                  duration-300
                  ease-out
                  will-change-transform
                  active:scale-[0.98]
                  ${
                    isActive
                      ? "bg-[#264225] text-white border-[#264225]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                  }
                `}
                      >
                        {category.title}
                      </button>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>

          {/* RIGHT BUTTON */}
          <div className="hidden md:flex w-10 shrink-0">
            <button
              onClick={() => tabApi?.scrollNext()}
              disabled={!rightVisible}
              aria-label="Next categories"
              className={`
      ${NAV_BTN_BASE}
      transform-gpu
      transition-all
      duration-300
      ease-out
      will-change-transform
      ${
        rightVisible
          ? "opacity-100 scale-100 hover:bg-[#264225] hover:text-white cursor-pointer"
          : "opacity-40 scale-95 cursor-not-allowed"
      }
    `}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* PRODUCT CAROUSEL */}
        <div className="flex items-stretch gap-4">
          {/* LEFT BUTTON */}
          <div className="hidden md:flex w-10 shrink-0">
            <button
              onClick={() => productApi?.scrollPrev()}
              disabled={!showLeftProducts}
              className={`
        w-full
        rounded-md
        border border-gray-200/70
        bg-white
        shadow-sm
        flex items-center justify-center
        text-[#264225]
        transform-gpu
        transition-all
        duration-300
        ease-out
        will-change-transform
        ${
          showLeftProducts
            ? "opacity-100 hover:bg-[#264225] hover:text-white cursor-pointer"
            : "opacity-40 cursor-not-allowed"
        }
      `}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          {/* PRODUCT CAROUSEL */}
          <div className="flex-1 min-w-0">
            <Carousel
              opts={{
                align: "start",
                dragFree: true,
                duration: 25,
              }}
              setApi={setProductApi}
              className="w-full"
            >
              <CarouselContent className="-ml-5">
                {currentProducts.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="pl-5 basis-[85%] sm:basis-[50%] md:basis-[40%] lg:basis-[28%]"
                  >
                    <div className="bg-white rounded-[24px] border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className="w-full h-55 relative overflow-hidden rounded-[18px] bg-gray-50 mb-4">
                          <Image
                            src={product.img}
                            alt={product.name}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2 mb-4">
                          {product.name}
                        </h3>

                        <p className="text-sm text-gray-500 mb-4">
                          {product.weight}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-2xl font-bold text-[#264225]">
                          {product.price}
                        </span>

                        <button className="bg-[#264225]/10 hover:bg-[#264225] text-[#264225] hover:text-white transition-all duration-300 px-4 py-2 rounded-xl text-sm font-medium">
                          কার্টে যোগ করুন
                        </button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* RIGHT BUTTON */}
          <div className="hidden md:flex w-10 shrink-0">
            <button
              onClick={() => productApi?.scrollNext()}
              disabled={!showRightProducts}
              className={`
        w-full
        rounded-md
        border border-gray-200/70
        bg-white
        shadow-sm
        flex items-center justify-center
        text-[#264225]
        transform-gpu
        transition-all
        duration-300
        ease-out
        will-change-transform
        ${
          showRightProducts
            ? "opacity-100 hover:bg-[#264225] hover:text-white cursor-pointer"
            : "opacity-40 cursor-not-allowed"
        }
      `}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
