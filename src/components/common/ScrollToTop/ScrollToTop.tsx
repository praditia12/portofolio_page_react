import React, { useEffect } from "react";

function ScrollToTop() {
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            const scrollPosition = scrollTop + windowHeight;
            const scrollPercent = scrollPosition / docHeight;

            if (scrollPercent > 0.5) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="fixed bottom-28 right-10">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="w-10 h-10 rounded-full bg-navy outline-2 outline-white flex justify-center items-center cursor-pointer"
                >
                    <svg
                        className="w-[25px] h-[25px] fill-white"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                    </svg>
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;
