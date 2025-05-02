import React from 'react'
import AnimatedCopy from '../AnimatedCopy'

const Statistics = () => {
  return (
    <section className='py-24 md:py-40 flex flex-col justify-center  items-center '>
            <AnimatedCopy
                   tag="h1"
                   delay={0.2}
                   duration={1}
                   stagger={0.05}
                   direction="bottom"
                   className=" max-w-xl text-center"
                 >
                   <>
                   Global Impact
      <br />
      Meaningful Growth
    </>
                   
                    </AnimatedCopy>
                   <AnimatedCopy
                   tag="p"
                   delay={0.2}
                   duration={1}
                   stagger={0.05}
                   direction="bottom"
                   className=" text-[16px] md:text-xl text-center max-w-[400px] md:max-w-[700px]"
                 >
                  Our track record isn’t just talk—it’s proven in real metrics. From global clients served to high-impact projects delivered, these figures showcase our unwavering commitment to excellence, innovation, and your success.
            </AnimatedCopy>

            <div className="mt-12 md:mt-24 grid grid-cols-1  w-[80vw] md:grid-cols-3 gap-6 md:gap-8">
                <div className='flex flex-col items-center mt-8'>
                <h1 className="md:text-8xl text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6F6F6F]">
                +75</h1>
                    <p className='mt-4 text-[16px] md:text-xl text-white/80'>Projects Delivered</p>
                </div>
                <div className='flex flex-col items-center mt-8'>
                <h1 className="md:text-8xl text-5xl  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6F6F6F]">
                +100</h1>
                    <p className='mt-4 text-[16px] md:text-xl text-white/80'> Clients Worldwide</p>
                </div>
                <div className='flex flex-col items-center mt-8'>
                <h1 className="md:text-8xl text-5xl  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6F6F6F]">
                4.9/5 </h1>
                    <p className='mt-4 text-[16px] md:text-xl text-white/80'>Average Client Rating</p>
                </div>
            </div>
    </section>
  )
}

export default Statistics
