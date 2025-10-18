import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Geography from './components/Geography';
import ShanghaiTrailer from './components/ShanghaiTrailer';
import Awards from './components/Awards';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Geography />
        <ShanghaiTrailer />
        <Awards />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
