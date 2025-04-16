import React from "react";
import AnimatedCopy from "./AnimatedCopy";

const FeaturesCard = ({
  className = "",
  useGradient = true,
  gradientAngle = "120deg",
  index = "03",
  title = "Cutting-Edge Technology",
  description = "Our team harnesses the latest tools, frameworks, and industry standards to ensure top-tier performance and future-ready solutions.",
}) => {
  // When useGradient is true, apply gradient border styles to the outer container.
  const outerStyle = useGradient
    ? {
        backgroundImage: `linear-gradient(black, black), linear-gradient(${gradientAngle}, #4BD4DF, black)`,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        borderColor: "transparent",
      }
    : {};

  // Determine if we need the special blurred effect for mobile (index "01") or desktop (index "02")
  const isBlurredMobile = index === "01";
  const isBlurredDesktop = index === "02";

  // Conditionally set up overlay elements
  const overlayElement = isBlurredMobile ? (
    <div className="absolute -inset-[12px] md:-inset-[12px] rounded-3xl border-[16px] mix-blend-overlay border-white bg-opacity-100 md:hidden pointer-events-none" />
  ) : isBlurredDesktop ? (
    <div className="absolute -inset-[16px] md:-inset-[16px] rounded-xl md:rounded-[50px] border-[10px] md:border-[16px] mix-blend-overlay border-white bg-opacity-100 hidden md:block pointer-events-none" />
  ) : null;

  // Class name for our text container (adds the black background if blurred)
  const textContainerClass = "relative px-4 md:px-0 py-4 md:py-0 rounded-xl bg-black"
  

  // Slight differences in text sizing if blurred on mobile
  const titleClass = "text-[28px] mb-4 md:text-[32px] font-regular text-white md:tracking-tight mt-20 md:mt-36"
    

  return (
    <div
      className={`relative border border-white/10 py-3 px-4 md:py-6 md:px-8 rounded-2xl md:rounded-4xl ${className}`}
      style={outerStyle}
    >
      {overlayElement}

      <div className={textContainerClass}>
        <p className="text-sm md:text-xl font-light text-white/80">{index}</p>

        <AnimatedCopy
          tag="h2"
          duration={1.2}
          stagger={0.05}
          direction="bottom"
          className={titleClass}
        >
          {title}
        </AnimatedCopy>

        <p className="text-sm md:text-md text-white/40 pb-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
