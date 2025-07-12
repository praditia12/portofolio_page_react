import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const navLinks = [
        { label: "Home", to: "#Home" },
        { label: "About", to: "#About" },
        { label: "Work", to: "#Work" },
        { label: "Contact", to: "#Contact" },
    ];

    const socialLinks = [
        {
            icon: "/icon/medium.png",
            alt: "medium",
            url: "https://medium.com/@adit.praditia",
        },
        {
            icon: "/icon/mdi_linkedin.png",
            alt: "linkedin",
            url: "https://www.linkedin.com/in/adit-praditia/",
        },
        {
            icon: "/icon/mdi_github.png",
            alt: "github",
            url: "https://github.com/praditia12",
        },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        if (id) setActiveSection(id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent transition-colors duration-300 backdrop-blur-md shadow z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold text-navy">Adit Praditia</div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center text-navy">
                    {navLinks.map((link) => (
                        <HashLink
                            key={link.to}
                            to={link.to}
                            smooth
                            className={`transition-colors ${
                                activeSection === link.to.slice(1) ? "text-orange font-semibold" : "hover:text-orange"
                            }`}
                        >
                            {link.label}
                        </HashLink>
                    ))}
                </nav>

                {/* Social Desktop */}
                <div className="hidden md:flex gap-4 ml-4 items-center">
                    {socialLinks.map((social) => (
                        <Link key={social.alt} to={social.url} target="_blank" rel="noopener noreferrer">
                            <img src={social.icon} alt={social.alt} className="w-6" />
                        </Link>
                    ))}
                </div>

                {/* Hamburger */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-transparent shadow">
                    {navLinks.map((link) => (
                        <HashLink key={link.to} to={link.to} smooth onClick={() => setIsOpen(false)}>
                            {link.label}
                        </HashLink>
                    ))}
                    <div className="flex gap-4 mt-2 items-center">
                        {socialLinks.map((social) => (
                            <Link key={social.alt} to={social.url} target="_blank" rel="noopener noreferrer">
                                <img src={social.icon} alt={social.alt} className="w-6" />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
