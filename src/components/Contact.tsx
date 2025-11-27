import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 pb-32">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center font-['Space_Grotesk'] tracking-tight"
        >
          CONTACT<span className="text-cyan-400">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center mb-12"
        >
          Let's build something amazing together
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg border border-cyan-500/40 rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium tracking-wide"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(0, 246, 255, 0.6)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              SEND MESSAGE
            </motion.button>
          </form>

          <div className="mt-8 pt-8 border-t border-cyan-500/20">
            <p className="text-gray-400 text-sm text-center mb-4">Connect with me</p>
            <div className="flex justify-center gap-6">
              {[
                { icon: Mail, href: 'mailto:contact@example.com' },
                { icon: Github, href: 'https://github.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Twitter, href: 'https://twitter.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
