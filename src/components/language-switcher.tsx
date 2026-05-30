"use client";
import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import Select from "react-select";
import type { SingleValue } from "react-select";

const COOKIE_NAME = "googtrans";

interface LanguageDescriptor {
  name: string;
  title: string;
}

interface TranslationConfig {
  languages: LanguageDescriptor[];
  defaultLanguage: string;
}

interface LanguageOption {
  value: string;
  label: string;
}

const INDIA_FLAG = "\uD83C\uDDEE\uD83C\uDDF3";

declare global {
  interface Window {
    __GOOGLE_TRANSLATION_CONFIG__?: TranslationConfig;
  }
}

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const cookies = parseCookies();
  const existingLanguageCookieValue = cookies[COOKIE_NAME];

  if (existingLanguageCookieValue) {
    const sp = existingLanguageCookieValue.split("/");
    if (sp.length > 2) {
      return sp[2];
    }
  }

  return window.__GOOGLE_TRANSLATION_CONFIG__?.defaultLanguage;
};

const getLanguageConfig = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  return window.__GOOGLE_TRANSLATION_CONFIG__;
}

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string | undefined>(
    getInitialLanguage
  );
  const languageConfig = getLanguageConfig();

  useEffect(() => {
    if (!currentLanguage) return;

    document.documentElement.dataset.language = currentLanguage;
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  // Map languages to react-select format
  const selectOptions = languageConfig.languages.map(
    (lang: LanguageDescriptor): LanguageOption => ({
      value: lang.name,
      label: lang.title,
    })
  );

  // Current selected language object
  const selectedOption = selectOptions.find(
    (opt) => opt.value === currentLanguage
  );

  const handleChange = (selected: SingleValue<LanguageOption>) => {
    if (!selected) return;
    setCurrentLanguage(selected.value);
    document.documentElement.dataset.language = selected.value;
    document.documentElement.lang = selected.value;
    setCookie(null, COOKIE_NAME, `/auto/${selected.value}`);
    window.location.reload();
  };

  return (
    <div className="text-center grid gap-4 notranslate">
      <Select
        options={selectOptions}
        value={selectedOption}
        onChange={handleChange}
        formatOptionLabel={(option: LanguageOption) => (
          <span className="flex items-center gap-2">
            <span aria-hidden="true">{INDIA_FLAG}</span>
            <span>{option.label}</span>
          </span>
        )}
        className="text-left cursor-pointer"
        classNamePrefix="react-select"
        isSearchable={false}
        styles={{
          singleValue: (provided) => ({
            ...provided,
            color: "#000000",
          }),
          option: (provided, state) => ({
            ...provided,
            cursor: "pointer",
            color: "#004910",
            backgroundColor: state.isFocused ? "#e6f4ea" : "white", // optional: light hover
          }),
          control: (provided, state) => ({
            ...provided,
            cursor: "pointer",
            boxShadow: state.isFocused
              ? "0 0 0 1px #004910"
              : provided.boxShadow,
            "&:hover": {
              borderColor: "#004910",
            },
          }),
        }}
      />
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
