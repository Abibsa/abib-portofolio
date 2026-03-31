import Link from "next/link";
import { FiHome, FiAlertCircle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col relative overflow-hidden bg-slate-50 dark:bg-dark-400">
      <div className="absolute inset-0 dot-grid opacity-50 z-0"></div>
      
      <div className="relative z-10 text-center flex flex-col items-center">
        <FiAlertCircle className="w-24 h-24 text-primary animate-bounce-slow mb-8 opacity-80" />
        
        <h1 className="text-7xl md:text-9xl font-bold font-heading mb-4 gradient-text">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-md mx-auto">
          Maaf, halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada.
        </p>
        
        <Link href="/">
          <button className="px-8 py-3 rounded-xl bg-primary text-white font-medium hover:bg-opacity-90 transition-all glow flex items-center gap-2">
            <FiHome /> Kembali ke Beranda
          </button>
        </Link>
      </div>
    </div>
  );
}
