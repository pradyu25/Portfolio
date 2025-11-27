import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'C'],
  },
  {
    title: 'AI / ML & Technologies',
    skills: [
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Deep Learning',
      'NLP',
      'Computer Vision',
      'OpenCV',
      'Generative AI',
      'Unity',
      'AR/VR',
    ],
  },
  {
    title: 'Web & Backend',
    skills: [
      'React.js',
      'Node.js',
      'Flask',
      'Django',
      'Flutter',
      'HTML',
      'CSS',
      'JavaScript',
    ],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'SQL'],
  },
  {
    title: 'Additional Skills',
    skills: ['Vibe Coding', 'AI Content Generation', 'AI Video Generation'],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Time Management',
      'Leadership',
      'Decision Making',
      'Quick Learner',
      'Adaptive',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="bg-white/5 backdrop-blur-lg border border-cyan-500/40 rounded-2xl p-5 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">
                {category.title}
                <span className="text-cyan-400">.</span>
              </h3>

              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={chipVariants}
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                      boxShadow: '0 0 18px rgba(0, 246, 255, 0.6)',
                    }}
                    className="px-4 py-1.5 rounded-full border border-cyan-400/60 bg-black/40 text-cyan-200 text-xs font-medium tracking-wide cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
