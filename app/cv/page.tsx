"use client";

import { personalInfo, skills, experiences, projects } from "@/lib/data";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiPrinter } from "react-icons/fi";

export default function CVPage() {
  return (
    <div className="bg-white min-h-screen pt-24 md:pt-12 pb-12 text-slate-900 font-sans">
      {/* Tombol Cetak (Akan disembunyikan saat di-print) */}
      <div className="container mx-auto px-6 mb-8 flex justify-center print:hidden">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:scale-105 transition-all"
        >
          <FiPrinter /> Simpan Sebagai PDF / Cetak
        </button>
      </div>

      <div className="max-w-[1000px] mx-auto p-8 md:p-12 border-t-8 border-primary bg-slate-50 shadow-sm print:shadow-none print:bg-white print:p-0 print:border-none">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start mb-12 border-b-2 border-slate-200 pb-8 gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-2">{personalInfo.nama}</h1>
            <h2 className="text-2xl text-primary font-medium">{personalInfo.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <FiMail className="text-primary" /> {personalInfo.email}
            </div>
            <div className="flex items-center gap-2 text-wrap">
              <FiPhone className="text-primary shrink-0" /> {personalInfo.phone}
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-primary" /> {personalInfo.lokasi}
            </div>
            <div className="flex items-center gap-2">
              <FiGithub className="text-primary" /> github.com/Abibsa
            </div>
            {personalInfo.linkedin && (
              <div className="flex items-center gap-2 col-span-1 sm:col-span-2">
                <FiLinkedin className="text-primary" /> {personalInfo.linkedin.replace('https://www.linkedin.com/in/', '')}
              </div>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Kolom Kiri - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Bio/Profile */}
            <section>
              <h3 className="text-xl font-bold font-heading uppercase tracking-widest mb-6 flex items-center gap-3 border-l-4 border-primary pl-4 text-slate-800">Profil Profesional</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {personalInfo.bio}
              </p>
            </section>

            {/* Experience & Education */}
            <section>
              <h3 className="text-xl font-bold font-heading uppercase tracking-widest mb-6 flex items-center gap-3 border-l-4 border-primary pl-4 text-slate-800">Pengalaman & Pendidikan</h3>
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full after:absolute after:left-[3px] after:top-6 after:bottom-[-24px] after:w-[2px] after:bg-slate-200 last:after:hidden">
                    <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                      <h4 className="font-bold text-lg text-slate-800">{exp.posisi}</h4>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{exp.tahun}</span>
                    </div>
                    <p className="text-slate-700 font-medium mb-2">{exp.tempat}</p>
                    <p className="text-slate-500 text-sm">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Selected Projects */}
            <section>
              <h3 className="text-xl font-bold font-heading uppercase tracking-widest mb-6 flex items-center gap-3 border-l-4 border-primary pl-4 text-slate-800">Proyek Unggulan</h3>
              <div className="space-y-6">
                {projects.map((proj, i) => (
                  <div key={i} className="p-4 border border-slate-200 rounded-xl bg-white">
                    <h4 className="font-bold text-slate-800 mb-1">{proj.title}</h4>
                    <p className="text-sm text-slate-500 mb-3">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Kolom Kanan - Skills & Additional Info */}
          <div className="lg:col-span-1 space-y-12">
            
            {/* Skills */}
            <section>
              <h3 className="text-xl font-bold font-heading uppercase tracking-widest mb-6 flex items-center gap-3 border-l-4 border-primary pl-4 text-slate-800">Keahlian</h3>
              <div className="space-y-10">
                {/* Frontend */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Frontend</h4>
                  <div className="space-y-4">
                    {skills.filter(s => s.category === 'frontend').map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs mb-1 font-bold">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Backend & Tools</h4>
                  <div className="space-y-4">
                    {skills.filter(s => s.category === 'backend').map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs mb-1 font-bold">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Languages / Education details further */}
            <section>
              <h3 className="text-xl font-bold font-heading uppercase tracking-widest mb-6 flex items-center gap-3 border-l-4 border-primary pl-4 text-slate-800">Detail Pendidikan</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold text-slate-800">{personalInfo.kampus}</p>
                  <p className="text-slate-500">{personalInfo.jurusan} - Semester {personalInfo.semester}</p>
                  <p className="text-primary font-bold">GPA: {personalInfo.ipk}</p>
                </div>
              </div>
            </section>

          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-400 print:block">
          <p>Generated from Portfolio - {personalInfo.nama}</p>
        </footer>
      </div>
    </div>
  );
}
