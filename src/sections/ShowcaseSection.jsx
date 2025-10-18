import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={rydeRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/resuscan.png" alt="Resuscan" />
                        </div>
                        <div className="text-content">
                            <h2>
                                <a
                                    href="https://github.com/krishdeshmukhhh/resuscan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-blue-400 transition"
                                >
                                    ResuScan is a full-stack, browser-based AI resume analyzer.</a>
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                ResuScan is a full-stack, browser-based AI resume analyzer. Upload your resume, match it against job descriptions, and receive AI-driven feedback on how to improve your chances - all without leaving the browser.

This project combines modern front-end tools like React, TypeScript, and Tailwind CSS with Puter.js, a powerful serverless SDK, to build a seamless, secure, and scalable app - no backend required.
                                 </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div>
                                <img
                                    src="/images/krishproject1.png"
                                    alt="Prepflow"
                                />
                            </div>
                            <h2>
                                <a
                                    href="https://github.com/krishdeshmukhhh/prepflow"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-blue-400 transition"
                                >
                                    A job interview preparation platform powered by Vapi AI Voice agents
                                </a>
                            </h2>
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div>
                                <img src="/images/converso.png" alt="Converso" />
                            </div>
                            <h2>
                                <a
                                    href="https://github.com/krishdeshmukhhh/converso"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-blue-400 transition"
                                >
                                    Converso is a voice-powered AI app built with Next.js and Vapi that helps users learn and explore topics through natural, real-time conversations.
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;