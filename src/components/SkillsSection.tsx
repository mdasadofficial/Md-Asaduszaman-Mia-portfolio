"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: "Expert" },
  { name: "TypeScript", level: "Expert" },
  { name: "Node.js", level: "Advanced" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "PostgreSQL", level: "Advanced" },
  { name: "Framer Motion", level: "Intermediate" },
  { name: "AWS", level: "Intermediate" },
  { name: "GraphQL", level: "Advanced" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-brand-coral">Arsenal</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive list of tools and technologies I use to bring complex ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -5, 
                backgroundColor: "rgba(255, 127, 92, 0.1)",
                borderColor: "rgba(255, 127, 92, 0.4)"
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl glass border border-white/5 flex flex-col items-center justify-center text-center cursor-default group"
            >
              <h3 className="text-lg font-bold mb-1 transition-colors group-hover:text-brand-coral">{skill.name}</h3>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
