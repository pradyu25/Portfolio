import { motion } from 'framer-motion';

const navLinks = [
  { name: 'HOME', id: 'hero' },
  { name: 'ABOUT', id: 'about' },
  { name: 'SKILLS', id: 'skills' },
  { name: 'PROJECTS', id: 'projects' },
  { name: 'EXPERIENCE', id: 'experience' },
  { name: 'CONTACT', id: 'contact' },
];

export default function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-cyan-400 font-bold text-xl tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            AI/ML DEV
          </motion.div>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-gray-300 hover:text-cyan-400 transition-colors tracking-wide"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
