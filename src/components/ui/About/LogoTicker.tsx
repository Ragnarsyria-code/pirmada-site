"use client";
import Sci from "@/components/LogoTrackerImages/sci.svg"
import Sync from "@/components/LogoTrackerImages/sync.svg"
import Pixel from "@/components/LogoTrackerImages/pixel.svg"
import Penta from "@/components/LogoTrackerImages/Penta.svg"
import IB from "@/components/LogoTrackerImages/ib.svg"
import Chaos from "@/components/LogoTrackerImages/chaos.svg"

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
import AnimatedCopy from "../AnimatedCopy";
const logos = [
  { name: "SCI", image: Sci },
  { name: "sync", image: Sync },
  { name: "Pixel", image: Pixel },
  { name: "Penta", image: Penta },
  { name: "IB", image: IB },
  { name: "Chaos", image: Chaos },
  
];

export default function LogoTicker() {
  return (
    <section className="py-24 md:pt-24 md:pb-40 overflow-x-clip flex justify-center">
      <div className="flex flex-col items center justify-center">
       <AnimatedCopy
          tag="h1"
          delay={0.2}
          duration={1}
          stagger={0.05}
          direction="bottom"
          className=" text-center"
        >                
          Our Clients
      </AnimatedCopy>
        <div className="flex overflow-hidden md:mt-16 mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-16 md:gap-24 pr-24 "
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    key={logo.name}
                    width={150}
                    height={20}
                    className="sm:w-24 sm:h-15 md:w-40 md:h-16"
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
