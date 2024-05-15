import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Header = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
      reversed: true
    });

    tl.fromTo(navRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'Power3.easeInOut' });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        tl.play();
      } else {
        tl.reverse();
      }
    });
  }, []);

  return (
    <header className="bg-opacity-50 shadow-md fixed top-0 w-full px-4 backdrop-filter backdrop-blur-md" ref={navRef}>
      <div className="container mx-auto flex justify-center items-center py-4">
        <div className="flex items-center">
          <img src="https://dimaspamungkasportofolio.vercel.app/logosecondary.svg" alt="Logo" className="h-8 z-50" />
        </div>

        {/* <ul className="flex items-center">
          <li className="mx-3">
            <a href="#" className="text-gray-600 hover:text-black">Hero</a>
          </li>
          <li className="mx-3">
            <a href="#" className="text-gray-600 hover:text-black"></a>
          </li>
          <li className="mx-3">
            <a href="#" className="text-gray-600 hover:text-black">Contact</a>
          </li>
        </ul> */}
      </div>
    </header>
  );
};

export default Header;
