export const languages = [
  { code: "bn", label: "বাংলা" },
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
] as const;

export type Language = (typeof languages)[number]["code"];

export const defaultLanguage: Language = "bn";

export const isLanguage = (
  value: string | null | undefined,
): value is Language => languages.some((language) => language.code === value);

export const translateNumber = (value: string | number, language: Language) => {
  const digitSets: Record<Language, string> = {
    bn: "০১২৩৪৫৬৭৮৯",
    en: "0123456789",
    hi: "०१२३४५६७८९",
  };

  return value
    .toString()
    .replace(/\d/g, (digit) => digitSets[language][Number(digit)]);
};

export const translations = {
  bn: {
    brand: "পল্লী বাংলার ঐতিহ্য সম্ভার",
    brandShortTop: "পল্লী বাংলার",
    brandShortBottom: "ঐতিহ্য সম্ভার",
    nav: [
      { label: "হোম", href: "#" },
      { label: "আমাদের কার্যধারা", href: "#process" },
      { label: "জনপ্রিয় বিভাগসমূহ", href: "#categories" },
      { label: "কেন আমাদের বেছে নেবেন", href: "#why-us" },
      { label: "আমাদের সদস্যদের কথা", href: "#testimonials" },
    ],
    process: {
      eyebrow: "আমাদের প্রক্রিয়া",
      title: "আমাদের কার্যধারা",
      description:
        "গ্রাম বাংলার উৎপাদক থেকে শুরু করে গ্রাহকের হাতে পৌঁছানো পর্যন্ত প্রতিটি ধাপ আমরা সততার সঙ্গে সম্পন্ন করি।",
      steps: [
        "গ্রাম থেকে সংগ্রহ",
        "প্রশিক্ষণ ও প্যাকেজিং",
        "গুণগত মান যাচাই",
        "ডিজিটাল বিপণন",
        "ন্যায্য মূল্য প্রদান",
      ],
    },
    categories: {
      eyebrow: "বাংলার ঐতিহ্যবাহী সংগ্রহ",
      title: "জনপ্রিয় বিভাগসমূহ",
      description:
        "গ্রামীণ শিল্প, কৃষিপণ্য ও হস্তশিল্পের সেরা সংগ্রহ এক জায়গায়।",
      heritage: "হেরিটেজ কালেকশন",
      price: "মূল্য",
      details: "বিস্তারিত",
      noProductsTitle: "পণ্য উপলব্ধ নয়",
      noProductsText:
        "আমরা এই বিভাগে কোনও পণ্য উপলব্ধ রাখিনি। অন্য বিভাগ দেখুন বা পরে আবার আসুন।",
      category: "বিভাগ",
      popularProduct: "জনপ্রিয় পণ্য",
      quantity: "পরিমাণ",
      descriptionTitle: "পণ্যের বিবরণ",
      readMore: "... আরও পড়ুন",
      readLess: "কম দেখুন",
      orderWhatsApp: "WhatsApp-এ অর্ডার করুন",
      memberDiscount: "৫০% সদস্য ছাড় প্রয়োগ করা হয়েছে",
      whatsappMessage: {
        intro: "আমি এই প্রোডাক্টটি অর্ডার করতে চাই।",
        product: "প্রোডাক্ট",
        price: "দাম",
        quantity: "পরিমাণ",
      },
      masters: [
        {
          id: "food",
          title: "খাদ্যসামগ্রী",
          children: [
            { id: "rice", title: "ধান ও চাল" },
            { id: "lentils", title: "ডাল" },
            { id: "oilandghee", title: "তেল ও ঘি" },
            { id: "honey", title: "মধু" },
            { id: "pickleandkasundi", title: "আচার ও কাসুন্দি" },
            { id: "sweetsandmorrobba", title: "মিষ্টি ও মোরব্বা" },
          ],
        },
        {
          id: "drinks",
          title: "এনার্জি ড্রিংকস ও অ্যান্টি-অক্সিডেন্ট",
          children: [{ id: "tealeaves", title: "চা-পাতা" }],
        },
      ],
      products: {
        rice: [
          {
            id: 1,
            name: "গোবিন্দভোগ চাল",
            description:
              "যত্নসহকারে সংগ্রহ করা ও বাছাই করা আমাদের গোবিন্দভোগ চাল তার স্বতন্ত্র সুগন্ধ, কোমল গঠন এবং অসাধারণ স্বাদের জন্য পরিচিত। পল্লী বাংলার ঐতিহ্য সম্ভার প্রিমিয়াম গোবিন্দভোগ চাল বিশ্বস্ত কৃষকদের খামার থেকে সংগ্রহ করা হয় এবং এর আসল সুবাস, নরম দানা ও উৎকৃষ্ট মানের জন্য নির্বাচিত হয়। বাংলার অন্যতম জনপ্রিয় ঐতিহ্যবাহী চাল হিসেবে এটি খিচুড়ি, পায়েস, পোলাও, দুর্গাপূজার প্রসাদ এবং বিভিন্ন উৎসবের রান্নার জন্য আদর্শ। এর নামকরণ হয়েছে গোবিন্দজীর নিবেদিত ভোগ তৈরিতে ব্যবহারের কারণে। এছাড়াও এটি উৎসব ও পারিবারিক ঐতিহ্যের খাবারের সঙ্গে গভীরভাবে জড়িত।",
            price: "120",
            quantity: "১ কেজি",
            variants: [
              { quantity: "১ কেজি", price: "120" },
              { quantity: "২ কেজি", price: "240" },
              { quantity: "৫ কেজি", price: "600" },
              { quantity: "১০ কেজি", price: "1200" },
            ],
          },
          {
            id: 2,
            name: "দুধেশ্বর",
            description:
              "পল্লী বাংলার ঐতিহ্য সম্ভার প্রিমিয়াম দুধেশ্বর চাল। নরম ও সুস্বাদু এই চাল তার সূক্ষ্ম দানা ও মনোরম সুবাসের জন্য পরিচিত। দুধেশ্বর চাল প্রতিদিনের খাবারকে বিশেষ ও স্মরণীয় করে তোলে। আমাদের দুধেশ্বর চাল বিশ্বস্ত কৃষক সম্প্রদায় থেকে সংগ্রহ করা হয় এবং সর্বোচ্চ মান, সতেজতা ও স্বাদের জন্য বাছাই করা হয়।",
            price: "65",
            quantity: "১ কেজি",
            variants: [
              { quantity: "১ কেজি", price: "65" },
              { quantity: "২ কেজি", price: "130" },
              { quantity: "৫ কেজি", price: "325" },
              { quantity: "১০ কেজি", price: "650" },
            ],
          },
          {
            id: 3,
            name: "তুলাইপাঞ্জি",
            description:
              "উত্তরবঙ্গের রাজকীয় সুবাস। পল্লী বাংলার ঐতিহ্য সম্ভার প্রিমিয়াম তুলাইপাঞ্জি চাল তার সূক্ষ্ম সুগন্ধ, সরু দানা এবং অসাধারণ স্বাদের জন্য বিখ্যাত। এটি বাংলার অন্যতম মূল্যবান ঐতিহ্যবাহী চাল। এমন একটি চাল ঘরে আনুন যা প্রতিটি খাবারকে বিশেষ উপলক্ষে পরিণত করে।",
            price: "220",
            quantity: "১ কেজি",
            variants: [
              { quantity: "১ কেজি", price: "220" },
              { quantity: "২ কেজি", price: "440" },
              { quantity: "৫ কেজি", price: "1100" },
              { quantity: "১০ কেজি", price: "2200" },
            ],
          },
          {
            id: 4,
            name: "কালিজিরা / চিনিগুড়া",
            description:
              "পল্লী বাংলার ঐতিহ্য সম্ভার প্রিমিয়াম কালিজিরা (চিনিগুড়া) চাল একটি উৎকৃষ্ট ঐতিহ্যবাহী সুগন্ধি চাল, যা তার ক্ষুদ্র, সরু দানা এবং গভীর মিষ্টি-বাদামি সুবাসের জন্য বিখ্যাত। একে প্রায়ই 'চালের রাজপুত্র' বা 'বেবি বাসমতি' বলা হয়। এই ঐতিহ্যবাহী চাল ওড়িশা ও পশ্চিমবঙ্গ অঞ্চলের একটি মূল্যবান কৃষি ঐতিহ্য।",
            price: "130",
            quantity: "১ কেজি",
            variants: [
              { quantity: "১ কেজি", price: "130" },
              { quantity: "২ কেজি", price: "260" },
              { quantity: "৫ কেজি", price: "650" },
              { quantity: "১০ কেজি", price: "1300" },
            ],
          },
        ],
        lentils: [
          {
            id: 5,
            name: "সোনা মুগ ডাল",
            description:
              "সোনা মুগ ডাল - প্রতিটি বাটিতে সোনালি পুষ্টির স্বাদ। পল্লী বাংলার ঐতিহ্য সম্ভার প্রিমিয়াম সোনা মুগ ডাল পরিচয় করিয়ে দিচ্ছে। যত্নসহকারে নির্বাচিত, স্বাভাবিকভাবে সুস্বাদু এবং ভারতজুড়ে অসংখ্য রান্নাঘরে সমাদৃত এই সোনা মুগ ডাল প্রতিটি খাবারে নিয়ে আসে পুষ্টিগুণ, বিশুদ্ধ স্বাদ এবং ঘরোয়া রান্নার আসল আনন্দ।",
            price: "260",
            quantity: "১ কেজি",
            variants: [
              { quantity: "১ কেজি", price: "260" },
              { quantity: "২ কেজি", price: "520" },
              { quantity: "৫ কেজি", price: "1300" },
              { quantity: "১০ কেজি", price: "2600" },
            ],
          },
          {
            id: 6,
            name: "ভাজা কলাই ডাল",
            description:
              "পল্লী বাংলার ঐতিহ্য সম্ভার প্রিমিয়াম বেউলি কলাই ডাল। বাঙালি রান্নাঘরের এক অমূল্য ঐতিহ্য, আমাদের বেউলি কলাই ডাল বেছে নেওয়া হয় তার আসল স্বাদ, সমৃদ্ধ গঠন এবং ঘরোয়া রান্নার পরিচিত আরামদায়ক অনুভূতি বজায় রাখার জন্য। আমরা বিশ্বাস করি, ভালো খাবারের শুরু হয় উৎকৃষ্ট উপকরণ থেকে। তাই আমাদের বেউলি কলাই ডাল বিশ্বস্ত কৃষকদের কাছ থেকে সংগ্রহ করা হয়, যত্নসহকারে প্রক্রিয়াজাত করা হয় এবং সতেজতা, বিশুদ্ধতা ও নির্ভরযোগ্য মান নিশ্চিত করে প্যাক করা হয়।",
            price: "300",
            quantity: "১ কেজি",
            variants: [
              { quantity: "১ কেজি", price: "300" },
              { quantity: "২ কেজি", price: "600" },
              { quantity: "৫ কেজি", price: "1500" },
              { quantity: "১০ কেজি", price: "3000" },
            ],
          },
        ],
        oilandghee: [
          {
            id: 7,
            name: "সরিষার তেল",
            description:
              "কোল্ড-প্রেসড সরিষার তেল। পল্লী বাংলার ঐতিহ্য সম্ভারে আমরা বিশ্বাস করি যে উৎকৃষ্ট তেল আসে সহজ ও প্রাকৃতিক প্রক্রিয়া থেকে। তাই আমরা ব্যবহার করি ঐতিহ্যবাহী কোল্ড-প্রেস পদ্ধতি, যেখানে সরিষার বীজ অতিরিক্ত তাপ বা রাসায়নিক পরিশোধন ছাড়াই ধীরে ধীরে নিষ্কাশন করা হয়। এর ফলে পাওয়া যায় প্রাকৃতিক সুবাসযুক্ত তেল, যা প্রতিটি খাবারে নিয়ে আসে খাঁটি স্বাদ, গুণমান এবং ঐতিহ্যের ছোঁয়া। এতে সরিষার স্বাভাবিক ঝাঁজ, সুগন্ধ ও পুষ্টিগুণ অক্ষুণ্ণ থাকে। তরকারি, ভাজা, আচার, ফোড়ন এবং ঐতিহ্যবাহী মালিশের জন্য উপযুক্ত। আধুনিক পরিবারের জন্য ঐতিহ্যবাহী বিশুদ্ধতার পুনর্জাগরণ।",
            price: "160",
            quantity: "১ লিটার",
            variants: [
              { quantity: "১ লিটার", price: "160" },
              { quantity: "২ লিটার", price: "320" },
              { quantity: "৫ লিটার", price: "800" },
              { quantity: "১০ লিটার", price: "1600" },
            ],
          },
          {
            id: 8,
            name: "ঘি",
            description:
              "বিশুদ্ধ গরুর ঘি - ঐতিহ্যবাহী পদ্ধতিতে প্রস্তুত পুষ্টির ভাণ্ডার। পল্লী বাংলার ঐতিহ্য সম্ভার গরুর ঘি উচ্চমানের গরুর দুধ থেকে তৈরি করা হয় এবং যত্নসহকারে প্রস্তুত করা হয় যাতে আপনার পরিবারের জন্য খাঁটি স্বাদ, সমৃদ্ধ সুগন্ধ এবং পুষ্টিকর গুণাবলি নিশ্চিত করা যায়।",
            price: "525",
            quantity: "১ কেজি",
            variants: [
              { quantity: "১ কেজি", price: "525" },
              { quantity: "২ কেজি", price: "1050" },
              { quantity: "৫ কেজি", price: "2625" },
              { quantity: "১০ কেজি", price: "5250" },
            ],
          },
        ],
        honey: [
          {
            id: 9,
            name: "মধু",
            description:
              "বিশুদ্ধ মধু। প্রকৃতির কাছ থেকে সরাসরি। যত্নসহকারে সংগ্রহ করা এবং সবচেয়ে বিশুদ্ধ রূপে আপনার কাছে পৌঁছে দেওয়া মধুর সমৃদ্ধ স্বাদ ও প্রাকৃতিক গুণাগুণ উপভোগ করুন। প্রকৃতির নির্ধারিত মিষ্টতার আসল স্বাদ গ্রহণ করুন। আমাদের প্রতিটি ফোঁটা মধু নির্বাচিত মৌচাক থেকে সংগ্রহ করা হয়, যাতে এর প্রাকৃতিক স্বাদ, সুগন্ধ এবং পুষ্টিগুণ অক্ষুণ্ণ থাকে। এই গুণাবলিই মধুকে যুগ যুগ ধরে একটি মূল্যবান সুপারফুড হিসেবে পরিচিত করেছে। পল্লী বাংলার ঐতিহ্য সম্ভারে আমরা বিশ্বাস করি, প্রকৃতিই সর্বোত্তম মিষ্টতা সৃষ্টি করে।",
            price: "549",
            quantity: "১ লিটার",
            variants: [
              { quantity: "১ লিটার", price: "549" },
              { quantity: "২ লিটার", price: "1098" },
              { quantity: "৫ লিটার", price: "2745" },
              { quantity: "১০ লিটার", price: "5490" },
            ],
          },
        ],
        pickleandkasundi: [
          {
            id: 10,
            name: "কাসুন্দি",
            description:
              "আম ও সরিষার নিখুঁত মেলবন্ধন। পল্লী বাংলার ঐতিহ্য সম্ভার আম কাসুন্দি পরিচয় করিয়ে দিচ্ছে। টক কাঁচা আম এবং সুগন্ধি সরিষা বীজের এক অনন্য সংমিশ্রণ, যা আপনার খাবারের টেবিলে নিয়ে আসে বাংলার আসল স্বাদ। যত্নসহকারে নির্বাচিত কাঁচা আম, উৎকৃষ্ট সরিষা এবং ঐতিহ্যবাহী মশলা দিয়ে প্রস্তুত আমাদের আম কাসুন্দি টক, ঝাঁজ ও অতুলনীয় স্বাদের নিখুঁত ভারসাম্য প্রদান করে।",
            price: "50",
            quantity: "100 গ্রাম",
            variants: [
              { quantity: "100 গ্রাম", price: "50" },
              { quantity: "200 গ্রাম", price: "100" },
              { quantity: "500 গ্রাম", price: "250" },
            ],
          },
          {
            id: 11,
            name: "আমের আচার",
            description:
              "প্রতিটি কামড়ে ঐতিহ্যের স্বাদ। পল্লী বাংলার ঐতিহ্য সম্ভার আমের আচার পরিচয় করিয়ে দিচ্ছে — এমন এক স্বাদ যা ঘরের অনুভূতি এনে দেয়। হাতে বাছাই করা কাঁচা আম, খাঁটি মশলা এবং প্রজন্ম থেকে প্রজন্মান্তরে চলে আসা ঐতিহ্যবাহী রেসিপি দিয়ে তৈরি আমাদের আমের আচার আপনার খাবারের টেবিলে নিয়ে আসে ঘরোয়া স্বাদের সমৃদ্ধ ঐতিহ্য।",
            price: "99",
            quantity: "100 গ্রাম",
            variants: [
              { quantity: "100 গ্রাম", price: "99" },
              { quantity: "200 গ্রাম", price: "198" },
              { quantity: "500 গ্রাম", price: "495" },
            ],
          },
        ],
        sweetsandmorrobba: [
          {
            id: 12,
            name: "মোরব্বা",
            description:
              "কাঁচা আমের মোরব্বা - মিষ্টি ও টক স্বাদের অপূর্ব আনন্দ। পল্লী বাংলার ঐতিহ্য সম্ভার প্রিমিয়াম কাঁচা আমের মোরব্বা পরিচয় করিয়ে দিচ্ছে। যত্নসহকারে নির্বাচিত কাঁচা সবুজ আম এবং ঐতিহ্যবাহী রেসিপি অনুসরণ করে প্রস্তুত আমাদের কাঁচা আমের মোরব্বা মিষ্টতা, টক স্বাদ এবং ঘরোয়া স্বাদের নিখুঁত সমন্বয় উপস্থাপন করে।",
            price: "75",
            quantity: "100 গ্রাম",
            variants: [
              { quantity: "100 গ্রাম", price: "75" },
              { quantity: "200 গ্রাম", price: "150" },
              { quantity: "500 গ্রাম", price: "375" },
            ],
          },
          {
            id: 13,
            name: "সন্দেশ",
            description:
              "সন্দেশ - প্রতিটি কামড়ে বাংলার সমৃদ্ধ ঐতিহ্য। পল্লী বাংলার ঐতিহ্য সম্ভার কোরা-পাকের সন্দেশ পরিচয় করিয়ে দিচ্ছে। ধৈর্য, ঐতিহ্য এবং উৎকৃষ্ট উপকরণ দিয়ে প্রস্তুত আমাদের কোরা-পাকের সন্দেশ আপনাকে বাংলার অন্যতম প্রিয় মিষ্টান্নের আসল স্বাদ উপহার দেয়।",
            price: "750",
            quantity: "৫০ টি (প্রতিটি ২৫)",
            variants: [
              { quantity: "৫০ টি (প্রতিটি ২৫)", price: "750" },
              { quantity: "৫০ টি (প্রতিটি ৩৫)", price: "1750" },
              { quantity: "৫০ টি (প্রতিটি ৫০)", price: "2500" },
            ],
          },
          {
            id: 14,
            name: "রসগোল্লা",
            description:
              "রসগোল্লা - বাংলার মিষ্টি গর্ব। পল্লী বাংলার ঐতিহ্য সম্ভার বাংলার রসগোল্লা পরিচয় করিয়ে দিচ্ছে। নরম, স্পঞ্জের মতো তুলতুলে এবং অসাধারণ সুস্বাদু আমাদের রসগোল্লা ঐতিহ্যবাহী বাঙালি মিষ্টি তৈরির দক্ষতায় প্রস্তুত, যা প্রজন্মের পর প্রজন্ম ধরে মানুষকে মুগ্ধ করে আসা আসল স্বাদ প্রদান করে।",
            price: "1000",
            quantity: "১০০ টি (প্রতিটি ১০)",
            variants: [
              { quantity: "১০০ টি (প্রতিটি ১০)", price: "1000" },
              { quantity: "১০০ টি (প্রতিটি ১৫)", price: "1500" },
              { quantity: "১০০ টি (প্রতিটি ২০)", price: "2000" },
            ],
          },
        ],
        tealeaves: [
          {
            id: 15,
            name: "দার্জিলিং চা",
            description:
              "চায়ের শ্যাম্পেন নামে পরিচিত দার্জিলিং চা একটি প্রিমিয়াম এবং ভৌগোলিকভাবে সুরক্ষিত কালো চা (এবং কখনও কখনও সবুজ বা সাদা চা), যা ভারতের পশ্চিমবঙ্গের হিমালয়ের পাদদেশের উচ্চভূমিতে উৎপাদিত হয়। এর সূক্ষ্ম ফুলের সুবাস এবং স্বতন্ত্র মুসকাটেল স্বাদের জন্য এটি বিশ্বজুড়ে সমাদৃত।",
            price: "350",
            quantity: "100g",
            variants: [
              { quantity: "100g", price: "350" },
              { quantity: "200g", price: "700" },
              { quantity: "500g", price: "1750" },
              { quantity: "1kg", price: "3500" },
            ],
          },
          {
            id: 16,
            name: "আসাম সিটিসি",
            description:
              "পল্লী বাংলার ঐতিহ্য সম্ভার আসাম সিটিসি (ক্রাশ, টিয়ার, কার্ল) পরিচয় করিয়ে দিচ্ছে, যা প্রতিদিনের ভারতীয় চায়ের জন্য অন্যতম সেরা মানদণ্ড। যান্ত্রিক প্রক্রিয়ায় ছোট ও ঘন দানায় রূপান্তরিত এই চা থেকে তৈরি হয় গাঢ় ও মল্টি স্বাদের পানীয়, যা দুধ, চিনি এবং মশলার সঙ্গে অসাধারণভাবে মানিয়ে যায়। এতে ক্যাফেইনের পরিমাণ বেশি এবং এটি অ্যান্টিঅক্সিডেন্টে সমৃদ্ধ।",
            price: "65",
            quantity: "100g",
            variants: [
              { quantity: "100g", price: "65" },
              { quantity: "200g", price: "130" },
              { quantity: "500g", price: "325" },
              { quantity: "1kg", price: "650" },
            ],
          },
          {
            id: 17,
            name: "হারবাল চা",
            description:
              "পল্লী বাংলার ঐতিহ্য সম্ভার প্রিমিয়াম হারবাল চা পরিচয় করিয়ে দিচ্ছে। এটি শুকনো ভেষজ, ফুল, ফল, মশলা বা শিকড় গরম পানিতে ভিজিয়ে তৈরি করা একটি স্বাস্থ্যকর পানীয়। প্রচলিত চা (যেমন কালো বা সবুজ চা) থেকে ভিন্ন, এটি ক্যামেলিয়া সিনেনসিস উদ্ভিদ থেকে তৈরি নয় এবং স্বাভাবিকভাবেই ক্যাফেইনমুক্ত।",
            price: "280",
            quantity: "100g",
            variants: [
              { quantity: "100g", price: "280" },
              { quantity: "200g", price: "560" },
              { quantity: "500g", price: "1400" },
              { quantity: "1kg", price: "2800" },
            ],
          },
          {
            id: 18,
            name: "ব্লু পি",
            description:
              "পল্লী বাংলার ঐতিহ্য সম্ভার প্রিমিয়াম ব্লু পি পানীয় (যা বাটারফ্লাই পি বা অপরাজিতা নামেও পরিচিত) পরিচয় করিয়ে দিচ্ছে। এটি ক্লিটোরিয়া টার্নেটিয়া উদ্ভিদের পাপড়ি থেকে তৈরি একটি উজ্জ্বল ভেষজ পানীয়। এর প্রাকৃতিক নীলাভ বর্ণ এবং রঙ পরিবর্তনের অনন্য বৈশিষ্ট্যের জন্য এটি অত্যন্ত জনপ্রিয়। মাটির মতো স্বাদযুক্ত এই পানীয় অ্যান্টিঅক্সিডেন্টে সমৃদ্ধ এবং স্বাস্থ্যসচেতনদের কাছে বিশেষভাবে সমাদৃত।",
            price: "499",
            quantity: "100g",
            variants: [
              { quantity: "100g", price: "499" },
              { quantity: "200g", price: "998" },
              { quantity: "500g", price: "2495" },
              { quantity: "1kg", price: "4990" },
            ],
          },
        ],
      },
    },
    whyChoose: {
      badge: "বিশুদ্ধ গ্রামীণ পণ্য",
      eyebrow: "কেন আমাদের বেছে নেবেন",
      title: "আপনার পরিবারের জন্য খাঁটি ও নিরাপদ পণ্য",
      description:
        "আমরা গ্রামের কৃষক ও কারিগরদের কাছ থেকে সরাসরি প্রাকৃতিক ও ঐতিহ্যবাহী পণ্য সংগ্রহ করি যাতে আপনি পান সর্বোচ্চ মানের বিশুদ্ধতা ও বিশ্বাস।",
      features: [
        "সরাসরি কৃষক ও কারিগরের কাছ থেকে সংগ্রহ",
        "১০০% প্রাকৃতিক ও বিশুদ্ধ পণ্য",
        "ন্যায্য মূল্য ও উন্নত মান",
        "পরিবেশবান্ধব প্যাকেজিং",
        "গ্রামীণ ঐতিহ্য সংরক্ষণ",
      ],
      stats: [
        { value: "100%", label: "প্রাকৃতিক পণ্য" },
        { value: "500+", label: "সন্তুষ্ট গ্রাহক" },
        { value: "50+", label: "গ্রামীণ সহযোগী" },
      ],
    },
    testimonials: {
      eyebrow: "সদস্যদের অভিজ্ঞতা",
      title: "আমাদের সদস্যদের কথা",
      description: "আমাদের সমবায়ের সঙ্গে যুক্ত সদস্যদের বাস্তব অভিজ্ঞতা।",
      items: [
        {
          name: "অর্ণব সেনগুপ্ত",
          role: "কারিগর",
          text: "সমবায়ের মাধ্যমে আমরা আমাদের পণ্যের সঠিক মূল্য পাচ্ছি।",
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
        {
          name: "সুব্রত ঘোষ",
          role: "হস্তশিল্পী",
          text: "আমাদের পণ্য এখন দেশের বিভিন্ন প্রান্তে পৌঁছাচ্ছে।",
        },
      ],
    },
    footer: {
      description:
        "গ্রাম বাংলার ঐতিহ্যবাহী পণ্যকে বিশ্বের সামনে তুলে ধরার উদ্যোগ।",
      quickLinks: "দ্রুত লিংক",
      contact: "যোগাযোগ",
      address: "কলকাতা, পশ্চিমবঙ্গ",
      language: "ভাষা",
      copyright: "© ২০২৬ পল্লী বাংলার ঐতিহ্য সম্ভার | সর্বস্বত্ব সংরক্ষিত",
    },
    membership: {
      welcome: "স্বাগতম!",
      intro:
        "আমাদের পরিবারের অংশ হয়ে উঠুন এবং উপভোগ করুন বাংলার আসল ঐতিহ্যবাহী পণ্যসমূহ।",
      discount: "৫০% ছাড়",
      offerText:
        "সদস্য হিসেবে নিবন্ধন করুন এবং পরবর্তী ১ বছর সমস্ত পণ্যে বিশেষ মূল্যছাড় পান।",
      benefits: [
        "সীমিত সময়ের অফার",
        "সকল পণ্যে প্রযোজ্য",
        "১২ মাস মেয়াদী সুবিধা",
      ],
      specialOffer: "বিশেষ সদস্য অফার",
      registerTitle: "সদস্যপদ নিবন্ধন",
      registerSubtitle: "নিচের তথ্যগুলি পূরণ করুন",
      mobileOfferText:
        "সদস্য হিসেবে যোগ দিলে আগামী ১ বছরের জন্য সকল পণ্যে বিশেষ মূল্যছাড় এবং এক্সক্লুসিভ সুবিধা পাবেন।",
      mobileBenefits: [
        "সকল পণ্যে বিশেষ ছাড়",
        "১ বছরের সদস্য সুবিধা",
        "নতুন অফারের অগ্রাধিকার",
        "দ্রুত অর্ডার অনুমোদন",
      ],
      fullName: "পূর্ণ নাম",
      fullNamePlaceholder: "আপনার পূর্ণ নাম লিখুন",
      phone: "ফোন নম্বর",
      phonePlaceholder: "+৯১ XXXXXXXXXX",
      registerButton: "সদস্য হিসেবে নিবন্ধন করুন",
      successButton: "নিবন্ধন সফল হয়েছে!",
      successMessage: "আপনার সদস্যপদ সফলভাবে সক্রিয় হয়েছে",
      secure: "নিরাপদ",
      verified: "যাচাইকৃত",
      fastApproval: "দ্রুত অনুমোদন",
      errors: {
        nameRequired: "পূর্ণ নাম লিখুন",
        nameLength: "নামের দৈর্ঘ্য কমপক্ষে ৩ অক্ষর হতে হবে",
        nameInvalid: "শুধুমাত্র বাংলা বা ইংরেজি অক্ষর ব্যবহার করুন",
        phoneRequired: "ফোন নম্বর লিখুন",
        phoneInvalid: "সঠিক ১০ সংখ্যার ভারতীয় মোবাইল নম্বর দিন",
      },
    },
  },
  en: {
    brand: "Polli Banglar Oitijhya Sambhar",
    brandShortTop: "Polli Banglar",
    brandShortBottom: "Oitijhya Sambhar",
    nav: [
      { label: "Home", href: "#" },
      { label: "Our Process", href: "#process" },
      { label: "Popular Categories", href: "#categories" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Member Stories", href: "#testimonials" },
    ],
    process: {
      eyebrow: "Our Process",
      title: "How We Work",
      description:
        "From village producers to customers, every step is handled with care, honesty, and quality checks.",
      steps: [
        "Collected from Villages",
        "Training and Packaging",
        "Quality Verification",
        "Digital Marketing",
        "Fair Price Support",
      ],
    },
    categories: {
      eyebrow: "Traditional Bengal Collection",
      title: "Popular Categories",
      description:
        "A curated collection of rural crafts, farm products, and handmade goods.",
      heritage: "Heritage Collection",
      price: "Price",
      details: "Details",
      noProductsTitle: "No products available",
      noProductsText:
        "There are no products in this category yet. Check another category or visit again later.",
      category: "Category",
      popularProduct: "Popular Product",
      quantity: "Quantity",
      descriptionTitle: "Product Description",
      readMore: "... Read More",
      readLess: "Read Less",
      orderWhatsApp: "Order on WhatsApp",
      memberDiscount: "50% member discount applied",
      whatsappMessage: {
        intro: "I want to order this product.",
        product: "Product",
        price: "Price",
        quantity: "Quantity",
      },
      masters: [
        {
          id: "food",
          title: "Food Items",
          children: [
            { id: "rice", title: "Paddy and Rice" },
            { id: "lentils", title: "Lentils" },
            { id: "oilandghee", title: "Oil and Ghee" },
            { id: "honey", title: "Honey" },
            { id: "pickleandkasundi", title: "Pickle and Kasundi" },
            { id: "sweetsandmorrobba", title: "Sweets and Morrobba" },
          ],
        },
        {
          id: "drinks",
          title: "Energy Drinks and Anti-oxidants",
          children: [{ id: "tealeaves", title: "Tea Leaves" }],
        },
      ],
      products: {
        rice: [
          {
            id: 1,
            name: "Gobindobhog Rice",
            description:
              "Carefully sourced and meticulously selected, our Gobindobhog Rice is known for its distinctive fragrance, delicate texture, and exceptional culinary experience. Palli Banglar Oitihya Sambhar Premium Gobindobhog Rice is carefully sourced from trusted farms and selected for its authentic aroma, soft texture, and exceptional quality. Known as one of Bengal's most cherished rice varieties, Gobindobhog Rice is ideal for traditional dishes such as khichuri, payesh, pulao served as prasadam during Durga Puja and festive preparations. It derives its name from its usage as the principal ingredient in the preparation of the offerings to Govindaji. Also it is closely associated with festive and comfort foods.",
            price: "120",
            quantity: "1 kg",
            variants: [
              { quantity: "1 kg", price: "120" },
              { quantity: "2 kg", price: "240" },
              { quantity: "5 kg", price: "600" },
              { quantity: "10 kg", price: "1200" },
            ],
          },
          {
            id: 2,
            name: "Dudheswar",
            description:
              "Introducing Palli Banglar Oitihya Sambhar Premium Dudheswar Rice. Soft, flavorful. Dudheswar Rice is known for its fine grains, pleasant aroma. Bring home a rice that transforms everyday meals into memorable experiences.  Our Dudheswar Rice is sourced from trusted farming communities and selected to meet the highest standards of quality, freshness, and taste.",
            price: "65",
            quantity: "1 kg",
            variants: [
              { quantity: "1 kg", price: "65" },
              { quantity: "2 kg", price: "130" },
              { quantity: "5 kg", price: "325" },
              { quantity: "10 kg", price: "650" },
            ],
          },
          {
            id: 3,
            name: "Tulaipanji",
            description:
              "The Royal Aroma of North Bengal. Introducing Palli Banglar Oitihya Sambhar Premium Tulaipanji Rice. Celebrated for its delicate fragrance, slender grains, and exceptional taste, Tulaipanji Rice is one of Bengal's most treasured heritage rice varieties. Bring home a rice that transforms every meal into a special occasion.",
            price: "220",
            quantity: "1 kg",
            variants: [
              { quantity: "1 kg", price: "220" },
              { quantity: "2 kg", price: "440" },
              { quantity: "5 kg", price: "1100" },
              { quantity: "10 kg", price: "2200" },
            ],
          },
          {
            id: 4,
            name: "Kalijeera/Chinigura",
            description:
              "Introducing Palli Banglar Oitihya Sambhar Premium Kalijeera rice (also called Chinigura) is a premium heirloom aromatic rice famous for its tiny, slender grains and deep nutty-sweet aroma. Often called the Prince of Rice or Baby Basmati, this heritage grain is native to Odisha, West Bengal. ",
            price: "130",
            quantity: "1 kg",
            variants: [
              { quantity: "1 kg", price: "130" },
              { quantity: "2 kg", price: "260" },
              { quantity: "5 kg", price: "650" },
              { quantity: "10 kg", price: "1300" },
            ],
          },
        ],
        lentils: [
          {
            id: 5,
            name: "Sona Moong",
            description:
              "Sona Moong - Golden Goodness in Every Bowl Introducing Palli Banglar Oitihya Sambhar Premium Sona Moong Dal, Carefully selected, naturally rich in flavor, and loved in kitchens across India, our Sona Moong Dal brings wholesome goodness and authentic taste to every meal.",
            price: "260",
            quantity: "1 kg",
            variants: [
              { quantity: "1 kg", price: "260" },
              { quantity: "2 kg", price: "520" },
              { quantity: "5 kg", price: "1300" },
              { quantity: "10 kg", price: "2600" },
            ],
          },
          {
            id: 6,
            name: "Bhaja Kolai",
            description:
              "Introducing Palli Banglar Oitihya Sambhar Premium Beuli Kolai Dal. A treasured staple in Bengali kitchens, our Beuli Kolai Dal is carefully selected to deliver authentic taste, rich texture, and the comforting flavors of home-cooked tradition. We believe that great food starts with quality ingredients. Our Beuli Kolai Dal is sourced from trusted farmers, carefully processed, and packed with care to ensure freshness, purity, and consistent quality.",
            price: "300",
            quantity: "1 kg",
            variants: [
              { quantity: "1 kg", price: "300" },
              { quantity: "2 kg", price: "600" },
              { quantity: "5 kg", price: "1500" },
              { quantity: "10 kg", price: "3000" },
            ],
          },
        ],
        oilandghee: [
          {
            id: 7,
            name: "Mustard Oil",
            description:
              "Cold-Pressed Mustard Oil. At Palli Banglar Oitihya Sambhar, we believe that the finest oils come from the simplest processes. That's why we use the traditional cold-press extraction method, where mustard seeds are slowly pressed without excessive heat or chemical refining. The result is a naturally aromatic oil that brings authenticity, flavor, and quality to every meal. Retains natural pungency, aroma, and nutrients. Perfect for curries, frying, pickles, tadkas & traditional massage. Reviving Traditional Purity for Modern Families.",
            price: "160",
            quantity: "1 L",
            variants: [
              { quantity: "1 L", price: "160" },
              { quantity: "2 L", price: "320" },
              { quantity: "5 L", price: "800" },
              { quantity: "10 L", price: "1600" },
            ],
          },
          {
            id: 8,
            name: "Ghee",
            description:
              "Pure Cow Ghee - Nourishment Crafted the Traditional Way Introducing Palli Banglar Oitihya Sambhar Cow Ghee — made from high-quality cow milk and prepared with care to bring authentic flavor, rich aroma, and wholesome goodness to your family.",
            price: "525",
            quantity: "1 kg",
            variants: [
              { quantity: "1 kg", price: "525" },
              { quantity: "2 kg", price: "1050" },
              { quantity: "5 kg", price: "2625" },
              { quantity: "10 kg", price: "5250" },
            ],
          },
        ],
        honey: [
          {
            id: 9,
            name: "Honey",
            description:
              "Pure Honey. Straight from Nature. Experience the rich taste and natural goodness of honey harvested with care and delivered in its purest form.Taste the Sweetness Nature Intended. Every drop of our honey comes from carefully selected apiaries, preserving the natural flavor, aroma, and nutrients that make honey a timeless superfood.  At Palli Banglar Oitihya Sambhar, we believe that nature creates the best sweetness.",
            price: "549",
            quantity: "1 L",
            variants: [
              { quantity: "1 L", price: "549" },
              { quantity: "2 L", price: "1098" },
              { quantity: "5 L", price: "2745" },
              { quantity: "10 L", price: "5490" },
            ],
          },
        ],
        pickleandkasundi: [
          {
            id: 10,
            name: "Kasundi",
            description:
              "The Perfect Blend of Mango & Mustard Magic Introducing Palli Banglar Oitihya Sambhar Mango Kasundi. A bold fusion of tangy raw mangoes and aromatic mustard seeds, crafted to bring the authentic taste of Bengal to your dining table. Made with carefully selected raw mangoes, premium mustard, and traditional spices, our Mango Kasundi delivers the perfect balance of zest, spice, and irresistible flavor. ",
            price: "50",
            quantity: "100g",
            variants: [
              { quantity: "100g", price: "50" },
              { quantity: "200g", price: "100" },
              { quantity: "500g", price: "250" },
            ],
          },
          {
            id: 11,
            name: "Mango Pickel",
            description:
              "The Taste of Tradition in Every Bite - Introducing Palli Banglar Oitihya Sambhar Mango Pickle: A Taste That Feels Like Home. Crafted from handpicked raw mangoes, authentic spices, and time-honored recipes, our mango pickle brings the rich flavors of home to your table.",
            price: "99",
            quantity: "100g",
            variants: [
              { quantity: "100g", price: "99" },
              { quantity: "200g", price: "198" },
              { quantity: "500g", price: "495" },
            ],
          },
        ],
        sweetsandmorrobba: [
          {
            id: 12,
            name: "Morobba",
            description:
              "Green Mango Morobba - The Sweet & Tangy Delight of Raw Mangoes Introducing Palli Banglar Oitihya Sambhar Premium Green Mango Morobba. Made from carefully selected raw green mangoes and prepared using traditional recipes, our Green Mango Morobba captures the perfect balance of sweetness, tanginess, and authentic homemade flavor.",
            price: "75",
            quantity: "100g",
            variants: [
              { quantity: "100g", price: "75" },
              { quantity: "200g", price: "150" },
              { quantity: "500g", price: "375" },
            ],
          },
          {
            id: 13,
            name: "Sandesh",
            description:
              "Sandesh - The Rich Heritage of Bengal in Every Bite. Introducing Palli Banglar Oitihya Sambhar Kora-Paak er Sandesh Crafted with patience, tradition, and the finest ingredients, our Kora-Paak er Sandesh brings you the authentic taste of Bengal's most cherished sweet delicacy.",
            price: "750",
            quantity: "50 Pieces (25/ Piece)",
            variants: [
              { quantity: "50 Pieces (25/ Piece)", price: "750" },
              { quantity: "50 Pieces (35/ Piece)", price: "1750" },
              { quantity: "50 Pieces (50/ Piece)", price: "2500" },
            ],
          },
          {
            id: 14,
            name: "Rasogolla",
            description:
              "Rasogolla - The Sweet Pride of Bengal Introducing Palli Banglar Oitihya Sambhar Bengal's Rasogolla Soft, spongy, and irresistibly delicious, our Rasogolla is crafted using traditional Bengali sweet-making expertise to deliver the authentic taste that has delighted generations.",
            price: "1000",
            quantity: "100 Pieces (10/ Piece)",
            variants: [
              { quantity: "100 Pieces (10/ Piece)", price: "1000" },
              { quantity: "100 Pieces (15/ Piece)", price: "1500" },
              { quantity: "100 Pieces (20/ Piece)", price: "2000" },
            ],
          },
        ],
        tealeaves: [
          {
            id: 15,
            name: "Darjeeling Tea",
            description:
              "Renowned as the Champagne of Teas, Darjeeling tea is a premium, geographically protected black tea (and occasionally green or white) grown in the high-altitude foothills of the Himalayas in West Bengal, India. It is celebrated worldwide for its delicate floral notes and signature muscatel flavor.",
            price: "350",
            quantity: "100g",
            variants: [
              { quantity: "100g", price: "350" },
              { quantity: "200g", price: "700" },
              { quantity: "500g", price: "1750" },
              { quantity: "1kg", price: "3500" },
            ],
          },
          {
            id: 16,
            name: "Assam CTC",
            description:
              "Introducing Palli Banglar Oitihya Sambhar Assam CTC (Crush, Tear, Curl) is the gold standard for robust, everyday Indian chai. Processed mechanically into small, dense pellets, it yields a dark, malty brew that pairs perfectly with milk, sugar, and spices. It is highly caffeinated and rich in antioxidants.",
            price: "65",
            quantity: "100g",
            variants: [
              { quantity: "100g", price: "65" },
              { quantity: "200g", price: "130" },
              { quantity: "500g", price: "325" },
              { quantity: "1kg", price: "650" },
            ],
          },
          {
            id: 17,
            name: "Herbal Tea",
            description:
              "Introducing Palli Banglar Oitihya Sambhar Premium Herbal tea,  is a beverage made by steeping dried herbs, flowers, fruits, spices, or roots in hot water. Unlike traditional teas (like black or green tea), it is not derived from the Camellia sinensis plant and is naturally caffeine-free.",
            price: "280",
            quantity: "100g",
            variants: [
              { quantity: "100g", price: "280" },
              { quantity: "200g", price: "560" },
              { quantity: "500g", price: "1400" },
              { quantity: "1kg", price: "2800" },
            ],
          },
          {
            id: 18,
            name: "Blue Pea",
            description:
              "Introducing Palli Banglar Oitihya Sambhar Premium Blue pea drink (also known as butterfly pea or Aparajita) is a vibrant herbal infusion made from the petals of the Clitoria ternatea plant. Famous for its striking natural indigo hue and magical color-changing properties, it offers an earthy taste and is highly prized for its antioxidant content.",
            price: "499",
            quantity: "100g",
            variants: [
              { quantity: "100g", price: "499" },
              { quantity: "200g", price: "998" },
              { quantity: "500g", price: "2495" },
              { quantity: "1kg", price: "4990" },
            ],
          },
        ],
      },
    },
    whyChoose: {
      badge: "Pure Rural Products",
      eyebrow: "Why Choose Us",
      title: "Pure and Safe Products for Your Family",
      description:
        "We source natural and traditional products directly from village farmers and artisans so you receive trusted quality and purity.",
      features: [
        "Direct sourcing from farmers and artisans",
        "100% natural and pure products",
        "Fair prices and high standards",
        "Eco-friendly packaging",
        "Preserving rural heritage",
      ],
      stats: [
        { value: "100%", label: "Natural Products" },
        { value: "500+", label: "Happy Customers" },
        { value: "50+", label: "Rural Partners" },
      ],
    },
    testimonials: {
      eyebrow: "Member Experiences",
      title: "What Our Members Say",
      description:
        "Real experiences from members connected with our cooperative.",
      items: [
        {
          name: "Arnab Sengupta",
          role: "Artisan",
          text: "Through the cooperative, we are getting the right value for our products.",
        },
        {
          name: "Shrabani Roy",
          role: "Farmer",
          text: "Village products are now reaching the city easily.",
        },
        {
          name: "Debajyoti Basu",
          role: "Entrepreneur",
          text: "This initiative is changing the lives of village communities.",
        },
        {
          name: "Subrata Ghosh",
          role: "Handicraft Artist",
          text: "Our products are now reaching different parts of the country.",
        },
      ],
    },
    footer: {
      description:
        "An initiative to bring traditional products from rural Bengal to the world.",
      quickLinks: "Quick Links",
      contact: "Contact",
      address: "Kolkata, West Bengal",
      language: "Language",
      copyright: "© 2026 Polli Banglar Oitijhya Sambhar | All rights reserved",
    },
    membership: {
      welcome: "Welcome!",
      intro:
        "Become part of our family and enjoy authentic traditional products from Bengal.",
      discount: "50% Off",
      offerText:
        "Register as a member and get special pricing on all products for the next 1 year.",
      benefits: [
        "Limited-time offer",
        "Applicable on all products",
        "12-month benefit",
      ],
      specialOffer: "Special Member Offer",
      registerTitle: "Membership Registration",
      registerSubtitle: "Fill in the details below",
      mobileOfferText:
        "Join as a member to receive special discounts on all products and exclusive benefits for the next 1 year.",
      mobileBenefits: [
        "Special discount on all products",
        "1 year of member benefits",
        "Priority for new offers",
        "Faster order approval",
      ],
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      phone: "Phone Number",
      phonePlaceholder: "+91 XXXXXXXXXX",
      registerButton: "Register as a Member",
      successButton: "Registration Successful!",
      successMessage: "Your membership has been activated successfully",
      secure: "Secure",
      verified: "Verified",
      fastApproval: "Fast Approval",
      errors: {
        nameRequired: "Enter your full name",
        nameLength: "Name must be at least 3 characters long",
        nameInvalid: "Use only Bengali or English letters",
        phoneRequired: "Enter your phone number",
        phoneInvalid: "Enter a valid 10-digit Indian mobile number",
      },
    },
  },
  hi: {
    brand: "पल्ली बंगला परंपरा संग्रह",
    brandShortTop: "पल्ली बंगला",
    brandShortBottom: "परंपरा संग्रह",
    nav: [
      { label: "होम", href: "#" },
      { label: "हमारी प्रक्रिया", href: "#process" },
      { label: "लोकप्रिय श्रेणियां", href: "#categories" },
      { label: "हमें क्यों चुनें", href: "#why-us" },
      { label: "सदस्यों की बातें", href: "#testimonials" },
    ],
    process: {
      eyebrow: "हमारी प्रक्रिया",
      title: "हम कैसे काम करते हैं",
      description:
        "गांव के उत्पादकों से ग्राहकों तक, हर कदम सावधानी, ईमानदारी और गुणवत्ता जांच के साथ पूरा किया जाता है।",
      steps: [
        "गांव से संग्रह",
        "प्रशिक्षण और पैकेजिंग",
        "गुणवत्ता जांच",
        "डिजिटल विपणन",
        "उचित मूल्य सहयोग",
      ],
    },
    categories: {
      eyebrow: "बंगाल की पारंपरिक संग्रह",
      title: "लोकप्रिय श्रेणियां",
      description:
        "ग्रामीण शिल्प, कृषि उत्पाद और हस्तनिर्मित वस्तुओं का चुना हुआ संग्रह।",
      heritage: "हेरिटेज कलेक्शन",
      price: "मूल्य",
      details: "विवरण",
      noProductsTitle: "उत्पाद उपलब्ध नहीं",
      noProductsText:
        "इस श्रेणी में अभी कोई उत्पाद उपलब्ध नहीं है। दूसरी श्रेणी देखें या बाद में आएं।",
      category: "श्रेणी",
      popularProduct: "लोकप्रिय उत्पाद",
      quantity: "मात्रा",
      descriptionTitle: "उत्पाद विवरण",
      readMore: "... और पढ़ें",
      readLess: "कम पढ़ें",
      orderWhatsApp: "WhatsApp पर ऑर्डर करें",
      memberDiscount: "५०% सदस्य छूट लागू",
      whatsappMessage: {
        intro: "मैं यह उत्पाद ऑर्डर करना चाहता/चाहती हूं।",
        product: "उत्पाद",
        price: "मूल्य",
        quantity: "मात्रा",
      },
      masters: [
        {
          id: "food",
          title: "खाद्य सामग्री",
          children: [
            { id: "rice", title: "धान और चावल" },
            { id: "lentils", title: "दाल" },
            { id: "oilandghee", title: "तेल और घी" },
            { id: "honey", title: "शहद" },
            { id: "pickleandkasundi", title: "अचार और कासुंदी" },
            { id: "sweetsandmorrobba", title: "मिठाई और मुरब्बा" },
          ],
        },
        {
          id: "drinks",
          title: "एनर्जी ड्रिंक्स और एंटीऑक्सीडेंट्स",
          children: [{ id: "tealeaves", title: "चाय पत्ती" }],
        },
      ],
      products: {
        rice: [
          {
            id: 1,
            name: "गोविंदभोग चावल",
            description:
              "सावधानीपूर्वक चुना गया हमारा गोविंदभोग चावल अपनी विशिष्ट सुगंध, मुलायम बनावट और उत्कृष्ट स्वाद के लिए प्रसिद्ध है। पल्ली बांग्लार ओइतिह्य संभार प्रीमियम गोविंदभोग चावल विश्वसनीय किसानों से प्राप्त किया जाता है और इसकी प्रामाणिक खुशबू, नरम बनावट तथा उच्च गुणवत्ता के लिए चुना जाता है। यह बंगाल की सबसे प्रिय पारंपरिक चावल किस्मों में से एक है और खिचड़ी, पायेश, पुलाव, दुर्गा पूजा के प्रसाद तथा अन्य उत्सवों के व्यंजनों के लिए आदर्श है। इसका नाम भगवान गोविंदजी को अर्पित भोग में इसके उपयोग से जुड़ा हुआ है।",
            price: "120",
            quantity: "1 किलो ",
            variants: [
              { quantity: "1 किलो ", price: "120" },
              { quantity: "2 किलो ", price: "240" },
              { quantity: "5 किलो ", price: "600" },
              { quantity: "10 किलो ", price: "1200" },
            ],
          },
          {
            id: 2,
            name: "दूधेश्वर",
            description:
              "पल्ली बांग्लार ओइतिह्य संभार प्रीमियम दूधेश्वर चावल। यह मुलायम और स्वादिष्ट चावल अपने महीन दानों और सुखद सुगंध के लिए जाना जाता है। दूधेश्वर चावल रोज़मर्रा के भोजन को यादगार अनुभव में बदल देता है। इसे विश्वसनीय किसान समुदायों से प्राप्त कर सर्वोत्तम गुणवत्ता, ताजगी और स्वाद के मानकों के अनुसार चुना जाता है।",
            price: "65",
            quantity: "1 किलो ",
            variants: [
              { quantity: "1 किलो ", price: "65" },
              { quantity: "2 किलो ", price: "130" },
              { quantity: "5 किलो ", price: "325" },
              { quantity: "10 किलो ", price: "650" },
            ],
          },
          {
            id: 3,
            name: "तुलाइपांजी",
            description:
              "उत्तर बंगाल की शाही सुगंध। पल्ली बांग्लार ओइतिह्य संभार प्रीमियम तुलाइपांजी चावल अपनी नाज़ुक खुशबू, पतले दानों और उत्कृष्ट स्वाद के लिए प्रसिद्ध है। यह बंगाल की सबसे मूल्यवान पारंपरिक चावल किस्मों में से एक है। ऐसा चावल घर लाएँ जो हर भोजन को एक विशेष अवसर बना दे।",
            price: "220",
            quantity: "1 किलो ",
            variants: [
              { quantity: "1 किलो ", price: "220" },
              { quantity: "2 किलो ", price: "440" },
              { quantity: "5 किलो ", price: "1100" },
              { quantity: "10 किलो ", price: "2200" },
            ],
          },
          {
            id: 4,
            name: "कालिजीरा / चिनीगुरा",
            description:
              "पल्ली बांग्लार ओइतिह्य संभार प्रीमियम कालिजीरा (चिनीगुरा) चावल एक उत्कृष्ट सुगंधित विरासत चावल है, जो अपने छोटे, पतले दानों और गहरी मीठी-मेवेदार खुशबू के लिए प्रसिद्ध है। इसे अक्सर 'चावलों का राजकुमार' या 'बेबी बासमती' कहा जाता है। यह पारंपरिक चावल ओडिशा और पश्चिम बंगाल की समृद्ध कृषि विरासत का हिस्सा है।",
            price: "130",
            quantity: "1 किलो ",
            variants: [
              { quantity: "1 किलो ", price: "130" },
              { quantity: "2 किलो ", price: "260" },
              { quantity: "5 किलो ", price: "650" },
              { quantity: "10 किलो ", price: "1300" },
            ],
          },
        ],
        lentils: [
          {
            id: 5,
            name: "सोना मूंग दाल",
            description:
              "सोना मूंग दाल - हर कटोरे में सुनहरी पौष्टिकता। प्रस्तुत है पल्ली बांग्लार ओइतिह्य संभार प्रीमियम सोना मूंग दाल। सावधानीपूर्वक चुनी गई, प्राकृतिक स्वाद से भरपूर और पूरे भारत की रसोइयों में पसंद की जाने वाली यह दाल हर भोजन में पौष्टिकता, शुद्ध स्वाद और पारंपरिक घरेलू भोजन का आनंद लेकर आती है।",
            price: "260",
            quantity: "1 किलो ",
            variants: [
              { quantity: "1 किलो ", price: "260" },
              { quantity: "2 किलो ", price: "520" },
              { quantity: "5 किलो ", price: "1300" },
              { quantity: "10 किलो ", price: "2600" },
            ],
          },
          {
            id: 6,
            name: "भुना कलाइ दाल",
            description:
              "पल्ली बांग्लार ओइतिह्य संभार प्रीमियम बेउली कलाइ दाल। बंगाली रसोई की एक प्रिय पारंपरिक दाल, हमारी बेउली कलाइ दाल को उसके प्रामाणिक स्वाद, समृद्ध बनावट और घर के बने भोजन की सुकूनभरी अनुभूति के लिए सावधानीपूर्वक चुना जाता है। हमारा मानना है कि उत्कृष्ट भोजन की शुरुआत उच्च गुणवत्ता वाली सामग्री से होती है। इसलिए हमारी बेउली कलाइ दाल विश्वसनीय किसानों से प्राप्त की जाती है, सावधानीपूर्वक संसाधित की जाती है और ताजगी, शुद्धता तथा निरंतर गुणवत्ता सुनिश्चित करने के लिए विशेष देखभाल के साथ पैक की जाती है।",
            price: "300",
            quantity: "1 किलो ",
            variants: [
              { quantity: "1 किलो ", price: "300" },
              { quantity: "2 किलो ", price: "600" },
              { quantity: "5 किलो ", price: "1500" },
              { quantity: "10 किलो ", price: "3000" },
            ],
          },
        ],
        oilandghee: [
          {
            id: 7,
            name: "सरसों का तेल",
            description:
              "कोल्ड-प्रेस्ड सरसों का तेल। पल्ली बांग्लार ओइतिह्य संभार में हमारा मानना है कि सर्वोत्तम तेल सबसे सरल और प्राकृतिक प्रक्रियाओं से प्राप्त होते हैं। इसलिए हम पारंपरिक कोल्ड-प्रेस निष्कर्षण विधि का उपयोग करते हैं, जिसमें सरसों के बीजों को बिना अत्यधिक गर्मी या रासायनिक शोधन के धीरे-धीरे दबाया जाता है। परिणामस्वरूप प्राप्त होता है प्राकृतिक सुगंध वाला तेल, जो हर भोजन में प्रामाणिकता, स्वाद और गुणवत्ता जोड़ता है। यह सरसों की प्राकृतिक तीक्ष्णता, सुगंध और पोषक तत्वों को बनाए रखता है। करी, तलने, अचार, तड़का और पारंपरिक मालिश के लिए आदर्श। आधुनिक परिवारों के लिए पारंपरिक शुद्धता का पुनर्जागरण।",
            price: "160",
            quantity: "1 लीटर",
            variants: [
              { quantity: "1 लीटर", price: "160" },
              { quantity: "2 लीटर", price: "320" },
              { quantity: "5 लीटर", price: "800" },
              { quantity: "10 लीटर", price: "1600" },
            ],
          },
          {
            id: 8,
            name: "घी",
            description:
              "शुद्ध गाय का घी - पारंपरिक तरीके से तैयार पोषण का खजाना। प्रस्तुत है पल्ली बांग्लार ओइतिह्य संभार गाय का घी, जो उच्च गुणवत्ता वाले गाय के दूध से बनाया जाता है और सावधानीपूर्वक तैयार किया जाता है ताकि आपके परिवार को प्रामाणिक स्वाद, समृद्ध सुगंध और भरपूर पोषण मिल सके।",
            price: "525",
            quantity: "1 किलो ",
            variants: [
              { quantity: "1 किलो ", price: "525" },
              { quantity: "2 किलो ", price: "1050" },
              { quantity: "5 किलो ", price: "2625" },
              { quantity: "10 किलो ", price: "5250" },
            ],
          },
        ],
        honey: [
          {
            id: 9,
            name: "शहद",
            description:
              "शुद्ध शहद। सीधे प्रकृति से। सावधानीपूर्वक एकत्रित किया गया और अपने सबसे शुद्ध रूप में प्रस्तुत किया गया हमारा शहद आपको समृद्ध स्वाद और प्राकृतिक पोषण का अनुभव कराता है। प्रकृति द्वारा रची गई मिठास का आनंद लें। हमारे शहद की हर बूंद चुनिंदा मधुमक्खी पालन केंद्रों से प्राप्त की जाती है, जिससे इसका प्राकृतिक स्वाद, सुगंध और पोषक तत्व सुरक्षित रहते हैं। यही गुण शहद को सदियों से एक मूल्यवान सुपरफूड बनाते हैं। पल्ली बांग्लार ओइतिह्य संभार में हमारा विश्वास है कि प्रकृति ही सबसे उत्तम मिठास का सृजन करती है।",
            price: "549",
            quantity: "1 लीटर",
            variants: [
              { quantity: "1 लीटर", price: "549" },
              { quantity: "2 लीटर", price: "1098" },
              { quantity: "5 लीटर", price: "2745" },
              { quantity: "10 लीटर", price: "5490" },
            ],
          },
        ],
        pickleandkasundi: [
          {
            id: 10,
            name: "कासुंदी",
            description:
              "आम और सरसों का बेहतरीन संगम। प्रस्तुत है पल्ली बांग्लार ओइतिह्य संभार आम कासुंदी। खट्टे कच्चे आम और सुगंधित सरसों के दानों का अनोखा मिश्रण, जो आपकी थाली में बंगाल का प्रामाणिक स्वाद लेकर आता है। चुने हुए कच्चे आम, उत्कृष्ट सरसों और पारंपरिक मसालों से तैयार हमारी आम कासुंदी खट्टेपन, तीखेपन और लाजवाब स्वाद का उत्तम संतुलन प्रदान करती है।",
            price: "50",
            quantity: "100 ग्राम",
            variants: [
              { quantity: "100 ग्राम", price: "50" },
              { quantity: "200 ग्राम", price: "100" },
              { quantity: "500 ग्राम", price: "250" },
            ],
          },
          {
            id: 11,
            name: "आम का अचार",
            description:
              "हर निवाले में परंपरा का स्वाद। प्रस्तुत है पल्ली बांग्लार ओइतिह्य संभार आम का अचार — ऐसा स्वाद जो घर की याद दिलाए। हाथ से चुने गए कच्चे आम, प्रामाणिक मसालों और पीढ़ियों से चली आ रही पारंपरिक विधियों से तैयार हमारा आम का अचार आपके भोजन में घर जैसा समृद्ध स्वाद जोड़ता है।",
            price: "99",
            quantity: "100 ग्राम",
            variants: [
              { quantity: "100 ग्राम", price: "99" },
              { quantity: "200 ग्राम", price: "198" },
              { quantity: "500 ग्राम", price: "495" },
            ],
          },
        ],
        sweetsandmorrobba: [
          {
            id: 12,
            name: "मुरब्बा",
            description:
              "कच्चे आम का मुरब्बा - मिठास और खट्टेपन का शानदार संगम। प्रस्तुत है पल्ली बांग्लार ओइतिह्य संभार प्रीमियम कच्चे आम का मुरब्बा। सावधानीपूर्वक चुने गए हरे कच्चे आमों और पारंपरिक विधियों से तैयार हमारा मुरब्बा मिठास, खट्टेपन और घर के बने स्वाद का उत्तम संतुलन प्रस्तुत करता है।",
            price: "75",
            quantity: "100 ग्राम",
            variants: [
              { quantity: "100 ग्राम", price: "75" },
              { quantity: "200 ग्राम", price: "150" },
              { quantity: "500 ग्राम", price: "375" },
            ],
          },
          {
            id: 13,
            name: "संदेश",
            description:
              "संदेश - हर निवाले में बंगाल की समृद्ध विरासत। प्रस्तुत है पल्ली बांग्लार ओइतिह्य संभार कोरा-पाकेर संदेश। धैर्य, परंपरा और श्रेष्ठ सामग्री से तैयार हमारा कोरा-पाकेर संदेश आपको बंगाल की सबसे प्रिय मिठाइयों में से एक का प्रामाणिक स्वाद प्रदान करता है।",
            price: "750",
            quantity: "50 पीस (25 प्रति पीस)",
            variants: [
              { quantity: "50 पीस (25 प्रति पीस)", price: "750" },
              { quantity: "50 पीस (35 प्रति पीस)", price: "1750" },
              { quantity: "50 पीस (50 प्रति पीस)", price: "2500" },
            ],
          },
          {
            id: 14,
            name: "रसगुल्ला",
            description:
              "रसगुल्ला - बंगाल की मीठी शान। प्रस्तुत है पल्ली बांग्लार ओइतिह्य संभार बंगाल का रसगुल्ला। मुलायम, स्पंजी और अत्यंत स्वादिष्ट हमारा रसगुल्ला पारंपरिक बंगाली मिठाई बनाने की कला से तैयार किया जाता है, जो पीढ़ियों से लोगों को आनंदित करता आया है।",
            price: "1000",
            quantity: "100 पीस (10 प्रति पीस)",
            variants: [
              { quantity: "100 पीस (10 प्रति पीस)", price: "1000" },
              { quantity: "100 पीस (15 प्रति पीस)", price: "1500" },
              { quantity: "100 पीस (20 प्रति पीस)", price: "2000" },
            ],
          },
        ],
        tealeaves: [
          {
            id: 15,
            name: "दार्जिलिंग चाय",
            description:
              "चाय की शैम्पेन के रूप में प्रसिद्ध दार्जिलिंग चाय एक प्रीमियम और भौगोलिक संकेतक (GI) से संरक्षित काली चाय है (कभी-कभी हरी या सफेद चाय भी), जो भारत के पश्चिम बंगाल में हिमालय की तलहटी के ऊँचे क्षेत्रों में उगाई जाती है। यह अपनी नाजुक पुष्प सुगंध और विशिष्ट मस्कटेल स्वाद के लिए विश्वभर में प्रसिद्ध है।",
            price: "350",
            quantity: "100 ग्राम",
            variants: [
              { quantity: "100 ग्राम", price: "350" },
              { quantity: "200 ग्राम", price: "700" },
              { quantity: "500 ग्राम", price: "1750" },
              { quantity: "1 किलो", price: "3500" },
            ],
          },
          {
            id: 16,
            name: "असम सीटीसी",
            description:
              "प्रस्तुत है पल्ली बांग्लार ओइतिह्य संभार असम सीटीसी (क्रश, टियर, कर्ल), जो रोज़मर्रा की भारतीय चाय के लिए स्वर्ण मानक माना जाता है। यांत्रिक प्रक्रिया से छोटे और घने दानों में तैयार की गई यह चाय गहरे रंग और माल्टयुक्त स्वाद वाली चाय बनाती है, जो दूध, चीनी और मसालों के साथ बेहतरीन मेल खाती है। इसमें कैफीन की मात्रा अधिक होती है और यह एंटीऑक्सीडेंट से भरपूर होती है।",
            price: "65",
            quantity: "100 ग्राम",
            variants: [
              { quantity: "100 ग्राम", price: "65" },
              { quantity: "200 ग्राम", price: "130" },
              { quantity: "500 ग्राम", price: "325" },
              { quantity: "1 किलो", price: "650" },
            ],
          },
          {
            id: 17,
            name: "हर्बल चाय",
            description:
              "प्रस्तुत है पल्ली बांग्लार ओइतिह्य संभार प्रीमियम हर्बल चाय। यह सूखी जड़ी-बूटियों, फूलों, फलों, मसालों या जड़ों को गर्म पानी में डालकर तैयार किया जाने वाला एक स्वास्थ्यवर्धक पेय है। पारंपरिक चाय (जैसे काली या हरी चाय) के विपरीत, यह कैमेलिया साइनेंसिस पौधे से नहीं बनाई जाती और स्वाभाविक रूप से कैफीन-मुक्त होती है।",
            price: "280",
            quantity: "100 ग्राम",
            variants: [
              { quantity: "100 ग्राम", price: "280" },
              { quantity: "200 ग्राम", price: "560" },
              { quantity: "500 ग्राम", price: "1400" },
              { quantity: "1 किलो", price: "2800" },
            ],
          },
          {
            id: 18,
            name: "ब्लू पी",
            description:
              "प्रस्तुत है पल्ली बांग्लार ओइतिह्य संभार प्रीमियम ब्लू पी पेय (जिसे बटरफ्लाई पी या अपराजिता भी कहा जाता है)। यह क्लिटोरिया टरनेटिया पौधे की पंखुड़ियों से तैयार किया गया एक आकर्षक हर्बल पेय है। अपने प्राकृतिक गहरे नीले रंग और रंग बदलने की अद्भुत विशेषता के लिए प्रसिद्ध, इसका स्वाद हल्का मिट्टी जैसा होता है और यह एंटीऑक्सीडेंट से भरपूर माना जाता है।",
            price: "499",
            quantity: "100 ग्राम",
            variants: [
              { quantity: "100 ग्राम", price: "499" },
              { quantity: "200 ग्राम", price: "998" },
              { quantity: "500 ग्राम", price: "2495" },
              { quantity: "1 किलो", price: "4990" },
            ],
          },
        ],
      },
    },
    whyChoose: {
      badge: "शुद्ध ग्रामीण उत्पाद",
      eyebrow: "हमें क्यों चुनें",
      title: "आपके परिवार के लिए शुद्ध और सुरक्षित उत्पाद",
      description:
        "हम गांव के किसानों और कारीगरों से सीधे प्राकृतिक और पारंपरिक उत्पाद लाते हैं, ताकि आपको भरोसेमंद गुणवत्ता और शुद्धता मिले।",
      features: [
        "किसानों और कारीगरों से सीधा संग्रह",
        "१००% प्राकृतिक और शुद्ध उत्पाद",
        "उचित मूल्य और उच्च गुणवत्ता",
        "पर्यावरण-अनुकूल पैकेजिंग",
        "ग्रामीण परंपरा का संरक्षण",
      ],
      stats: [
        { value: "100%", label: "प्राकृतिक उत्पाद" },
        { value: "500+", label: "संतुष्ट ग्राहक" },
        { value: "50+", label: "ग्रामीण सहयोगी" },
      ],
    },
    testimonials: {
      eyebrow: "सदस्यों के अनुभव",
      title: "हमारे सदस्यों की बातें",
      description: "हमारी सहकारी संस्था से जुड़े सदस्यों के वास्तविक अनुभव।",
      items: [
        {
          name: "अर्णब सेनगुप्ता",
          role: "कारीगर",
          text: "सहकारी संस्था के माध्यम से हमें अपने उत्पादों का सही मूल्य मिल रहा है।",
        },
        {
          name: "श्राबणी रॉय",
          role: "किसान",
          text: "अब गांव के उत्पाद आसानी से शहर तक पहुंच रहे हैं।",
        },
        {
          name: "देबज्योति बसु",
          role: "उद्यमी",
          text: "यह पहल गांव के लोगों का जीवन बदल रही है।",
        },
        {
          name: "सुब्रत घोष",
          role: "हस्तशिल्पी",
          text: "हमारे उत्पाद अब देश के अलग-अलग हिस्सों तक पहुंच रहे हैं।",
        },
      ],
    },
    footer: {
      description:
        "ग्रामीण बंगाल के पारंपरिक उत्पादों को दुनिया के सामने लाने की पहल।",
      quickLinks: "त्वरित लिंक",
      contact: "संपर्क",
      address: "कोलकाता, पश्चिम बंगाल",
      language: "भाषा",
      copyright: "© २०२६ पल्ली बंगला परंपरा संग्रह | सर्वाधिकार सुरक्षित",
    },
    membership: {
      welcome: "स्वागत है!",
      intro:
        "हमारे परिवार का हिस्सा बनें और बंगाल के असली पारंपरिक उत्पादों का आनंद लें।",
      discount: "५०% छूट",
      offerText:
        "सदस्य के रूप में पंजीकरण करें और अगले १ वर्ष तक सभी उत्पादों पर विशेष मूल्य पाएं।",
      benefits: [
        "सीमित समय का ऑफर",
        "सभी उत्पादों पर लागू",
        "१२ महीने की सुविधा",
      ],
      specialOffer: "विशेष सदस्य ऑफर",
      registerTitle: "सदस्यता पंजीकरण",
      registerSubtitle: "नीचे दी गई जानकारी भरें",
      mobileOfferText:
        "सदस्य बनकर अगले १ वर्ष तक सभी उत्पादों पर विशेष छूट और विशेष सुविधाएं पाएं।",
      mobileBenefits: [
        "सभी उत्पादों पर विशेष छूट",
        "१ वर्ष की सदस्य सुविधा",
        "नए ऑफर में प्राथमिकता",
        "तेज ऑर्डर स्वीकृति",
      ],
      fullName: "पूरा नाम",
      fullNamePlaceholder: "अपना पूरा नाम लिखें",
      phone: "फोन नंबर",
      phonePlaceholder: "+९१ XXXXXXXXXX",
      registerButton: "सदस्य के रूप में पंजीकरण करें",
      successButton: "पंजीकरण सफल हुआ!",
      successMessage: "आपकी सदस्यता सफलतापूर्वक सक्रिय हो गई है",
      secure: "सुरक्षित",
      verified: "सत्यापित",
      fastApproval: "तेज स्वीकृति",
      errors: {
        nameRequired: "पूरा नाम लिखें",
        nameLength: "नाम कम से कम ३ अक्षरों का होना चाहिए",
        nameInvalid: "केवल बंगाली या अंग्रेजी अक्षरों का उपयोग करें",
        phoneRequired: "फोन नंबर लिखें",
        phoneInvalid: "सही १० अंकों का भारतीय मोबाइल नंबर दें",
      },
    },
  },
} as const;

export type Translation = (typeof translations)[Language];
export type Product =
  (typeof translations)[Language]["categories"]["products"]["rice"][number];
export type ProductVariant = Product["variants"][number];
