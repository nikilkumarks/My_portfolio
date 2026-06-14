import { useState } from "react";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/profile.jpg";

const Hero = () => {

  const scrollToNext = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-12 px-5 sm:px-10 xl:px-24 overflow-hidden bg-black text-white"
    >
      {/* 📐 Global Monochrome Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.02]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Text Area (Left on desktop) */}
        <div className="text-center md:text-left max-w-xl">
          {/* Badge & Availability */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
            <motion.span
              className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 text-xs font-bold tracking-[0.2em] uppercase"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Full-Stack Developer
            </motion.span>
            
            <motion.div 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Available for Remote & Freelance
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I build{" "}
            <span className="text-gray-400">
              <Typewriter
                words={[
                  "scalable web apps.",
                  "secure backend APIs.",
                  "full-stack products.",
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I’m a passionate <strong className="text-white">Full-Stack Developer</strong>
            specializing in building scalable web applications with
            <strong className="text-white"> MERN Stack</strong>. I focus on bridging the gap
            between clean architecture and intuitive user experiences.
          </motion.p>

          {/* Minimal Stats */}
          <motion.div
            className="mt-8 grid grid-cols-2 gap-4 border-l-2 border-white/10 pl-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">5+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projects Built</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">MERN</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Tech Stack</p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center md:justify-start gap-4"
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
              className="bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-xl font-bold tracking-tight transition-all duration-300 transform hover:scale-[1.02] border border-white active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              View Projects
            </button>

            <a
              href="/Resume.pdf"
              download
              className="px-10 py-4 bg-white/[0.03] border border-white/10 backdrop-blur-sm rounded-xl font-bold tracking-tight text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="mt-12 flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: <FaGithub />, link: "https://github.com/nikilkumarks" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/nikil-kumar-k-s-90434a2b1/" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 shadow-sm"
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image (Right on desktop) */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={profileImage}
            alt="Nikil Kumar K S"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl object-cover border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] relative z-10"
          />
          {/* Decorative frame for image */}
          <div className="absolute -inset-4 border border-white/5 rounded-3xl -z-10 opacity-50"></div>
        </motion.div>
      </motion.div>

      {/* Scroll Down */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 text-gray-500 hover:text-white animate-bounce transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        aria-label="Scroll Down"
      >
        <FaArrowDown className="text-xl" />
      </motion.button>
    </section>
  );
};

export default Hero;
