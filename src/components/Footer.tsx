"use client";

import Image from "next/image";
import { LanguageSwitcher } from "./language-switcher";
import { useI18n } from "./I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-16" style={{ background: "#17331b", color: "white" }}>
      <div className="max-w-7xl mx-auto px-4 py-16 pb-0">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="col-span-1">
            <div className="flex gap-3 items-center">
              <Image
                src="/footerlogo.png"
                alt="logo"
                width={100}
                height={100}
                className="object-contain"
              />
              <h2 className="text-3xl font-bold leading-tight capitalize">
                {t.brand}
              </h2>
            </div>

            <p className="mt-5 text-gray-300 leading-8">
              {t.footer.description}
            </p>
          </div>

          <div className="col-span-2 flex md:flex-row flex-col justify-end md:gap-20 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-5 capitalize">
                {t.footer.quickLinks}
              </h3>

              <div className="flex flex-col gap-3 text-gray-300 ">
                {t.nav.map((item, index) => (
                  <a key={index} href={item.href} className="text-left hover:text-white transition-colors hover:underline underline-offset-4">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-5 capitalize">
                {t.footer.contact}
              </h3>

              <div className="space-y-3 text-gray-300">
                <p>
                  <a
                    href={`https://maps.app.goo.gl/h9v3buHQRYw2cZbT9`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors hover:underline underline-offset-4"
                  >
                    {t.footer.address}
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+919831927957"
                    className="hover:text-white transition-colors hover:underline underline-offset-4"
                    data-gtm-element="footer-phone-link"
                    data-analytics-label="phone_click"
                  >
                    +91 98319 27957
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:contact@pallibanglaroitihyasambhar.in"
                    className="hover:text-white transition-colors hover:underline underline-offset-4"
                    data-gtm-element="footer-email-link"
                    data-analytics-label="email_click"
                  >
                    contact@pallibanglaroitihyasambhar.in
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-5 capitalize">
                {t.footer.language}
              </h3>

              <div className="space-y-3 text-gray-300">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-14 py-8 border-t text-center text-gray-300"
          style={{ borderColor: "rgba(255,255,255,0.2)" }}
        >
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
