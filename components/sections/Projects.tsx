"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/lib/data";
import { cardHover } from "@/lib/animations";
import SectionTitle from "@/components/ui/SectionTitle";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const filters = ["All", "Laravel", "Python", "Frontend"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project: Project) =>
    activeFilter === "All" ? true : project.badge === activeFilter
  );

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-dark-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle title="Proyek Pilihan" subtitle="Beberapa proyek yang pernah saya kerjakan, dari aplikasi web hingga analisis data." />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "glass text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-dark-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                variants={{
                  rest: { opacity: 1, scale: 1, ...cardHover.rest },
                  hover: { opacity: 1, scale: 1, ...(cardHover.hover as Record<string, unknown>) },
                  hidden: { opacity: 0, scale: 0.9 }
                }}
                initial="hidden"
                animate="rest"
                exit="hidden"
                whileHover="hover"
                key={project.title}
                className="glass rounded-2xl overflow-hidden flex flex-col group border border-slate-200 dark:border-dark-100"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span 
                      className="text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm"
                      style={{ backgroundColor: project.badgeColor }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                    {project.longDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech: string) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-slate-100 dark:bg-dark-200 text-slate-500 rounded-md border border-slate-200 dark:border-dark-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-100/50 dark:bg-dark-400/50 border-t border-slate-200 dark:border-dark-100 flex justify-between items-center mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                    <FiGithub /> Source Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                    Live Demo <FiExternalLink />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
