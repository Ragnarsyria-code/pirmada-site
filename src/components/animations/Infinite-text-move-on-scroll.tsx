'use client'

import React, { useRef, useEffect } from 'react'
import styles from './infiniti.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export default function InfiniteText() {
  // ← Edit this array to add/remove lines
  const texts = [
    'Web Development -',
    'App Development -',
    'UI/UX Design -',
    'SEO & Marketing -',
    'Brand Strategy -',
  ]

  // refs
  const sliderRef   = useRef<HTMLDivElement>(null)
  const textRefs    = useRef<HTMLParagraphElement[]>([])
  const xPercentRef = useRef(0)
  const dirRef      = useRef(-1)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // scroll-linked tween of the entire slider
    gsap.to(sliderRef.current!, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: self => {
          dirRef.current = self.direction * -1
        },
      },
      x: '-500px',
    })

    // infinite marquee loop
    const animate = () => {
      // loop between 0 and -100
      if      (xPercentRef.current < -100) xPercentRef.current = 0
      else if (xPercentRef.current >    0) xPercentRef.current = -100

      // move every <p>
      textRefs.current.forEach(el =>
        gsap.set(el, { xPercent: xPercentRef.current })
      )

      xPercentRef.current += 0.2 * dirRef.current
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.sliderContainer}>
        <div ref={sliderRef} className={styles.slider}>
          {texts.map((txt, i) => (
            <p
              key={i}
              ref={el => {
                if (el) textRefs.current[i] = el
              }}
              className={styles.textItem}
            >
              {txt}
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}



{/*

'use client'
import styles from './infiniti.module.css'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Home() {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // move these inside so they're closed over once
    let xPercent = 0;
    let direction = -1;

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction = e.direction * -1;
        },
      },
      x: "-500px",
    });

    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent });
      gsap.set(secondText.current, { xPercent });
      xPercent += 0.1 * direction;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // no cleanup needed for requestAnimationFrame here
  }, []);

  return (
    <main className={styles.main}>
     
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div>
    </main>
  )
}
* */}