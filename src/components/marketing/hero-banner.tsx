import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { Facebook, Linkedin } from "lucide-react";
import LatestProduct from "./latest-product";
import Link from "next/link";
import { badgeVariants } from "../ui/badge";

const HeroBanner = () => {
  return (
    <div className="w-full relative overflow-hidden py-[calc(2*var(--header-height))]">
      <div className="circle__wrapper">
        <div className={cn("left-0")}></div>
        <div className={cn("right-0")}></div>
      </div>
      {/* Content */}
      <div className="flex flex-col justify-center items-center">
        {/* Big words */}
        <h2 className="big_word_name  border-dash-top border-dash-bottom fade-in py-8 w-full">
          Peter Le - A Software Engineer
          <div className=" border-dash-left " />
          <div className="border-dash-right " />
        </h2>
        {/* Content */}
        <h4 className="text-[1.8vw] relative text-zinc-500 dark:text-zinc-200 fade-in text-center light border-dash-bottom w-full py-6 leading-12">
          <div className=" border-dash-left" />
          <div className="border-dash-right" />

          <span>
            Do your best, and let the world do the rest 🚀
            <br />
            If the world doesn't do the rest, do it yourself.
          </span>
        </h4>
        <div className="flex flex-col relative gap-4 py-6 border-dash-bottom w-full justify-center fade-in items-center">
          <div className=" border-dash-left" />
          <div className="border-dash-right" />
          <Button className="px-8 py-6 text-base tracking-widest w-1/5 bg-[#EF4444] text-white">
            Peter's Products
          </Button>

          {/* Social media */}
          {/* <div className="flex flex-row items-center">
            <span>Contact me on:</span>
            <Button variant="ghost">
              <Linkedin strokeWidth={1} />
            </Button>
            <Button variant="ghost">
              <Facebook strokeWidth={1} />
            </Button>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-foreground">Inspiring by: &nbsp;</span>
            <Link
              className={badgeVariants({ variant: "destructive" })}
              href="https://www.imkhoi.com/"
              target="_blank"
            >
              khoiuna
            </Link>
          </div> */}
        </div>
        {/* over part */}
        <div className="relative w-full h-full  py-6 border-dash-bottom">
          {/* <div className=" border-dash-left" />
          <div className="border-dash-right" /> */}
          <LatestProduct />
        </div>
      </div>
      {/* Latest Products */}
    </div>
  );
};

export default HeroBanner;
