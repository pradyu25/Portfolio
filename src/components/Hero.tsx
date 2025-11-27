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

// Small brain network animation for background
function BrainNetwork() {
  const nodes = [
    { cx: 30, cy: 40 },
    { cx: 60, cy: 25 },
    { cx: 90, cy: 40 },
    { cx: 80, cy: 70 },
    { cx: 50, cy: 80 },
    { cx: 20, cy: 65 },
  ];

  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 0],
    [1, 4],
    [2, 5],
  ];

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
      <motion.div
        className="relative w-72 h-72 md:w-80 md:h-80"
        animate={{
          x: [10, -10, 10],
          y: [-6, 6, -6],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.svg
          viewBox="0 0 110 110"
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Brain outline (stylized) */}
          <motion.path
            d="M35 30 C20 40 20 65 35 75 C35 90 55 90 55 75 C70 90 90 80 85 60 C95 50 90 30 75 30 C70 20 50 15 40 22 Z"
            fill="none"
            stroke="rgba(34,211,238,0.6)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 4"
            animate={{
              strokeDashoffset: [16, 0, 16],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          {/* Links between nodes */}
          {links.map(([from, to], i) => {
            const a = nodes[from];
            const b = nodes[to];
            return (
              <motion.line
                key={`link-${i}`}
                x1={a.cx}
                y1={a.cy}
                x2={b.cx}
                y2={b.cy}
                stroke="rgba(59,130,246,0.5)"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.3 }}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={node.cx}
              cy={node.cy}
              r={2.4}
              fill="rgba(34,211,238,0.9)"
              initial={{ opacity: 0.4, scale: 0.9 }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.3, 0.9] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.25 }}
            />
          ))}
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Animated background glow */}
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

      {/* Brain network in background, but mostly on the right side */}
      <div className="hidden md:block absolute right-[-4rem] top-1/2 -translate-y-1/2">
        <BrainNetwork />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Name (big) */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold text-white font-['Space_Grotesk'] leading-tight tracking-tight"
          >
            Musunuri
            <br />
            Pradyumna
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Ravi Chandra
            </span>
          </motion.h1>

          {/* Profession (smaller than name) */}
          <motion.p
            variants={itemVariants}
            className="text-4xl md:text-6xl font-semibold text-cyan-300/90 font-['Space_Grotesk'] tracking-wide"
          >
            AI & ML ENGINEER
          </motion.p>

          {/* Location + Degree */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-cyan-300/80 font-mono tracking-wide"
          >
            Hyderabad, India · CSE (AI & ML) · 2022 – 2026
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed max-w-xl"
          >
            Motivated AI and ML enthusiast focused on building scalable, intelligent backend systems
            that power real-time AI-driven operations. Passionate about combining backend
            engineering with Generative AI to design resilient, high-performance automation
            platforms and security-focused solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
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
              href="/Musunuri_Pradyumna_Ravi_Chandra_Resume.pdf"
              download
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

        {/* RIGHT: Animated orb + Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden md:flex items-center justify-center"
        >
          {/* Glow */}
          <motion.div
            className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />

          {/* Rings */}
          <motion.div
            className="absolute w-64 h-64 rounded-full border-2 border-cyan-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute w-52 h-52 rounded-full border-2 border-fuchsia-400/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.04, rotate: 1 }}
            className="absolute w-48 h-48 rounded-full overflow-hidden border border-cyan-400/60 shadow-lg shadow-cyan-500/40 bg-black/60"
          >
            <img
              src="/profile.jpg" // put your image in /public/profile.jpg
              alt="Musunuri Pradyumna Ravi Chandra"
              className="w-full h-full object-cover mix-blend-screen"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
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
