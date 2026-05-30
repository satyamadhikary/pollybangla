import {
  PackageCheck,
  Truck,
  BadgeCheck,
  Megaphone,
  HandCoins,
} from "lucide-react";

export default function Features() {
  const items = [
    {
      title: "গ্রাম থেকে সংগ্রহ",
      icon: Truck,
      number: "01",
    },
    {
      title: "প্রশিক্ষণ ও প্যাকেজিং",
      icon: PackageCheck,
      number: "02",
    },
    {
      title: "গুণগত মান যাচাই",
      icon: BadgeCheck,
      number: "03",
    },
    {
      title: "ডিজিটাল বিপণন",
      icon: Megaphone,
      number: "04",
    },
    {
      title: "ন্যায্য মূল্য প্রদান",
      icon: HandCoins,
      number: "05",
    },
  ];

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
            আমাদের প্রক্রিয়া
          </span>

          <h2
            className="mt-5 text-4xl md:text-5xl font-bold capitalize"
            style={{ color: "#264225" }}
          >
            আমাদের কার্যধারা
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            গ্রাম বাংলার উৎপাদক থেকে শুরু করে গ্রাহকের হাতে পৌঁছানো পর্যন্ত
            প্রতিটি ধাপ আমরা সততার সঙ্গে সম্পন্ন করি।
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
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
                    className="
                    rounded-[32px]
                    p-8
                    text-center
                    backdrop-blur-sm
                    border
                    shadow-sm
                    hover:shadow-2xl
                    hover:-translate-y-3
                    transition-all
                    duration-500
                    h-full
                  "
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      borderColor: "#d9ccb6",
                    }}
                  >
                    {/* Step Number */}
                    <div
                      className="
                      absolute
                      -top-4
                      left-1/2
                      -translate-x-1/2
                      w-10
                      h-10
                      rounded-full
                      flex
                      items-center
                      justify-center
                      font-bold
                      text-sm
                      shadow-md
                    "
                      style={{
                        background: "#264225",
                        color: "#fff",
                      }}
                    >
                      {item.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="
                      w-20
                      h-20
                      mx-auto
                      rounded-full
                      flex
                      items-center
                      justify-center
                      mt-4
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
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
