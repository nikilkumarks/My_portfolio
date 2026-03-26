import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Innovgeist",
    duration: "Jan 2026 – Present",
    current: true,
    highlights: [
      "Leading frontend development for scalable SaaS applications.",
      "Built dynamic multi-step payment and dashboard flows using React.",
      "Improved performance using lazy loading and optimized rendering.",
      "Integrated REST APIs with clean state management architecture.",
      "Ensured pixel-perfect responsive UI across mobile and desktop.",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "REST APIs", "Git"],
  },
  {
    role: "Frontend Intern",
    company: "Small Fare",
    duration: "Jul 2025 – Sep 2025",
    current: false,
    highlights: [
      "Built reusable UI components using React and Tailwind CSS.",
      "Worked on a SaaS product with real users and production constraints.",
      "Collaborated with designers and backend engineers to ship features.",
      "Improved UI consistency and cross-device responsiveness.",
    ],
    tech: ["React", "Tailwind CSS", "SaaS", "Git"],
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    duration: "2025",
    current: false,
    highlights: [
      "Delivered custom websites and web apps for multiple clients.",
      "Managed full development lifecycle from requirement gathering to deployment.",
      "Focused on clean UI, responsiveness, and performance optimization.",
      "Deployed projects using Vercel, Netlify, and Render.",
    ],
    tech: ["React", "JavaScript", "Tailwind", "Deployment"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-32 bg-black text-white"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-24 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full flex flex-col gap-4 border-b border-white/10 pb-12 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl lg:text-[8rem] font-black text-white tracking-tighter"
          >
            Experience<span className="text-white/20">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg sm:text-xl font-light max-w-2xl"
          >
            My professional journey building scalable, production-ready web applications with modern frontend technologies.
          </motion.p>
        </div>

        {/* Elegant List Format (Unboxed) */}
        <div className="w-full flex flex-col">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 py-12 border-b border-white/10 hover:border-white/30 transition-colors duration-500"
            >
              
              {/* Left Column: Role & Company */}
              <div className="flex flex-col gap-3 lg:w-1/3 pt-2">
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {exp.company}
                  </h3>
                  {exp.current && (
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  )}
                </div>
                
                <h4 className="text-xl sm:text-2xl font-light text-gray-400">
                  {exp.role}
                </h4>

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600 mt-2">
                  {exp.duration}
                </span>
              </div>

              {/* Right Column: Description & Tags */}
              <div className="flex flex-col gap-8 lg:w-2/3">
                <ul className="space-y-4">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold tracking-wide px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-gray-400 group-hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
