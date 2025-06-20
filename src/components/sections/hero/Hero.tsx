import Button from "../../common/Button/Button";

const Hero = () => {
    return (
        <section id="Home" className="flex flex-row justify-between items-center py-5">
            <div className="flex flex-col gap-y-3 font-medium">
                <p className="text-2xl text-navy">Hello, I'm Adit,</p>
                <p className="flex flex-col text-8xl font-black leading-none">
                    <span className="text-orange">Front End</span>
                    <span className="text-navy">Developer</span>
                </p>
                <p className="text-2xl text-navy font-medium mt-3">Based in Jakarta, Indonesia</p>
                <div className="button-cta mt-6">
                    <Button
                        onClick={() =>
                            window.open(
                                "https://drive.google.com/file/d/1fMibswZwzB-JpZXzz585-JMaI6fM2PEr/view?usp=sharing",
                                "_blank"
                            )
                        }
                    >
                        Resume
                    </Button>
                </div>
            </div>
            <div className="relative">
                <img src="/images/foto-profile.png" alt="hero-image" width={460} />
                <img
                    src="/images/illustrations/illustration_1.png"
                    alt="illustration"
                    className="absolute top-0 right-5"
                />
                <img
                    src="/images/illustrations/illustration_2.png"
                    alt="illustration"
                    className="absolute bottom-25 -left-5"
                />
            </div>
        </section>
    );
};

export default Hero;
