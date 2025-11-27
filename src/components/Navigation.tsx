import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // sort entries by intersection ratio or y-position
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        // pick the one closest to the top
        const topMost = visibleEntries.reduce((prev, curr) =>
          prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
        );

        const id = topMost.target.id;
        if (id) setActiveSection(id);
      },
      {
        // triggers when section enters middle area of screen
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.2,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className="
        fixed left-4 top-1/2 -translate-y-1/2 
        hidden md:flex flex-col gap-4 z-40
      "
      aria-label="Section navigation"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center focus:outline-none"
            whileHover={{ x: 2 }}
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
                  : 'rgba(15,23,42,0.9)',
                boxShadow: isActive
                  ? '0 0 14px rgba(34,211,238,0.8)'
                  : '0 0 0 rgba(0,0,0,0)',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            />

            {/* Label “pops” when active or hover */}
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 8 : -8,
              }}
              transition={{ duration: 0.2 }}
              className="
                pointer-events-none
                ml-3 px-3 py-1 rounded-full 
                bg-black/70 border border-cyan-400/40 
                text-xs font-medium text-cyan-100 
                whitespace-nowrap shadow-lg shadow-cyan-500/10
              "
            >
              {section.label}
            </motion.span>

            {/* Hover label (when not active) */}
            {!isActive && (
              <span
                className="
                  absolute left-5 
                  ml-3 px-2 py-1 rounded-full 
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
