import "react-i18next";
import enNS from "../../../public/i18n/translations/en.json";
import faNS from "../../../public/i18n/translations/fa.json";

// react-i18next versions higher than 11.11.0
declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "enNS";
    resources: {
      enNS: typeof enNS;
      faNS: typeof faNS;
    };
  }
}