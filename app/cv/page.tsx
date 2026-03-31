"use client";

import { personalInfo, skills, experiences, projects } from "@/lib/data";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiPrinter, FiLayout, FiDatabase, FiAward } from "react-icons/fi";
import Image from "next/image";

export default function CVPage() {
  return (
    <div className="bg-slate-100 min-h-screen py-10 text-slate-800 font-sans print:p-0 print:bg-white">
      
      {/* Tombol Cetak (Hanya tampil di layar) */}
      <div className="container mx-auto px-6 mb-6 flex justify-center print:hidden border-b pb-6 border-slate-200">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          <FiPrinter /> Cetak CV (Hemat Tinta & 1-2 Halaman)
        </button>
      </div>

      {/* CONTAINER UTAMA - Dibuat Fixed Width untuk simulasi A4 */}
      <div className="max-w-[900px] mx-auto bg-white shadow-2xl flex flex-col md:flex-row print:shadow-none print:max-w-full print:mx-0">
        
        {/* SIDEBAR (Dark - 30% Width) */}
        <aside className="w-full md:w-[280px] bg-slate-900 text-white p-8 flex flex-col print:bg-slate-900 print:text-white shrink-0 min-h-full">
          
          {/* Profile Image - Ukuran lebih kompak */}
          <div className="relative w-32 h-32 mx-auto mb-6">
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
            <h1 className="text-xl font-bold font-heading mb-1">{personalInfo.nama}</h1>
            <p className="text-primary font-medium tracking-widest text-[10px] uppercase">{personalInfo.title}</p>
          </div>

          {/* Contact Details - Lebih Rapat */}
          <div className="space-y-3 mb-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Kontak</h3>
            <div className="flex items-center gap-2 text-[10px]">
              <FiMail className="text-primary shrink-0"/> <span className="truncate">{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <FiPhone className="text-primary shrink-0"/> <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <FiMapPin className="text-primary shrink-0"/> <span>{personalInfo.lokasi}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <FiGithub className="text-primary shrink-0"/> <span>Abibsa</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <FiLinkedin className="text-primary shrink-0"/> <span>abib-aziz-a247813bb</span>
            </div>
          </div>

          {/* Expert Skills Visual - Lebih Kompak */}
          <div className="mb-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">Expertise</h3>
            <div className="space-y-4">
              {skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-[9px] mb-1 font-medium">
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

          <div className="mt-auto pt-6 text-[8px] text-slate-500 text-center uppercase tracking-widest">
            {personalInfo.nama} Portfolio
          </div>
        </aside>

        {/* MAIN CONTENT (White - 70% Width) */}
        <main className="flex-1 p-10 md:p-12 relative bg-white print:p-8">
          {/* Section: Profile Summary */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-2">
               <FiAward className="text-primary" size={18}/>
               <h3 className="text-lg font-bold font-heading text-slate-900 uppercase tracking-wider">Profil Profesional</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              {personalInfo.bio}
            </p>
          </section>

          {/* Section: Professional Experience */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-2">
               <FiLayout className="text-primary" size={18}/>
               <h3 className="text-lg font-bold font-heading text-slate-900 uppercase tracking-wider">Pengalaman & Pendidikan</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-5 border-l-2 border-slate-100">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary"></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-sm font-bold text-slate-800 leading-none">{exp.posisi}</h4>
                    <span className="text-[10px] font-bold text-slate-400">{exp.tahun}</span>
                  </div>
                  <p className="text-xs text-primary font-medium mb-1">{exp.tempat}</p>
                  <p className="text-slate-500 text-[11px] leading-snug">{exp.desc}</p>
                  {exp.tags && (
                    <div className="flex gap-2 mt-2">
                       {exp.tags.map(tag => (
                         <span key={tag} className="text-[8px] px-1.5 py-0.5 bg-slate-50 text-slate-400 rounded-sm border border-slate-100">{tag}</span>
                       ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section: Selected Projects */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-2">
               <FiDatabase className="text-primary" size={18}/>
               <h3 className="text-lg font-bold font-heading text-slate-900 uppercase tracking-wider">Proyek Pilihan</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {projects.slice(0, 4).map((proj, i) => (
                <div key={i} className="p-4 border border-slate-100 rounded-xl bg-slate-50/30 group">
                   <h4 className="text-xs font-bold text-slate-800 mb-1">{proj.title}</h4>
                   <p className="text-[10px] text-slate-500 leading-tight mb-2">{proj.desc}</p>
                   <div className="flex flex-wrap gap-1">
                      {proj.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[8px] text-primary bg-primary/5 px-1 rounded-sm">{t}</span>
                      ))}
                   </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Mini Stats */}
          <div className="mt-10 p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between">
              <div>
                <p className="text-[8px] font-bold text-primary uppercase tracking-widest mb-0.5">Education Degree</p>
                <p className="text-xs font-bold text-white uppercase">{personalInfo.jurusan}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-primary leading-none">{personalInfo.ipk}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Cumulative GPA</p>
              </div>
          </div>
        </main>

      </div>
    </div>
  );
}
