"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "400+ DSA Problems Solved",
    "AWS Certified Cloud Practitioner",
    "Backend Development Focus",
    "Full Stack Development",
    "Docker & Cloud Enthusiast"
  ];

  return (
    <section id="about" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">About Me</span>
        </h2>

        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Profile Summary</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                "I'm a backend-focused developer who enjoys building scalable systems, REST APIs, authentication systems, and full-stack applications. I have solved 400+ DSA problems and continuously work on improving my software engineering skills through real-world projects and cloud technologies."
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Highlights</h3>
              <ul className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
