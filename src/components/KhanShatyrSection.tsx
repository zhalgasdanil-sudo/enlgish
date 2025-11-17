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
    <section ref={containerRef} className="relative py-32 px-4 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Хан Шатыр
          </motion.h2>
          <motion.p
            className="text-slate-300 max-w-3xl mx-auto text-xl"
            data-cursor="text"
          >
            Уникальное архитектурное чудо - крупнейшее шатровое сооружение в мире
          </motion.p>
        </motion.div>

        <motion.div
          className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          style={{ scale, y }}
        >
          {/* Morph/Blur/3D transition between exterior and interior */}
          <motion.div
            className="absolute inset-0"
            style={{ opacity: opacity1, filter: `blur(${isHovered ? 20 : 0}px)` }}
            animate={{ scale: isHovered ? 1.05 : 1, rotateY: isHovered ? 30 : 0 }}
            transition={{ duration: 1.2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1684453728966-1a89831fe240?auto=format&fit=crop&w=1200&q=80"
              alt="Khan Shatyr exterior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <motion.h3
                className="text-white mb-2 text-2xl font-bold drop-shadow-lg"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Снаружи
              </motion.h3>
              <motion.p
                className="text-slate-300 text-lg drop-shadow"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Высота 150 метров • Площадь 140,000 м²
              </motion.p>
            </div>
          </motion.div>
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

          {/* Hover indicator */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: isHovered ? 0 : [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <p className="text-white">Наведите для просмотра интерьера</p>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-8 right-8 w-24 h-24 border-2 border-white/30 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity },
            }}
          />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { title: '300+', subtitle: 'Магазинов' },
            { title: '5000+', subtitle: 'Посетителей в день' },
            { title: '35°C', subtitle: 'Температура на пляже' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 text-center"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="mb-2 text-purple-400"
                whileHover={{ scale: 1.1 }}
              >
                {item.title}
              </motion.h3>
              <p className="text-slate-300">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}
