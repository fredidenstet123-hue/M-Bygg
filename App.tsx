
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import EstimateForm from './components/EstimateForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#CA8A04] selection:text-white bg-[#FAFAF9]">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="hem">
          <Hero />
        </section>

        <section id="projekt" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center">
              <span className="font-accent italic text-2xl text-[#78716C] block mb-2">Våra Referenser</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1C1917] tracking-tight">
                Privata drömhem i Stockholm
              </h2>
              <div className="w-16 h-1 bg-[#CA8A04] mx-auto mt-8"></div>
              <p className="mt-8 text-[#78716C] max-w-2xl mx-auto font-light text-lg">
                Här kan du se ett urval av våra pågående och färdigställda villaprojekt i 
                Danderyd, Vallentuna och omnejd. Vi bygger för livet.
              </p>
            </div>
            <ProjectGallery />
          </div>
        </section>

        <section id="offert" className="py-32 mesh-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="bg-[#FAFAF9]/95 backdrop-blur-xl rounded-sm p-10 md:p-20 shadow-2xl border border-white/10">
              <div className="text-center mb-16">
                <span className="font-accent italic text-xl text-[#CA8A04] mb-2 block">Dags att bygga nytt?</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1C1917]">
                  Boka din fria konsultation
                </h2>
                <p className="text-[#78716C] mt-6 font-light max-w-lg mx-auto leading-relaxed">
                  Som din partner genom hela byggprocessen ser vi till att vägen till din 
                  nya villa blir lika njutbar som slutresultatet.
                </p>
              </div>
              <EstimateForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
