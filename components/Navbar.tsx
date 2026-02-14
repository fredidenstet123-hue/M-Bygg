
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className={`w-10 h-10 flex items-center justify-center border-2 transition-colors duration-300 ${
            isScrolled ? 'border-[#CA8A04]' : 'border-white'
          }`}>
            <span className={`font-heading font-bold text-xl ${
              isScrolled ? 'text-[#1C1917]' : 'text-white'
            }`}>M</span>
          </div>
          <span className={`font-heading text-2xl font-bold tracking-tighter transition-colors duration-300 ${
            isScrolled ? 'text-[#1C1917]' : 'text-white'
          }`}>Bygg</span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {['Hem', 'Projekt', 'Tjänster', 'Om Oss'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-sm font-medium tracking-widest uppercase hover:text-[#CA8A04] transition-colors ${
                isScrolled ? 'text-[#1C1917]' : 'text-white/80'
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#offert"
            className="px-6 py-2 border border-[#CA8A04] text-[#CA8A04] hover:bg-[#CA8A04] hover:text-white transition-all duration-300 text-xs font-bold tracking-widest uppercase"
          >
            Boka Offert
          </a>
        </div>

        {/* Mobile Toggle Placeholder */}
        <button className="md:hidden">
          <svg className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
