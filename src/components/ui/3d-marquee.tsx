{/*'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: StaticImageData[];
  className?: string;
}) => {
  // 1) Split into 4 columns
  const chunkSize = Math.ceil(images.length / 4);
  const cols = Array.from({ length: 4 }, (_, i) =>
    images.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  // 2) Scroll progress
  const { scrollYProgress } = useScroll();

  // 3) Your scroll-linked transforms
  const y0 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y1 = useTransform(scrollYProgress, [-1, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [-1, 1], [0, -300]);
  const yTransforms = [y0, y1, y2, y3];

  // 4) Inner marquee settings
  const duration = 20;   // seconds per loop
  const ease     = 'linear';

  return (
    <div
      className={cn(
        'mx-auto h-[600px] mt-10 overflow-hidden rounded-2xl',
        className
      )}
    >
      <div className="flex w-full h-full items-center justify-center">
        <div
          className="
            w-[1720px] h-[1460px] shrink-0
            [transform-style:preserve-3d]
            origin-center
            grid grid-cols-4 gap-8
            [transform:rotateX(55deg)_rotateZ(-45deg)]
          "
        >
          {cols.map((colImages, colIndex) => (
            // 5) column wrapper gets your scroll-linked y
            <motion.div
              key={colIndex}
              style={{ y: yTransforms[colIndex] }}
              className="relative h-full overflow-hidden"
            >
             
              <motion.div
                className="flex flex-col gap-8"
                animate={{ y: ['0%', '-50%'] }}
                transition={{
                  duration,
                  ease,
                  repeat: Infinity,
                }}
              >
              
                {colImages.map((img, idx) => (
                  <div
                    key={`a-${idx}`}
                    className="relative w-full h-[200px] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`Marquee ${colIndex}-${idx}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
               
                {colImages.map((img, idx) => (
                  <div
                    key={`b-${idx}`}
                    className="relative w-full h-[200px] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`Marquee duplicate ${colIndex}-${idx}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
*/}





import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: StaticImageData[];
  className?: string;
}) => {
  // split into up to 4 columns
  const chunkSize = Math.ceil(images.length / 4);
  const cols = Array.from({ length: 4 }, (_, i) =>
    images.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  // scroll progress
  const { scrollYProgress } = useScroll();

  // *** CALL HOOKS AT TOP LEVEL ***
  const y0 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y1 = useTransform(scrollYProgress, [-1, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [-1, 1], [0, -300]);

  const yTransforms = [y0, y1, y2, y3];

  return (
    <div
      className={cn(
        'mx-auto h-[600px] mt-10 overflow-hidden rounded-2xl ',
        className
      )}
    >
      <div className="flex w-full h-full items-center justify-center">
        <div
          className="
            w-[1720px] h-[860px] shrink-0
            [transform-style:preserve-3d]
            origin-center
            grid grid-cols-4 gap-8
            [transform:rotateX(55deg)_rotateZ(-45deg)]
          "
        >
          {cols.map((colImages, colIndex) => (
            <motion.div
              key={colIndex}
              style={{ y: yTransforms[colIndex] }}
              className="flex flex-col gap-8"
            >
              {colImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  
                  className="relative w-full h-[200px] rounded-lg overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`Parallax ${idx}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
