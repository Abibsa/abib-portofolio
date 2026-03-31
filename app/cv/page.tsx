"use client";

import { personalInfo, skills, experiences, projects } from "@/lib/data";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiPrinter, FiLayout, FiDatabase, FiAward } from "react-icons/fi";
import Image from "next/image";

export default function CVPage() {
  return (
    <div className="bg-slate-100 min-h-screen py-10 font-sans print:p-0 print:bg-white text-slate-800">
      
      {/* Tombol Cetak (Sembunyi saat print) */}
      <div className="container mx-auto px-6 mb-6 flex justify-center print:hidden">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          <FiPrinter /> Cetak CV (Hasil Pasti Rapi)
        </button>
      </div>

      {/* CONTAINER UTAMA - Memaksa 2 Kolom Sejajar */}
      <div className="max-w-[1000px] mx-auto bg-white shadow-2xl flex flex-row overflow-hidden print:shadow-none print:w-[210mm] print:h-[297mm] print:mx-0">
        
        {/* SIDEBAR - Lebar tetap 30% */}
        <aside className="w-[280px] bg-[#0f172a] text-white p-8 flex flex-col shrink-0 print:bg-[#0f172a] print:text-white print:w-[260px] min-h-full">
          
          <div className="relative w-28 h-28 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-primary/30"></div>
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-700 relative z-10">
               <Image 
                src="/5fa491a0-51ff-49c0-a115-29e49e89f0ff.jpeg" 
                alt={personalInfo.nama}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-xl font-bold font-heading mb-1 leading-tight">{personalInfo.nama}</h1>
            <p className="text-primary font-medium tracking-widest text-[9px] uppercase">{personalInfo.title}</p>
          </div>

          <div className="space-y-3 mb-8">
            <h3 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-slate-800 pb-1">Kontak</h3>
            <div className="flex items-center gap-2 text-[9px]">
              <FiMail className="text-primary shrink-0"/> <span className="truncate">{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 text-[9px]">
              <FiPhone className="text-primary shrink-0"/> <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-[9px]">
              <FiMapPin className="text-primary shrink-0"/> <span className="text-[8px]">{personalInfo.lokasi}</span>
            </div>
            <div className="flex items-center gap-2 text-[9px]">
              <FiGithub className="text-primary shrink-0"/> <span>Abibsa</span>
            </div>
            <div className="flex items-center gap-2 text-[9px]">
              <FiLinkedin className="text-primary shrink-0"/> <span className="text-[8px]">abib-aziz-a247813bb</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-4 border-b border-slate-800 pb-1">Expertise</h3>
            <div className="space-y-4">
              {skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-[8px] mb-1 font-medium">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT - Lebar 70% */}
        <main className="flex-1 p-10 bg-white print:p-8">
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4 border-b-2 border-slate-100 pb-1">
               <FiAward className="text-primary" size={16}/>
               <h3 className="text-md font-bold font-heading text-slate-900 uppercase tracking-widest">Profil Profesional</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-xs">
              {personalInfo.bio}
            </p>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-6 border-b-2 border-slate-100 pb-1">
               <FiLayout className="text-primary" size={16}/>
               <h3 className="text-md font-bold font-heading text-slate-900 uppercase tracking-widest">Pengalaman</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-5 border-l border-slate-200">
                  <div className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-primary"></div>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="text-xs font-bold text-slate-800">{exp.posisi}</h4>
                    <span className="text-[9px] font-bold text-slate-400">{exp.tahun}</span>
                  </div>
                  <p className="text-[10px] text-primary font-medium mb-1">{exp.tempat}</p>
                  <p className="text-slate-500 text-[10px] leading-snug">{exp.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-6 border-b-2 border-slate-100 pb-1">
               <FiDatabase className="text-primary" size={16}/>
               <h3 className="text-md font-bold font-heading text-slate-900 uppercase tracking-widest">Proyek Pilihan</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {projects.slice(0, 4).map((proj, i) => (
                <div key={i} className="p-3 border border-slate-100 rounded-lg bg-slate-50/50">
                   <h4 className="text-[10px] font-bold text-slate-800 mb-1">{proj.title}</h4>
                   <p className="text-[9px] text-slate-500 leading-tight mb-2">{proj.desc}</p>
                   <div className="flex flex-wrap gap-1">
                      {proj.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[7px] text-primary font-bold bg-primary/5 px-1 rounded-sm">{t}</span>
                      ))}
                   </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8 p-4 rounded-xl bg-[#0f172a] text-white flex items-center justify-between">
              <div>
                <p className="text-[7px] font-bold text-primary uppercase tracking-widest mb-0.5 text-left">Education Degree</p>
                <p className="text-xs font-bold text-white uppercase">{personalInfo.jurusan}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-primary leading-none">{personalInfo.ipk}</p>
                <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">Cumulative GPA</p>
              </div>
          </div>
        </main>

      </div>
    </div>
  );
}
