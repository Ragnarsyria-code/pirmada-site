import React from "react";
import AnimatedCopy from "./AnimatedCopy";

interface SectionHeadingTextProps {
  miniTitle: string;
  title: string;
  description: string;
  alignment?: "left" | "center" | "right";
}

const SectionHeadingText: React.FC<SectionHeadingTextProps> = ({
  miniTitle,
  title,
  description,
  alignment = "center",
}) => {
  // Compute alignment classes for container and text
  // You can adjust items- and text- classes as needed.
  const alignmentClasses =
    alignment === "left"
      ? "items-center text-center md:items-start  "
      : alignment === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <div className={`flex flex-col  ${alignmentClasses}`}>
      {/* Mini Title */}
      <h6 className="text-xs  border border-white/20 font-medium uppercase text-white/70 px-4 md:px-6 py-2 rounded-md md:rounded-lg mb-4">
        {miniTitle}
      </h6>

      {/* Main Title */}
      <AnimatedCopy
        tag="h1"
        delay={0.2}
        duration={1}
        stagger={0.05}
        direction="bottom"
        className={`text-${alignment} md:text-start`}
      >
        {title}
      </AnimatedCopy>

      {/* Description */}
      <AnimatedCopy
        tag="p"
        delay={0.2}
        duration={1}
        stagger={0.05}
        direction="bottom"
        className={`${
          alignment === 'left'
            ? 'text-center md:text-left' : ''
        }`}
      >
        {description}
      </AnimatedCopy>
    </div>
  );
};

export default SectionHeadingText;
