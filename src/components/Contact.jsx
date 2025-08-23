import { Mail, PhoneCall } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",      // Replace with your EmailJS Service ID
        "your_template_id",     // Replace with your EmailJS Template ID
        form.current,
        "your_public_key"       // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-12 bg-[#0e0e10] text-white relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 animate-pulse">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg transition-all duration-500">
        <p className="text-center text-gray-400 mb-6">
          Have an idea or opportunity? Let’s collaborate!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Let’s build something amazing..."
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 transition duration-300 shadow-md"
          >
            Send Message
          </button>

          {isSent && (
            <p className="text-green-400 text-sm mt-4 text-center animate-pulse">
              ✅ Message sent successfully!
            </p>
          )}
        </form>

        {/* Contact Info */}
        <div className="mt-8 text-center text-gray-400">
          <p className="flex justify-center items-center gap-2">
            <Mail className="w-5 h-5 text-indigo-400" />
            <a href="mailto:your.nikilkumark.s19601@gmail.com" className="hover:text-white transition">
              nikilkumark.s19601@gmail.com
            </a>
          </p>
          <p className="flex justify-center items-center gap-2 mt-2">
            <PhoneCall className="w-5 h-5 text-indigo-400" />
            <a href="tel:+916363719601" className="hover:text-white transition">
              +91-6363719601
            </a>
          </p>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-indigo-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default Contact;
