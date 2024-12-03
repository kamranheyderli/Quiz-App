"use client";

import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import ThemeToggle from "./ThemeToggle";
import { useAppSelector } from "@/store/hook";
import Image from "next/image";
import { cn } from "@/utils/cn";

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const { mode } = useAppSelector((state) => state.theme);
  const [mounted, setMounted] = useState(false);
  const selectedSubject = useAppSelector((state) => state.quiz.selectedSubject);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getSubjectIcon = () => {
    if (!mounted) return null;

    const iconMap = {
      HTML: {
        src: "/icon/html.png",
        alt: "HTML icon",
      },
      CSS: {
        src: "/icon/css.png",
        alt: "CSS icon",
      },
      JavaScript: {
        src: "/icon/javascript.png",
        alt: "JavaScript icon",
      },
      Accessibility: {
        src: "/icon/accessibility.png",
        alt: "JavaScript icon",
      },
    };

    const iconInfo = iconMap[selectedSubject as keyof typeof iconMap];

    if (!iconInfo) return null;

    return (
      <div className={cn("w-10 h-10 relative mr-2")}>
        <Image
          src={iconInfo.src}
          alt={iconInfo.alt}
          fill
          sizes="40px"
          className="object-contain"
          priority={true}
        />
      </div>
    );
  };

  if (!mounted) return null;

  return (
    <AntHeader
      className={cn(
        "px-2 md:px-4 flex justify-between items-center fixed top-15 w-full md:w-[90%] z-10 border-b",
        {
          "bg-gray-900 border-gray-800": mode === "dark",
          "bg-gray-50 border-gray-200": mode !== "dark",
        }
      )}
    >
      <h1
        className={cn("text-xl font-bold ml-1 flex items-center", {
          "text-white": mode === "dark",
          "text-gray-900": mode !== "dark",
        })}
      >
        {getSubjectIcon()}
        {selectedSubject}
      </h1>
      <ThemeToggle />
    </AntHeader>
  );
};

export default Header;
