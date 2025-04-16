"use client";
import React, { useRef, useEffect } from "react";
import { Text } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";

export type AnimatedTextLinesProps = {
  lines: string[]; // Array of text lines.
  startPosition?: [number, number, number]; // Final position of the first line.
  font?: string; // Font URL/path.
  fontSize?: number; // Font size.
  color?: string; // Text color.
  anchorX?: "left" | "center" | "right";
  anchorY?: "top" | "middle" | "bottom";
  stagger?: number; // Delay between lines (seconds).
  duration?: number; // Animation duration per line (seconds).
};

const AnimatedTextLines = ({
  lines,
  startPosition = [0, 0, 0],
  fontSize = 3.4,
  color = "white",
  anchorX = "center",
  anchorY = "top",
  stagger = 0.1,
  duration = 1.2,
}: AnimatedTextLinesProps) => {
  // Array ref to store references to each Text mesh.
  const lineRefs = useRef<THREE.Mesh[]>([]);
  lineRefs.current = [];

  // Callback ref to add a text mesh to our references.
  const addToRefs = (el: THREE.Mesh | null) => {
    if (el && !lineRefs.current.includes(el)) {
      lineRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!lineRefs.current.length) return;
    const initialOffset = fontSize;
    gsap.set(lineRefs.current, { y: initialOffset, opacity: 0 });
    gsap.to(lineRefs.current, {
      y: 0,
      opacity: 1,
      duration,
      ease: "easeOut",
      stagger,
    });
  }, [duration, stagger, fontSize, lines]);

  return (
    <>
      {lines.map((line, index) => (
        <Text
          key={index}
          ref={addToRefs}
          fontSize={fontSize}
          color={color}
          anchorX={anchorX}
          anchorY={anchorY}
          position={[
            startPosition[0],
            startPosition[1] - index * (fontSize * 1.2),
            startPosition[2],
          ]}
          material-transparent
          material-opacity={0}
        >
          {line}
        </Text>
      ))}
    </>
  );
};

export default AnimatedTextLines;
