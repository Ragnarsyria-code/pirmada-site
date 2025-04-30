"use client";
import React from "react";
import Liquid from "./liquid-button"; // adjust path if needed
import COLORS from "./colors"; // adjust path if needed
import Image from "next/image";
import noise from "./noise.jpg"; // adjust path if needed
import styles from './GradientButton.module.css';

interface InteractiveLiquidProps {
  label: string;
  borderCount?: number;
}

const InteractiveLiquid: React.FC<InteractiveLiquidProps> = ({
  label,
  borderCount = 5,
}) => {
  const isHovered = true; // 🔥 Always true = always animate

  return (
    <div className={`${styles.container}`}>
      {/* ambient wrapper */}
      <div className={`${styles.ambient}`}>
        <div className={`${styles.wrapper}`}>
          <Liquid isHovered={isHovered} colors={COLORS} />
        </div>
        <Image className={`${styles.noise2}`} src={noise} alt="noise texture" />
      </div>

      <div className={`${styles.mask2}`} />

      {/* main interactive button */}
      <div className={`${styles.liquid2}`}>
        <span className={`${styles.mask1}`} />
        <span className={`${styles.mask2}`} />

        <Liquid isHovered={isHovered} colors={COLORS} />

        {Array.from({ length: borderCount }).map((_, i) => (
          <span className={styles[`border${i + 1}`]} key={i} />
        ))}

        <span className={`${styles.shadow}`} />
        <Image className={`${styles.noise}`} src={noise} alt="noise texture" />

        
         
        <span className={`${styles.text}`} aria-hidden>
          {label}
        </span>
      </div>

      {/* invisible hit area */}
      <button
        className={`${styles.button}`}
        aria-label={label}
      />
    </div>
  );
};

export default InteractiveLiquid;
