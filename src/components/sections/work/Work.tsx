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
            title: "Khidma Mobile App",
            description:
                "Built intuitive mobile app screens and flows using Flutter based on approved design specifications. Handled UI implementation, API integration, and thorough testing to ensure a stable and responsive app. Prioritized usability and smooth interaction across different devices.",
            image: "/images/projects/khidma-cover.png",
            date: "January - May 2024",
        },
    ];
    return (
        <section id="Work" className="flex flex-col">
            <h2 className="font-extrabold text-orange text-7xl leading-relaxed">work.</h2>
            <div className="text-navy text-xl leading-[44px] mt-8 max-w-4xl">
                My main focus is building intuitive and responsive user interfaces, with user experience as a top
                priority. Here are some selected works that reflect my passion and skills in Frontend Development.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
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
        </section>
    );
};

export default Work;
