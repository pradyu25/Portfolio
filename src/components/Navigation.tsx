import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );

        setActiveSection(topMost.target.id);
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.2,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav
      className="
        fixed left-5 top-1/2 -translate-y-1/2 
        hidden md:flex flex-col gap-4 z-50
      "
      aria-label="Section Navigation"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <motion.button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="group relative flex items-center focus:outline-none"
            whileHover={{ x: 3 }}
          >
            {/* Dot */}
            <motion.div
              className="rounded-full border border-cyan-400/60 bg-black/60"
              initial={false}
              animate={{
                width: isActive ? 14 : 10,
                height: isActive ? 14 : 10,
                backgroundColor: isActive
                  ? 'rgba(34,211,238,0.9)'
                  : 'rgba(12,18,28,0.8)',
                boxShadow: isActive
                  ? '0 0 14px rgba(34,211,238,0.8)'
                  : '0 0 0 rgba(0,0,0,0)',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            />

            {/* Active label pill */}
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 10 : -8,
              }}
              transition={{ duration: 0.2 }}
              className="
                pointer-events-none ml-3 px-3 py-1 rounded-full 
                bg-black/70 border border-cyan-400/40 
                text-xs font-medium text-cyan-100 whitespace-nowrap 
                shadow-lg shadow-cyan-500/10
              "
            >
              {section.label}
            </motion.span>

            {/* Hover-only label (when not active) */}
            {!isActive && (
              <span
                className="
                  absolute left-5 ml-3 px-2 py-1 rounded-full 
                  bg-black/70 border border-cyan-400/20 
                  text-[10px] text-cyan-100 whitespace-nowrap 
                  opacity-0 group-hover:opacity-100 
                  translate-x-2 group-hover:translate-x-3 
                  transition-all duration-200
                "
              >
                {section.label}
              </span>
            )}
          </motion.button>
        );
      })}
    </nav>
  );
}
