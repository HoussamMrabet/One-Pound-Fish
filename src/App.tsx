import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import How from './components/How';
import Community from './components/Community';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <How />
      <Community />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;