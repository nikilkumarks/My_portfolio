import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Small Fare",
    duration: "Jul 2025 – Sep 2025",
    highlights: [
      "Built responsive and reusable UI components using React and Tailwind CSS.",
      "Worked on a SaaS product with real users and production constraints.",
      "Collaborated with designers and backend engineers to ship features.",
      "Improved UI performance and consistency across devices.",
    ],
    tech: ["React", "Tailwind CSS", "SaaS", "Git"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2025 – 2025",
    highlights: [
      "Delivered custom websites and web apps for multiple clients.",
      "Handled complete development lifecycle from requirement gathering to deployment.",
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
      {/* Background accents */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-purple-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 blur-3xl rounded-full" />

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
          My professional journey across internships and freelance work, focused
          on building scalable, production-ready web applications.
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
              <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md" />

              {/* Card */}
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">
                    {exp.role}
                  </h3>
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
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300"
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
