import { motion } from 'framer-motion';

const skills = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'Scikit-learn',
  'Keras',
  'NumPy',
  'Pandas',
  'OpenCV',
  'Flask',
  'FastAPI',
  'Docker',
  'Kubernetes',
  'GCP',
  'AWS',
  'SQL',
  'Git',
  'REST APIs',
  'CI/CD',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-['Space_Grotesk'] tracking-tight"
        >
          SKILLS<span className="text-cyan-400">.</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: '0 0 20px rgba(0, 246, 255, 0.6)',
              }}
              className="px-5 py-2 rounded-full border border-cyan-400/60 bg-white/5 text-cyan-200 text-sm font-medium tracking-wide cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
