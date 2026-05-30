"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/navdata";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#f7f1e7] shadow-lg" : "bg-[#f7f1e7] shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-4 flex items-center justify-between relative">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={55}
            height={55}
            className="object-contain"
          />

          <div>
            <h2
              className="font-bold text-lg leading-tight align-middle capitalize"
              style={{ color: "#234224" }}
            >
              পল্লী বাংলার ঐতিহ্য সম্ভার
            </h2>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium relative group capitalize"
              style={{ color: "#234224" }}
            >
              {item.label}

              <span
                className="
          absolute
          left-0
          -bottom-1
          h-[2px]
          w-0
          group-hover:w-full
          transition-all
          duration-300
        "
                style={{ background: "#234224" }}
              />
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <Menu color="#234224" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <div className="px-4 flex flex-col gap-5 pb-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-left font-medium"
              style={{ color: "#234224" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
