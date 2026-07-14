import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Innovgeist",
    duration: "Jan 2026 – Jul 2026",
    location: "Remote",
    current: false,
    highlights: [
      "Developed full-stack web applications using React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB for multiple client projects.",
      "Built and maintained an education platform by developing responsive user interfaces, REST APIs, and database integration.",
      "Designed and developed a modern, responsive landing page with a focus on performance and user experience.",
      "Contributed to a furniture e-commerce website by implementing reusable UI components and integrating backend APIs.",
      "Worked on the DigiDukkan platform by shipping new features, improving performance, and collaborating with the team using Git.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "Express.js"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Small Fare",
    duration: "2025",
    location: "Remote",
    current: false,
    highlights: [
      "Developed and enhanced multi-step payment workflows for a SaaS application using React.js.",
      "Built responsive payment interfaces, including checkout, payment status, and transaction-related screens.",
      "Integrated REST APIs to process payment requests and display transaction information.",
      "Improved user experience by optimizing payment flow navigation and creating reusable React components.",
    ],
    tech: ["React.js","Tailwind CSS", "SaaS", "Reusable Components", "Git"],
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    duration: "Jul 2025 – Sep 2025",
    location: "Remote",
    current: false,
    highlights: [
      "Developed and deployed responsive client websites from requirements gathering to deployment.",
      "Focused on performance, scalability, and modern UI design throughout the delivery process.",
    ],
    tech: ["React.js","Tailwind CSS", "Responsive Design", "Performance", "Deployment"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-14 sm:py-20 bg-black text-white"
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-10 lg:px-24 relative z-10 flex flex-col items-center">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center justify-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl lg:text-[10rem] font-black text-white tracking-tighter uppercase leading-none"
          >
            Experience<span className="text-white/20">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-lg font-medium max-w-2xl px-4"
          >
            Professional journey building scalable, production-ready web applications across full-stack and frontend roles.
          </motion.p>
        </div>

        {/* Floating Connected Timeline */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col gap-10 sm:gap-16">

          {/* Continuous Gradient Line */}
          <div className="absolute left-[18px] sm:left-[30px] top-4 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent -z-10" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex items-start gap-4 sm:gap-12 group"
            >

              {/* Timeline Indicator - Scaled for Mobile */}
              <div className="relative z-10 flex-shrink-0 mt-5 sm:mt-8 ml-[-2px]">
                <div
                  className={`w-9 h-9 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-black border-[2px] sm:border-[3px] transition-colors duration-500
                    ${exp.current
                      ? "border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      : "border-gray-800 group-hover:border-gray-600"
                    }`}
                >
                  <div className={`w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full ${exp.current ? "bg-white animate-pulse" : "bg-gray-700"}`} />
                </div>
              </div>

              {/* Seamless Floating Card - Adjusted for Mobile Size */}
              <div className="flex-1 flex flex-col bg-[#050505] hover:bg-[#09090b] border border-white/[0.03] hover:border-white/[0.1] rounded-[1.5rem] sm:rounded-[2.5rem] p-5 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm sm:text-lg font-bold text-gray-500 uppercase tracking-widest">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.05] px-4 py-1.5 rounded-full w-fit">
                      {exp.current && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                        {exp.duration}
                      </span>
                    </div>
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="text-xs sm:text-base text-gray-500 font-normal leading-relaxed flex items-start gap-3 sm:gap-4">
                      <span className="w-1 h-1 rounded-full bg-gray-700 mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/[0.03]">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] sm:text-[11px] font-black text-gray-400 uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05]"
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
