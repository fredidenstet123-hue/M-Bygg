
import React, { useState } from 'react';

const EstimateForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 animate-[fadeIn_0.5s_ease]">
        <div className="w-20 h-20 bg-[#CA8A04]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[#CA8A04]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-heading font-bold text-[#1C1917] mb-3">Tack för din förfrågan!</h3>
        <p className="text-[#78716C] max-w-sm mx-auto">Vår projektledare kommer att kontakta dig personligen inom kort för att boka ett förutsättningslöst möte.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-10 px-8 py-3 bg-[#1C1917] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#CA8A04] transition-colors"
        >
          Ny Förfrågan
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917]/60">Fullständigt Namn</label>
          <input
            required
            type="text"
            className="w-full bg-transparent border-b border-[#1C1917]/20 px-0 py-3 focus:border-[#CA8A04] outline-none transition-all duration-300 font-light"
            placeholder="Erik Johansson"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917]/60">E-postadress</label>
          <input
            required
            type="email"
            className="w-full bg-transparent border-b border-[#1C1917]/20 px-0 py-3 focus:border-[#CA8A04] outline-none transition-all duration-300 font-light"
            placeholder="erik@villa.se"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917]/60">Telefonnummer</label>
          <input
            required
            type="tel"
            className="w-full bg-transparent border-b border-[#1C1917]/20 px-0 py-3 focus:border-[#CA8A04] outline-none transition-all duration-300 font-light"
            placeholder="07x - xxx xx xx"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917]/60">Typ av Projekt</label>
          <select className="w-full bg-transparent border-b border-[#1C1917]/20 px-0 py-3 focus:border-[#CA8A04] outline-none transition-all duration-300 appearance-none font-light">
            <option>Nybyggnation Villa</option>
            <option>Totalrenovering Villa</option>
            <option>Arkitektritat Fritidshus</option>
            <option>Attefallshus / Poolhus</option>
            <option>Annan Förfrågan</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917]/60">Projektbeskrivning</label>
        <textarea
          required
          rows={3}
          className="w-full bg-transparent border-b border-[#1C1917]/20 px-0 py-3 focus:border-[#CA8A04] outline-none transition-all duration-300 resize-none font-light"
          placeholder="Beskriv dina tankar, tomtläge eller önskad byggstart..."
        ></textarea>
      </div>

      <div className="flex items-center gap-4">
        <input type="checkbox" id="consent" required className="accent-[#CA8A04] w-5 h-5 cursor-pointer" />
        <label htmlFor="consent" className="text-[11px] text-[#78716C] leading-relaxed cursor-pointer">
          Jag samtycker till att mina personuppgifter behandlas i enlighet med M-Byggs integritetspolicy för att kunna hantera min offertförfrågan.
        </label>
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`w-full py-6 btn-gold font-bold tracking-[0.2em] uppercase rounded-sm flex items-center justify-center gap-4 group transition-all duration-500 ${loading ? 'opacity-70 cursor-wait' : ''}`}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Bearbetar...
          </>
        ) : (
          <>
            Skicka Offertförfrågan
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
};

export default EstimateForm;
