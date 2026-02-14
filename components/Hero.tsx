
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center mesh-gradient overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#CA8A04]/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <span className="inline-block font-accent italic text-2xl text-white/80 mb-6 tracking-wide transform transition-all duration-700 opacity-0 translate-y-4 animate-[fadeInUp_0.8s_ease_forwards]">
          Professionell villabyggnation för privatpersoner
        </span>
        
        <h1 className="text-6xl md:text-9xl font-heading font-bold text-white mb-8 tracking-tight leading-tight opacity-0 translate-y-4 animate-[fadeInUp_1s_ease_0.2s_forwards]">
          Från första spadtag <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CA8A04] to-white">
            till inflyttning
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed opacity-0 translate-y-4 animate-[fadeInUp_1s_ease_0.4s_forwards]">
          Som privatperson är ditt hem din borg. Vi på M-Bygg erbjuder trygg totalentreprenad 
          för dig som vill bygga exklusivt, personligt och hållbart i Stockholm.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 translate-y-4 animate-[fadeInUp_1s_ease_0.6s_forwards]">
          <a
            href="#offert"
            className="btn-gold px-12 py-5 text-sm font-bold tracking-widest uppercase rounded-sm"
          >
            Boka en kostnadsfri offert
          </a>
          <a
            href="#projekt"
            className="px-12 py-5 text-sm font-bold tracking-widest uppercase text-white border border-white/30 hover:bg-white/10 transition-all rounded-sm backdrop-blur-sm"
          >
            Se våra byggen
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
