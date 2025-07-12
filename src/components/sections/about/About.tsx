const About = () => {
    return (
        <section id="About" className="py-12 md:py-24">
            <div className="flex flex-col px-4 md:px-12 lg:px-32">
                <h2 className="font-extrabold text-navy text-5xl md:text-6xl lg:text-7xl leading-snug">about.</h2>

                <div className="text-navy text-base md:text-lg lg:text-xl leading-relaxed mt-6 md:mt-8">
                    I have a background in Information Technology and a strong interest in frontend development for both
                    web and mobile platforms. With an educational foundation in technology and experience in small to
                    high-scale projects, both personal and team-based. I enjoy the challenge of turning designs into
                    functional and responsive code, while ensuring that users feel comfortable and at ease when using
                    the websites or applications I create.
                </div>

                {/* PT Protonema */}
                <div className="mt-12 md:mt-16 md:ml-20 relative">
                    <div className="absolute right-1 md:-left-16 top-1 text-xl md:text-2xl">💼</div>
                    <div className="font-semibold text-navy text-lg md:text-2xl leading-10">2022 - Present</div>
                    <div className="font-normal text-navy text-base md:text-lg lg:text-xl leading-relaxed mt-2 md:mt-4">
                        <div className="font-semibold">Operational Staff - PT Protonema</div>
                        <div className="mt-2">
                            At PT Protonema, I've had the opportunity to contribute across various teams and projects.
                            I've been assigned as a System Administrator, Frontend Developer, and currently serve as an
                            Application Support (Operational). <br />
                            This role has enriched my understanding of IT infrastructure management, user interface
                            development, and application support in production environments.
                        </div>
                    </div>
                </div>

                {/* Universitas Cakrawala */}
                <div className="mt-12 md:mt-16 md:ml-20 relative">
                    <div className="absolute right-1 md:-left-16 top-1 text-xl md:text-2xl">🎓</div>
                    <div className="font-semibold text-navy text-lg md:text-2xl leading-10">2023 - Present</div>
                    <div className="font-normal text-navy text-base md:text-lg lg:text-xl leading-relaxed mt-2 md:mt-4">
                        <div className="font-semibold">Computer Science - Cakrawala University</div>
                        <div className="mt-2">
                            As a Computer Science student, I've been learning not only the technical aspects of
                            application development, but also gaining knowledge in computer networking, UI/UX,
                            information security, and other disciplines that build a well-rounded understanding of
                            modern digital technology.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
