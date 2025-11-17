import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function KhanShatyrSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative py-32 px-4 overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent text-5xl md:text-6xl font-black"
            whileHover={{ scale: 1.05 }}
          >
            Khan Shatyr
          </motion.h2>
          <motion.p
            className="text-slate-300 max-w-3xl mx-auto text-xl"
            data-cursor="text"
          >
            The world's largest tent structure - an architectural masterpiece embodying Kazakhstan's modern vision and heritage.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
          style={{ scale, y }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Exterior View */}
          <motion.div
            className="absolute inset-0"
            style={{ opacity: opacity1 }}
            animate={{ 
              filter: isHovered ? 'blur(15px) brightness(0.8)' : 'blur(0px) brightness(1)',
              scale: isHovered ? 1.08 : 1
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-full h-full"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1576021160550-2173dba999ef?w=1200&h=800&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <motion.h3
                className="text-white mb-2 text-2xl font-bold drop-shadow-lg"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Exterior View
              </motion.h3>
              <motion.p
                className="text-cyan-300 text-lg drop-shadow"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Height: 150m • Area: 127,000 m² • Opened: 2010
              </motion.p>
            </div>
          </motion.div>

          {/* Interior View */}
          <motion.div
            className="absolute inset-0"
            style={{ opacity: opacity2 }}
            animate={{ 
              filter: isHovered ? 'blur(0px) brightness(1)' : 'blur(15px) brightness(0.8)',
              scale: isHovered ? 1 : 0.92
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-full h-full"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1570129477492-45f003313e78?w=1200&h=800&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <motion.h3
                className="text-white mb-2 text-2xl font-bold drop-shadow-lg"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Interior Experience
              </motion.h3>
              <motion.p
                className="text-cyan-300 text-lg drop-shadow"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                300+ Shops • Tropical Beach • Entertainment Zone
              </motion.p>
            </div>
          </motion.div>

          {/* Hover Indicator */}
          <motion.div
            className="absolute inset-0 border-2 border-cyan-400/0 rounded-3xl pointer-events-none transition-all duration-500 group-hover:border-cyan-400/50"
          />
          <motion.div
            className="absolute inset-0"
            style={{ opacity: opacity2, filter: `blur(${isHovered ? 0 : 20}px)` }}
            animate={{ scale: isHovered ? 1.1 : 1, rotateY: isHovered ? 0 : -30 }}
            transition={{ duration: 1.2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
              alt="Khan Shatyr interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <motion.h3
                className="text-white mb-2 text-2xl font-bold drop-shadow-lg"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Внутри
              </motion.h3>
              <motion.p
                className="text-slate-300 text-lg drop-shadow"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Торговый центр • Пляжный курорт • Развлекательная зона
              </motion.p>
            </div>
          </motion.div>

          {/* Hover Indicator */}
          <motion.div
            className="absolute inset-0 border-2 border-cyan-400/0 rounded-3xl pointer-events-none transition-all duration-500 group-hover:border-cyan-400/50"
          />
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { value: '300+', label: 'Shops & Brands', icon: '🛍️' },
            { value: '50+', label: 'Restaurants', icon: '🍽️' },
            { value: '30M', label: 'Annual Visitors', icon: '👥' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-center hover:border-cyan-400/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-2xl font-black text-cyan-400 mb-1">{item.value}</div>
              <div className="text-slate-400 text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Facts */}
        <motion.div
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-400/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-6">Facts About Khan Shatyr</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
            <p>• Designed by renowned architect Norman Foster</p>
            <p>• Made of advanced ETFE plastic material</p>
            <p>• Climate-controlled tropical environment</p>
            <p>• World's largest tent structure</p>
            <p>• Features indoor beach resort with 35°C water</p>
            <p>• Universal symbol of Astana's modernity</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
