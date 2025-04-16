"use client";

import Link from "next/link";
import type { LinkProps } from "next/link";
import React, { useEffect, useRef, useState, type FC } from "react";
import { motion } from "framer-motion";

import {
  animatedLinkVariants,
  backgroundVariants,
  cn,
  type AnimatedLinkVariantProps,
} from "@/lib/utils";

// Extended props to support user-provided overrides
interface AnimatedLinkProps extends LinkProps, AnimatedLinkVariantProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  rippleCircleClassName?: string;
  rippleCircleStyle?: React.CSSProperties;
}

/** A single pulsing circle for the ripple effect */
type RippleCircleProps = {
  baseWidth: number;
  baseHeight: number;
  delay: number;
  opacity: number;
  circleClassName?: string;
  circleStyle?: React.CSSProperties;
};

function RippleCircle({
  baseWidth,
  baseHeight,
  delay,
  opacity,
  circleClassName,
  circleStyle,
}: RippleCircleProps) {
  return (
    <motion.div
      initial={{ scaleX: 1, scaleY: 1, opacity }}
      animate={{
        scaleX: [1, 1.2, 1],
        scaleY: [1, 1.6, 1],
        opacity: [opacity, 0, 0],
      }}
      transition={{
        times: [0, 0.8, 1],
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "easeInOut",
        delay,
      }}
      style={{ width: baseWidth, height: baseHeight, ...circleStyle }}
      className={cn(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-full",
        circleClassName
      )}
    />
  );
}

export const AnimatedLink: FC<AnimatedLinkProps> = ({
  children,
  href,
  variant = "primary",
  className,
  style,
  rippleCircleClassName,
  rippleCircleStyle,
  ...props
}) => {
  const DURATION = 0.7;
  const EASE = [0.625, 0.05, 0, 1] as const;
  const WORD_OFFSET = 0.04;
  const LETTER_OFFSET = 0.006;

  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    if (variant === "ripple" && containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, [variant]);

  return (
    <Link href={href} {...props}>
      <motion.div
        ref={containerRef}
        initial="initial"
        whileHover="hover"
        className={cn(
          "px-6 py-3 overflow-visible relative",
          animatedLinkVariants({ variant }),
          className
        )}
        style={style}
      >
        {variant === "ripple" && dimensions && (
          <div className="absolute z-[-10] inset-0 pointer-events-none">
            <RippleCircle
              baseWidth={dimensions.width}
              baseHeight={dimensions.height}
              opacity={1}
              delay={0}
              circleClassName={rippleCircleClassName}
              circleStyle={rippleCircleStyle}
            />
            <RippleCircle
              baseWidth={dimensions.width}
              baseHeight={dimensions.height}
              opacity={1}
              delay={0.5}
              circleClassName={rippleCircleClassName}
              circleStyle={rippleCircleStyle}
            />
            <RippleCircle
              baseWidth={dimensions.width}
              baseHeight={dimensions.height}
              opacity={1}
              delay={1}
              circleClassName={rippleCircleClassName}
              circleStyle={rippleCircleStyle}
            />
          </div>
        )}

        <motion.div className="flex flex-col items-center justify-center overflow-clip">
          <p style={{ textShadow: "0px 1.25em currentColor" }} className="leading-[1.25]">
            {children.split(" ").map((word, wIndex, allWords) => (
              <span key={wIndex} className="inline-block relative">
                {word.split("").map((letter, lIndex) => (
                  <motion.span
                    key={lIndex}
                    className="inline-block"
                    variants={{
                      initial: { y: 0 },
                      hover: { y: "-100%" },
                    }}
                    transition={{
                      delay: wIndex * WORD_OFFSET + lIndex * LETTER_OFFSET,
                      duration: DURATION,
                      ease: EASE,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                {wIndex < allWords.length - 1 && "\u00A0"}
              </span>
            ))}
          </p>
        </motion.div>

        <div className={cn(backgroundVariants({ variant }))} />
      </motion.div>
    </Link>
  );
};
