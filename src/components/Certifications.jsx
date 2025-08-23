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
    <section id="certification" className="py-16 px-6 bg-[#0e0e10] text-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Certifications
        </h2>

        <div className="space-y-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(236, 72, 153, 0.4)" }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400">{cert.title}</h3>
              <p className="text-purple-300">{cert.provider}</p>
              <p className="text-sm text-pink-400 italic mb-2">{cert.date}</p>
              <p className="text-gray-300">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
