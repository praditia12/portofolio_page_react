import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-navy text-white py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-base">&copy; {new Date().getFullYear()} Adit Praditia. All rights reserved.</p>

                <div className="flex gap-6 items-center">
                    <Link to="mailto:aditpraditiaaa@gmail.com" target="_blank" className="hover:text-orange transition">
                        Email
                    </Link>
                    <Link
                        to="https://linkedin.com/in/adit-praditia"
                        target="_blank"
                        className="hover:text-orange transition"
                    >
                        LinkedIn
                    </Link>
                    <Link to="https://github.com/praditia12" target="_blank" className="hover:text-orange transition">
                        GitHub
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
