import React from "react";
import styles from './GradientButton.module.css';
import dynamic from "next/dynamic";
import type { Colors } from "@/components/ui/GradietButton/gradient";

interface LiquidProps {
  isHovered?: boolean;
  colors: Colors;
}
const GradientSvg = dynamic(() => import('@/components/ui/GradietButton/gradient'), {
  ssr: false,
});
const Liquid: React.FC<LiquidProps> = ({ isHovered = false, colors }) => {
  return (
    <>
      {Array.from({ length: 7 }).map((_, index) => (
        <div className={styles[`base${index + 1}`]} key={index}>
          <GradientSvg className={`${styles.svg}`} isHovered={isHovered} colors={colors} />
        </div>
      ))}
    </>
  );
};

export default Liquid;
