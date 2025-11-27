import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Movie & Book Recommendation System (NLP + ML)',
    description:
      'Developed an intelligent recommendation engine using NLP and ML to suggest books and movies based on user preferences and historical activity. Implemented content-based and collaborative filtering for improved accuracy.',
    tech: 'Python • NLP • Scikit-learn • Pandas • Collaborative Filtering',
    link: 'https://github.com/pradyu25Movie-and-book-recommendation#', // replace with specific repo if you have it
  },
  {
    title: 'Intrusion Detection System using ML',
    description:
      'Built a deep learning–based network intrusion detection model capable of identifying suspicious activities in real time. Designed a local host monitoring app to alert users on abnormal traffic or security breaches.',
    tech: 'Deep Learning • Python • TensorFlow/PyTorch • Network Traffic Analysis',
    link: 'https://github.com/pradyu25/Intrusion-detection-system', // replace with specific repo if you have it
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-['Space_Grotesk'] tracking-tight"
        >
          PROJECTS<span className="text-cyan-400">.</span>
        </motion.h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -8,
                rotateX: 2,
                rotateY: 2,
                boxShadow: '0 0 30px rgba(0, 246, 255, 0.4)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 backdrop-blur-lg border border-cyan-500/40 rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <p className="text-cyan-300/80 text-xs font-mono mb-4">
                  {project.tech}
                </p>
              </div>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 text-sm font-medium"
                whileHover={{ x: 5 }}
              >
                <Github className="w-4 h-4" />
                View Repository
                <ExternalLink className="w-3 h-3" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Button to GitHub profile for more projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/pradyu25?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(0, 246, 255, 0.4)',
            }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-transparent border border-cyan-400 text-cyan-400 font-medium rounded-xl flex items-center gap-3 transition-all hover:bg-cyan-400 hover:text-black"
          >
            <Github className="w-5 h-5" />
            View More Projects on GitHub
            <ExternalLink className="w-3 h-3" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
