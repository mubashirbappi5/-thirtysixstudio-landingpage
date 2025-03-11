import React, { useEffect, useRef, useState } from "react";
import Canves from "./Canves";
import data from "./assets/Data";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const App = () => {
  const [Showcanves, setShowcanves] = useState(false);
  const headingRef = useRef(null);
  const growingRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll();
   

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  useGSAP(() => {
    headingRef.current.addEventListener("click", (e) => {
      setShowcanves(!Showcanves);
      gsap.set(growingRef.current,{
        top:e.clientY,
        left:e.clientX,
        
      })
      gsap.to(growingRef.current,{
        scale:1000,
        duration:1.2,
        ease:"power2.inOut",
       
    });
    
  })
  },[Showcanves])

  return (
    <>
    <span ref={growingRef} className="growing rounded-full block   fixed top-0 left-0 w-5 h-5">

    </span>
      <div className="w-full min-h-screen  relative ">
        {Showcanves && (
          <div className="fixed top-0 left-0 w-full h-screen">
            {data[0].map((canvesdt, index) => (
              <Canves key={index} canvesdt={canvesdt} />
            ))}
          </div>
        )}

        <div className="w-full h-screen  z-[1]  relative">
          <nav className="w-full h-20 flex items-center justify-between text-white px-10">
            <div className=" text-2xl font-semibold">Thirtysixstudio</div>
            <ul className="flex gap-8">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className=" hover:text-gray-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="textcontainer w-full px-[20%]  ">
            <div className="text w-[50%]">
              <h3 className="text-3xl leading-[1.2]">
                At Thirtysixstudio, we build digital assets and immersive
                experiences for purposeful brands.
              </h3>
              <p className="mt-8 text-md w-[80%]">
                We're a boutique production studio focused on design, animation,
                and technology, constantly rethinking what digital craft can do
                for present-day ads and campaigns.
              </p>
              <p className="mt-8  text-xl">Scroll</p>
            </div>
          </div>

          <div className="w-full mt-20  absolute bottom-0 left-0 text-white">
            <h1
              ref={headingRef}
              className="text-[13rem] font-normal tracking-tight leading-none"
            >
              Thirtysixstudio
            </h1>
          </div>
         
        </div>
       
      </div>
      <div className="w-full h-screen  bg-red-500">
            <h1>Hello World</h1>
          </div>
    </>
  );
};

export default App;
