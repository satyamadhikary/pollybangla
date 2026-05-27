import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden mt-[87px] h-[calc(100vh-87px)]">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/hero.png"
        alt="hero"
        fill
        priority
        className="object-cover h-full w-full hidden md:block"
      />

      <Image
        src="/herobg-mobile.png"
        alt="hero"
        fill
        priority
        className="object-cover h-full w-full md:hidden"
      />

      {/* DARK OVERLAY */}
      {/* <div className="absolute inset-0 " /> */}

      {/* CONTENT */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col justify-center">
        <div className="max-w-xl">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight capitalize"
            style={{ color: "#234224" }}
          >
            আমাদের ঐতিহ্য
            <br />
            আমাদের গর্ব
          </h1>

          <p
            className="mt-4 text-lg md:text-xl leading-9"
            style={{ color: "#234224" }}
          >
            গ্রামীণ শিল্প, কৃষি ও কুটির পণ্যের মাধ্যমে বাংলার
            ঐতিহ্যকে নতুনভাবে তুলে ধরা।
          </p>

          {/* GLASS BUTTON */}
          <button
            className="mt-6 px-8 py-4 rounded-xl text-white font-semibold border border-white/20 backdrop-blur-xs transition-all duration-300 cursor-pointer bg-[rgba(35,66,36,0.85)] hover:bg-[rgba(35,66,36,1)] shadow-lg"
          >
            এখনই শুরু করুন
          </button>
        </div>

        {/* BOTTOM GLASS BOX */}
        {/* <div className="absolute bottom-8 left-4 right-4 lg:left-auto lg:right-auto lg:w-full">
          <div
            className="max-w-5xl mx-auto rounded-2xl border border-white/20 p-6 lg:p-8 backdrop-blur-xs"
            style={{
              background: "rgba(35, 66, 36, 0.65)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
              {[
                ["500+", "সক্রিয় সদস্য"],
                ["64+", "জেলা জুড়ে"],
                ["1000+", "পণ্য সংগ্রহ"],
                ["100%", "প্রাকৃতিক পণ্য"],
              ].map(([number, text]) => (
                <div key={number} className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {number}
                  </h2>

                  <p className="mt-2 text-sm md:text-base text-white/90">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}