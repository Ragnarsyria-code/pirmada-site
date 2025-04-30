import { motion, type Variants } from "framer-motion";
import React from "react";

// 1) Data shapes
interface StopConfig {
  offset: number;
  stopColor: string;
}

interface SVGState {
  gradientTransform: string;
  stops: StopConfig[];
}

export interface Colors {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color13: string;
  color14: string;
  color15: string;
  color16: string;
  color17: string;
}

interface GradientSvgProps {
  className?: string;
  isHovered?: boolean;
  colors: Colors;
}

type SVGStates = Record<string, SVGState>;

// 2) Define your order and state-builder
const svgOrder: (keyof SVGStates)[] = [
  "svg1",
  "svg2",
  "svg3",
  "svg4",
  "svg3",
  "svg2",
  "svg1",
];

const buildSVGStates = (colors: Colors): SVGStates => ({
  svg1: {
    gradientTransform:
      "translate(287.5 280) rotate(-29.0546) scale(689.807 1000)",
    stops: [
      { offset: 0, stopColor: colors.color1 },
      { offset: 0.188423, stopColor: colors.color2 },
      { offset: 0.260417, stopColor: colors.color3 },
      { offset: 0.328792, stopColor: colors.color4 },
      { offset: 0.328892, stopColor: colors.color5 },
      { offset: 0.328992, stopColor: colors.color1 },
      { offset: 0.442708, stopColor: colors.color6 },
      { offset: 0.537556, stopColor: colors.color7 },
      { offset: 0.631738, stopColor: colors.color1 },
      { offset: 0.725645, stopColor: colors.color8 },
      { offset: 0.817779, stopColor: colors.color9 },
      { offset: 0.84375, stopColor: colors.color10 },
      { offset: 0.90569, stopColor: colors.color1 },
      { offset: 1, stopColor: colors.color11 },
    ],
  },
  svg2: {
    gradientTransform:
      "translate(126.5 418.5) rotate(-64.756) scale(533.444 773.324)",
    stops: [
      { offset: 0, stopColor: colors.color1 },
      { offset: 0.104167, stopColor: colors.color12 },
      { offset: 0.182292, stopColor: colors.color13 },
      { offset: 0.28125, stopColor: colors.color1 },
      { offset: 0.328792, stopColor: colors.color4 },
      { offset: 0.328892, stopColor: colors.color5 },
      { offset: 0.453125, stopColor: colors.color6 },
      { offset: 0.515625, stopColor: colors.color7 },
      { offset: 0.631738, stopColor: colors.color1 },
      { offset: 0.692708, stopColor: colors.color8 },
      { offset: 0.75, stopColor: colors.color14 },
      { offset: 0.817708, stopColor: colors.color9 },
      { offset: 0.869792, stopColor: colors.color10 },
      { offset: 1, stopColor: colors.color1 },
    ],
  },
  svg3: {
    gradientTransform:
      "translate(264.5 339.5) rotate(-42.3022) scale(946.451 1372.05)",
    stops: [
      { offset: 0, stopColor: colors.color1 },
      { offset: 0.188423, stopColor: colors.color2 },
      { offset: 0.307292, stopColor: colors.color1 },
      { offset: 0.328792, stopColor: colors.color4 },
      { offset: 0.328892, stopColor: colors.color5 },
      { offset: 0.442708, stopColor: colors.color15 },
      { offset: 0.537556, stopColor: colors.color16 },
      { offset: 0.631738, stopColor: colors.color1 },
      { offset: 0.725645, stopColor: colors.color17 },
      { offset: 0.817779, stopColor: colors.color9 },
      { offset: 0.84375, stopColor: colors.color10 },
      { offset: 0.90569, stopColor: colors.color1 },
      { offset: 1, stopColor: colors.color11 },
    ],
  },
  svg4: {
    gradientTransform:
      "translate(860.5 420) rotate(-153.984) scale(957.528 1388.11)",
    stops: [
      { offset: 0.109375, stopColor: colors.color11 },
      { offset: 0.171875, stopColor: colors.color2 },
      { offset: 0.260417, stopColor: colors.color13 },
      { offset: 0.328792, stopColor: colors.color4 },
      { offset: 0.328892, stopColor: colors.color5 },
      { offset: 0.328992, stopColor: colors.color1 },
      { offset: 0.442708, stopColor: colors.color6 },
      { offset: 0.515625, stopColor: colors.color7 },
      { offset: 0.631738, stopColor: colors.color1 },
      { offset: 0.692708, stopColor: colors.color8 },
      { offset: 0.817708, stopColor: colors.color9 },
      { offset: 0.869792, stopColor: colors.color10 },
      { offset: 1, stopColor: colors.color11 },
    ],
  },
});

// 3) Build per-stop frames
const createStopsArray = (
  svgStates: SVGStates,
  order: (keyof SVGStates)[],
  maxStops: number
): StopConfig[][] => {
  const frames: StopConfig[][] = [];
  for (let i = 0; i < maxStops; i++) {
    frames.push(
      order.map((key) => {
        const stops = svgStates[key].stops;
        return stops[i] ?? stops[stops.length - 1];
      })
    );
  }
  return frames;
};

const GradientSvg: React.FC<GradientSvgProps> = ({
  className,
  isHovered = false,
  colors,
}) => {
  // a) build states & frames
  const svgStates = buildSVGStates(colors);
  const maxStops = Math.max(
    ...Object.values(svgStates).map((s) => s.stops.length)
  );
  const stopsFrames = createStopsArray(svgStates, svgOrder, maxStops);

  // b) precompute a single transform sequence
  const transformSequence = svgOrder.map(
    (key) => svgStates[key].gradientTransform
  );

  // c) define variants without callbacks
  const variants: Variants = {
    hovered: {
      gradientTransform: transformSequence,
      transition: {
        duration: 50,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
      },
    },
    notHovered: {
      gradientTransform: transformSequence,
      transition: {
        duration: 60,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
      },
    },
  };

  return (
    <svg
      className={className}
      width={1030}
      height={280}
      viewBox="0 0 1030 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={1030} height={280} rx={140} fill="url(#paint0_radial)" />
      <defs>
        <motion.radialGradient
          id="paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          variants={variants}
          initial="notHovered"
          animate={isHovered ? "hovered" : "notHovered"}
        >
          {stopsFrames.map((frame, idx) => (
            <motion.stop
              key={idx}
              initial={{
                offset: frame[0].offset,
                stopColor: frame[0].stopColor,
              }}
              animate={{
                offset: frame.map((f) => f.offset),
                stopColor: frame.map((f) => f.stopColor),
              }}
              transition={{
                duration: 0,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear",
              }}
            />
          ))}
        </motion.radialGradient>
      </defs>
    </svg>
  );
};

export default GradientSvg;