"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";

const projects = [
  {
    title: "Quantum Analytics",
    description: "A real-time data visualization platform with advanced predictive modeling and customizable dashboards.",
    image: "/project-1.png",
    tags: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Luxe Commerce",
    description: "A premium e-commerce experience for high-end luxury brands featuring seamless transitions and AI-powered recommendations.",
    image: "/project-2.png",
    tags: ["React", "Shopify", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-dark-bg/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="text-brand-coral">Creations</span>
            </motion.h2>
            <p className="text-slate-400">
              A selection of my most challenging and impactful projects where I pushed the boundaries of modern web development.
            </p>
          </div>
          <motion.a 
            href="#"
            whileHover={{ x: 5 }}
            className="text-brand-coral font-bold flex items-center gap-2 group"
          >
            See All Projects <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 border border-white/10 glass">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="flex gap-4">
                    <a href={project.link} className="bg-white text-dark-bg p-3 rounded-full hover:scale-110 transition-transform">
                      <ArrowUpRight size={20} />
                    </a>
                    <a href={project.github} className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:scale-110 transition-transform">
                      <Globe size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-coral transition-colors">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
