import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { i18AppConfig } from "./i18tsConfig";

// Can be imported from a shared config

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!i18AppConfig.locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
