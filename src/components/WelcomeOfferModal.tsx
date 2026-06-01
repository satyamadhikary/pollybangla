"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  X,
  Sparkles,
  BadgePercent,
  CheckCircle2,
  User,
  Phone,
  Leaf,
} from "lucide-react";

export default function MembershipModal() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const membershipId = localStorage.getItem("membershipId");
    const modalClosed = localStorage.getItem("membershipModalClosed");

    if (membershipId || modalClosed === "true") {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("membershipModalClosed", "true");
    setOpen(false);
  };

  const validateName = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return "পূর্ণ নাম লিখুন";
    }

    if (trimmed.length < 3) {
      return "নামের দৈর্ঘ্য কমপক্ষে ৩ অক্ষর হতে হবে";
    }

    const nameRegex = /^[A-Za-z\u0980-\u09FF\s]+$/;

    if (!nameRegex.test(trimmed)) {
      return "শুধুমাত্র বাংলা বা ইংরেজি অক্ষর ব্যবহার করুন";
    }

    return "";
  };

  const validatePhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "");

    const phone =
      cleaned.startsWith("91") && cleaned.length === 12
        ? cleaned.slice(2)
        : cleaned;

    if (!phone) {
      return "ফোন নম্বর লিখুন";
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return "সঠিক ১০ সংখ্যার ভারতীয় মোবাইল নম্বর দিন";
    }

    return "";
  };

  const handleRegister = async () => {
    if (!fullName.trim() || !phone.trim()) return;
    const nameValidation = validateName(fullName);
    const phoneValidation = validatePhone(phone);

    setNameError(nameValidation);
    setPhoneError(phoneValidation);

    if (nameValidation || phoneValidation) {
      return;
    }

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          phone,
        }),
      });

      if (!res.ok) throw new Error();

      const memberId = `MEM-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

      localStorage.setItem("membershipId", memberId);
      localStorage.setItem("membershipModalClosed", "true");

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
        setFullName("");
        setPhone("");
      }, 2500);
    } catch (err) {
      console.error(err);
      alert("Failed to submit.");
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value) {
          localStorage.setItem("membershipModalClosed", "true");
        }

        setOpen(value);
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="p-0 border-0 bg-transparent overflow-hidden max-w-4xl! w-[95vw] max-h-[92vh]! overflow-y-auto rounded-[24px]"
      >
        <button
          onClick={handleClose}
          className="fixed top-4 right-4 z-50 h-10 w-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white flex items-center justify-center text-[#264225] hover:bg-[#264225] hover:text-white transition-all duration-300 cursor-pointer"
        >
          <X size={18} />
        </button>
        <div className="relative flex flex-col lg:flex-row overflow-hidden rounded-[24px] border border-[#d8c29c] bg-[#fffaf3] shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          {/* Close */}

          {/* LEFT */}
          <div className="md:block hidden relative md:w-[45%] overflow-hidden bg-linear-to-br from-[#214d1d] via-[#2d5a27] to-[#457b3e] p-5 sm:p-6 md:p-10 flex-col justify-between">
            {/* Glow Effects */}
            <div className="absolute top-10 left-6 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />
            <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-white/5" />

            <div className="relative z-10">
              {/* Brand */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-[#d8f4b7]" />
                </div>

                <div>
                  <p className="text-white font-semibold text-sm capitalize">
                    পল্লী বাংলার
                  </p>
                  <p className="text-[#d6efbc] text-xs capitalize">
                    ঐতিহ্য সম্ভার
                  </p>
                </div>
              </div>

              <h2 className="text-white text-4xl font-bold mb-3">স্বাগতম!</h2>

              <p className="text-[#d9efc6] leading-relaxed text-sm mb-7">
                আমাদের পরিবারের অংশ হয়ে উঠুন এবং উপভোগ করুন বাংলার আসল
                ঐতিহ্যবাহী পণ্যসমূহ।
              </p>

              {/* OFFER CARD */}
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 shadow-xl">
                <div className="absolute inset-0 bg-linear-to-r from-yellow-400/10 to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <BadgePercent className="h-8 w-8 text-yellow-400" />

                    <div>
                      <h3 className="text-yellow-300 text-3xl font-bold">
                        ৫০% ছাড়
                      </h3>
                    </div>
                  </div>

                  <p className="text-[#d9efc6] text-sm leading-relaxed">
                    সদস্য হিসেবে নিবন্ধন করুন এবং পরবর্তী{" "}
                    <span className="text-yellow-300 font-semibold">১ বছর</span>{" "}
                    সমস্ত পণ্যে বিশেষ মূল্যছাড় পান।
                  </p>
                </div>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="relative z-10 mt-8 space-y-3">
              {[
                "সীমিত সময়ের অফার",
                "সকল পণ্যে প্রযোজ্য",
                "১২ মাস মেয়াদী সুবিধা",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[#d8efc5]"
                >
                  <CheckCircle2 size={18} className="text-[#bde78c]" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 bg-[#fffaf3] p-5 md:p-10 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#2d5a27]/10 px-4 py-2 mb-4">
              <Sparkles className="h-4 w-4 text-[#2d5a27]" />
              <span className="text-xs font-medium text-[#2d5a27]">
                বিশেষ সদস্য অফার
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#2d5a27] capitalize">
              সদস্যপদ নিবন্ধন
            </h3>

            <p className="text-[#7b6d57] text-sm mt-1 mb-4">
              নিচের তথ্যগুলি পূরণ করুন
            </p>

            {/* MOBILE OFFER SUMMARY */}
            <div className="md:hidden mb-5">
              <div className="rounded-2xl bg-linear-to-br from-[#214d1d] via-[#2d5a27] to-[#457b3e] p-4 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <BadgePercent className="h-6 w-6 text-yellow-300" />
                  <h3 className="text-2xl font-bold text-yellow-300">
                    ৫০% ছাড়
                  </h3>
                </div>

                <p className="text-sm text-[#d9efc6] leading-relaxed mb-4">
                  সদস্য হিসেবে যোগ দিলে আগামী ১ বছরের জন্য সকল পণ্যে বিশেষ
                  মূল্যছাড় এবং এক্সক্লুসিভ সুবিধা পাবেন।
                </p>

                <div className="space-y-2">
                  {[
                    "সকল পণ্যে বিশেষ ছাড়",
                    "১ বছরের সদস্য সুবিধা",
                    "নতুন অফারের অগ্রাধিকার",
                    "দ্রুত অর্ডার অনুমোদন",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-[#bde78c] shrink-0"
                      />
                      <span className="text-xs text-[#d8efc5]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* NAME */}
            <div className="mb-4">
              <label className="flex items-center gap-2 text-sm font-medium text-[#4b3920] mb-2">
                <User size={16} />
                পূর্ণ নাম
              </label>

              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  const value = e.target.value;
                  setFullName(value);
                  setNameError(validateName(value));
                }}
                onBlur={() => setNameError(validateName(fullName))}
                placeholder="আপনার পূর্ণ নাম লিখুন"
                className="w-full h-12 rounded-xl border border-[#dac6a7] bg-white/80 px-4 text-sm outline-none focus:border-[#2d5a27] focus:ring-4 focus:ring-[#2d5a27]/10 transition-all"
              />
              {nameError && (
                <p className="mt-1 text-xs text-red-600">{nameError}</p>
              )}
            </div>

            {/* PHONE */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-sm font-medium text-[#4b3920] mb-2">
                <Phone size={16} />
                ফোন নম্বর
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value;
                  setPhone(value);
                  setPhoneError(validatePhone(value));
                }}
                onBlur={() => setPhoneError(validatePhone(phone))}
                placeholder="+৯১ XXXXXXXXXX"
                className="w-full h-12 rounded-xl border border-[#dac6a7] bg-white/80 px-4 text-sm outline-none focus:border-[#2d5a27] focus:ring-4 focus:ring-[#2d5a27]/10 transition-all"
              />
              {phoneError && (
                <p className="mt-1 text-xs text-red-600">{phoneError}</p>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={handleRegister}
              disabled={
                submitted || !!validateName(fullName) || !!validatePhone(phone)
              }
              className={`group h-13 rounded-xl text-white font-semibold transition-all
                  ${
                    submitted ||
                    !!validateName(fullName) ||
                    !!validatePhone(phone)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-linear-to-r from-[#2d5a27] to-[#3f7d37] cursor-pointer"
                  }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles
                  size={18}
                  className={submitted ? "hidden" : "block"}
                />

                <CheckCircle2
                  size={18}
                  className={submitted ? "block" : "hidden"}
                />

                <span
                  className={submitted ? "hidden" : "block"}
                  aria-hidden="true"
                >
                  সদস্য হিসেবে নিবন্ধন করুন
                </span>

                <span
                  className={submitted ? "block" : "hidden"}
                  aria-hidden="true"
                >
                  নিবন্ধন সফল হয়েছে!
                </span>
              </span>
            </button>

            {/* SUCCESS */}
            {submitted && (
              <div className="mt-4 text-center text-sm font-medium text-green-700 animate-pulse">
                🎉 আপনার সদস্যপদ সফলভাবে সক্রিয় হয়েছে
              </div>
            )}

            {/* TRUST */}
            <div className="flex flex-wrap justify-center gap-4 mt-5 text-xs text-[#85745b]">
              <div className="flex items-center gap-1 capitalize">
                <CheckCircle2 size={14} className="text-green-600" />
                নিরাপদ
              </div>

              <div className="flex items-center gap-1 capitalize">
                <CheckCircle2 size={14} className="text-green-600" />
                যাচাইকৃত
              </div>

              <div className="flex items-center gap-1 capitalize">
                <CheckCircle2 size={14} className="text-green-600" />
                দ্রুত অনুমোদন
              </div>
            </div>

            {/* <p className="text-center text-xs text-[#a08d74] mt-4 leading-relaxed">
              নিবন্ধন করে আপনি আমাদের শর্তাবলী ও নীতিমালায় সম্মত হচ্ছেন।
            </p> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
