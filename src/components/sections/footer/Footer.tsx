import { Link } from "react-router-dom";

const Footer = () => {
    const socialLinks = [
        {
            name: "Email",
            url: "mailto:aditpraditiaaa@gmail.com",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/adit-praditia/",
        },
        {
            name: "GitHub",
            url: "https://github.com/praditia12",
        },
    ];
    return (
        <footer className="bg-navy text-white py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-base">&copy; {new Date().getFullYear()} Adit Praditia. All rights reserved.</p>

                <div className="flex gap-6 items-center">
                    {socialLinks.map((link) => (
                        <Link key={link.name} to={link.url} target="_blank" className="hover:text-orange transition">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
