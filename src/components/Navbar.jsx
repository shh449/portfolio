import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const navLinks = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-gray-900/70"
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <h1 className="text-xl font-bold tracking-widest text-white">
                    Shahzar | Frontend Dev
                </h1>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <ScrollLink
                                to={link}
                                smooth={true}
                                duration={500}
                                className="text-white font-medium cursor-pointer relative group"
                            >
                                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent transition-all duration-500 group-hover:animate-text">
                                    {link.charAt(0).toUpperCase() + link.slice(1)}
                                </span>
                            </ScrollLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col bg-gray-900/95 backdrop-blur-md gap-4 p-6">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <ScrollLink
                                to={link}
                                smooth={true}
                                duration={500}
                                onClick={() => setMenuOpen(false)}
                                className="block text-white text-lg font-medium hover:text-purple-400 transition"
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;