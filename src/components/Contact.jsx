import { useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "./Section";
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setFormStatus("submitting");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!serviceId || !templateId || !publicKey) {
      const subject = `Portfolio Contact: ${name}`;
      const body = `From: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
      window.location.href = `mailto:srivathsajg34@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      setFormStatus("success");
      e.currentTarget.reset();
      setTimeout(() => setFormStatus("idle"), 3000);
      return;
    }

    const templateParams = {
      from_name: name,
      reply_to: email,
      message,
      to_email: "srivathsajg34@gmail.com",
    };

    emailjs
      .send(serviceId, templateId, templateParams, { publicKey })
      .then(() => {
        setFormStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setFormStatus("idle"), 3000);
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg("Failed to send message. Please try again later.");
        setFormStatus("error");
      });
  };

  return (
    <Section id="contact">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-400 mb-8 text-lg">
            I'm currently looking for internship opportunities and new projects.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 glass rounded-full text-blue-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:srivathsajg34@gmail.com" className="hover:text-white transition-colors">
                  srivathsajg34@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Number removed as requested */}

            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 glass rounded-full text-emerald-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p>Chikkamagaluru, Karnataka, India</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/srivathsa-jg-3a7169355/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors text-blue-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              {/* Twitter removed as requested */}
            </div>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                placeholder="Srivathsa JG"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                placeholder="srivathsajg34@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            {formStatus === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle size={16} />
                <span>{errorMsg}</span>
              </div>
            )}
            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className={`w-full py-3 rounded-lg font-medium text-white transition-all flex items-center justify-center gap-2 ${formStatus === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90"
                }`}
            >
              {formStatus === "submitting" ? (
                "Sending..."
              ) : formStatus === "success" ? (
                <>Message Sent <CheckCircle size={18} /></>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
