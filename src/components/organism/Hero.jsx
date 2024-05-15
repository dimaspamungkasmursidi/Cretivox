import { useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';

const Hero = () => {
  useEffect(() => {
    // Animasi untuk teks
    TweenMax.from('.hero-text', 1, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
    });
    TweenMax.to('.hero-text', 0.5, {
      opacity: 1,
      delay: 1,
    });

    // Animasi untuk gambar
    TweenMax.from('.hero-image', 1, {
      opacity: 0,
      x: -50,
      ease: Power3.easeOut,
      delay: 0.5,
    });
    TweenMax.to('.hero-image', 0.5, {
      opacity: 1,
      delay: 1.5,
      ease : Power3.easeOut,
    });
  }, []);

  return ( 
    <>
      <div className="h-screen flex flex-col items-center justify-center px-8 gap-8 -z-50">
          <h1 className="text-3xl font-bold text-center md:text-5xl hero-text">Halo, nama gue Dimas Pamungkas Mursidi</h1>
          <img src="/hero.png" alt="hero.svg" className="object-cover hero-image" />
      </div>
    </>
  );
}

export default Hero;
