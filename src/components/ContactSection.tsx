"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("sent");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block p-3 rounded-2xl bg-brand-coral/10 border border-brand-coral/20 text-brand-coral mb-6"
        >
          <MessageSquare size={24} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Let's Start Something <span className="text-brand-coral">Great</span>
        </motion.h2>

        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Currently open for freelance opportunities and full-time positions.
          If you have a project in mind, let's talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="p-6 rounded-2xl glass border border-white/5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-coral">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Me</h3>
                <p className="text-lg font-medium text-white">mdasadofficial1@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="p-6 rounded-2xl glass border border-white/5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-blue">
                <Send size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Contact</h3>
                <p className="text-lg font-medium text-white">01787987687</p>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-coral/50 focus:outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-coral/50 focus:outline-none transition-all"
              />
              <textarea
                placeholder="How can I help you?"
                rows={4}
                required
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-coral/50 focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={status !== "idle"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${status === "sent" ? "bg-green-500 text-white" : "bg-brand-coral text-white"
                }`}
            >
              {status === "idle" && <><Send size={18} /> Send Message</>}
              {status === "sending" && "Sending..."}
              {status === "sent" && <><CheckCircle2 size={18} /> Message Sent!</>}
            </motion.button>
          </form>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Md. Asaduszaman Mia. Built with passion and Next.js.</p>
      </footer>
    </section>
  );
}
