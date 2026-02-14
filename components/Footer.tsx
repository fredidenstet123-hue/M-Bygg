
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1917] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 flex items-center justify-center border-2 border-[#CA8A04]">
                <span className="font-heading font-bold text-lg">M</span>
              </div>
              <span className="font-heading text-xl font-bold tracking-tighter">Bygg</span>
            </div>
            <p className="text-white/50 font-light leading-relaxed mb-8">
              Din personliga partner för exklusiva villabyggen i Stockholm. Vi förverkligar privatpersoners drömmar med hantverk av högsta kvalitet.
            </p>
            <div className="flex gap-4">
              {['instagram', 'facebook', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#CA8A04] hover:text-[#CA8A04] transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-8">Navigering</h4>
            <ul className="space-y-4">
              {['Hem', 'Projekt', 'Byggprocessen', 'Om Oss', 'Kontakt'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-[#CA8A04] transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-8">Våra Tjänster</h4>
            <ul className="space-y-4">
              {['Nybyggnation Villa', 'Totalentreprenad', 'Arkitektritade Hem', 'Exklusiv Renovering', 'Markarbete'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-[#CA8A04] transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-8">Kontakt</h4>
            <ul className="space-y-4 text-sm font-light text-white/50">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#CA8A04] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Sveavägen 12, 111 57 Stockholm</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#CA8A04] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@m-bygg.se</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#CA8A04] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>08-123 45 67</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:row justify-between items-center gap-6 text-xs font-light text-white/30 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} M-Bygg Stockholm AB. Skapat för privatpersoner som kräver mer.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Integritetspolicy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
