"use client";

import { useEffect } from "react";
import { useI18n } from "@/components/I18nProvider"; // Adjust path to your provider

export function DynamicTitle() {
  const { t } = useI18n();

  useEffect(() => {
    // Replace 'pageTitle' with the actual key in your translation dictionary
    if (t.brand) {
      document.title = t.brand;
    }
  }, [t]);

  return null; // This is an invisible utility component
}