import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import {  pathnames,i18AppConfig } from "./lib/i18tsConfig";

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: i18AppConfig.locales,
    pathnames: pathnames,
    localePrefix: i18AppConfig.localePrefix,
  });
