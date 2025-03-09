import React, { useEffect, useRef } from 'react';
import canvasImg from './assets/CanvesImg';
const Canves = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        console.log(canvasImg);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const img = new Image();
        img.src = canvasImg[90]; // Load first image from array
        
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    },[])
    return (
        <canvas ref={canvasRef} id="canvas">

        </canvas>
    );
};

export default Canves;