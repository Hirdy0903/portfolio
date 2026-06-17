"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Syllable – AI-Powered Learning Roadmap Builder",
    stack: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Redis", "Gemini API", "Docker"],
    github: "https://github.com/Hirdy0903/syllable",
    link: "https://syllable-rust.vercel.app/login",
    features: [
      "AI-powered personalized learning roadmaps using Gemini AI",
      "JWT authentication & persistent storage with PostgreSQL/Prisma",
      "Redis caching & BullMQ job queues for workflow optimization",
      "Containerized with Docker, deployed via Vercel/Render/Neon/Upstash"
    ]
  },
  {
    title: "Jira-Like Multi-Tenant SaaS Platform",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "React"],
    github: "https://github.com/Hirdy0903/MTAP",
    link: "https://multitenant-theta.vercel.app/dashboard",
    features: [
      "Multi-tenant architecture",
      "JWT Authentication & RBAC middleware",
      "Projects & Issues CRUD APIs",
      "Protected Routes",
      "Scalable Backend Architecture"
    ]
  },
  {
    title: "Blog Application",
    stack: ["Node.js", "Express.js", "MongoDB", "EJS"],
    github: "https://github.com/Hirdy0903/BLOGIFY",
    link: "https://blogify-eight-liart.vercel.app/",
    features: [
      "JWT Authentication",
      "Blog CRUD",
      "Image Uploads",
      "Cookie Sessions",
      "Server Side Rendering"
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all group hover:-translate-y-2 shadow-lg"
            >

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
