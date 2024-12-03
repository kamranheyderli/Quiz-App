"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { toggleTheme } from "@/store/features/theme/themeSlice";
import { SunIcon, MoonIcon } from "lucide-react";
import { cn } from "@/utils/cn";

const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => state.theme);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="flex items-center gap-2 w-[85px] h-[32px]" />;
  }

  return (
    <div className="flex items-center gap-2">
      <SunIcon
        className={cn("w-5 h-5", {
          "text-white": mode === "dark",
          "text-gray-800": mode !== "dark",
        })}
      />

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={mode === "dark"}
          onChange={() => dispatch(toggleTheme())}
          className="sr-only peer"
        />
        <div
          className={cn(
            "w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all",
            {
              "bg-purple-600": mode === "dark",
              "bg-gray-200": mode !== "dark",
            }
          )}
        ></div>
      </label>

      <MoonIcon
        className={cn("w-5 h-5", {
          "text-white": mode === "dark",
          "text-gray-800": mode !== "dark",
        })}
      />
    </div>
  );
};

export default ThemeToggle;
