"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="text-lg"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Icon icon="ph:sun" />
      ) : (
        <Icon icon="ri:moon-fill" />
      )}
    </button>
  );
};

export default ThemeToggle;
