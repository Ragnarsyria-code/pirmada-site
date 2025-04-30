"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebookF,
  faXTwitter,
  faInstagram,
  faDribbble,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-4 px-4  text-white relative flex flex-col items-center">
 
      {/* Footer Header Area */}
      <div className="relative w-full xs:h-[333.5px] h-[422px] md:h-[333px]  flex items-center justify-center">
        
        <div className="abosolute inset-0">
          <Image
            src="/assets/footer-bg.png"
            alt="Footer background"
            fill
            className="object-cover opacity-40"
          />
        </div>
        {/* Centered Text Logo */}
        <div className="relative z-10">
          <Image
            src="/assets/footer-text-logo.svg"
            alt="PIRMADA Logo"
            width={800}
            height={150}
            className="object-contain"
          />
        </div>
      </div>
     
      {/* Footer Bottom Bar */}
      <div className="py-1 border-y border-white/15 w-full">
      <div className="py-6 border-y border-white/15 w-full">
      <div className="w-full gap-6 px-6 flex flex-col-reverse lg:flex-row justify-between items-center text-sm text-white/80">
      
        
        <div>
          <h1 className="text-white/50">©{currentYear} PIRMADA, All rights reserved</h1>
        </div>

        {/* Terms of Service & Privacy Policy 
        <div className="flex space-x-4 mb-2">
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
*/}
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:text-white transition"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg"  />
          </a>
          <a
            href="#"
            className="hover:text-white transition"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg"/>
          </a>
          <a
            href="#"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>

          <a
            href="#"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>

          <a
            href="#"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faDribbble} size="lg" />
          </a>

          <a
            href="#"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faBehance} size="lg" />
          </a>
      
        </div>
        </div>
        
      </div>
    
    </div>
    </footer>
  );
};

export default Footer;
