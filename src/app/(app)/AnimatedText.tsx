"use client";

import React, { useRef } from "react";
import { motion, type Variants, useInView } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const textVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.625, 0.05, 0, 1],
    },
  },
};

type RevealSectionProps = {
  lines: string[];
};

export function RevealSection({ lines }: RevealSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full flex items-center bg-black justify-center  overflow-hidden"
    >
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {lines.map((line, index) => (
          <div key={index} className="overflow-hidden">
            <motion.h1
              className="font-medium text-7xl leading-[1.2em] tracking-[-0.9px] text-white font-font2"
              variants={textVariants}
            >
              {line}
            </motion.h1>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default function AnimatedText() {
  return (
    <>
      <RevealSection
        lines={["Here's a peek inside our", "Vault of resources"]}
      />
    </>
  );
}
