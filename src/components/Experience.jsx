import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer Intern",
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
    role: "Frontend Developer Intern",
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
    role: "Freelance Web Developer",
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
      className="relative py-28 px-6 sm:px-10 lg:px-20 bg-[#0e0e10] text-white min-h-screen overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-6
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          text-transparent bg-clip-text"
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-20"
        >
          My professional journey building scalable, production-ready web
          applications with modern frontend technologies.
        </motion.p>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-6 space-y-14">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <span
                className={`absolute -left-[11px] top-2 w-5 h-5 rounded-full shadow-md 
                ${exp.current
                    ? "bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500"
                  }`}
              />

              {/* Card */}
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-blue-400">
                      {exp.role}
                    </h3>

                    {exp.current && (
                      <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 animate-pulse">
                        Present
                      </span>
                    )}
                  </div>

                  <span className="text-sm text-pink-400 italic">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-purple-300 mb-4">{exp.company}</p>

                {/* Highlights */}
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base">
                  {exp.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300 hover:bg-white/20 transition"
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
