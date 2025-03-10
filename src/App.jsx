import React, { useEffect } from "react";
import Canves from "./Canves";
import data from "./assets/Data";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();

   
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-black relative">
        {/* {data[0].map((canvesdt, index) => (
          <Canves key={index} canvesdt={canvesdt} />
        ))} */}

        <div className="w-full h-screen bg-white">
          <nav className="w-full h-20 flex items-center justify-between px-10">
            <div className="text-black text-2xl font-semibold">Thirtysixstudio</div>
            <ul className="flex gap-8">
              {["Home", "About", "Services", "Projects", "Contact"].map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase()}`} className="text-black hover:text-gray-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="textcontainer w-full px-[20%] bg-red-500">
           <div className="text w-[40%]">
            <h3 className="text-4xl leading-[1.4]">
            At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.
            </h3>
            <p className="mt-10 text-md w-[80%]">
            We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
            </p>
            <p className="mt-10  text-xl">Scroll</p>
           </div>
          </div>

        </div>
      </div>
      
    </>
  );
};

export default App;
