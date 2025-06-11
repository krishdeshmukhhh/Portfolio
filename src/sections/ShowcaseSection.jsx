import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y:50,
                    opacity: 0
                },
                {
                    y:0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    }, []);

    return (
        <section id="word" ref ={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/krishproject1.png" alt="prepflow"/>
                        </div>
                        <div className="text-content">
                            <h2>A job interview preparation platform powered by Vapi AI Voice agents</h2>
                            <p className="text-white-50 md:text-xl">Built with Next.js for the user interface and backend logic, Firebase for authentication and data storage, styled with TailwindCSS and using Vapi's voice agents, PrepFlow is a website project designed to help you learn integrating AI models with your apps. The platform offers a sleek and modern experience for job interview preparation.</p>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="project-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img src="/images/krishproject2.png" alt="algo-sorter"/>
                            </div>
                            <h2>Sorting Algorithm Visualizer</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img src="/images/krishproject3.png" alt="doom-game"/>
                            </div>
                            <h2>Doom Style Game</h2>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
