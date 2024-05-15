import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Button from "../components/atoms/Button";

const Intro = () => {
  const opening = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#opening-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3, #logo"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3, #logo"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#opening-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 1.5,
        });
    }, opening);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={opening}>
      <div
        id="opening-slider"
        className="h-screen p-10 bg-gray-50 absolute font-neue z-10 w-full flex flex-col items-center justify-center gap-10"
      >
        <div className="flex flex-col items-center justify-center text-black">
          <h1 className="text-5xl font-neue font-bold tracking-wider" id="title-1">
            Welcome to
          </h1>
          <h1 className="text-5xl font-neue font-bold tracking-wider" id="title-2">
            My website
          </h1>
          <h1 className="text-5xl font-neue font-bold tracking-wider" id="title-3">
            Cretivox
          </h1>
        </div>
        <div className="w-46">
          <img
            src="https://dimaspamungkasportofolio.vercel.app/logo.svg"
            alt="logo.svg"
            id="logo"
          />
        </div>
      </div>
      <div className="flex flex-col bg-slate-950">
        <div
          id="welcome"
          className="h-screen flex flex-col items-center justify-center gap-4 text-white"
        >
          <h1 className="text-5xl font-neue font-bold tracking-wider text-white">
            Let's get started
          </h1>
          <Link to="/home">
            <Button>Click here</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
