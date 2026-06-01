"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, LucideIndianRupee, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Product, productsData } from "@/data/productdata";
import { categories } from "@/data/categorydata";

const NAV_BTN_BASE =
  "flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white shadow-sm text-[#264225] transition-all duration-300";

export default function Categories() {
  const [activeTab, setActiveTab] = useState("ধান ও চাল");
  const [isMember, setIsMember] = useState(false);

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

  useEffect(() => {
    const membershipId = localStorage.getItem("membershipId");

    setIsMember(!!membershipId);
  }, []);

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
দাম: ₹${getPrice(product.price)} ${isMember ? "(৫০% সদস্য ছাড় প্রয়োগ করা হয়েছে)" : ""}
পরিমাণ: ${product.quantity}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const bnToEn = (value: string) => {
    return value.replace(/[০-৯]/g, (digit) =>
      String("০১২৩৪৫৬৭৮৯".indexOf(digit)),
    );
  };

  const enToBn = (value: string | number) => {
    return value
      .toString()
      .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
  };

  const getPrice = (price: string) => {
    if (!isMember) return price;

    const numericPrice = Number(bnToEn(price));

    const discountedPrice = Math.round(numericPrice * 0.5);

    return enToBn(discountedPrice);
  };
  return (
    <>
      <section
        className="py-16 px-4 bg-[#FAF9F5] overflow-hidden"
        id="categories"
      >
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                background: "#efe5d1",
                color: "#264225",
              }}
            >
              বাংলার ঐতিহ্যবাহী সংগ্রহ
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#264225] capitalize">
              জনপ্রিয় বিভাগসমূহ
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
              গ্রামীণ শিল্প, কৃষিপণ্য ও হস্তশিল্পের সেরা সংগ্রহ এক জায়গায়।
            </p>
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
                        className="group bg-white rounded-[32px] overflow-hidden border border-[#ece4d4] transition-all duration-500 cursor-pointer h-full"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={product.img}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-[#264225] backdrop-blur-md text-xs font-semibold">
                            হেরিটেজ কালেকশন
                          </div>
                        </div>

                        <div className="p-5">
                          <h3 className="text-xl font-bold text-[#264225] line-clamp-2">
                            {product.name}
                          </h3>

                          <p className="mt-2 text-sm text-gray-500">
                            {product.quantity}
                          </p>

                          <div className="mt-5 flex items-center justify-between">
                            <div>
                              <p className="text-xs text-gray-500">মূল্য</p>

                              <div>
                                {isMember ? (
                                  <div className="flex items-end gap-1">
                                    <div className="flex items-center text-2xl font-bold text-[#264225]">
                                      <LucideIndianRupee className="h-5 w-5" />
                                      {getPrice(product.price)}
                                    </div>
                                    <p className="text-sm text-gray-400 line-through mb-0.5">
                                      ₹{product.price}
                                    </p>
                                  </div>
                                ) : (
                                  <div className="flex items-center text-2xl font-bold text-[#264225]">
                                    <LucideIndianRupee className="h-5 w-5" />
                                    {product.price}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="px-4 py-2 rounded-xl bg-[#264225] text-white text-sm font-medium group-hover:bg-[#355f35] group-hover:scale-[1.05] transition-all duration-500">
                              বিস্তারিত
                            </div>
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
        <DialogContent
          className="max-w-6xl! w-full p-0 border-0 rounded-none md:rounded-xl h-[100dvh] md:h-[90dvh] bg-[#faf7f1] overflow-hidden"
          showCloseButton={false}
        >
          <button
            onClick={() => {
              setSelectedProduct(null);
              setExpandedDescription(false);
            }}
            className="absolute top-3 right-3 z-100 h-8 w-8 rounded-xl bg-white/90 backdrop-blur shadow-sm border border-gray-200 flex items-center justify-center text-[#264225] hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-[#264225] hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          {selectedProduct && (
            <>
              <DialogTitle className="sr-only">
                {selectedProduct.name}
              </DialogTitle>

              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] h-full overflow-hidden">
                {/* LEFT IMAGE SIDE */}
                <div className="relative h-80 md:h-full overflow-hidden">
                  <Image
                    src={selectedProduct.img}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

                  {/* FLOATING PRICE */}
                  <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/40">
                    <p className="text-xs text-gray-500 mb-1">বিভাগ</p>

                    <div className="flex items-center text-[#264225] font-bold text-xl">
                      {activeTab}
                    </div>
                  </div>
                </div>

                {/* RIGHT CONTENT SIDE */}
                <div className="relative flex flex-col bg-[#faf9f5] min-h-0 overflow-hidden">
                  {/* SCROLLABLE CONTENT */}
                  <div className=" flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 md:px-10 pt-8 pb-32 no-scrollbar">
                    {/* PRODUCT TITLE */}
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                      style={{
                        background: "#efe5d1",
                        color: "#264225",
                      }}
                    >
                      <span className="w-2 h-2 rounded-full bg-green-700" />
                      জনপ্রিয় পণ্য
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#264225] leading-tight mb-5">
                      {selectedProduct.name}
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white rounded-2xl p-4">
                        <p className="text-sm text-gray-500 mb-1">পরিমাণ</p>

                        <p className="flex items-center text-[#264225] font-bold text-3xl uppercase">
                          {selectedProduct.quantity}
                        </p>
                      </div>

                      <div className="bg-white rounded-2xl p-4">
                        <p className="text-sm text-gray-500 mb-1">মূল্য</p>
                        {/* PRICE */}{" "}
                        {isMember ? (
                          <div className="flex items-end gap-1">
                            <p className="flex items-center text-[#264225] font-bold text-3xl">
                              ₹{getPrice(selectedProduct.price)}
                            </p>
                            <p className="text-sm text-gray-400 line-through mb-0.5">
                              ₹{selectedProduct.price}
                            </p>
                          </div>
                        ) : (
                          <p className="flex items-center text-[#264225] font-bold text-3xl">
                            ₹{selectedProduct.price}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* DESCRIPTION CARD */}
                    <div
                      className="bg-white rounded-[28px] p-6 border shadow-sm"
                      style={{
                        borderColor: "#ece4d4",
                      }}
                    >
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
                            className="ml-2 text-[#264225] font-semibold hover:underline cursor-pointer"
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
                      className="w-full py-4 rounded-2xl bg-linear-to-r from-[#264225] to-[#355f35] text-white font-semibold text-lg shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
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
