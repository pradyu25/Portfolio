import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#020308] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />

      <footer className="border-t border-cyan-500/20 py-8 text-center text-gray-500 text-sm">
        <p>&copy; 2024 AI/ML Developer. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
