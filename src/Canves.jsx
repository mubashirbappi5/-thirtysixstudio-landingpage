import React, { useEffect, useRef, useState } from 'react';
import canvasImg from './assets/CanvesImg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Canves = () => {
    const [index, setIndex] = useState({value: 150});
    const canvasRef = useRef(null);
    useGSAP(()=>{
        gsap.to(index, {
            value:700,
            duration:3,
            repeat: -1,
            ease:'linear',
            onUpdate:()=>{
                setIndex({value: Math.round(index.value)})
            }
        })
    },[index])


    useEffect(() => {
        console.log(canvasImg);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const img = new Image();
        img.src = canvasImg[index.value]; // Load first image from array
        
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    },[index])
    return (
        <canvas ref={canvasRef} id="canvas">

        </canvas>
    );
};

export default Canves;