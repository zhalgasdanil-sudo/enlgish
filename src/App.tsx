import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wider"
            >
              ASTANA
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12">
              {['Work', 'About', 'Services', 'Contact'].map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium uppercase tracking-wider hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-white/10 bg-black/80"
              >
                <div className="flex flex-col gap-6 py-6 px-4">
                  {['Work', 'About', 'Services', 'Contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-left text-sm font-medium uppercase tracking-wider hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center z-10 max-w-6xl"
        >
          {/* Animated Background Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-8 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl"
              />
              <h1 className="relative text-7xl md:text-8xl lg:text-9xl font-black leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="block"
                >
                  Roar in the
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                >
                  Digital
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="block"
                >
                  Wilderness
                </motion.span>
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Experience Astana through cutting-edge digital design. We transform visions into immersive digital experiences that captivate and inspire audiences worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex gap-6 flex-col sm:flex-row justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34, 211, 238, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('work')}
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold uppercase tracking-wider hover:shadow-lg transition-all text-base md:text-lg"
            >
              Explore Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#22d3ee' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-10 py-4 border-2 border-cyan-400 rounded-lg font-bold uppercase tracking-wider hover:bg-cyan-400/10 transition-all text-base md:text-lg"
            >
              Let's Connect
            </motion.button>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-24"
          >
            <ChevronDown size={40} className="mx-auto text-cyan-400 opacity-70" />
          </motion.div>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400">Recent Work</div>
              <h2 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                In the creative
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  wilderness
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-20 max-w-2xl">
                Clients find our work truly beloved. Crafting digital experiences that leave lasting impressions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Khan Shatyr',
                  desc: 'Iconic architectural marvel',
                  tags: ['Architecture', 'Design', 'Tourism'],
                  image: '🏛️'
                },
                {
                  title: 'Baiterek Monument',
                  desc: 'Symbol of national pride',
                  tags: ['Heritage', 'Innovation', 'Culture'],
                  image: '🎆'
                },
                {
                  title: 'Nur-Astana Mosque',
                  desc: 'Spiritual and architectural wonder',
                  tags: ['Religion', 'Architecture', 'Culture'],
                  image: '🕌'
                },
                {
                  title: 'Peace Palace',
                  desc: 'Modern conference landmark',
                  tags: ['Events', 'Design', 'Innovation'],
                  image: '🏗️'
                },
                {
                  title: 'Opera House',
                  desc: 'Premier cultural venue',
                  tags: ['Arts', 'Culture', 'Entertainment'],
                  image: '🎭'
                },
                {
                  title: 'National Museum',
                  desc: 'Historical preservation',
                  tags: ['History', 'Culture', 'Education'],
                  image: '🏛️'
                }
              ].map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ boxShadow: '0 0 60px rgba(34, 211, 238, 0.2)' }}
                    className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl p-8 h-full hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      {project.image}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-6 text-lg">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{ scale: 1.1 }}
                            className="text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full hover:bg-cyan-500/30 transition-colors"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative bg-gradient-to-b from-cyan-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400">Who We Are</div>
              <h2 className="text-6xl md:text-7xl font-black mb-12 leading-tight">
                Award-winning digital
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  storytellers
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div variants={itemVariants} className="space-y-8">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  We are more than an agency. We are visionaries dedicated to transforming Astana's narrative into captivating digital experiences.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  From architectural marvels to cultural phenomena, we showcase the city's unique blend of tradition and innovation through immersive design.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold uppercase tracking-wider hover:bg-cyan-400/10 transition-all"
                >
                  Start a Project
                </motion.button>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
                {[
                  { number: '50+', label: 'Projects' },
                  { number: '100+', label: 'Happy Clients' },
                  { number: '20+', label: 'Team Members' },
                  { number: '2025', label: 'Founded' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8 text-center hover:border-cyan-400/60 transition-all duration-500"
                  >
                    <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-3">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400">Our Services</div>
              <h2 className="text-6xl md:text-7xl font-black mb-20 leading-tight">
                What we
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
                  offer
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: 'Digital Strategy',
                  description: 'Comprehensive digital transformation for your brand'
                },
                {
                  title: 'Creative Design',
                  description: 'Stunning visuals that captivate and inspire'
                },
                {
                  title: 'Web Development',
                  description: 'Cutting-edge solutions built for performance'
                },
                {
                  title: 'Content Creation',
                  description: 'Compelling narratives that drive engagement'
                },
                {
                  title: 'Branding',
                  description: 'Strong identities that resonate globally'
                },
                {
                  title: 'Marketing',
                  description: 'Strategic campaigns for maximum impact'
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 20, boxShadow: '0 0 40px rgba(34, 211, 238, 0.1)' }}
                  className="group"
                >
                  <div className="border-l-4 border-cyan-500 pl-8 py-6 hover:border-cyan-300 transition-all duration-500">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-lg">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h2 variants={itemVariants} className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            Let's Dive In!
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-12">
            Ready to roar in the digital wilderness? Let's create something extraordinary together.
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1, boxShadow: '0 0 60px rgba(34, 211, 238, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-black uppercase tracking-wider text-lg hover:shadow-2xl transition-all"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-6xl md:text-7xl font-black text-center mb-4 leading-tight">
                Time to
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Roar!
                </span>
              </h2>
              <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                Let's embark on a creative journey to showcase Astana's magnificence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="group">
                  <h3 className="font-bold text-lg uppercase tracking-wider mb-3 group-hover:text-cyan-400 transition-colors">
                    Email
                  </h3>
                  <a href="mailto:hello@astana.digital" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 break-all">
                    hello@astana.digital
                  </a>
                </div>
                <div className="group">
                  <h3 className="font-bold text-lg uppercase tracking-wider mb-3 group-hover:text-cyan-400 transition-colors">
                    Phone
                  </h3>
                  <a href="tel:+77172123456" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300">
                    +7 (717) 212-34-56
                  </a>
                </div>
                <div className="group">
                  <h3 className="font-bold text-lg uppercase tracking-wider mb-3 group-hover:text-cyan-400 transition-colors">
                    Location
                  </h3>
                  <p className="text-xl text-gray-300">Astana, Kazakhstan</p>
                </div>
              </motion.div>

              <motion.form variants={itemVariants} className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-6 py-4 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-6 py-4 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-6 py-4 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34, 211, 238, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold uppercase tracking-wider text-lg hover:shadow-lg transition-all"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <motion.div variants={itemVariants}>
                <h4 className="font-black text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                  ASTANA
                </h4>
                <p className="text-gray-400">Roar in the digital wilderness.</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="font-bold uppercase tracking-wider mb-6">Quick Links</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <button onClick={() => scrollToSection('work')} className="hover:text-cyan-400 transition-colors">
                      Work
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">
                      About
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">
                      Services
                    </button>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="font-bold uppercase tracking-wider mb-6">Social</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Twitter
                    </a>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="font-bold uppercase tracking-wider mb-6">Contact</h4>
                <a href="mailto:hello@astana.digital" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  hello@astana.digital
                </a>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="border-t border-white/10 pt-8 text-center text-gray-500">
              <p>&copy; 2025 Astana Digital Showcase. All rights reserved.</p>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
