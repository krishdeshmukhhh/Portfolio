const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    // {
    //     name: "Testimonials",
    //     link: "#testimonials",
    // },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 6, suffix: "+", label: "Years of Experience" },
    { value: 15, suffix: "+", label: "Completed Projects" },
    { value: 4, suffix: ".0", label: "GPA" },
    // { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/debug.png",
        title: "Resourceful Problem Solver",
        desc: "Quick to diagnose and resolve issues using console logs, dev tools, and creative debugging strategies.",
    },
    {
        imgPath: "/images/fullstack.png",
        title: "Full-Stack Versatility",
        desc: "Experienced with frontend, backend, and cloud tools — building complete solutions from idea to deployment.",
    },
    {
        imgPath: "/images/growth.png",
        title: "Detail-Oriented Learner",
        desc: "Driven by curiosity and always seeking feedback to improve code quality, clarity, and performance.",
    },
];


const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Krish's leadership transformed DEV into a thriving community, connecting hundreds of students with industry professionals and creating meaningful opportunities for technical growth.",
        imgPath: "/images/dev_logo.png",
        logoPath: "/images/dev_logo.png",
        title: "President – Software Engineering Club (DEV), OSU",
        date: "August 2025 – Present",
        responsibilities: [
            "Provide strategic direction for 400+ member organization, teaming up with technical experts and industry professionals to deliver workshops on artificial intelligence, machine learning, computer vision, and emerging technologies.",
            "Collaborate with industry partners to coordinate events attracting 120+ attendees, demonstrating initiative to connect students with real-world technology applications.",
            "Website Maintainer, osu.dev (open-source): standardized Hugo content workflow with CI-driven deploys, reducing content update time by approximately 30% and improving sponsor and event pages supporting 20% increase in signups.",
        ],
    },
    {
        review: "Krish brought energy and adaptability to every class, making complex computer science concepts accessible to first-year students while continuously improving his teaching methods.",
        imgPath: "/images/ohio_logo_2.png",
        logoPath: "/images/ohio_logo_2.png",
        title: "Teaching Assistant – The Ohio State University",
        date: "August 2025 – Present",
        responsibilities: [
            "Showcased ability to adapt teaching approaches weekly for 100+ freshmen from diverse backgrounds and learning styles, demonstrating desire to learn effective pedagogical methodologies through autonomous learning and real-time feedback.",
            "Contributed to weekly survey classes to evaluate program effectiveness and improve student retention, applying creativity to refine curriculum based on student needs and data-driven insights.",
            "Provided one-on-one mentorship and office hours to support students struggling with foundational computer science concepts.",
        ],
    },
    {
        review: "Krish consistently supported peers with clarity and patience. His ability to explain complex topics helped students grasp difficult concepts and feel more confident.",
        imgPath: "/images/ohio_logo_2.png",
        logoPath: "/images/ohio_logo_2.png",
        title: "STEM Tutor – Amgen STEM Learning Center, OSU",
        date: "January 2025 – Present",
        responsibilities: [
            "Raised grades by approximately 1.0 letter for 12 students via tailored plans and spaced-retrieval practice, delivering 120+ hours of sessions that increased mock exam performance by up to 20%.",
            "Applied creativity to build lightweight tracking system using Sheets with progress flags and topic heatmaps to drive session planning, cutting re-teach time by approximately 25%.",
            "Simplified difficult concepts by using visual explanations and relatable analogies to accommodate different learning styles.",
        ],
    },
    
    
];

// const expCards = [
//     {
//         review: "Krish led DEV with exceptional vision, organizing high-impact events that connected students with industry professionals and created meaningful career development opportunities.",
//         imgPath: "/images/dev_logo.png",
//         logoPath: "/images/dev_logo.png",
//         title: "President – Software Engineering Club (DEV), OSU",
//         date: "August 2024 – Present",
//         responsibilities: [
//             "Scaled a student organization to 200+ active members, fostering a collaborative community for aspiring software engineers.",
//             "Organized career-focused workshops and industry speaker events, including a Google-partnered resume review session with 200+ attendees.",
//             "Built strategic partnerships with tech companies and campus organizations like Code for Community to create networking and professional development opportunities.",
//         ],
//     },
//     {
//         review: "Krish consistently supported peers with clarity and patience. His ability to explain complex topics helped students grasp difficult concepts and feel more confident.",
//         imgPath: "/images/ohio_logo_2.png",
//         logoPath: "/images/ohio_logo_2.png",
//         title: "Group Tutor – Amgen STEM Learning Center, OSU",
//         date: "January 2025 – Present",
//         responsibilities: [
//             "Led collaborative tutoring sessions in Mathematics and Physics, helping students work through challenging coursework.",
//             "Simplified difficult concepts by using visual explanations and relatable analogies.",
//             "Adapted teaching strategies based on individual learning styles, promoting active participation and group problem-solving.",
//         ],
//     },
    

    // {
    //     review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    //     imgPath: "/images/exp2.png",
    //     logoPath: "/images/logo2.png",
    //     title: "Full Stack Developer",
    //     date: "June 2020 - December 2023",
    //     responsibilities: [
    //         "Led the development of Docker's web applications, focusing on scalability.",
    //         "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
    //         "Contributed to open-source projects that were used with the Docker ecosystem.",
    //     ],
    // },
    // {
    //     review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    //     imgPath: "/images/exp3.png",
    //     logoPath: "/images/logo3.png",
    //     title: "React Native Developer",
    //     date: "March 2019 - May 2020",
    //     responsibilities: [
    //         "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
    //         "Improved app performance and user experience through code optimization and testing.",
    //         "Coordinated with the product team to implement features based on feedback.",
    //     ],
    // },
// ];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "",
        mentions: "",
        review:
            "",
        imgPath: "/images/client1.png",
    },
    {
        name: "",
        mentions: "",
        review:
            "",
        imgPath: "/images/client3.png",
    },
    {
        name: "",
        mentions: "",
        review:
            "",
        imgPath: "/images/client2.png",
    },
    {
        name: "",
        mentions: "",
        review:
            "",
        imgPath: "/images/client5.png",
    },
    {
        name: "",
        mentions: "",
        review:
            "",
        imgPath: "/images/client4.png",
    },
    {
        name: "",
        mentions: "",
        review:
            "",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    // {
    //     name: "insta",
    //     url: "",
    //     imgPath: "/images/insta.png",
    // },
    // {
    //     name: "fb",
    //     url: "",
    //     imgPath: "/images/fb.png",
    // },
    {
        name: "github",
        url: "https://github.com/krishdeshmukhhh",
        imgPath: "/images/github.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/krish-deshmukh/",
        imgPath: "/images/linkedin.png",
    },
    {
        name: "x",
        url: "https://x.com/DeshmukhKrish",
        imgPath: "/images/x.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};