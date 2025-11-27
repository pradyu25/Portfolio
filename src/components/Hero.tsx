import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0, 246, 255, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255, 0, 170, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(0, 246, 255, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0, 246, 255, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-['Space_Grotesk'] tracking-tight">
              AI & ML
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                DEVELOPER
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed max-w-lg"
          >
            Crafting intelligent solutions through deep learning and machine learning.
            Passionate about building scalable AI systems that solve real-world problems.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-cyan-500/10 border border-cyan-400 text-cyan-400 rounded-lg font-medium tracking-wide"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0, 246, 255, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW PROJECTS
            </motion.button>
            <motion.a
              href="#"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium tracking-wide"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0, 246, 255, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              DOWNLOAD RESUME
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <motion.div
            className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full border-2 border-cyan-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute w-48 h-48 rounded-full border-2 border-magenta-400/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </motion.div>
    </section>
  );
}
