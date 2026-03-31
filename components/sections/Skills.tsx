"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills, Skill } from "@/lib/data";
import { stagger, scaleIn } from "@/lib/animations";
import SectionTitle from "@/components/ui/SectionTitle";
import * as SiIcons from "react-icons/si";

type Category = "frontend" | "backend";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Category>("frontend");

  const filteredSkills = skills.filter((skill: Skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 dot-grid z-0 opacity-50" />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <SectionTitle title="Keahlian & Teknologi" subtitle="Teknologi dan alat yang saya gunakan untuk membangun solusi digital." />

        <div className="flex justify-center mb-12">
          <div className="glass p-1 rounded-full flex relative">
            {(["frontend", "backend"] as Category[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 rounded-full text-sm font-semibold capitalize z-10 transition-colors ${
                  activeTab === tab ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {tab} Development
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          variants={stagger} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          key={activeTab} // re-trigger animation on tab change
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredSkills.map((skill: Skill, index: number) => {
            const Icon = (SiIcons[skill.icon as keyof typeof SiIcons]) || SiIcons.SiCodeigniter; // fallback icon

            return (
              <motion.div key={skill.name} variants={scaleIn} className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white dark:bg-dark-300 rounded-xl shadow-sm border border-slate-100 dark:border-dark-100 flex items-center justify-center w-12 h-12">
                      <Icon style={{ color: skill.color }} size={24} />
                    </div>
                    <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100">{skill.name}</h4>
                  </div>
                  <span className="font-mono text-sm font-bold text-primary">{skill.level}%</span>
                </div>
                
                <div className="w-full h-2 bg-slate-200 dark:bg-dark-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
