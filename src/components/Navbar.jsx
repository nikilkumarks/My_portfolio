import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const navLinks = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Projects", target: "projects" },
    { label: "Experience", target: "experience" },
    { label: "Contact", target: "contact" },
  ];

  /* Smooth scroll helper */
  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* Navbar blur on scroll */
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock background scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* Close menu on ESC */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling
          ? "bg-black/40 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-cyan-400"
        >
          Nikil<span className="text-white">.dev</span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.target}>
              <button
                onClick={() => scrollToSection(link.target)}
                className="relative group text-gray-300 hover:text-cyan-400 transition"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/60 backdrop-blur-lg"
          >
            <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-medium">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => {
                      scrollToSection(link.target);
                      setMenuOpen(false);
                    }}
                    className="text-gray-200 hover:text-cyan-400 transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
