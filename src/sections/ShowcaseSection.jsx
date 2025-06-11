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
                            <img src="/images/krishproject1.png" alt="Ryde App Interface" />
                        </div>
                        <div className="text-content">
                            <h2>
                                A job interview preparation platform powered by Vapi AI Voice agents
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                Built with Next.js for the user interface and backend logic, Firebase for authentication and data storage, styled with TailwindCSS and using Vapi's voice agents, PrepFlow is a website project designed to help you learn integrating AI models with your apps. The platform offers a sleek and modern experience for job interview preparation.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div>
                                <img
                                    src="/images/krishproject2.png"
                                    alt="Library Management Platform"
                                />
                            </div>
                            <h2>Sorting Algorithm Visualizer</h2>
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div>
                                <img src="/images/krishproject3.png" alt="YC Directory App" />
                            </div>
                            <h2>Doom Style Game</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;