"use client"
import { useEffect } from "react";

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized?: boolean;
      init: () => void;
    };
  }
}

export default function UnicornEmbed() {
  useEffect(() => {
    const loadUnicornStudio = () => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.19/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.body.appendChild(script);
    };

    if (typeof window !== "undefined") {
      if (!window.UnicornStudio) {
        loadUnicornStudio();
      } else if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    }
  }, []);

  return (
    <>
    <div
    className="hidden md:flex"
      data-us-project="MeGwTn9uXVG9ubQbb0JY"
      style={{ width: "100%", height: "550px" }}
    />
    <div
    className="flex md:hidden"
      data-us-project="MeGwTn9uXVG9ubQbb0JY"
      style={{ width: "100%", height: "400px" }}
    />
    </>
  );
}
