"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, theme } = useTheme();
  React.useEffect(() => {
    setMounted(true);
  }, []);
  console.log("theme");
  console.log(theme);
  if (!mounted) {
    return null;
  }
  return (
    <div className="flex w-20 border rounded-full p-3 justify-between">
      <Moon
        onClick={() => setTheme("dark")}
        className={cn(
          "cursor-pointer rounded-full   h-[1.2rem] w-[1.2rem] rotate-90 transition-all",
          theme === "dark" ? "bg-zinc-400 bg-opacity-50 scale-125 rotate-0" : ""
        )}
        fill={theme === "dark" ? "#fff" : "none"}
      />
      <Sun
        onClick={() => setTheme("light")}
        className={cn(
          "cursor-pointer rounded-full h-[1.2rem]  w-[1.2rem] rotate-90 transition-all ",
          theme === "dark" ? "" : "bg-zinc-400 bg-opacity-50 scale-125 rotate-0"
        )}
        fill={theme === "dark" ? "none" : "#fff"}
      />
    </div>
  );
};

export default ThemeSwitcher;
