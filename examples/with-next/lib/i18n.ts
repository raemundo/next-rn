import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import AsyncStorageBackend from "i18next-async-storage-backend";
import resources from "../public/locales";

i18n

  // passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    resources,
    // fallbackLng: "en",

    defaultNS: "common",
    lng: "en",
    interpolation: {
      // react already safes from xss
      escapeValue: false,
    },
    // ... your i18next config
    // backend: {
    //   backends: [
    //     AsyncStorageBackend,
    //     //HttpBackend
    //   ],
    //   backendOptions: [
    //     {
    //       expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
    //     },
    //     {
    //       loadPath: "@root/public/themes/ciiima/locales/{{lng}}/{{ns}}.json",
    //     },
    //   ],
    // },
  });
export default i18n;