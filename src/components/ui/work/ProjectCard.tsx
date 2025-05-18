'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  /** URL or StaticImageData.src */
  imageSrc: string;
  /** Alt text for the background image */
  ariaLabel?: string;
  /** Title text shown at bottom */
  title: string;
  /** Description text shown under the title */
  description: string;
  /** Optional className override */
  className?: string;
  href?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  ariaLabel,
  title,
  description,
  className = '',
  href,
}) => {
  return (
    <Link href={href || '#'} className='border border-white/30 rounded-[12px] '>
      <div
        className={`group relative w-full h-[300px] md:h-[600px] overflow-hidden rounded-[11px]  ${className}`}
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label={ariaLabel || title}
      >
        {/* hover gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b from-black/0 to-black/20
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
            z-10
          "
        />

        {/* content */}
        <motion.div
          className="relative z-20 flex flex-col justify-end h-full px-6 pb-6"
          whileHover={{ y: -10 }}
          transition={{
            duration: 0.3,
            ease: [0.625, 0.05, 0, 1],
          }}
        >
          <h2 className="font-medium text-2xl md:text-3xl text-white">{title}</h2>
          <p className="text-base md:text-lg mt-2 text-white/80">{description}</p>
        </motion.div>
      </div>
    </Link>
  );
};

export interface ProjectData {
  imageSrc: string;
  ariaLabel?: string;
  title: string;
  description: string;
  href?: string;
}

interface ProjectsProps {
  projects: ProjectData[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <div className="px-6 md:px-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {projects.map((p, idx) => (
        <ProjectCard
          key={idx}
          imageSrc={p.imageSrc}
          ariaLabel={p.ariaLabel}
          title={p.title}
          description={p.description}
          href={p.href}
        />
      ))}
    </div>
  </div>
);

export default Projects;
