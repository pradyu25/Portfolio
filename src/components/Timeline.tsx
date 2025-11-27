import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'B.Tech in AI & Machine Learning',
    date: '2021 - Present',
    description: 'Pursuing undergraduate degree with focus on deep learning, neural networks, and advanced algorithms. Completed coursework in computer vision, NLP, and reinforcement learning.',
  },
  {
    title: 'ML Research Internship',
    date: 'Summer 2024',
    description: 'Developed novel architectures for time-series forecasting. Published research paper on anomaly detection in IoT systems. Collaborated with cross-functional teams.',
  },
  {
    title: 'Freelance ML Engineer',
    date: '2023 - Present',
    description: 'Built custom machine learning solutions for clients across healthcare, finance, and e-commerce sectors. Specialized in model deployment and MLOps practices.',
  },
  {
    title: 'Open Source Contributor',
    date: '2022 - Present',
    description: 'Active contributor to PyTorch and TensorFlow ecosystems. Maintained several ML libraries with 1000+ GitHub stars. Mentored junior developers in the community.',
  },
];

const itemVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 50 : -50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function Timeline() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center font-['Space_Grotesk'] tracking-tight"
        >
          EXPERIENCE<span className="text-cyan-400">.</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                custom={index % 2 === 0 ? 1 : -1}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`flex flex-col md:flex-row gap-6 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-lg border border-cyan-500/40 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-cyan-400 text-sm font-mono mb-3">{exp.date}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </motion.div>
                </div>

                <div className="relative z-10 hidden md:block">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-black shadow-lg shadow-cyan-400/50"
                  />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
