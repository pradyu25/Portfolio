import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'B.Tech in CSE (AI & Machine Learning)',
    date: '2022 – 2026',
    description:
      'Pursuing undergraduate degree at Nalla Narasimha Reddy Group Of Institutions, Hyderabad, with a focus on AI, Machine Learning, Data Science, and backend systems. Completed core coursework in Machine Learning, Deep Learning, Data Mining, DBMS, and Computer Networks.',
  },
  {
    title: 'Google Cloud Computing Virtual Internship – AICTE',
    date: 'Sept 2024',
    description:
      'Worked on Google Cloud Platform fundamentals including compute, storage, and networking services. Deployed sample applications, explored containerized workloads, and gained hands-on experience with cloud-native architectures and monitoring.',
  },
  {
    title: 'Cyber Security Intern – SkillVertex',
    date: 'Feb 2024',
    description:
      'Performed basic vulnerability assessment, log analysis, and security auditing on sample systems. Automated parts of the analysis using Python scripts and strengthened understanding of network security, authentication, and best security practices.',
  },
  {
    title: 'AI/ML Projects – Recommender & Intrusion Detection',
    date: '2023 – Present',
    description:
      'Built a movie and book recommendation system using NLP and ML with content-based and collaborative filtering, and developed a deep learning–based Intrusion Detection System to classify suspicious network activity in real time with alerting on abnormal patterns.',
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
          {/* Center timeline line */}
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
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                  style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-lg border border-cyan-500/40 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 text-sm font-mono mb-3">
                      {exp.date}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
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
