export default function Testimonials() {
  const data = [
    {
      name: "অর্ণব সেনগুপ্ত",
      role: "কারিগর",
      text: "সমবায়ের মাধ্যমে আমরা আমাদের পণ্যের সঠিক মূল্য পাচ্ছি।",
    },
    {
      name: "শ্রাবণী রায়",
      role: "কৃষক",
      text: "এখন গ্রামের পণ্য শহরে সহজেই পৌঁছাচ্ছে।",
    },
    {
      name: "দেবজ্যোতি বসু",
      role: "উদ্যোক্তা",
      text: "এই উদ্যোগ গ্রামের মানুষের জীবন পরিবর্তন করছে।",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-4xl font-bold mb-12 capitalize"
          style={{ color: "#264225" }}
        >
          আমাদের সদস্যদের কথা
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.name}
              className="rounded-[30px] border-3 border-[#efe2cb]/50! p-8"
              style={{
                background: "#fcf7ee",
                borderColor: "#dccfb9",
              }}
            >
              <p className="text-lg leading-8" style={{ color: "#5a5a50" }}>
                “{item.text}”
              </p>

              <div className="mt-8">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "#264225" }}
                >
                  {item.name}
                </h3>

                <p style={{ color: "#7d7d72" }}>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
