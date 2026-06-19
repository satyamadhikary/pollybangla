"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useI18n } from "./I18nProvider";

export default function WhyChoose() {
  const { t } = useI18n();

  return (
    <section className="py-20 px-4 bg-[#f7f3eb] overflow-hidden" id="why-us">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-yellow-200/30 blur-3xl rounded-full" />

        <div className="relative grid lg:grid-cols-2 rounded-[40px] overflow-hidden bg-[#efe2cb]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border-8 border-white/40">
          <div className="relative group min-h-75 md:min-h-87.5 lg:min-h-full overflow-hidden">
            <Image
              src="/whychooseus.png"
              alt="products"
              fill
              className="md:block hidden object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <Image
              src="/whychooseus_mobile.png"
              alt="products"
              fill
              className="md:hidden block object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg">
              <p className="text-sm text-[#264225] font-medium">
                {t.whyChoose.badge}
              </p>
            </div>
          </div>

          <div className="relative py-8 px-5 sm:p-12 lg:p-16 flex flex-col justify-center">
            <span className="w-fit mb-5 px-4 py-2 rounded-full bg-[#264225]/10 text-[#264225] text-sm font-semibold tracking-wide">
              {t.whyChoose.eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#264225]">
              {t.whyChoose.title}
            </h2>

            <p className="mt-5 text-[#5b5b4f] text-lg leading-relaxed max-w-xl">
              {t.whyChoose.description}
            </p>

            <div className="md:mt-10 mt-6 space-y-1">
              {t.whyChoose.features.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 md:p-4 px-0 py-4 rounded-2xl md:hover:bg-white/60 transition-all duration-300 md:hover:translate-x-1"
                >
                  <div className="min-w-12 h-12 rounded-2xl bg-[#264225] flex items-center justify-center shadow-md md:group-hover:scale-110 transition-transform duration-300">
                    <Check className="text-white w-5 h-5" />
                  </div>

                  <p className="text-[#4b4b3f] text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 mt-10 gap-5">
              {t.whyChoose.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/70 backdrop-blur-md px-5 py-4 rounded-2xl shadow-sm"
                >
                  <h4 className="text-2xl font-bold text-[#264225]">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-[#5b5b4f]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
