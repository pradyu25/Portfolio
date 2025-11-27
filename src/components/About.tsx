import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg border border-cyan-500/40 rounded-2xl p-8 md:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tight"
          >
            ABOUT<span className="text-cyan-400">.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-gray-300 leading-relaxed"
          >
            <p>
              I'm an AI & ML student developer with a passion for building intelligent systems
              that make a difference. My expertise lies in deep learning, neural networks, and
              deploying scalable machine learning models to production environments.
            </p>
            <p>
              From computer vision to natural language processing, I love exploring the frontiers
              of artificial intelligence. I'm constantly learning and experimenting with cutting-edge
              frameworks like PyTorch and TensorFlow, while maintaining a strong focus on practical,
              real-world applications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
