import CardProject from "../../common/Card/Card";

const Work = () => {
    const projects = [
        {
            title: "Paradina Web App",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.",
            image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "October 2023 - January 2024",
        },
        {
            title: "Khidma Mobile App",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.",
            image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
