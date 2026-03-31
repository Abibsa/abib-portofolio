"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { fadeLeft, fadeRight } from "@/lib/animations";
import SectionTitle from "@/components/ui/SectionTitle";
import { FiMail, FiMapPin, FiGithub, FiSend } from "react-icons/fi";
import { toast } from "sonner";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: Record<string, boolean> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = true;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Harap isi semua field!");
      
      // Shake animation class can be added here if needed, but handled by framer motion below
      return;
    }

    setErrors({});
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Pesan berhasil dikirim! Saya akan segera membalasnya.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-dark-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="Hubungi Saya" subtitle="Ada proyek atau pertanyaan? Jangan ragu untuk menghubungi saya!" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16">
          
          {/* Info Cards (Kiri) */}
          <motion.div 
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass p-8 rounded-2xl flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold font-heading mb-6 text-slate-900 dark:text-white">Mari Berkolaborasi!</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Saya selalu terbuka untuk mendiskusikan proyek web development, peluang kerja, atau sekadar berbagi pengetahuan.
              </p>

              <div className="flex flex-col gap-6">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Email</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">{personalInfo.email}</p>
                  </div>
                </a>

                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-dark-200 text-slate-700 dark:text-slate-300 flex items-center justify-center group-hover:bg-slate-800 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-all shadow-sm">
                    <FiGithub size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">GitHub</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">github.com/Abibsa</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Lokasi</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{personalInfo.lokasi}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form (Kanan) */}
          <motion.div 
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-2xl flex flex-col gap-6 border-t-4 border-t-primary">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div animate={errors.name ? { x: [-5, 5, -5, 5, 0] } : {}} transition={{ duration: 0.4 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-400/50 border outline-none transition-all placeholder:text-slate-400 ${
                      errors.name ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 dark:border-dark-100 focus:border-primary focus:ring-1 focus:ring-primary"
                    }`}
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div animate={errors.email ? { x: [-5, 5, -5, 5, 0] } : {}} transition={{ duration: 0.4 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-400/50 border outline-none transition-all placeholder:text-slate-400 ${
                      errors.email ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 dark:border-dark-100 focus:border-primary focus:ring-1 focus:ring-primary"
                    }`}
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              <motion.div animate={errors.subject ? { x: [-5, 5, -5, 5, 0] } : {}} transition={{ duration: 0.4 }}>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subjek</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-400/50 border outline-none transition-all placeholder:text-slate-400 ${
                    errors.subject ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 dark:border-dark-100 focus:border-primary focus:ring-1 focus:ring-primary"
                  }`}
                  placeholder="Tawaran Pekerjaan"
                />
              </motion.div>

              <motion.div animate={errors.message ? { x: [-5, 5, -5, 5, 0] } : {}} transition={{ duration: 0.4 }}>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-400/50 border outline-none transition-all resize-none placeholder:text-slate-400 ${
                    errors.message ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 dark:border-dark-100 focus:border-primary focus:ring-1 focus:ring-primary"
                  }`}
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </motion.div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto ml-auto px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all flex items-center justify-center gap-2 glow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>Kirim Pesan <FiSend /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
