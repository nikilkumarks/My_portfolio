import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", target: "home" },
    // { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Experience", target: "experience" },
    // { label: "Contact", target: "contact" },
  ];

  /* ScrollSpy Logic - Highlight active section */
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.target);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* Smooth scroll helper */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    // Close menu first if open
    setMenuOpen(false);

    // Dynamic offset or direct scroll depending on section
    setTimeout(() => {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 pointer-events-none"
    >
      {/* 🏛️ Architectural Tile Bar (Desktop) */}
      <nav className="hidden md:flex max-w-7xl mx-auto px-6 py-6 items-center justify-between pointer-events-auto">
        {/* Logo Tile */}
        <motion.button
          onClick={() => scrollToSection("home")}
          className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-xl font-black text-xl hover:bg-indigo-500 hover:text-white transition-all shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          N
        </motion.button>

        {/* Navigation Tiles */}
        <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 rounded-2xl shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollToSection(link.target)}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeSection === link.target
                ? "bg-white/10 text-white border border-white/10 shadow-sm"
                : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Action Tile */}
        <motion.button
          onClick={() => scrollToSection("contact")}
          className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl transition-all border ${activeSection === "contact"
            ? "bg-white text-black border-white"
            : "bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-500/50"
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch
        </motion.button>
      </nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[100] px-6 py-4 flex justify-between items-center text-white pointer-events-auto bg-main-bg/80 backdrop-blur-md border-b border-glass-border">
        <button
          onClick={() => scrollToSection("home")}
          className="h-10 w-10 flex items-center justify-center bg-white text-black rounded-lg font-black"
        >
          N
        </button>
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="group flex flex-col items-end gap-1.5 p-2"
          whileHover={{ scale: 1.1 }}
        >
          <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "w-8 rotate-45 translate-y-2" : "w-8"}`} />
          <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : "w-5"}`} />
          <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "w-8 -rotate-45 -translate-y-2.5" : "w-8"}`} />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center pointer-events-auto"
          >
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.target}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.target)}
                    className={`text-4xl font-black uppercase tracking-tighter transition-all duration-300 ${activeSection === link.target ? "text-white scale-110" : "text-gray-500 hover:text-gray-300"
                      }`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="mt-12 px-12 py-5 bg-indigo-600 text-white rounded-2xl text-lg font-black uppercase tracking-widest shadow-2xl"
              >
                Let's Talk
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
