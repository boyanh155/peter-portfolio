"use client";

import React, { useTransition } from "react";

import enFlag from "@/assets/intl-flags/en-flag.svg";
import viFlag from "@/assets/intl-flags/vi-flag.svg";
import Image from "next/image";
import { useLocale } from "next-intl";

import { useParams, useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/navigation";

type Props = {};

const localeOptions = [
  {
    value: "vi",
    item: "en",
    label: (
      <Image priority src={viFlag} alt="VI flag" width={100} height={100} />
    ),
  },
  {
    value: "en",

    item: "vi",
    label: (
      <Image priority src={enFlag} alt="EN flag" width={100} height={100} />
    ),
  },
];

const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [_, startTransition] = useTransition();
  const params = useParams();

function onSelectChange(event: React.MouseEvent<HTMLDivElement>) {
    const nextLocale = event.currentTarget.getAttribute("data-value");

    startTransition(() => {
      router.replace(
        {
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.
          // @ts-expect-error -- TypeScript will validate that only known `params`
          pathname: pathName + "?" + searchParams.toString(),
          params,
        },
        {
          locale: nextLocale || "en",
        }
      );
    });
  }
  return (
    // <div className="relative content-container">
    <div className="top-6 right-6 w-6 h-6">
      {localeOptions.map((option, index) => {
        return locale.split("/").includes(option.item) ? (
          <div
            className="list-none cursor-pointer hover:opacity-60 transition-all"
            key={index}
            data-value={option.value}
            onClick={onSelectChange}
          >
            {option.label}
          </div>
        ) : null;
      })}
      {/* </div> */}
    </div>
  );
};

export default LocaleSwitcher;
