import { useState } from "react";
import { FaArrowDown, FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/profile.jpg"; // relative path from Hero.jsx


const Hero = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <section
      id="hero"
      className={`relative min-h-screen w-full px-6 sm:px-10 md:px-20 flex flex-col justify-center items-center transition-colors duration-300 ${
        darkMode ? "bg-[#0e0e10] text-white" : "bg-white text-black"
      }`}
    >
      {/* Toggle Theme
      <button
        className="absolute top-6 right-6 z-50 p-2 rounded-full bg-gray-700 text-white dark:bg-gray-200 dark:text-black"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button> */}

      {/* Background Blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-indigo-500 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-600 opacity-20 rounded-full blur-3xl animate-ping" />

      {/* Hero Content */}
      <motion.div
        className="z-10 flex flex-col md:flex-row items-center gap-10 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover shadow-md border-4 border-indigo-500"
        />

        {/* Text Block */}
        <div className="max-w-xl">
          <motion.span
            className="text-sm sm:text-base px-4 py-1 bg-indigo-600 rounded-full font-medium tracking-wide inline-block mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            🚀 Frontend Developer
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I craft&nbsp;
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              <Typewriter
                words={["fast UIs.", "interactive apps.", "modern websites."]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-base sm:text-lg text-gray-300 dark:text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Hi, I'm <strong>Nikil Kumar K S</strong> — a React.js developer building high-performance interfaces with modern design systems and user-focused principles.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="#projects"
              className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-medium transition-all shadow-md"
            >
              View Projects
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              download="resume.pdf"
              rel="noreferrer"
              className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-white/10 transition-all"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
          </motion.div>
        </div>
      </motion.div>

      {/* Visitor Counter */}
      <div className="mt-10 text-sm text-gray-400">
        👁️ <span id="visitorCount">Loading visitors...</span>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        className="mt-10 animate-bounce text-indigo-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <FaArrowDown className="text-2xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
