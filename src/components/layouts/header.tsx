import React from "react";
import LocaleSwitcher from "../LocaleSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";
import { Home, LayoutGrid, Paperclip } from "lucide-react";
import { Button } from "../ui/button";

type Props = {};

const apps = [
  {
    name: "Project",
    url: "/projects",
    ui: <LayoutGrid strokeWidth={1} className="h-4 w-4" />,
  },
  {
    name: "Resume",
    url: "/resume",
    ui: <Paperclip strokeWidth={1} className="h-4 w-4" />,
  },
];

const Header = (props: Props) => {
  return (
    <div className="flex flex-row w-full items-center justify-between px-8 pt-6 absolute top-0 left-0 z-50">
      <div className="basis-3/4 flex flex-row gap-4">
        <div className=" bg-red-500 rounded-full h-14 w-14 flex items-center justify-center">
          Logo
        </div>
        <div className="flex flex-row space-x-2 items-center flex-grow">
          {apps.map((app) => (
            <Button
              className="hover:opacity-60 transition-all p-0 w-28"
              variant="ghost"
              key={app.name}
            >
              <div className="flex items-center gap-2">
                <div>{app.ui}</div>
                <div>{app.name}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-grow space-x-2 justify-end">
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default Header;
