import React from 'react';
import Projects, { type ProjectData } from '@/components/ui/work/ProjectCard';
import SYNC from '@/components/parallaxImages/SYNC.png';
import Scicast from '@/components/parallaxImages/scicast.png';
import Penta from '@/components/parallaxImages/penta.png';
import NHT from '@/components/parallaxImages/NHT.png';
import IB from '@/components/parallaxImages/IB.png';

import AnimatedCopy from '../AnimatedCopy';


const projectList: ProjectData[] = [
  {
    imageSrc: Scicast.src,
    href: 'https://www.sci-cast.com/',
    ariaLabel: 'SciCast Articles Website',
    title: 'SciCast Articles Website',
    description:
      'An engaging platform delivering deep-dive scientific articles through a sleek, branded experience and custom CMS.',
  },
  {
    imageSrc: Penta.src,
    href: 'https://pentaskyline.com/',
    ariaLabel: 'Penta Real Estate',
    title: 'Penta Real Estate',
    description:
      'A dynamic UAE property portal with intuitive search, interactive listings, and seamless buying & selling workflows.',
  },
  {
    imageSrc: SYNC.src,
    ariaLabel: 'SYNC App',
    title: 'SYNC App',
    description:
      'A modern social networking app that empowers real-time connections, media sharing, and branded interactive experiences.',
  },
  {
    imageSrc: NHT.src,
    href: 'https://nhthightec.com/',
    ariaLabel: 'NHT High Technology',
    title: 'NHT High Technology',
    description:
      'A scalable e-commerce site for cutting-edge tech products, featuring responsive design, secure checkout, and fast performance.',
  },
  {
    imageSrc: IB.src,
    href: '/',
    ariaLabel: 'IB Designer Portfolio',
    title: 'IB Designer Portfolio',
    description:
      'A sleek, responsive designer portfolio for IB,  dynamic project galleries, and a seamless UX to highlight creative expertise.',
  },
  
 
];

export default function ProjectsSection() {

  return (
    <section className='py-20 md:py-32'>
     <div className="flex flex-col items-center justify-center px-4 text-center mb-8 md:mb-20">
            <AnimatedCopy
              tag="h1"
              delay={0.2}
              duration={1}
              stagger={0.05}
              direction="bottom"
              className="max-w-[300px] md:max-w-md text-4xl font-bold "
            >
              Our Latest Creative Impact
            </AnimatedCopy>
            <AnimatedCopy
              tag="p"
              delay={0.4}
              duration={1}
              stagger={0.04}
              direction="bottom"
              className="mt-4 max-w-sm  md:max-w-xl text-base md:text-lg"
            >
             Crafting modern, innovative digital solutions that consistently drive measurable impact across web, mobile, and branding projects for ambitious clients worldwide.
            </AnimatedCopy>
          </div>
  <Projects projects={projectList}  />
    </section>
   );
}
