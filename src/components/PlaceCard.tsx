import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LucideIcon } from 'lucide-react';

interface PlaceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: LucideIcon;
  delay?: number;
}

export function PlaceCard({ title, description, imageUrl, icon: Icon, delay = 0 }: PlaceCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-6 h-6 text-blue-400" />
        </motion.div>
      </div>

      <div className="p-6">
        <motion.h3
          className="mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        <p className="text-slate-300">{description}</p>
      </div>

      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
        whileHover={{ borderColor: 'rgba(96, 165, 250, 0.5)' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
