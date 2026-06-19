export const languages = [
  { code: "bn", label: "বাংলা" },
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
] as const;

export type Language = (typeof languages)[number]["code"];

export const defaultLanguage: Language = "bn";

export const isLanguage = (value: string | null | undefined): value is Language =>
  languages.some((language) => language.code === value);

const productImages = {
  rice: "/Premium Nazirshail Rice.webp",
  fallback: "/hero.png",
};

export const translateNumber = (value: string | number, language: Language) => {
  const digitSets: Record<Language, string> = {
    bn: "০১২৩৪৫৬৭৮৯",
    en: "0123456789",
    hi: "०१२३४५६७८९",
  };

  return value.toString().replace(/\d/g, (digit) => digitSets[language][Number(digit)]);
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
      description: "গ্রামীণ শিল্প, কৃষিপণ্য ও হস্তশিল্পের সেরা সংগ্রহ এক জায়গায়।",
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
            { id: "oil", title: "তেল" },
            { id: "pickle", title: "আচার" },
            { id: "kasundi", title: "কাসুন্দি" },
            { id: "sweets", title: "মিষ্টি" },
          ],
        },
        {
          id: "textiles",
          title: "পোশাক ও বয়নসামগ্রী",
          children: [{ id: "saree", title: "শাড়ি" }],
        },
        {
          id: "metal",
          title: "ধাতব সামগ্রী",
          children: [{ id: "utensils", title: "বাসনপত্র" }],
        },
      ],
      products: {
        rice: [
          {
            id: 1,
            name: "গোবিন্দভোগ চাল",
            description:
              "সযত্নে সংগ্রহ করা এবং নিখুঁতভাবে নির্বাচিত, আমাদের গোবিন্দভোগ চাল তার স্বতন্ত্র সুগন্ধ, কোমল গঠন এবং অনন্য রন্ধন অভিজ্ঞতার জন্য সুপরিচিত। পল্লী বাংলার ঐতিহ্য সম্ভার প্রিমিয়াম গোবিন্দভোগ চাল বিশ্বস্ত কৃষিখামার থেকে যত্নসহকারে সংগ্রহ করা হয় এবং এর খাঁটি সুবাস, নরম দানার গঠন ও উৎকৃষ্ট মান নিশ্চিত করে বাছাই করা হয়। বাংলার অন্যতম প্রিয় ও ঐতিহ্যবাহী চালের জাত হিসেবে পরিচিত এই গোবিন্দভোগ চাল খিচুড়ি, পায়েস, পোলাও, দুর্গাপূজার প্রসাদ এবং বিভিন্ন উৎসবের বিশেষ খাবার প্রস্তুতের জন্য আদর্শ। এর নামকরণ হয়েছে শ্রী গোবিন্দজীর উদ্দেশ্যে নিবেদিত ভোগ বা প্রসাদ তৈরির প্রধান উপাদান হিসেবে এর ব্যবহারের কারণে। এছাড়াও, এটি বাঙালির উৎসবমুখর এবং ঘরোয়া ঐতিহ্যবাহী খাদ্যসংস্কৃতির সঙ্গে গভীরভাবে জড়িত।",
            price: "85",
            quantity: "1 কেজি",
            img: productImages.rice,
          },
          {
            id: 2,
            name: "মিনিকেট চাল (নতুন)",
            description: "উন্নত মানের মিনিকেট চাল যা প্রতিদিনের ব্যবহারের জন্য আদর্শ।",
            price: "72",
            quantity: "1 কেজি",
            img: productImages.fallback,
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
        { name: "অর্ণব সেনগুপ্ত", role: "কারিগর", text: "সমবায়ের মাধ্যমে আমরা আমাদের পণ্যের সঠিক মূল্য পাচ্ছি।" },
        { name: "শ্রাবণী রায়", role: "কৃষক", text: "এখন গ্রামের পণ্য শহরে সহজেই পৌঁছাচ্ছে।" },
        { name: "দেবজ্যোতি বসু", role: "উদ্যোক্তা", text: "এই উদ্যোগ গ্রামের মানুষের জীবন পরিবর্তন করছে।" },
        { name: "সুব্রত ঘোষ", role: "হস্তশিল্পী", text: "আমাদের পণ্য এখন দেশের বিভিন্ন প্রান্তে পৌঁছাচ্ছে।" },
      ],
    },
    footer: {
      description: "গ্রাম বাংলার ঐতিহ্যবাহী পণ্যকে বিশ্বের সামনে তুলে ধরার উদ্যোগ।",
      quickLinks: "দ্রুত লিংক",
      contact: "যোগাযোগ",
      address: "কলকাতা, পশ্চিমবঙ্গ",
      language: "ভাষা",
      copyright: "© ২০২৬ পল্লী বাংলার ঐতিহ্য সম্ভার | সর্বস্বত্ব সংরক্ষিত",
    },
    membership: {
      welcome: "স্বাগতম!",
      intro: "আমাদের পরিবারের অংশ হয়ে উঠুন এবং উপভোগ করুন বাংলার আসল ঐতিহ্যবাহী পণ্যসমূহ।",
      discount: "৫০% ছাড়",
      offerText: "সদস্য হিসেবে নিবন্ধন করুন এবং পরবর্তী ১ বছর সমস্ত পণ্যে বিশেষ মূল্যছাড় পান।",
      benefits: ["সীমিত সময়ের অফার", "সকল পণ্যে প্রযোজ্য", "১২ মাস মেয়াদী সুবিধা"],
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
      description: "From village producers to customers, every step is handled with care, honesty, and quality checks.",
      steps: ["Collected from Villages", "Training and Packaging", "Quality Verification", "Digital Marketing", "Fair Price Support"],
    },
    categories: {
      eyebrow: "Traditional Bengal Collection",
      title: "Popular Categories",
      description: "A curated collection of rural crafts, farm products, and handmade goods.",
      heritage: "Heritage Collection",
      price: "Price",
      details: "Details",
      noProductsTitle: "No products available",
      noProductsText: "There are no products in this category yet. Check another category or visit again later.",
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
            { id: "oil", title: "Oil" },
            { id: "pickle", title: "Pickle" },
            { id: "kasundi", title: "Kasundi" },
            { id: "sweets", title: "Sweets" },
          ],
        },
        { id: "textiles", title: "Clothing and Textiles", children: [{ id: "saree", title: "Saree" }] },
        { id: "metal", title: "Metal Goods", children: [{ id: "utensils", title: "Utensils" }] },
      ],
      products: {
        rice: [
          {
            id: 1,
            name: "Gobindobhog Rice",
            description:
              "Carefully sourced and meticulously selected, our Gobindobhog Rice is known for its distinctive fragrance, delicate texture, and exceptional culinary experience. Palli Banglar Oitihya Sambhar Premium Gobindobhog Rice is carefully sourced from trusted farms and selected for its authentic aroma, soft texture, and exceptional quality. Known as one of Bengal's most cherished rice varieties, Gobindobhog Rice is ideal for traditional dishes such as khichuri, payesh, pulao served as prasadam during Durga Puja and festive preparations. It derives its name from its usage as the principal ingredient in the preparation of the offerings to Govindaji. Also it is closely associated with festive and comfort foods.",
            price: "85",
            quantity: "1 kg",
            img: productImages.rice,
          },
          {
            id: 2,
            name: "Miniket Rice (New)",
            description: "Premium Miniket rice suitable for everyday cooking.",
            price: "72",
            quantity: "1 kg",
            img: productImages.fallback,
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
      description: "Real experiences from members connected with our cooperative.",
      items: [
        { name: "Arnab Sengupta", role: "Artisan", text: "Through the cooperative, we are getting the right value for our products." },
        { name: "Shrabani Roy", role: "Farmer", text: "Village products are now reaching the city easily." },
        { name: "Debajyoti Basu", role: "Entrepreneur", text: "This initiative is changing the lives of village communities." },
        { name: "Subrata Ghosh", role: "Handicraft Artist", text: "Our products are now reaching different parts of the country." },
      ],
    },
    footer: {
      description: "An initiative to bring traditional products from rural Bengal to the world.",
      quickLinks: "Quick Links",
      contact: "Contact",
      address: "Kolkata, West Bengal",
      language: "Language",
      copyright: "© 2026 Polli Banglar Oitijhya Sambhar | All rights reserved",
    },
    membership: {
      welcome: "Welcome!",
      intro: "Become part of our family and enjoy authentic traditional products from Bengal.",
      discount: "50% Off",
      offerText: "Register as a member and get special pricing on all products for the next 1 year.",
      benefits: ["Limited-time offer", "Applicable on all products", "12-month benefit"],
      specialOffer: "Special Member Offer",
      registerTitle: "Membership Registration",
      registerSubtitle: "Fill in the details below",
      mobileOfferText: "Join as a member to receive special discounts on all products and exclusive benefits for the next 1 year.",
      mobileBenefits: ["Special discount on all products", "1 year of member benefits", "Priority for new offers", "Faster order approval"],
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
      description: "गांव के उत्पादकों से ग्राहकों तक, हर कदम सावधानी, ईमानदारी और गुणवत्ता जांच के साथ पूरा किया जाता है।",
      steps: ["गांव से संग्रह", "प्रशिक्षण और पैकेजिंग", "गुणवत्ता जांच", "डिजिटल विपणन", "उचित मूल्य सहयोग"],
    },
    categories: {
      eyebrow: "बंगाल की पारंपरिक संग्रह",
      title: "लोकप्रिय श्रेणियां",
      description: "ग्रामीण शिल्प, कृषि उत्पाद और हस्तनिर्मित वस्तुओं का चुना हुआ संग्रह।",
      heritage: "हेरिटेज कलेक्शन",
      price: "मूल्य",
      details: "विवरण",
      noProductsTitle: "उत्पाद उपलब्ध नहीं",
      noProductsText: "इस श्रेणी में अभी कोई उत्पाद उपलब्ध नहीं है। दूसरी श्रेणी देखें या बाद में आएं।",
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
            { id: "oil", title: "तेल" },
            { id: "pickle", title: "अचार" },
            { id: "kasundi", title: "कासुंदी" },
            { id: "sweets", title: "मिठाई" },
          ],
        },
        { id: "textiles", title: "कपड़े और वस्त्र", children: [{ id: "saree", title: "साड़ी" }] },
        { id: "metal", title: "धातु सामग्री", children: [{ id: "utensils", title: "बर्तन" }] },
      ],
      products: {
        rice: [
          {
            id: 1,
            name: "गोबिंदोभोग चावल",
            description:
              "सावधानीपूर्वक प्राप्त और बारीकी से चुना गया, हमारा गोबिंदभोग चावल अपनी विशिष्ट सुगंध, मुलायम बनावट और उत्कृष्ट पाक अनुभव के लिए प्रसिद्ध है। पल्ली बांग्लार ओइतिह्य सम्भार प्रीमियम गोबिंदभोग चावल विश्वसनीय खेतों से सावधानीपूर्वक प्राप्त किया जाता है और इसकी प्रामाणिक सुगंध, कोमल बनावट तथा उत्कृष्ट गुणवत्ता के लिए चुना जाता है। बंगाल की सबसे प्रिय और पारंपरिक चावल की किस्मों में से एक, गोबिंदभोग चावल खिचड़ी, खीर, पुलाव, दुर्गा पूजा के प्रसाद तथा अन्य त्योहारों के विशेष व्यंजनों के लिए आदर्श माना जाता है। इसका नाम भगवान गोविंदजी को अर्पित किए जाने वाले भोग (प्रसाद) की तैयारी में इसके प्रमुख घटक के रूप में उपयोग किए जाने के कारण पड़ा है। इसके अतिरिक्त, यह त्योहारों और पारंपरिक घरेलू व्यंजनों से गहराई से जुड़ा हुआ है और बंगाल की समृद्ध पाक विरासत का एक अभिन्न हिस्सा है।",
            price: "85",
            quantity: "1 किग्रा",
            img: productImages.rice,
          },
          {
            id: 2,
            name: "मिनिकेट चावल (नया)",
            description: "रोजमर्रा के उपयोग के लिए उपयुक्त उच्च गुणवत्ता वाला मिनिकेट चावल।",
            price: "72",
            quantity: "1 किग्रा",
            img: productImages.fallback,
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
        { name: "अर्णब सेनगुप्ता", role: "कारीगर", text: "सहकारी संस्था के माध्यम से हमें अपने उत्पादों का सही मूल्य मिल रहा है।" },
        { name: "श्राबणी रॉय", role: "किसान", text: "अब गांव के उत्पाद आसानी से शहर तक पहुंच रहे हैं।" },
        { name: "देबज्योति बसु", role: "उद्यमी", text: "यह पहल गांव के लोगों का जीवन बदल रही है।" },
        { name: "सुब्रत घोष", role: "हस्तशिल्पी", text: "हमारे उत्पाद अब देश के अलग-अलग हिस्सों तक पहुंच रहे हैं।" },
      ],
    },
    footer: {
      description: "ग्रामीण बंगाल के पारंपरिक उत्पादों को दुनिया के सामने लाने की पहल।",
      quickLinks: "त्वरित लिंक",
      contact: "संपर्क",
      address: "कोलकाता, पश्चिम बंगाल",
      language: "भाषा",
      copyright: "© २०२६ पल्ली बंगला परंपरा संग्रह | सर्वाधिकार सुरक्षित",
    },
    membership: {
      welcome: "स्वागत है!",
      intro: "हमारे परिवार का हिस्सा बनें और बंगाल के असली पारंपरिक उत्पादों का आनंद लें।",
      discount: "५०% छूट",
      offerText: "सदस्य के रूप में पंजीकरण करें और अगले १ वर्ष तक सभी उत्पादों पर विशेष मूल्य पाएं।",
      benefits: ["सीमित समय का ऑफर", "सभी उत्पादों पर लागू", "१२ महीने की सुविधा"],
      specialOffer: "विशेष सदस्य ऑफर",
      registerTitle: "सदस्यता पंजीकरण",
      registerSubtitle: "नीचे दी गई जानकारी भरें",
      mobileOfferText: "सदस्य बनकर अगले १ वर्ष तक सभी उत्पादों पर विशेष छूट और विशेष सुविधाएं पाएं।",
      mobileBenefits: ["सभी उत्पादों पर विशेष छूट", "१ वर्ष की सदस्य सुविधा", "नए ऑफर में प्राथमिकता", "तेज ऑर्डर स्वीकृति"],
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
export type Product = (typeof translations)[Language]["categories"]["products"]["rice"][number];
