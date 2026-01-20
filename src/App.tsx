import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
