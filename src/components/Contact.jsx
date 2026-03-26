import { Mail, PhoneCall, Send, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_x9j0fae",
        "template_yjjrido",
        formRef.current,
        "1J563XOsUDdsmxZCP"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          setTimeout(() => setStatus("idle"), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-32 bg-black text-white flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-24 flex-grow w-full relative z-10 flex flex-col">
        
        {/* Modern Minimalist Header */}
        <div className="w-full flex flex-col gap-6 border-b border-white/10 pb-12 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl lg:text-[10rem] font-black text-white tracking-tighter leading-none"
          >
            Contact<span className="text-white/20">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg sm:text-xl font-light max-w-2xl"
          >
            Have a project, freelance requirement, or full-time opportunity? Let's build something great together.
          </motion.p>
        </div>

        {/* Unboxed Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 w-full mt-8">
          
          {/* Left: Contact Info (Seamless) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Get in Touch
            </h3>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 group">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Email</span>
                <a href="mailto:nikilkumark.s19601@gmail.com" className="text-lg sm:text-2xl font-light text-white hover:text-gray-400 transition-colors duration-300">
                  nikilkumark.s19601@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-2 group">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Phone</span>
                <a href="tel:+916363719601" className="text-lg sm:text-2xl font-light text-white hover:text-gray-400 transition-colors duration-300">
                  +91 63637 19601
                </a>
              </div>
            </div>

            <p className="mt-12 text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              I usually respond within 24 hours. Open to exciting freelance projects and full-time roles.
            </p>
          </motion.div>

          {/* Right: Elegant Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 relative w-full pt-4"
          >
            <div className="flex flex-col gap-2 group">
              <label className="text-sm font-semibold text-gray-500 group-focus-within:text-white transition-colors duration-300">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white text-lg sm:text-xl font-light placeholder:text-gray-700 focus:border-white focus:outline-none transition-all duration-300"
                placeholder="What's your name?"
              />
            </div>

            <div className="flex flex-col gap-2 group">
              <label className="text-sm font-semibold text-gray-500 group-focus-within:text-white transition-colors duration-300">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white text-lg sm:text-xl font-light placeholder:text-gray-700 focus:border-white focus:outline-none transition-all duration-300"
                placeholder="Where can I reach you?"
              />
            </div>

            <div className="flex flex-col gap-2 group mt-4 h-full">
              <label className="text-sm font-semibold text-gray-500 group-focus-within:text-white transition-colors duration-300">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full h-full bg-transparent border-b border-gray-700 py-4 text-white text-lg sm:text-xl font-light placeholder:text-gray-700 focus:border-white focus:outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-fit flex items-center justify-center gap-4 px-12 py-5 rounded-full bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-black" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm font-semibold text-gray-400 mt-2"
                  >
                    Thanks! Your message has been sent successfully.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm font-semibold text-gray-300 mt-2"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Elegant Minimal Footer */}
      <footer className="mt-40 border-t border-white/10 relative z-10 w-full pt-10 pb-8 flex flex-col items-center justify-center gap-3 bg-black">
        <p className="text-sm font-light text-gray-400">
          © {new Date().getFullYear()} Nikil Kumar K S
        </p>
        <p className="text-xs font-light text-gray-600">
          Built with React & Tailwind CSS
        </p>
      </footer>
    </section>
  );
};

export default Contact;
