import { useState } from "react";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  const [darkMode] = useState(true);

  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen w-full flex items-center justify-center px-5 sm:px-10 xl:px-24 overflow-hidden ${
        darkMode ? "bg-[#0e0e10] text-white" : "bg-white text-black"
      }`}
    >
      {/* Ambient Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-indigo-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-3xl animate-ping" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Profile Image */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-60 animate-pulse" />
          <img
            src={profileImage}
            alt="Nikil Kumar K S"
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-indigo-500 shadow-2xl"
          />
        </motion.div>

        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          {/* Badge */}
          <motion.span
            className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-600 text-sm font-medium tracking-wide"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            💻 Full-Stack Developer
          </motion.span>

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I build{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              <Typewriter
                words={[
                  "scalable web apps.",
                  "secure backend APIs.",
                  "full-stack products.",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Hi, I’m <strong>Nikil Kumar K S</strong> — a full-stack developer
            specializing in building end-to-end web applications using
            <strong> React, Node.js, Express, and databases</strong>. I focus on
            performance, scalability, and real-world problem solving.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-medium shadow-lg transition-all"
            >
              View Projects
            </button>

            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-white/10 transition-all"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="mt-8 flex justify-center md:justify-start gap-6 text-xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="https://github.com/nikilkumarks"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nikil-kumar-k-s-90434a2b1/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 text-indigo-500 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        aria-label="Scroll Down"
      >
        <FaArrowDown className="text-2xl" />
      </motion.button>
    </section>
  );
};

export default Hero;
