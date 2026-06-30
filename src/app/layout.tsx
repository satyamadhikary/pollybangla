import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { I18nProvider } from "@/components/I18nProvider";
import { Metadata } from "next";
import { DynamicTitle } from "@/components/ui/DynamicTitle";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "পল্লী বাংলার ঐতিহ্য সম্ভার",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      data-language="bn"
      className={roboto.variable}
      suppressHydrationWarning
    >
      <body>
        <I18nProvider>
          <DynamicTitle />
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
