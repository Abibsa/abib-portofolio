"use client";

import { motion } from "framer-motion";
import { experiences, type Experience as ExperienceType } from "@/lib/data";
import { fadeLeft, fadeRight } from "@/lib/animations";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionTitle title="Perjalanan Karir" subtitle="Riwayat pendidikan dan pengalaman kerja profesional saya." />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Garis vertikal */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-dark-100 transform md:-translate-x-1/2 rounded-full" />

          {experiences.map((exp: ExperienceType, index: number) => {
            const isEven = index % 2 === 0;
            const animationVariant = isEven ? fadeLeft : fadeRight;

            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${isEven ? "md:flex-row-reverse" : ""}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center transform -translate-x-1/2 shadow-[0_0_15px_rgba(0,191,255,0.4)] z-10 border-2 border-white dark:border-dark-400">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse-slow"></div>
                </div>

                {/* Konten Card */}
                <motion.div
                  variants={animationVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}
                >
                  <div className="glass p-8 rounded-2xl hover:border-primary/30 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-none group relative overflow-hidden">
                    {/* Background glow di hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mx-10 -my-10 group-hover:bg-primary/10 transition-colors" />

                    <span className="text-4xl mb-4 block">{exp.icon}</span>
                    
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 border border-primary/20">
                      {exp.tahun}
                    </span>
                    
                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                      {exp.posisi}
                    </h3>
                    
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      {exp.tempat}
                    </p>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      {exp.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag: string) => (
                         <span key={tag} className="text-xs px-2 py-1 bg-white/50 dark:bg-dark-100/50 text-slate-600 dark:text-slate-400 rounded-md border border-slate-200/50 dark:border-dark-100/50 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
