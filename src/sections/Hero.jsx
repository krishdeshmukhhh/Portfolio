import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import TargetCursor from '../components/TargetCursor.jsx';
import { useState, useEffect } from "react";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            }
        )
    })

    const [hasFinePointer, setHasFinePointer] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
            setHasFinePointer(false);
            return;
        }

        const mqFine = window.matchMedia("(pointer: fine)");
        const mqCoarse = window.matchMedia("(pointer: coarse)");

        const isTouchCapable = () => {
            // common touch checks
            if (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) return true;
            if ('ontouchstart' in window) return true;
            if (mqCoarse.matches) return true;
            return false;
        };

        const update = () => {
            const fine = !!mqFine.matches;
            const touch = isTouchCapable();
            setHasFinePointer(fine && !touch);
        };

        update();

        const listener = () => update();
        if (mqFine.addEventListener) {
            mqFine.addEventListener("change", listener);
            mqCoarse.addEventListener("change", listener);
        } else {
            mqFine.addListener(listener);
            mqCoarse.addListener(listener);
        }

        // If a touchstart happens, treat the device as touch-capable
        const onFirstTouch = () => {
            update();
            window.removeEventListener("touchstart", onFirstTouch);
        };
        window.addEventListener("touchstart", onFirstTouch, { passive: true, once: true });
        window.addEventListener("resize", listener);

        return () => {
            if (mqFine.removeEventListener) {
                mqFine.removeEventListener("change", listener);
                mqCoarse.removeEventListener("change", listener);
            } else {
                mqFine.removeListener(listener);
                mqCoarse.removeListener(listener);
            }
            window.removeEventListener("touchstart", onFirstTouch);
            window.removeEventListener("resize", listener);
        };
    }, []);

    return (


            
        
        <section id="hero" className="relative overflow-hidden">
            {hasFinePointer && (
                <TargetCursor spinDuration={2} hideDefaultCursor={true} />
            )}

            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background"/>
            </div>
            

            <div className="hero-layout">
            {/*LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-2 rounded-full bg-white-50"
                                                />

                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I'm Krish, a developer based in the US with a passion for code.
                        </p>
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12 cursor-target"
                            id="button"
                            text="Check out my work"
                        />
                    </div>
                </header>
            {/*RIGHT: 3D MODEL */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience/>
                    </div>
                </figure>

            </div>

            <AnimatedCounter />

        </section>

    )
}
export default Hero
