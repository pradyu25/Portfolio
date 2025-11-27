import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Ransomware Detection System',
    description: 'Deep learning model using CNNs and RNNs to detect and classify ransomware behavior patterns in real-time with 96% accuracy.',
    tech: 'PyTorch • TensorFlow • Python • Docker',
    link: '#',
  },
  {
    title: 'Phishing Website Detector',
    description: 'ML-powered browser extension that analyzes website characteristics and URL patterns to identify phishing attempts.',
    tech: 'Scikit-learn • Flask • React • Chrome API',
    link: '#',
  },
  {
    title: 'Intelligent Recommendation Engine',
    description: 'NLP-based system for movies and books using collaborative filtering and content-based approaches with sentiment analysis.',
    tech: 'BERT • Transformers • FastAPI • PostgreSQL',
    link: '#',
  },
  {
    title: 'Email Spam Classifier',
    description: 'High-performance spam detection system using ensemble methods and feature engineering with 98.5% precision.',
    tech: 'Scikit-learn • NLTK • SpaCy • AWS Lambda',
    link: '#',
  },
  {
    title: 'Computer Vision Dashboard',
    description: 'Real-time object detection and tracking system with custom YOLOv8 model trained on specialized dataset.',
    tech: 'OpenCV • YOLOv8 • Flask • WebSockets',
    link: '#',
  },
  {
    title: 'AutoML Pipeline',
    description: 'Automated machine learning framework that handles data preprocessing, model selection, and hyperparameter tuning.',
    tech: 'AutoML • MLflow • Kubernetes • GCP',
    link: '#',
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-['Space_Grotesk'] tracking-tight"
        >
          PROJECTS<span className="text-cyan-400">.</span>
        </motion.h2>

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
      </div>
    </section>
  );
}
