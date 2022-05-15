import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import en from "./en/translation.json";

export const resources = {
  en,
} as const;

i18next.use(initReactI18next).init({
  lng: "en",
  resources,
});
