import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Small Fare",
    duration: "Jul 2025 – Sep 2025",
    description: "Built responsive UI using React and Tailwind CSS for Saas product.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-[#0e0e10] text-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)" }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-pink-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
              <p className="text-purple-300">{exp.company}</p>
              <p className="text-sm text-pink-400 italic mb-2">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
