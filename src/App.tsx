import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <Navigation />

      <Hero />
      <About />       {/* Make sure this section exists */}
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  );
}
