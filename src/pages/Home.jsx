import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import News from '../components/News';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <News />
      <Contact />
      <Footer />
    </>
  );
}
