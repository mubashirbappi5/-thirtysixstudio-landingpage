import React from "react";
import Canves from "./Canves";
import data from "./assets/Data";

const App = () => {
  return (
    <>
     <h1 className="bg-red-400 text-white">Hello World</h1>
    <div className="w-full min-h-screen bg-black relative">
     
     
          {data[0].map((canvesdt, index) => (
            <Canves key={index} canvesdt={canvesdt} />
          ))}
       
    </div>
    <div className="w-full min-h-screen bg-black relative">
     
     
          {data[1].map((canvesdt, index) => (
            <Canves key={index} canvesdt={canvesdt} />
          ))}
       
    </div>
    <div className="w-full min-h-screen bg-black relative">
     
     
          {data[2].map((canvesdt, index) => (
            <Canves key={index} canvesdt={canvesdt} />
          ))}
       
    </div>
    </>
  );
};

export default App;
