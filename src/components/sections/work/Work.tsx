import CardProject from "../../common/Card/Card";

const Work = () => {
    const projects = [
        {
            title: "Paradina Web App",
            description:
                "Developed responsive web interfaces using React.js (TypeScript) and Material UI. Collaborated with UI/UX and backend teams to ensure seamless API integration and pixel-perfect implementation. Focused on performance, code quality, and delivering a smooth user experience.",
            image: "/images/projects/paradina-cover.png",
            date: "October 2023 - January 2024",
        },
        {
            title: "Company Web PT Protonema",
            description:
                "Developed a responsive and modern corporate website, built with React.js and Tailwind CSS. I contributed to both the UI/UX design process and frontend coding implementation. I was responsible for designing intuitive and engaging interfaces, then translating them into efficient React components with Tailwind CSS styling.",
            image: "/images/projects/company-web-cover.png",
            date: "December 2023 - January 2024",
        },
        {
            title: "Khidma Mobile App",
            description:
                "Built intuitive mobile app screens and flows using Flutter based on approved design specifications. Handled UI implementation, API integration, and thorough testing to ensure a stable and responsive app. Prioritized usability and smooth interaction across different devices.",
            image: "/images/projects/khidma-cover.png",
            date: "January 2024 - May 2024",
        },
    ];

    return (
        <section id="Work" className="py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col">
                {/* Heading */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange leading-tight">work.</h2>

                {/* Intro Text */}
                <p className="text-navy text-base md:text-lg lg:text-xl mt-6 leading-relaxed">
                    My main focus is building intuitive and responsive user interfaces, with user experience as a top
                    priority. Here are some selected works that reflect my passion and skills in Frontend Development.
                </p>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <CardProject
                            key={index}
                            image={project.image}
                            date={project.date}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
