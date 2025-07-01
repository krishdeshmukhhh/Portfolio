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
                            <img src="/images/converso.png" alt="Converso" />
                        </div>
                        <div className="text-content">
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
                            <p className="text-white-50 md:text-xl">
                                Built with Next.js for a seamless frontend and backend experience, Converso leverages Supabase for real-time data handling, Clerk for secure authentication, and Vapi’s AI voice agents for natural language interactions. Styled with TailwindCSS and enhanced with shadcn/ui components, Converso is an AI-powered platform that transforms the way users engage in meaningful conversations to learn new topics, practice interviews, or explore ideas through voice-based interactions.
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
                                <img src="/images/krishproject2.png" alt="Sorting Algorithm Visualizer" />
                            </div>
                            <h2>
                                <a
                                    href="https://github.com/krishdeshmukhhh/SortingAlgorithmVisualizer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-blue-400 transition"
                                >
                                    Sorting Algorithm Visualizer
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