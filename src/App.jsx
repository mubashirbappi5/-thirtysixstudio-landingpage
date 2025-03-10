import React from "react";
import Canves from "./Canves";
import data from "./assets/Data";

const App = () => {
  return (
    <div>
      <h1 className="bg-red-400 text-white">Hello World</h1>
      {data.map((item, index) => (
        <div key={index}>
          {item.map((canvesdt, index) => (
            <Canves key={index} canvesdt={canvesdt} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
