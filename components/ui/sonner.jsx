"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={{
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      }}
      toastOptions={{
        classNames: {
          error:
            "group toast group-[.toaster]:bg-red-50 group-[.toaster]:text-red-600 group-[.toaster]:border-red-200 dark:group-[.toaster]:bg-red-950 dark:group-[.toaster]:text-red-400 dark:group-[.toaster]:border-red-800",
          success:
            "group toast group-[.toaster]:bg-green-50 group-[.toaster]:text-green-900 group-[.toaster]:border-green-200",
          warning:
            "group toast group-[.toaster]:bg-yellow-50 group-[.toaster]:text-yellow-900 group-[.toaster]:border-yellow-200",
          info: "group toast group-[.toaster]:bg-blue-50 group-[.toaster]:text-blue-900 group-[.toaster]:border-blue-200",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
