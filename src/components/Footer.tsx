import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16" style={{ background: "#17331b", color: "white" }}>
      <div className="max-w-7xl mx-auto px-4 py-16 pb-0">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="col-span-1">
            <div className="flex gap-3 items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="object-contain"
              />
              <h2 className="text-3xl font-bold leading-tight">
                পল্লী বাংলার
                <br />
                ঐতিহ্য সম্ভার
              </h2>
            </div>

            <p className="mt-5 text-gray-300 leading-8">
              গ্রাম বাংলার ঐতিহ্যবাহী পণ্যকে বিশ্বের সামনে তুলে ধরার উদ্যোগ।
            </p>
          </div>

          <div className="col-span-2 flex md:flex-row flex-col justify-end md:gap-20 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-5">দ্রুত লিংক</h3>

              <div className="flex flex-col gap-3 text-gray-300">
                <button className="text-left">হোম</button>
                <button className="text-left">আমাদের সম্পর্কে</button>
                <button className="text-left">পণ্যসমূহ</button>
                <button className="text-left">যোগাযোগ</button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-5">যোগাযোগ</h3>

              <div className="space-y-4 text-gray-300">
                <p>কলকাতা, পশ্চিমবঙ্গ</p>
                <p>+91 9876543210</p>
                <p>info@pollibangla.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-5">ভাষা</h3>

              <div className="space-y-4 text-gray-300">
                <div className="gtranslate_wrapper"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-14 py-8 border-t text-center text-gray-300"
          style={{ borderColor: "rgba(255,255,255,0.2)" }}
        >
          © ২০২৬ পল্লী বাংলার ঐতিহ্য সম্ভার | সর্বস্বত্ব সংরক্ষিত
        </div>
      </div>
    </footer>
  );
}
