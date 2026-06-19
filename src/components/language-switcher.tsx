"use client";

import Select from "react-select";
import type { SingleValue } from "react-select";
import { languages, type Language } from "@/lib/i18n";
import { useI18n } from "./I18nProvider";

interface LanguageOption {
  value: Language;
  label: string;
}

const INDIA_FLAG = "\uD83C\uDDEE\uD83C\uDDF3";

const selectOptions: LanguageOption[] = languages.map((language) => ({
  value: language.code,
  label: language.label,
}));

const LanguageSwitcher = () => {
  const { language, setLanguage } = useI18n();

  const selectedOption = selectOptions.find((option) => option.value === language);

  const handleChange = (selected: SingleValue<LanguageOption>) => {
    if (!selected) return;
    setLanguage(selected.value);
  };

  return (
    <div className="text-center grid gap-4">
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
            backgroundColor: state.isFocused ? "#e6f4ea" : "white",
          }),
          control: (provided, state) => ({
            ...provided,
            cursor: "pointer",
            boxShadow: state.isFocused ? "0 0 0 1px #004910" : provided.boxShadow,
            "&:hover": {
              borderColor: "#004910",
            },
          }),
        }}
      />
    </div>
  );
};

export { LanguageSwitcher };
