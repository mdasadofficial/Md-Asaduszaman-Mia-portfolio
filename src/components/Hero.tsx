"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Mail, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-coral/10 border border-brand-coral/20 text-brand-coral text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-coral"></span>
            </span>
            <span>Available for new projects</span>
          </motion.div>

          <h1 className="text-lg md:text-5xl xl:text-6xl font-extrabold mb-6 leading-[1.1]">
            Building <span className="text-brand-coral">Digital</span> <br />
            Experiences<span className="text-accent-blue">.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            I'm <span className="text-white">Md. Asaduszaman Mia</span>, a software developer obsessed with crafting high-performance,
            beautifully animated web applications that users love.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-dark-bg font-bold px-8 py-4 rounded-2xl flex items-center gap-2"
            >
              View Projects <ArrowUpRight size={20} />
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/10 hover:border-brand-coral/50 glass text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-2 transition-colors"
            >
              My Resume
            </motion.a>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Connect with me</span>
            <div className="h-px w-8 bg-slate-800"></div>
            <div className="flex items-center gap-4">
              {[ExternalLink, Globe, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: "#ff7f5c" }}
                  className="text-slate-500 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-brand-coral/20 blur-[120px] rounded-full animate-pulse-slow"></div>

          <div className="relative w-100 h-100 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
            <Image
              src="/profile.jpeg"
              alt="Md. Asaduszaman Mia"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>

          {/* Floating Badge */}
          {/* <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 md:right-0 glass px-6 py-4 rounded-2xl shadow-xl z-20 border border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                Years of <br /> Experience
              </div>
            </div>
          </motion.div> */}
        </motion.div>

      </div>
    </section>
  );
}
