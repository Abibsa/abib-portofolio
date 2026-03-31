import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Ashab — Full Stack Developer",
  description: "Portfolio Muhammad Ashab Ibnu Abdul Aziz, Full Stack Developer dari Jepara. Spesialis Laravel, Python, dan JavaScript.",
  keywords: ["Full Stack Developer", "Laravel Developer", "Python", "Next.js", "Jepara", "UNISNU", "Web Developer Indonesia"],
  authors: [{ name: "Muhammad Ashab Ibnu Abdul Aziz" }],
  openGraph: {
    title: "Ashab — Full Stack Developer",
    description: "Portfolio Ashab — Laravel, Python, JavaScript Developer dari Jepara",
    url: "https://ashab.vercel.app",
    siteName: "Ashab Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashab — Full Stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased selection:bg-primary/30 selection:text-current`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <Toaster position="bottom-right" toastOptions={{
            className: 'glass',
            style: {
              background: 'var(--tw-colors-white)',
              color: 'var(--tw-text-slate-900)',
            }
          }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
