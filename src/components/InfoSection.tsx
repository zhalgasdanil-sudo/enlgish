import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface InfoSectionProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  delay?: number;
}

export function InfoSection({ icon: Icon, title, items, delay = 0 }: InfoSectionProps) {
  return (
    <motion.div
      className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 overflow-hidden group"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <motion.div
        className="relative flex items-center gap-4 mb-6"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-7 h-7 text-blue-400" />
        </motion.div>
        <h3 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h3>
      </motion.div>

      <ul className="relative space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-3 text-slate-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + index * 0.1 }}
            whileHover={{ x: 10, color: '#60a5fa' }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"
              whileHover={{ scale: 2 }}
              transition={{ duration: 0.2 }}
            />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
