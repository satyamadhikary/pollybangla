import Script from "next/script";
import "./globals.css";

export const dynamic = "force-dynamic";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head />
      <body>
        {children}

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
