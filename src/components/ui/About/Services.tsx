import React from 'react'

import ServiceCard from './Card'
import AnimatedCopy from '../AnimatedCopy'


const Services = () => {
  return (
    <section className='py-12 md:py-40 flex flex-col justify-center  items-center '>
       <AnimatedCopy
              tag="h1"
              delay={0.2}
              duration={1}
              stagger={0.05}
              direction="bottom"
              className=""
            >
             Our Expertise
               </AnimatedCopy>
              <AnimatedCopy
              tag="p"
              delay={0.2}
              duration={1}
              stagger={0.05}
              direction="bottom"
              className=" text-[16px] md:text-xl text-center max-w-[400px] md:max-w-[550px]"
            >
             Pirmada brings every aspect of your digital vision to life  with a full spectrum of services:
            </AnimatedCopy>
    
      <div className="mt-12 grid grid-cols-1  w-[80vw] md:grid-cols-3 gap-6 md:gap-8">
      <ServiceCard
      imageSrc="/assets/Brand.svg"
      title="Brand & Visual Identity Development"
      description="Crafting comprehensive identity systems that define your brand’s voice, values, and visual language for a cohesive market presence."
    />
    <ServiceCard
  imageSrc="/assets/uiux.svg"
  title={
    <>
      UI/UX Design
      <br className='hidden md:flex ' />
      (Web & Mobile)
    </>
  }
  description="Designing intuitive, user-first interfaces that drive engagement, streamline interactions, and boost conversion across devices."
/>

     <ServiceCard
      imageSrc="/assets/website.svg"
      title="Website Development & ECommerce"
      description="Building performant, scalable websites and online stores optimized for growth, speed, and seamless customer experiences."
    />

<ServiceCard
      imageSrc="/assets/app.svg"
      title="App Development 
(iOS & Android)"
      description="Developing native mobile applications that deliver reliable, high-quality experiences tailored to users on every platform."
    />
     <ServiceCard
      imageSrc="/assets/websitemanagment.svg"
      title="Website Management & Refactoring"
      description="Providing ongoing maintenance, performance tuning, and  code restructuring to keep your site secure, fast, and future-proof."
    />
     <ServiceCard
      imageSrc="/assets/logodesign.svg"
      title={
        <>
          Logo & 
          Graphic
          <br className='hidden md:flex ' />
          (Design)
        </>
      }
      description="Creating memorable logos and visual assets that instantly communicate your brand’s essence and differentiate you in the market."
    />
        
      </div>
    </section>
  )
}

export default Services
