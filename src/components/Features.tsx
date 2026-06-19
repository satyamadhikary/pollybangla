"use client";

import {
  PackageCheck,
  Truck,
  BadgeCheck,
  Megaphone,
  HandCoins,
} from "lucide-react";
import { useI18n } from "./I18nProvider";

const icons = [Truck, PackageCheck, BadgeCheck, Megaphone, HandCoins];

export default function Features() {
  const { t } = useI18n();
  const items = t.process.steps.map((title, index) => ({
    title,
    icon: icons[index],
    number: String(index + 1).padStart(2, "0"),
  }));

  return (
    <section
      className="py-24 px-4 overflow-hidden"
      style={{ background: "#f8f4eb" }}
      id="process"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span
            className="px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "#e8dcc4",
              color: "#264225",
            }}
          >
            {t.process.eyebrow}
          </span>

          <h2
            className="mt-5 text-4xl md:text-5xl font-bold capitalize"
            style={{ color: "#264225" }}
          >
            {t.process.title}
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            {t.process.description}
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-20 left-0 right-0 h-[3px]"
            style={{
              background: "linear-gradient(to right,#d9ccb6,#264225,#d9ccb6)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="group relative">
                  <div
                    className="rounded-[32px] p-8 text-center backdrop-blur-sm border shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 h-full"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      borderColor: "#d9ccb6",
                    }}
                  >
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md"
                      style={{
                        background: "#264225",
                        color: "#fff",
                      }}
                    >
                      {item.number}
                    </div>

                    <div
                      className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mt-4 transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg,#efe5d1,#e0cfaa)",
                      }}
                    >
                      <Icon size={34} style={{ color: "#264225" }} />
                    </div>

                    <h3
                      className="mt-6 text-xl font-bold leading-snug"
                      style={{ color: "#264225" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
