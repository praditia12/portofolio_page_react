const About = () => {
    return (
        <section id="About" className="flex flex-col">
            <h2 className="font-extrabold text-navy text-7xl leading-relaxed">about.</h2>
            <div className="text-navy text-xl leading-[44px] mt-8">
                I have a background in Information Technology and a strong interest in frontend development for both web
                and mobile platforms. With an educational foundation in technology and experience in small to
                hight-scale projects, both personal and team-based. I enjoy the challenge of turning designs into
                functional and responsive code, while ensuring that users feel comfortable and at ease when using the
                websites or applications I create.
            </div>
            <div className="mt-16 ml-40">
                <div className="relative">
                    <div className="absolute w-[13px] h-[13px] -left-16 top-3 bg-navy rounded-[6.5px]" />
                    <div className="font-semibold text-navy text-2xl leading-10">2022 - Present</div>
                    <div className="font-normal text-navy text-xl leading-[44px] mt-4">
                        <div className="font-semibold">Operational Staff - PT Protonema</div>
                        <div className="font-normal text-navy text-xl tracking-[0] leading-[44px]">
                            At PT Protonema, I've had the opportunity to contribute across various teams and projects.
                            I've been assigned as a System Administrator, Frontend Developer, and currently serve as an
                            Application Support (Operational).
                            <br />
                            This role has enriched my understanding of IT infrastructure management, user interface
                            development, and application support in production environments.
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 ml-40">
                <div className="relative mb-16">
                    <div className="absolute w-[13px] h-[13px] -left-16 top-3 bg-navy rounded-[6.5px]" />
                    <div className="font-semibold text-navy text-2xl leading-10">2023 - Present</div>
                    <div className="font-normal text-navy text-xl leading-[44px] mt-4">
                        <div className="font-semibold">Computer Science - Cakrawala University</div>
                        <div className="font-normal text-navy text-xl tracking-[0] leading-[44px]">
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
