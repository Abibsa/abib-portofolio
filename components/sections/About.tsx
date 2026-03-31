"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { fadeLeft, fadeRight } from "@/lib/animations";
import SectionTitle from "@/components/ui/SectionTitle";
import { FiDownload, FiMail } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-dark-300/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="Tentang Saya" subtitle="Kenali lebih dekat siapa saya dan apa yang saya lakukan." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* Kiri - Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center p-2 glow">
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-secondary animate-spin-slow opacity-60"></div>
              
              <div className="w-full h-full rounded-full bg-slate-200 dark:bg-dark-200 overflow-hidden relative border-4 border-white dark:border-dark-400 z-10 shadow-xl">
                <Image 
                  src="/5fa491a0-51ff-49c0-a115-29e49e89f0ff.jpeg" 
                  alt={personalInfo.nama}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-8 glass px-4 py-2 rounded-lg font-bold text-sm text-primary shadow-lg z-20 flex items-center gap-2 border border-primary/20"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Open to Work
              </motion.div>
            </div>
          </motion.div>

          {/* Kanan - Info */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
              Halo, saya <span className="text-primary">{personalInfo.panggilan}</span>!
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "🎓", title: "Pendidikan", desc: "IPK " + personalInfo.ipk },
                { icon: "🏢", title: "Pengalaman", desc: "Intern at Telkom" },
                { icon: "💼", title: "Freelance", desc: "Web Developer" },
                { icon: "📍", title: "Lokasi", desc: "Jepara, ID" },
              ].map((stat, i) => (
                <div key={i} className="glass p-4 rounded-xl flex items-start gap-3 hover:-translate-y-1 transition-transform">
                  <div className="text-2xl">{stat.icon}</div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{stat.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link href="#contact">
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-primary/20">
                  <FiMail /> Hubungi Saya
                </button>
              </Link>
              <a href="/cv.pdf" download className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors flex items-center gap-2">
                <FiDownload /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
