"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-primary font-medium tracking-wider uppercase text-sm">Hello, I am</h2>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Hirdyansh Saxena
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-400 font-medium pt-2">
              Backend Developer | Full Stack Developer | AWS Certified Cloud Practitioner
            </h3>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            "Building scalable backend systems and full-stack web applications."
            <br/><br/>
            3rd-year B.Tech IT student with strong backend development and DSA foundation. Solved 400+ DSA problems and passionate about building scalable applications using Node.js, Express, MongoDB, React, Docker and modern cloud technologies.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              View Projects
            </a>
            <a href="/resume.pdf" className="px-6 py-3 border border-gray-600 hover:border-white rounded-full font-medium flex items-center gap-2 transition-all hover:bg-white/5">
              <Download size={18} /> Download Resume
            </a>
            <a href="#contact" className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-full font-medium transition-all">
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 pt-6 text-gray-400">
            <a href="https://github.com/Hirdy0903" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/hirdyansh-saxena-33228a267/" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:scale-110 transition-all"><Linkedin size={24} /></a>
            <a href="mailto:hirdyanshsaxena7@gmail.com" className="hover:text-secondary hover:scale-110 transition-all"><Mail size={24} /></a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.3)] backdrop-blur-sm">
            <Image 
              src="/profile.jpg" 
              alt="Hirdyansh Saxena" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
