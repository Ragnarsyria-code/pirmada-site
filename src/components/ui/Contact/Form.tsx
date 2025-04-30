"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

import AnimatedCopy from "../AnimatedCopy";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  
  const [hasMounted, setHasMounted] = useState(false);
  
    useEffect(() => {
      setHasMounted(true);
    }, []);
  
    // Return null on first render to avoid mismatches during hydration
    if (!hasMounted) return null;

  // Shared styles for input elements
  const inputStyles =
    "w-full rounded-[8px] text-sm md:text-base p-[14px] ring-1 ring-white/5 bg-black border-none focus:outline-none focus:ring-1 focus:ring-white/40 text-white";

  // Form state

  // Function to send the data to the API route
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, number, message }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("Thank you! Your message has been submitted. We'll be in touch soon.");
        // Optionally, reset the form fields here
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      } else {
        setStatus(data.error || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="mt-24 overflow-hidden py-16 border border-white/10 rounded-2xl md:rounded-4xl">
      <div className="w-[90vw] gap-12 mx-auto h-full grid grid-cols-1 lg:grid-cols-7 justify-center items-center">
        {/* Left Side */}
        <div className="col-span-7 md:w-[80%] h-full md:col-span-4">

           <AnimatedCopy
                              tag="h1"
                              delay={0.2}
                              duration={1}
                              stagger={0.05}
                              direction="bottom"
                              className=" max-w-xl text-center"
                            >
                           
                           Get in Touch with us
                            
                                              
                                </AnimatedCopy>
                                <AnimatedCopy
                                  tag="p"
                                  delay={0.2}
                                  duration={1}
                                  stagger={0.05}
                                  direction="bottom"
                                  className=" text-[16px] md:text-xl md:text-start text-center max-w-md md:max-w-xl"
                                >
                              Ignite explosive growth, fuel breakthrough innovation, and transform your business into a market leader. Connect with us now.</AnimatedCopy>
        
          {/* Reach Out Directly */}
          <div className="mt-8 md:mt-12">
            <p className="font-medium md:font-semibold text-md md:text-lg text-white/80">
              Reach Out Directly:
            </p>
            <div className="flex gap-2 mt-2 md:mt-4">
              <p className="text-white/80 ">Email:</p>
              <p className="text-teal-400 ">info@pirmada.com</p>
              </div>
              <div className="flex  gap-2 mt-2 md:mt-4">
              <p className="text-white/80 ">Phone:</p>
              <p className="text-teal-400 ">+971 508190026</p>
              </div>
           
          </div>

          
        </div>

        {/* Right Side (Form) */}
        <div className="relative col-span-7 lg:col-span-3  bg-[#0f0f0f] ring-1 ring-white/20 rounded-[12px]">
          <div className="p-4 pt-12 lg:p-6 lg:pt-12">
            {/* Logo */}
            <div className="flex flex-col items-center mb-6">
              <div className="logo flex flex-col items-center mb-8">
                <Image
                  src="/assets/logo.svg"
                  alt="Pirmada Logo"
                  width={180}
                  height={200}
                />
              </div>
              <p className="text-sm text-gray-300 mb-6">
                We want to understand exactly what you need. Tell us about your
                project, and let&apos;s bring your ideas to life.
              </p>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className={inputStyles}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="youremail@example.com"
                  className={inputStyles}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Number Field */}
              <div className="mb-5">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  placeholder="Your Phone Number"
                  className={inputStyles}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Tell us more about your project:
                </label>
                <textarea
                  id="message"
                  className={inputStyles}
                  rows={4}
                  placeholder="Provide any additional information about your project, timeline, or specifics."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                className="w-full p-2 text-black bg-gradient-to-r from-[#4DEBB7] to-[#4BD4DF] rounded-md"
              >
                Submit
              </button>
            </form>

            {/* Status Message */}
            {status && <p className="mt-2 text-center text-white">{status}</p>}

            {/* Decorative elements */}
            <div className="">
              {/* Replace `-z-1` with `z-[-1]` and the bracket-based rotate classes. */}
              <div className="z-[-1] triangle-blur-form1 [transform:rotate(-20deg)]"></div>
              <div className="z-[-1] triangle-blur-form2-4 [transform:rotate(10deg)]"></div>
              <div className="z-[-1] triangle-blur-form3 [transform:rotate(-30deg)]"></div>
              <div className="z-[-1] triangle-blur-form5 [transform:rotate(-70deg)]"></div>
              <div className="z-[-1] triangle-shadow-form md:animate-slide-X [transform:rotate(-40deg)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
