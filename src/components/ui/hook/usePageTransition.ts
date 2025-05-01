"use client";

import { useState } from "react";
import { useTransitionRouter } from "next-view-transitions";

export function usePageTransition() {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useTransitionRouter();

  const slideInOut = () => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0.2, transform: "translateY(-85%)" },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  const navigateWithTransition = (path: string) => {
    if (isAnimating) return;

    setIsAnimating(true);

    const pushRoute = () => {
      router.push(path, {
        onTransitionReady: slideInOut,
      });
    };

   
      pushRoute();
 

    setTimeout(() => setIsAnimating(false), 1500);
  };

  return {
    navigateWithTransition,
    isAnimating,
  };
}
