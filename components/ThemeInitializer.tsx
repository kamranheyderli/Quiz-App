"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hook";
import { setTheme } from "@/store/features/theme/themeSlice";
import Cookies from "js-cookie";

export default function ThemeInitializer() {
  const dispatch = useAppDispatch();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedTheme = (Cookies.get("theme") as "light" | "dark") || "light";
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch, isClient]);

  return null;
}
