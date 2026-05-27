import Script from "next/script";
import { Roboto } from "next/font/google";
import "./globals.css";

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
    <html lang="bn" data-language="bn" className={roboto.variable}>
      <head />
      <body>
        {children}

        <Script id="active-language" strategy="beforeInteractive">
          {`
            (function () {
              function getLanguageFromCookie() {
                var match = document.cookie.match(/(?:^|; )googtrans=([^;]+)/);

                if (match) {
                  var parts = decodeURIComponent(match[1]).split("/");
                  if (parts.length > 2 && parts[2]) {
                    return parts[2];
                  }
                }

                return "";
              }

              function setActiveLanguage() {
                var language = getLanguageFromCookie() || document.documentElement.lang || "bn";

                document.documentElement.dataset.language = language;
                document.documentElement.lang = language;
              }

              setActiveLanguage();
              window.addEventListener("load", setActiveLanguage);
              window.addEventListener("focus", setActiveLanguage);
              setInterval(setActiveLanguage, 500);
            })();
          `}
        </Script>
        <Script id="gtranslate-settings" strategy="beforeInteractive">
          {`
            window.gtranslateSettings = {
              default_language: "bn",
              languages: ["bn", "en", "hi"],
              wrapper_selector: ".gtranslate_wrapper",
              flag_size: 24,
              switcher_horizontal_position: "inline"
            };
          `}
        </Script>
        <Script
          src="https://cdn.gtranslate.net/widgets/latest/dwf.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
