"use client";
import "./index.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import Image from "next/image";
import hero from "@/components/animations/hero.gif"
gsap.registerPlugin(CustomEase);
CustomEase.create("hop2", ".9, 0, .1, 1");

interface PreloaderProps {
  showPreloader?: boolean;
  onComplete?: () => void;
}

export default function Preloader({
  showPreloader = true,
  onComplete,
}: PreloaderProps) {
  const counterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!showPreloader) return;

    const counterElement = counterRef.current;
    const totalDuration = 2000;
    const totalSteps = 11;
    const timePerStep = totalDuration / totalSteps;

    let currentStep = 0;

    function updateCounter() {
      currentStep++;
      if (currentStep <= totalSteps) {
        const progress = currentStep / totalSteps;
        let value: number;

        if (currentStep === totalSteps) {
          value = 100;
        } else {
          const exactValue = progress * 100;
          const minValue = Math.max(Math.floor(exactValue - 5), 1);
          const maxValue = Math.min(Math.floor(exactValue + 5), 99);
          value =
            Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        }

        if (counterElement) {
          counterElement.textContent = value.toString();
        }

        if (currentStep < totalSteps) {
          setTimeout(updateCounter, timePerStep);
        }
      }
    }

    setTimeout(updateCounter, timePerStep);

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    gsap.set(".home-page-content", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    tl.to(".count", {
      opacity: 0,
      delay: 2.5,
      duration: 0.25,
    });

    tl.to(".pre-loader", {
      scale: 0.5,
      ease: "hop2",
      duration: 1,
    });

    tl.to(".home-page-content", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1.5,
      ease: "hop2",
      delay: -1,
    });

    tl.to(".loader", {
      height: "0",
      ease: "hop2",
      duration: 1,
      delay: -1,
    });

    tl.to(".loader-bg", {
      height: "0",
      ease: "hop2",
      duration: 1,
      delay: -0.5,
    });

    tl.to(".loader-2", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "hop2",
      duration: 1,
    });
  }, [showPreloader, onComplete]);

  if (!showPreloader) return null;

  return (
    <>
      <div className="preloader-overlay">
        <div className="pre-loader">
          <div className="loader"></div>
          <div className="loader-bg"></div>
        </div>
        <div className="count">
          <p ref={counterRef}>0</p>
        </div>
        <div className="loader-2"></div>
      </div>
      <div className="preloader-bg-img">
        <Image src={hero} alt="Preloader" />
      </div>
    </>
  );
}
