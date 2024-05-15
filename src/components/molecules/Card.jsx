import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Card = ({ title, description, image }) => {
  
  const main = useRef(null);

  useGSAP(() => {
    const boxes = gsap.utils.toArray('.box');

    boxes.forEach((box) => {
      gsap.from(box, {
        x: 150,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 10%',
          scrub: true,
        },
        x: 300,
        opacity: 0,
      });
    });
  }, {scope : main});

  return (
    <section className="box max-w-sm rounded overflow-hidden shadow-lg bg-white" ref={main}>
      <img className="w-full max-h-40" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl font-neue text-black tracking-wider">{title}</div>
        <p className="text-black text-base">
          {description}
        </p>
      </div>
    </section>
  );
}

export default Card;
