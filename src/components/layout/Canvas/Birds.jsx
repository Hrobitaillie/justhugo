import { useRef, useEffect } from "react";

export default function Birds(){
    const myRef = useRef(null)
    useEffect(() => {

        VANTA.BIRDS({
            el: "#backgroundCanvas",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color1: 0xf2bc62,
            color2: 0xbe7332,
            colorMode: "lerpGradient",
            birdSize: 1.80,
            wingSpan: 21.00,
            speedLimit: 3.00,
            separation: 79.00,
            alignment: 50.00,
            cohesion: 1.00,
            quantity: 1.00,
            backgroundAlpha: 0.00
        })
    }, [])

    
    return (
        <section className="absolute left-0 top-0 h-screen w-screen -z-10">
            <div ref={myRef} id="backgroundCanvas" className=" h-full w-full">
            </div>
        </section>
    )
}