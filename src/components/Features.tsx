export default function Features() {
  const items = [
    "গ্রাম থেকে সংগ্রহ",
    "প্রশিক্ষণ ও প্যাকেজিং",
    "গুণগত মান যাচাই",
    "ডিজিটাল বিপণন",
    "ন্যায্য মূল্য প্রদান",
  ];
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-4xl font-bold mb-12"
          style={{ color: "#264225" }}
        >
          আমাদের কার্যধারা
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-3xl p-6 border text-center hover:-translate-y-2 transition-all duration-300"
              style={{
                background: "#fbf7ef",
                borderColor: "#d9ccb6",
              }}
            >
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl"
                style={{ background: "#e5d8bf", color: "#264225" }}
              >
                ✓
              </div>

              <h3
                className="mt-5 text-lg font-semibold"
                style={{ color: "#264225" }}
              >
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
