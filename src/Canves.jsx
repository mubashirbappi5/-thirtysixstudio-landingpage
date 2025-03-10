import React, { useEffect, useRef, useState } from "react";
import canvasImg from "./assets/CanvesImg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Canves = ({ canvesdt }) => {
  const { startIndex, numImages, duration, size, top, left, zIndex } = canvesdt;
  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef(null);
  
  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  }, [index]);

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = canvasImg[index.value]; // Load first image from array

    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px";

      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
  }, [index]);
  return (
    <canvas
      className="absolute"
      data-scroll
      data-scroll-speed={Math.random().toFixed(2)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`,
      }}
      ref={canvasRef}
      id="canvas"
    ></canvas>
  );
};

export default Canves;
