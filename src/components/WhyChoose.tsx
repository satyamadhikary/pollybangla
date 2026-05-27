import Image from "next/image";

export default function WhyChoose() {
  return (
    <section className="py-16 px-4">
      <div
        className="max-w-7xl mx-auto rounded-[40px] overflow-hidden grid lg:grid-cols-2"
        style={{ background: "#efe2cb" }}
      >
        <div>
          <Image
            src="/products.jpg"
            alt="products"
            width={700}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 lg:p-14 flex flex-col justify-center">
          <h2
            className="text-4xl font-bold"
            style={{ color: "#264225" }}
          >
            কেন আমাদের পণ্য বেছে নেবেন?
          </h2>

          <div className="mt-8 space-y-5">
            {[
              "সরাসরি কৃষক ও কারিগরের কাছ থেকে সংগ্রহ",
              "১০০% প্রাকৃতিক ও বিশুদ্ধ পণ্য",
              "ন্যায্য মূল্য ও উন্নত মান",
              "পরিবেশবান্ধব প্যাকেজিং",
              "গ্রামীণ ঐতিহ্য সংরক্ষণ",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "#264225", color: "white" }}
                >
                  ✓
                </div>

                <p
                  className="text-lg"
                  style={{ color: "#4b4b3f" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}