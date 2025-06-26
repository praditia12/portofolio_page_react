import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparant shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <div className="text-xl font-bold text-navy">Adit Praditia</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-navy">
          <HashLink to="#Home" smooth className="hover:text-orange transition">
            Home
          </HashLink>
          <HashLink to="#About" smooth className="hover:text-orange transition">
            About
          </HashLink>
          <HashLink to="#Work" smooth className="hover:text-orange transition">
            Work
          </HashLink>
          
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 ml-4 items-center">
            <Link to="https://medium.com/@adit.praditia" target="_blank">
              <img src="/icon/medium.png" alt="medium" className="w-6" />
            </Link>
            <Link to="https://www.linkedin.com/in/adit-praditia/" target="_blank">
              <img src="/icon/mdi_linkedin.png" alt="linkedin" className="w-6" />
            </Link>
            <Link to="https://github.com/praditia12" target="_blank">
              <img src="/icon/mdi_github.png" alt="github" className="w-6" />
            </Link>
          </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-navy"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white shadow">
          <HashLink to="#Home" smooth onClick={() => setIsOpen(false)}>
            Home
          </HashLink>
          <HashLink to="#About" smooth onClick={() => setIsOpen(false)}>
            About
          </HashLink>
          <HashLink to="#Work" smooth onClick={() => setIsOpen(false)}>
            Work
          </HashLink>
          <div className="flex gap-4 mt-2 items-center">
            <Link to="https://medium.com/@adit.praditia" target="_blank">
              <img src="/icon/medium.png" alt="medium" className="w-6" />
            </Link>
            <Link to="https://www.linkedin.com/in/adit-praditia/" target="_blank">
              <img src="/icon/mdi_linkedin.png" alt="linkedin" className="w-6" />
            </Link>
            <Link to="https://github.com/praditia12" target="_blank">
              <img src="/icon/mdi_github.png" alt="github" className="w-6" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
