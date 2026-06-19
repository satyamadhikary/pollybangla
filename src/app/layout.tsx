import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { I18nProvider } from "@/components/I18nProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const dynamic = "force-dynamic";

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
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
