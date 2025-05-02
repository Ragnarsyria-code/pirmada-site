"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type AnimatedCopyProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  lineSelector?: string;
  animateOnScroll?: boolean;
  direction?: "top" | "bottom";
  tag?: string; // Using a plain string instead of a JSX-specific type
};

const textRevealEase = CustomEase.create("textRevealEase", "0.625, 0.05, 0, 1");

// Helper function to get default classes based on the tag type.
const getBaseClasses = (tag: string): string => {
  switch (tag) {
    case "p":
      return "animated-copy  mt-4 text-white/60 text-sm md:text-base ";
    case "h1":
      return "animated-copy whitespace-pre-line leading-[1.1em] text-white text-4xl md:text-6xl font-semibold tracking-[-1.1px]";
    case "h2":
      return "animated-copy text-white text-3xl md:text-4xl font-semibold tracking-[-1.1px]";
      case "h3":
      return "animated-copy text-white text-xl whitespace-pre-line md:text-2xl font-medium tracking-[-1.1px] ";
    // Add further cases for other tags if needed.
    default:
      return "animated-copy text-white text-4xl whitespace-pre-line font-semibold tracking-[-1.1px]   md:text-[90px] ";
  }
};

export function AnimatedCopy(props: AnimatedCopyProps) {
  const {
    children,
    className = "",
    delay = 0.05,
    duration = 1,
    ease = "power4.out",
    stagger = 1,
    lineSelector = "",
    animateOnScroll = true,
    direction = "bottom",
    tag = "p",
  } = props;

  const copyRef = useRef<HTMLElement>(null);
  const [copyId, setCopyId] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const textSplitRef = useRef<ReturnType<typeof SplitType> | null>(null);

  useEffect(() => {
    setCopyId(`copy-${Math.floor(Math.random() * 10000)}`);
  }, []);

  useEffect(() => {
    if (!copyId || !copyRef.current) return;

    const lineClass = `line-${copyId}`;

    const text = new SplitType(copyRef.current, {
      types: "lines",
      lineClass,
    });

    textSplitRef.current = text;

    const selector = lineSelector || `.${lineClass}`;
    const lines = document.querySelectorAll(selector);

    lines.forEach((line) => {
      const content = line.innerHTML;
      line.innerHTML = `<div class="line-inner-${copyId}">${content}</div>`;
    });

    const initialY = direction === "top" ? "-100%" : "100%";

    gsap.set(`.line-inner-${copyId}`, {
      y: initialY,
      display: "block",
    });

    setIsInitialized(true);

    return () => {
      if (textSplitRef.current) textSplitRef.current.revert();
    };
  }, [copyId, lineSelector, direction]);

  useGSAP(
    () => {
      if (!isInitialized || !copyRef.current) return;

      const tl = gsap.timeline({
        defaults: {
          ease: textRevealEase,
          duration,
        },
        ...(animateOnScroll
          ? {
              scrollTrigger: {
                trigger: copyRef.current,
                start: "top 100%",
                toggleActions: "play none none none",
              },
            }
          : {}),
      });

      tl.to(`.line-inner-${copyId}`, {
        y: "0%",
        stagger,
        delay,
      });

      return () => {
        if (animateOnScroll) {
          ScrollTrigger.getAll()
            .filter((st) => st.vars.trigger === copyRef.current)
            .forEach((st) => st.kill());
        }
      };
    },
    {
      scope: copyRef,
      dependencies: [
        isInitialized,
        animateOnScroll,
        delay,
        duration,
        ease,
        stagger,
        direction,
      ],
    }
  );

  // Here we reverse the merge order so that external classes come last.
  const mergedClasses = `${getBaseClasses(tag)} ${className}`.trim();

  return React.createElement(
    tag,
    {
      ref: copyRef,
      className: mergedClasses,
      "data-copy-id": copyId || undefined,
    },
    children
  );
}

export default AnimatedCopy;
