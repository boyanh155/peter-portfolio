const locales = ["en", "vi"] as const;

const localePrefix: any = "always";

export const pathnames = {
  "/": "/",
  "/home": {
    vi: "/trang-chu",
    en: "/home",
  },
  "/about": {
    vi: "/gioi-thieu",
    en: "/about",
  },
};
export const i18AppConfig: {
  locales: typeof locales;
  localePrefix: any;
  defaultLocale: (typeof locales)[number];
  name: string;
} = {
  locales,
  localePrefix,
  defaultLocale: "en",
  name: "locle-2001",
};
