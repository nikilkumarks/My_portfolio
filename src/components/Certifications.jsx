import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "React Developer Certification",
    provider: "Coursera",
    date: "June 2024",
    description: "Completed a professional certification in React fundamentals, hooks, and routing.",
  },
  {
    title: "Full Stack Web Development",
    provider: "freeCodeCamp",
    date: "March 2024",
    description: "Built projects using HTML, CSS, JavaScript, Node.js, and databases.",
  },
];

const Certification = () => {
  return (
    <section id="certification" className="py-24 px-6 bg-section-bg text-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-white">
          Certifications
        </h2>

        <div className="space-y-8">  
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, borderColor: "rgba(99, 102, 241, 0.4)" }}
              transition={{ duration: 0.4 }}
              className="bg-card-bg backdrop-blur-sm rounded-2xl p-8 border border-glass-border shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-indigo-400 mb-1">{cert.title}</h3>
              <div className="flex justify-between items-center mb-4">
                <p className="text-indigo-200/80 font-medium">{cert.provider}</p>
                <p className="text-sm text-purple-400 font-medium italic">{cert.date}</p>
              </div>
              <p className="text-gray-300 leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
