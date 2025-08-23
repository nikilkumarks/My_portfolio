import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-[#0e0e10] text-white flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide px-2">
          I'm a highly motivated{" "}
          <span className="text-white font-semibold">Frontend Developer</span> with a passion for crafting
          seamless, user-friendly digital experiences. I specialize in building{" "}
          <span className="text-cyan-400">responsive</span> and{" "}
          <span className="text-cyan-400">interactive interfaces</span> that combine performance with
          aesthetic design.
        </p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide px-2"
        >
          With hands-on experience in{" "}
          <span className="text-white font-semibold">React.js</span>,{" "}
          <span className="text-white font-semibold">Tailwind CSS</span>, and modern frontend tooling, I bring
          ideas to life with clean, scalable code. My goal is to create intuitive products that not only look
          good, but feel great to use.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide px-2"
        >
          Whether collaborating on dynamic SaaS platforms or working on solo projects, I thrive in
          environments where creativity meets technology. I'm always eager to learn, improve, and build
          experiences that make an impact.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
