"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/animations";
import { FiArrowDown,  FiMail } from "react-icons/fi";
import { SiLaravel, SiPython, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 191, 255, 0.5)";
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numParticles = Math.min(Math.floor(width / 15), 100);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 191, 255, ${0.2 - distance / 500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    init();
    animate();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50 dark:opacity-40" />
      <div className="absolute inset-0 dot-grid z-0" />

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center mt-20 md:mt-0">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center">
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            👋 Available for work
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 gradient-text">
            {personalInfo.nama}
          </motion.h1>

          <motion.div variants={fadeUp} className="text-xl md:text-3xl font-medium text-slate-700 dark:text-slate-200 mb-6 h-12">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Laravel Enthusiast",
                2000,
                "Python Programmer",
                2000,
                "Web Developer Intern",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Mahasiswa Teknik Informatika semester 6 yang passionate membangun aplikasi web fullstack modern dan berkemampuan analisis data.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-white font-medium glow hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Lihat Proyek <FiArrowDown />
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-white dark:bg-dark-300 text-slate-900 dark:text-white border border-slate-200 dark:border-dark-100 font-medium hover:bg-slate-50 dark:hover:bg-dark-200 transition-all flex items-center justify-center gap-2"
              >
                Hubungi Saya <FiMail />
              </motion.button>
            </Link>
          </motion.div>

          {/* Tech stack small icons */}
          <motion.div variants={fadeUp} className="mt-16 pt-8 border-t border-slate-200 dark:border-dark-100 w-full max-w-md">
            <p className="text-sm text-slate-500 mb-4">Tech Stack Utama:</p>
            <div className="flex justify-center gap-6 text-slate-400">
              <span className="hover:text-[#FF2D20] transition-colors"><SiLaravel size={24} /></span>
              <span className="hover:text-[#3776AB] transition-colors"><SiPython size={24} /></span>
              <span className="hover:text-[#F7DF1E] transition-colors"><SiJavascript size={24} /></span>
              <span className="hover:text-[#61DAFB] transition-colors"><SiReact size={24} /></span>
              <span className="hover:text-[#06B6D4] transition-colors"><SiTailwindcss size={24} /></span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-slate-400"
      >
        <FiArrowDown size={24} />
      </motion.div>
    </section>
  );
}
