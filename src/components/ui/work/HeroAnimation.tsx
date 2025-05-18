'use client';

import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: StaticImageData[];
  className?: string;
}) => {
  // 1) split into 4 columns
  const chunkSize = Math.ceil(images.length / 4);
  const cols = Array.from({ length: 4 }, (_, i) =>
    images.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  // 2) scroll‐driven offsets (0 → top, 1 → bottom)
  const { scrollYProgress } = useScroll();
  const y0 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const scrollYs = [y0, y1, y2, y3];

  return (
    <div className={cn('mx-auto h-[600px] mt-10 overflow-hidden rounded-2xl ', className)}>
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
              // combine infinite loop + scroll offset
              animate={{ y: colIndex % 2 === 0 ? [0, 100, 0] : [0, -100, 0] }}
              transition={{
                duration: 10,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
              }}
              style={{ y: scrollYs[colIndex] }}
              className="flex flex-col gap-8"
            >
              {colImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="relative w-full h-[200px] rounded-lg overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`Parallax ${idx}`}
                    fill
                    className="object-cover object-fit"
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
