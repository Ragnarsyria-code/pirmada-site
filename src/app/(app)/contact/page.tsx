import ContactSection from '@/components/ui/Contact/Form'
import React from 'react'

import type { Metadata } from 'next';
import { WebPageJsonLd } from '@/components/SEO/WebPageJsonLd';
export const metadata: Metadata = {
  title: "Contact Us ",
  description: "We’d love to hear from you. Whether you have a project idea, need technical support, or want to explore collaboration, our team at Pirmada is ready to help. Send your inquiry via our contact form for a prompt response.",
  openGraph: {
    url: "/contact",
    title: "Contact Us ",
  description: "We’d love to hear from you. Whether you have a project idea, need technical support, or want to explore collaboration, our team at Pirmada is ready to help. Send your inquiry via our contact form for a prompt response.",
    images: [{   url: "/og-image.png", width:1200, height:630 }],
  },
};
const page = () => {
   const titleString = metadata.title as string
      const desc = metadata.description!
  return (
    <>
    <WebPageJsonLd
                  name={titleString}
                  description={desc}
                  url="/contact"
                />
       <ContactSection/>
    </>
  )
}

export default page
