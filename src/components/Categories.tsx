"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, LucideIndianRupee } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import type { CarouselApi } from "@/components/ui/carousel";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Categories
const categories = [
  { title: "ধান ও চাল" },
  { title: "তামা-পিতল" },
  { title: "হস্তশিল্প" },
  { title: "মধু" },
  { title: "বস্ত্র" },
  { title: "মসলা" },
];

// Products
type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: string;
  img: string;
};

const productsData: Record<string, Product[]> = {
  "ধান ও চাল": [
    {
      id: 1,
      name: "প্রিমিয়াম নাজিরশাইল চাল",
      description:
        "Mustard Oil – 1L Authentic flavor. Zero chemicals. Just pure mustard.100% Cold-Pressed: Slow wood-press extraction, no heat or solvents. Retains natural pungency, aroma, and nutrients. Bold & Versatile: Perfect for curries, frying, pickles, tadkas & traditional massage. That real mustard kick.Heart-Smart: Rich in Omega-3, Vitamin E, and MUFA. Supports healthy cholesterol as part of a balanced diet. Clean Label: Single ingredient – only black mustard seeds. No additives, no refining, no blending. Farm Direct: Sourced from organic farms. Packed in amber glass to lock freshness. Ingredients: 100% Cold-Pressed Black Mustard Seeds Shelf Life: 9 Months | Net Qty: 1L Taste what refined oils can’t deliver.",
      price: "৮৫",
      quantity: "১ কেজি",
      img: "/Premium Nazirshail Rice.webp",
    },
    {
      id: 2,
      name: "মিনিকেট চাল (নতুন)",
      description:
        "উন্নত মানের মিনিকেট চাল যা প্রতিদিনের ব্যবহারের জন্য আদর্শ।",
      price: "৭২",
      quantity: "১ কেজি",
      img: "/hero.png",
    },
  ],

  মধু: [
    {
      id: 3,
      name: "সুন্দরবনের খাঁটি মধু",
      description: "সুন্দরবন থেকে সংগৃহীত শতভাগ খাঁটি প্রাকৃতিক মধু।",
      price: "৮৫০",
      quantity: "১ কেজি",
      img: "/category4.jpg",
    },
  ],
};

const NAV_BTN_BASE =
  "flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white shadow-sm text-[#264225] transition-all duration-300";

export default function Categories() {
  const [activeTab, setActiveTab] = useState("ধান ও চাল");

  const [tabApi, setTabApi] = useState<CarouselApi>();
  const [productApi, setProductApi] = useState<CarouselApi>();

  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(true);

  const [showLeftProducts, setShowLeftProducts] = useState(false);
  const [showRightProducts, setShowRightProducts] = useState(true);

  const currentProducts = productsData[activeTab] || [];

  // DIALOG STATE
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [expandedDescription, setExpandedDescription] = useState(false);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  // CATEGORY BUTTONS
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

  // PRODUCT BUTTONS
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

  // WHATSAPP ORDER
  const handleWhatsAppOrder = (product: Product) => {
    const message = `আমি এই প্রোডাক্টটি অর্ডার করতে চাই।

প্রোডাক্ট: ${product.name}
দাম: ₹${product.price}
পরিমাণ: ${product.quantity}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <section className="py-16 px-4 bg-[#FAF9F5] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex items-center justify-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#264225] capitalize">
              জনপ্রিয় বিভাগসমূহ
            </h2>
          </div>

          {/* CATEGORY ROW */}
          <div className="flex items-center gap-3 mb-6">
            {/* LEFT BUTTON */}
            <div className="hidden md:flex w-10 shrink-0">
              <button
                onClick={() => tabApi?.scrollPrev()}
                disabled={!leftVisible}
                className={`${NAV_BTN_BASE} ${
                  leftVisible
                    ? "opacity-100 hover:bg-[#264225] hover:text-white"
                    : "opacity-40 cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>

            {/* CATEGORY CAROUSEL */}
            <div className="flex-1 min-w-0">
              <Carousel
                opts={{
                  align: "start",
                  dragFree: true,
                  duration: 25,
                }}
                setApi={setTabApi}
              >
                <CarouselContent className="-ml-2">
                  {categories.map((category, index) => {
                    const isActive = activeTab === category.title;

                    return (
                      <CarouselItem key={index} className="basis-auto pl-2">
                        <button
                          onClick={() => setActiveTab(category.title)}
                          className={`px-5 py-2 rounded-full border whitespace-nowrap transition-all duration-300 ${
                            isActive
                              ? "bg-[#264225] text-white border-[#264225]"
                              : "bg-white border-gray-200 text-gray-700"
                          }`}
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
                className={`${NAV_BTN_BASE} ${
                  rightVisible
                    ? "opacity-100 hover:bg-[#264225] hover:text-white"
                    : "opacity-40 cursor-not-allowed"
                }`}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="flex items-stretch gap-4">
            {/* LEFT */}
            <div className="hidden md:flex w-10 shrink-0">
              <button
                onClick={() => productApi?.scrollPrev()}
                disabled={!showLeftProducts}
                className={`w-full rounded-md border border-gray-200 bg-white shadow-sm flex items-center justify-center transition-all duration-300 ${
                  showLeftProducts
                    ? "hover:bg-[#264225] hover:text-white"
                    : "opacity-40 cursor-not-allowed"
                }`}
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
              >
                <CarouselContent className="-ml-5">
                  {currentProducts.map((product) => (
                    <CarouselItem
                      key={product.id}
                      className="pl-5 basis-[85%] sm:basis-[50%] md:basis-[40%] lg:basis-[28%]"
                    >
                      <div
                        onClick={() => setSelectedProduct(product)}
                        className="group bg-white rounded-[24px] border border-gray-100 p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between cursor-pointer"
                      >
                        <div>
                          <div className="w-full h-56 relative overflow-hidden rounded-[18px] bg-gray-50 mb-4">
                            <Image
                              src={product.img}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>

                          <h3 className="text-xl font-semibold text-gray-800 line-clamp-2 mb-3">
                            {product.name}
                          </h3>

                          <p className="text-sm text-gray-500 mb-4">
                            {product.quantity}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <span className="text-2xl font-bold text-[#264225] flex items-center gap-px">
                            <LucideIndianRupee className="h-5 w-5" />
                            {product.price}
                          </span>

                          <div className="bg-[#264225] text-white px-4 py-2 rounded-xl text-sm font-medium">
                            বিস্তারিত দেখুন
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* RIGHT */}
            <div className="hidden md:flex w-10 shrink-0">
              <button
                onClick={() => productApi?.scrollNext()}
                disabled={!showRightProducts}
                className={`w-full rounded-md border border-gray-200 bg-white shadow-sm flex items-center justify-center transition-all duration-300 ${
                  showRightProducts
                    ? "hover:bg-[#264225] hover:text-white"
                    : "opacity-40 cursor-not-allowed"
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SHADCN DIALOG */}
      <Dialog
        open={!!selectedProduct}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProduct(null);
            setExpandedDescription(false);
          }
        }}
      >
        <DialogContent className="max-w-6xl! w-full p-0 overflow-hidden border-0 rounded-none md:rounded-[32px] h-screen md:h-[90vh] bg-white">
          {selectedProduct && (
            <>
              <DialogTitle className="sr-only">
                {selectedProduct.name}
              </DialogTitle>

              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] md:h-full">
                {/* LEFT IMAGE SIDE */}
                <div className="relative h-[320px] md:h-full overflow-hidden">
                  <Image
                    src={selectedProduct.img}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* FLOATING PRICE */}
                  <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/40">
                    <p className="text-sm text-gray-500 mb-1">মূল্য</p>

                    <div className="flex items-center text-[#264225] font-bold text-3xl">
                      <LucideIndianRupee className="h-6 w-6" />
                      {selectedProduct.price}
                    </div>
                  </div>
                </div>

                {/* RIGHT CONTENT SIDE */}
                <div className="relative flex flex-col bg-[#faf9f5] h-full max-h-screen md:max-h-[90vh] overflow-hidden">
                  {/* SCROLLABLE CONTENT */}
                  <div className="flex-1 overflow-y-auto px-6 md:px-10 pt-8 pb-32 no-scrollbar">
                    {/* PRODUCT TITLE */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[#264225] leading-tight mb-5">
                      {selectedProduct.name}
                    </h2>

                    {/* DESCRIPTION CARD */}
                    <div className="bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        পণ্যের বিবরণ
                      </h3>

                      <p className="text-gray-600 leading-8 text-[15px] md:text-base">
                        <span>
                          {expandedDescription
                            ? selectedProduct.description
                            : selectedProduct.description.slice(0, 220)}
                        </span>

                        {selectedProduct.description.length > 220 && (
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedDescription(!expandedDescription)
                            }
                            className="ml-2 text-[#264225] font-semibold hover:underline"
                          >
                            {expandedDescription
                              ? "Read Less"
                              : "... Read More"}
                          </button>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* FIXED BUTTON */}
                  <div className="fixed md:absolute bottom-0 left-0 z-50 w-full p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] md:p-6 bg-[#faf9f5] border-t border-gray-200">
                    <button
                      onClick={() => handleWhatsAppOrder(selectedProduct)}
                      className="w-full bg-[#264225] hover:bg-[#1d341c] text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
                    >
                      WhatsApp-এ অর্ডার করুন
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
