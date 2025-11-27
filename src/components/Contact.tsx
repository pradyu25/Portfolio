import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // TODO: Integrate with your backend or email service (EmailJS, API route, etc.)
      // Example:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      // Simulate async work
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          className="text-gray-400 text-center mb-3"
        >
          Let&apos;s build something amazing together
        </motion.p>

        {/* Basic identity line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-gray-500 text-center text-sm mb-1"
        >
          Musunuri Pradyumna Ravi Chandra · Andhra Pradesh, India
        </motion.p>

        {/* Email icon instead of visible email text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <span className="text-gray-500 text-sm">Preferred contact:</span>
          <motion.a
            href="mailto:mprc9125@gmail.com"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-cyan-400/60 bg-black/40 text-cyan-300"
            whileHover={{ scale: 1.1, y: -2, boxShadow: '0 0 16px rgba(0, 246, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" />
          </motion.a>
        </motion.div>

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
              <label
                htmlFor="message"
                className="block text-sm text-gray-300 mb-2"
              >
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
              disabled={status === 'submitting'}
              className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={
                status === 'submitting'
                  ? {}
                  : {
                      scale: 1.02,
                      boxShadow: '0 0 30px rgba(0, 246, 255, 0.6)',
                    }
              }
              whileTap={status === 'submitting' ? {} : { scale: 0.98 }}
            >
              {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
            </motion.button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-emerald-400 mt-3 text-center"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400 mt-3 text-center"
              >
                Something went wrong. Please try again later.
              </motion.p>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-cyan-500/20">
            <p className="text-gray-400 text-sm text-center mb-4">
              Connect with me
            </p>
            <div className="flex justify-center gap-6">
              {[
                { icon: Mail, href: 'mailto:mprc9125@gmail.com' },
                { icon: Github, href: 'https://github.com/pradyu25' },
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/m-pradyumna-ravi-chandra-5536752b6',
                },
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
