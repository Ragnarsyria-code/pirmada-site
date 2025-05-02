import React from 'react'

import Hero from '@/components/ui/About/Hero';
import Services from '@/components/ui/About/Services';
import Statistics from '@/components/ui/About/Statistics';
import LogoTicker from '@/components/ui/About/LogoTicker';

const page = () => {
  return (
   <>
   <Hero/>
   <LogoTicker/>
   <Services/>
  
   <Statistics/>
   
   </>
  )
}

export default page


