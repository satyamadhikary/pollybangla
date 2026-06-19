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
import { masterCategories } from "@/data/categorydata";

const NAV_BTN_BASE =
  "flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white shadow-sm text-[#264225] transition-all duration-300 hover:bg-[#264225] hover:text-white";

export default function Categories() {
  const [activeMaster, setActiveMaster] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;

    const saved = localStorage.getItem("categoryState");
    if (!saved) return null;

    try {
      return JSON.parse(saved).activeMaster;
    } catch {
      return null;
    }
  });

  const [activeTab, setActiveTab] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;

    const saved = localStorage.getItem("categoryState");
    if (!saved) return null;

    try {
      return JSON.parse(saved).activeTab;
    } catch {
      return null;
    }
  });
  const [isMember, setIsMember] = useState(false);

  const [masterApi, setMasterApi] = useState<CarouselApi>();
  const [tabApi, setTabApi] = useState<CarouselApi>();
  const [productApi, setProductApi] = useState<CarouselApi>();

  const [masterLeftVisible, setMasterLeftVisible] = useState(false);
  const [masterRightVisible, setMasterRightVisible] = useState(false);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [showLeftProducts, setShowLeftProducts] = useState(false);
  const [showRightProducts, setShowRightProducts] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [expandedDescription, setExpandedDescription] = useState(false);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  // Masters shown in the scrollable carousel = all except active
  const carouselMasters = masterCategories.filter(
    (m) => m.title !== activeMaster,
  );

  const currentSubCategories =
    masterCategories.find((m) => m.title === activeMaster)?.children ?? [];

  const defaultProducts = Object.values(productsData).flatMap((products) =>
    products.slice(0, 2),
  ); // 2 products from each category

  // Products to display
  const currentProducts =
    activeMaster && activeTab ? productsData[activeTab] || [] : defaultProducts;

  useEffect(() => {
    localStorage.setItem(
      "categoryState",
      JSON.stringify({
        activeMaster,
        activeTab,
      }),
    );
  }, [activeMaster, activeTab]);

  useEffect(() => {
    const membershipId = localStorage.getItem("membershipId");
    setIsMember(!!membershipId);
  }, []);

  const handleMasterChange = (masterTitle: string) => {
    setActiveMaster(masterTitle);
    const first =
      masterCategories.find((m) => m.title === masterTitle)?.children[0] ??
      null;
    setActiveTab(first);
    productApi?.scrollTo(0);
    tabApi?.scrollTo(0);
  };

  const handleMasterClear = () => {
    setActiveMaster(null);
    setActiveTab(null);
    productApi?.scrollTo(0);
    tabApi?.scrollTo(0);
  };

  // MASTER CAROUSEL BUTTONS
  useEffect(() => {
    if (!masterApi) return;
    const update = () => {
      setMasterLeftVisible(masterApi.canScrollPrev());
      setMasterRightVisible(masterApi.canScrollNext());
    };
    update();
    masterApi.on("select", update);
    masterApi.on("reInit", update);
    return () => {
      masterApi.off("select", update);
      masterApi.off("reInit", update);
    };
  }, [masterApi, carouselMasters]);

  // SUB-CATEGORY BUTTONS
  useEffect(() => {
    if (!tabApi) return;
    const update = () => {
      setLeftVisible(tabApi.canScrollPrev());
      setRightVisible(tabApi.canScrollNext());
    };
    update();
    tabApi.on("select", update);
    tabApi.on("reInit", update);
    return () => {
      tabApi.off("select", update);
      tabApi.off("reInit", update);
    };
  }, [tabApi]);

  // PRODUCT BUTTONS
  useEffect(() => {
    if (!productApi) return;
    const update = () => {
      setShowLeftProducts(productApi.canScrollPrev());
      setShowRightProducts(productApi.canScrollNext());
    };
    update();
    productApi.on("select", update);
    productApi.on("reInit", update);
    return () => {
      productApi.off("select", update);
      productApi.off("reInit", update);
    };
  }, [productApi]);

  useEffect(() => {
    productApi?.scrollTo(0);
  }, [activeTab, productApi]);

  // Re-check master arrows when carouselMasters changes
  useEffect(() => {
    masterApi?.reInit();
  }, [activeMaster, masterApi]);

  const handleWhatsAppOrder = (product: Product) => {
    const message = `আমি এই প্রোডাক্টটি অর্ডার করতে চাই।\n\nপ্রোডাক্ট: ${product.name}\nদাম: ₹${getPrice(product.price)} ${isMember ? "(৫০% সদস্য ছাড় প্রয়োগ করা হয়েছে)" : ""}\nপরিমাণ: ${product.quantity}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const bnToEn = (value: string) =>
    value.replace(/[০-৯]/g, (d) => String("০১২৩৪৫৬৭৮৯".indexOf(d)));

  const enToBn = (value: string | number) =>
    value.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

  const getPrice = (price: string) => {
    if (!isMember) return price;
    return enToBn(Math.round(Number(bnToEn(price)) * 0.5));
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
              style={{ background: "#efe5d1", color: "#264225" }}
            >
              বাংলার ঐতিহ্যবাহী সংগ্রহ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#264225] capitalize">
              জনপ্রিয় বিভাগসমূহ
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
              গ্রামীণ শিল্প, কৃষিপণ্য ও হস্তশিল্পের সেরা সংগ্রহ এক জায়গায়।
            </p>
          </div>

          {/* ── MASTER CATEGORY ROW ── */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              activeMaster
                ? "max-h-0 opacity-0 mb-0 pointer-events-none"
                : "max-h-20 opacity-100 mb-6"
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`hidden md:flex shrink-0 transition-all duration-600 ${
                  masterLeftVisible
                    ? "opacity-100 w-10"
                    : "opacity-0 w-0 pointer-events-none"
                }`}
              >
                <button
                  onClick={() => masterApi?.scrollPrev()}
                  className={NAV_BTN_BASE}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 min-w-0">
                <Carousel
                  opts={{ align: "start", dragFree: true, duration: 25 }}
                  setApi={setMasterApi}
                >
                  <CarouselContent className="-ml-2">
                    {masterCategories.map((master, index) => (
                      <CarouselItem key={index} className="basis-auto pl-2">
                        <button
                          onClick={() => handleMasterChange(master.title)}
                          className="px-5 py-2 rounded-full border border-gray-200 bg-white text-gray-700 whitespace-nowrap transition-all duration-300 hover:border-[#264225] hover:text-[#264225]"
                        >
                          {master.title}
                        </button>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              <div
                className={`hidden md:flex shrink-0 transition-all duration-600 ${
                  masterRightVisible
                    ? "opacity-100 w-10"
                    : "opacity-0 w-0 pointer-events-none"
                }`}
              >
                <button
                  onClick={() => masterApi?.scrollNext()}
                  className={NAV_BTN_BASE}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ── SUB-CATEGORY ROW ── */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              activeMaster
                ? "max-h-20 opacity-100 mb-6"
                : "max-h-0 opacity-0 mb-0 pointer-events-none"
            }`}
          >
            <div className="flex items-center gap-2">
              {/* SELECTED MASTER PILL pinned left */}
              <button
                onClick={handleMasterClear}
                className="shrink-0 flex items-center gap-1.5 pl-4 pr-2 py-2 rounded-full bg-[#264225] text-white whitespace-nowrap text-sm font-medium transition-all duration-300"
              >
                <span>{activeMaster}</span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200 cursor-pointer">
                  <X className="h-3 w-3" />
                </span>
              </button>

              {/* DIVIDER */}
              <div className="h-6 w-px bg-gray-200 shrink-0" />

              {/* LEFT ARROW */}
              <div
                className={`hidden md:flex shrink-0 transition-all duration-600 cursor-pointer ${
                  leftVisible ? "w-12 opacity-100" : "w-0 opacity-0"
                }`}
              >
                <button
                  onClick={() => tabApi?.scrollPrev()}
                  className={NAV_BTN_BASE}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </div>

              {/* SUB-CATEGORY CAROUSEL */}
              <div className="flex-1 min-w-0">
                <Carousel
                  opts={{ align: "start", dragFree: true, duration: 25 }}
                  setApi={setTabApi}
                >
                  <CarouselContent className="-ml-2">
                    {currentSubCategories.map((sub, index) => {
                      const isActive = activeTab === sub;
                      return (
                        <CarouselItem key={index} className="basis-auto pl-2">
                          <button
                            onClick={() => setActiveTab(sub)}
                            className={`px-5 py-2 rounded-full border whitespace-nowrap transition-all duration-300 text-sm cursor-pointer ${
                              isActive
                                ? "bg-[#264225] text-white border-[#264225]"
                                : "bg-white border-gray-200 text-gray-700 hover:border-[#264225] hover:text-[#264225]"
                            }`}
                          >
                            {sub}
                          </button>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* RIGHT ARROW */}
              <div
                className={`hidden md:flex shrink-0 transition-all duration-600 cursor-pointer ${
                  rightVisible ? "w-12 opacity-100" : "w-0 opacity-0"
                }`}
              >
                <button
                  onClick={() => tabApi?.scrollNext()}
                  className={NAV_BTN_BASE}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ── PRODUCTS ── */}
          <div className="transition-all duration-600 opacity-100">
            {currentProducts.length > 0 ? (
              <div className="flex items-stretch gap-4">
                <div
                  className={`hidden md:flex shrink-0 transition-width duration-600 cursor-pointer ${
                    showLeftProducts ? "opacity-100 w-10" : "opacity-0 w-0"
                  }`}
                >
                  <button
                    onClick={() => productApi?.scrollPrev()}
                    className="w-full rounded-md border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#264225] transition-all duration-300 hover:bg-[#264225] hover:text-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <Carousel
                    opts={{ align: "start", dragFree: true, duration: 25 }}
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
                              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
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

                <div
                  className={`hidden md:flex shrink-0 transition-width duration-600 cursor-pointer ${
                    showRightProducts ? "opacity-100 w-10" : "opacity-0 w-0"
                  }`}
                >
                  <button
                    onClick={() => productApi?.scrollNext()}
                    className="w-full rounded-md border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#264225] transition-all duration-300 hover:bg-[#264225] hover:text-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 px-6 bg-white border border-[#ece4d4] rounded-[32px] text-center">
                <div className="w-20 h-20 rounded-full bg-[#efe5d1] flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-[#264225]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3l18 18M9.75 9.75h7.5v7.5m-1.5-10.5H6.75A2.25 2.25 0 004.5 9v8.25A2.25 2.25 0 006.75 19.5H15"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-[#264225] mb-3">
                  পণ্য উপলব্ধ নয়
                </h3>

                <p className="max-w-md text-gray-500 leading-7">
                  আমরা এই বিভাগে কোনও পণ্য উপলব্ধ নেই। অন্য বিভাগ চেক করুন বা
                  পরে আবার আসুন।
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DIALOG — unchanged */}
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
          className="max-w-6xl! w-full p-0 border-0 rounded-none md:rounded-xl h-dvh md:h-[90dvh] bg-[#faf7f1] overflow-hidden"
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
                <div className="relative h-80 md:h-full overflow-hidden">
                  <Image
                    src={selectedProduct.img}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/40">
                    <p className="text-xs text-gray-500 mb-1">বিভাগ</p>
                    <div className="flex items-center text-[#264225] font-bold text-xl">
                      {activeTab}
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col bg-[#faf9f5] min-h-0 overflow-hidden">
                  <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 md:px-10 pt-8 pb-32 no-scrollbar">
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                      style={{ background: "#efe5d1", color: "#264225" }}
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
                    <div
                      className="bg-white rounded-[28px] p-6 border shadow-sm"
                      style={{ borderColor: "#ece4d4" }}
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
