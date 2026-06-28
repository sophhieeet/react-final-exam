import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionary } from "../data/dictionary";
import { readStorage, writeStorage } from "../utils/storage";

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("sophiko-theme") || "light");
  const [language, setLanguage] = useState(localStorage.getItem("sophiko-language") || "ka");
  const [savedCountries, setSavedCountries] = useState(() => readStorage("sophiko-saved-countries", []));

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("sophiko-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("sophiko-language", language);
  }, [language]);

  useEffect(() => {
    writeStorage("sophiko-saved-countries", savedCountries);
  }, [savedCountries]);

  const text = dictionary[language];

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));
  const toggleLanguage = () => setLanguage((current) => (current === "ka" ? "en" : "ka"));

  const isSaved = (countryCode) => savedCountries.some((country) => country.cca3 === countryCode);

  const toggleSavedCountry = (country) => {
    setSavedCountries((current) => {
      const exists = current.some((item) => item.cca3 === country.cca3);
      if (exists) return current.filter((item) => item.cca3 !== country.cca3);
      return [...current, country];
    });
  };

  const clearSavedCountries = () => setSavedCountries([]);

  const value = useMemo(
    () => ({
      theme,
      language,
      text,
      savedCountries,
      toggleTheme,
      toggleLanguage,
      isSaved,
      toggleSavedCountry,
      clearSavedCountries
    }),
    [theme, language, savedCountries]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  return useContext(SettingsContext);
}
