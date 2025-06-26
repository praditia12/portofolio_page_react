import Button from "../../common/Button/Button";

const Hero = () => {
    return (
        <section
            id="Home"
            className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 pt-24 px-4 md:px-8"
        >
            {/* Left Content */}
            <div className="flex flex-col gap-y-3 font-medium text-center lg:text-left">
                <p className="text-xl md:text-2xl text-navy">Hello, I'm Adit,</p>

                <p className="flex flex-col text-5xl md:text-6xl lg:text-8xl font-black">
                    <span className="text-orange">Front End</span>
                    <span className="text-navy">Developer</span>
                </p>

                <p className="text-base md:text-xl text-navy font-medium">
                    Based in Jakarta, Indonesia
                </p>

                <div className="button-cta mt-4">
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

            {/* Right Image */}
            <div className="relative w-full max-w-[360px] md:max-w-[460px]">
                <img
                    src="/images/foto-profile.png"
                    alt="hero-image"
                    className="w-full relative z-10"
                />
                <img
                    src="/images/illustrations/illustration_1.png"
                    alt="illustration1"
                    className="hidden md:block absolute top-0 right-5"
                />
                <img
                    src="/images/illustrations/illustration_2.png"
                    alt="illustration2"
                    className="hidden md:block absolute bottom-25 -left-5 z-20"
                />
            </div>
        </section>
    );
};

export default Hero;
