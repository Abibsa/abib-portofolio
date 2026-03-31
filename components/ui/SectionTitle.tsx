import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 gradient-text inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
