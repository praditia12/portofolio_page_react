import Button from "../../common/Button/Button";
import { Download } from "lucide-react";

const Hero = () => {
    const handleResumeClick = () => {
        window.open("https://drive.google.com/file/d/1fMibswZwzB-JpZXzz585-JMaI6fM2PEr/view?usp=sharing", "_blank");
    };

    return (
        <section id="Home">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32">
                {/* Left Content */}
                <div className="flex flex-col gap-4 text-center lg:text-left">
                    <p className="text-xl md:text-2xl text-navy font-medium">Hello, I'm Adit,</p>

                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-tight md:leading-none">
                        <span className="text-orange block">Front End</span>
                        <span className="text-navy block">Developer</span>
                    </h1>

                    <p className="text-base md:text-xl text-navy font-medium">Based in Jakarta, Indonesia</p>

                    <div className="mt-4 md:mt-6">
                        <Button
                            size="lg"
                            variant="primary"
                            leftIcon={<Download size={24} />}
                            onClick={handleResumeClick}
                            className="relative isolate overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-white/5 hover:before:opacity-30 before:transition-opacity before:duration-300 backdrop-blur-sm border-2 border-navy "
                        >
                            Resume
                        </Button>
                    </div>
                </div>

                <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg">
                    <img src="/images/foto-profile.png" alt="Adit Profile" className="w-full relative z-10" />

                    <img
                        src="/images/illustrations/illustration_1.png"
                        alt="Decoration"
                        className="hidden md:block hidden md:block absolute top-0 right-5"
                    />

                    <img
                        src="/images/illustrations/illustration_2.png"
                        alt="Decoration"
                        className="hidden md:block absolute bottom-25 -left-5 "
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
