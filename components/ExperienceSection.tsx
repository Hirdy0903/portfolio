"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function ExperienceSection() {
  const timeline = [
    {
      year: "2023",
      title: "Started B.Tech IT",
      desc: "KIET Group of Institutions"
    },
    {
      year: "2024",
      title: "Deep focus on DSA and Backend Development",
      desc: "Solved 400+ problems, built foundational backend skills."
    },
    {
      year: "2025",
      title: "Full Stack Projects & Cloud",
      desc: "Built Full Stack Projects, achieved AWS Cloud Practitioner Certification, started learning Docker, PostgreSQL, GraphQL, Prisma."
    },
    {
      year: "Future Goal",
      title: "Backend Engineer",
      desc: "Cloud & Distributed Systems Enthusiast"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Experience & Journey</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-primary/20">
                 <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-white text-xl">{item.title}</div>
                  <time className="font-caveat font-medium text-primary">{item.year}</time>
                </div>
                <div className="text-gray-400">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 max-w-lg"
            >
              <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center shrink-0">
                <Award size={40} className="text-orange-400" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bold mb-2">AWS Certified Cloud Practitioner</h4>
                <a href="#" className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors">
                  View Credential <Award size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
