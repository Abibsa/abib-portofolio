import { personalInfo } from "@/lib/data";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 border-slate-200 dark:border-dark-300 bg-slate-50 dark:bg-dark-300 text-center print:hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h3 className="text-xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
          &lt;Ashab /&gt;
        </h3>
        
        <div className="flex gap-4 mb-6">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-dark-200 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors hover:-translate-y-1 transform duration-300 border border-slate-200 dark:border-dark-100"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </Link>
          
          {personalInfo.linkedin && (
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-dark-200 rounded-full text-slate-600 dark:text-slate-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors hover:-translate-y-1 transform duration-300 border border-slate-200 dark:border-dark-100"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </Link>
          )}

          <Link
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-white dark:bg-dark-200 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors hover:-translate-y-1 transform duration-300 border border-slate-200 dark:border-dark-100"
            aria-label="Email"
          >
            <FiMail className="w-5 h-5" />
          </Link>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {currentYear} {personalInfo.nama}. All rights reserved.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
          Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
